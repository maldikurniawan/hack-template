import L, { LatLngExpression } from "leaflet";
import React, { useEffect } from "react";
import { MapContainer, Marker, TileLayer, Tooltip } from "react-leaflet";
import "../../leaflet.css";

type MapLeafletProps = {
    position?: LatLngExpression;
    org?: string;
};

const MapLeaflet: React.FC<MapLeafletProps> = ({
    position = [0, 0],
    org = "",
}) => {
    useEffect(() => {
        // Override ikon default leaflet
        delete (L.Icon.Default.prototype as any)._getIconUrl;

        L.Icon.Default.mergeOptions({
            iconRetinaUrl: "/LeafletImages/marker-icon-2x.png",
            iconUrl: "/LeafletImages/marker-icon.png",
            shadowUrl: "/LeafletImages/marker-shadow.png",
        });
    }, []);

    return (
        <div className="h-[300px] w-full">
            <MapContainer center={position} zoom={13} className="h-full w-full rounded-sm">
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={position}>
                    <Tooltip direction="top" offset={[-15, -15]} opacity={1} permanent>
                        {org}
                    </Tooltip>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default MapLeaflet;
