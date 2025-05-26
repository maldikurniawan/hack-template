import React from 'react';
import { motion } from "framer-motion";
import { MapLeaflet, TerminalCard } from '@/components';

const MapPage: React.FC = () => {
    return (
        <motion.div
            initial={{ y: window.innerHeight, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
        >
            <TerminalCard title='Maps'>
                <MapLeaflet
                    position={[-5.3640878010960025, 105.24290610075258]}
                    org="Universitas Lampung"
                />
            </TerminalCard>
        </motion.div>
    );
};

export default MapPage;
