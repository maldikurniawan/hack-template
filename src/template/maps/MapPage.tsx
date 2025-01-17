import React from 'react';

const MapPage: React.FC = () => {
    return (
        <div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25961.76399950813!2d105.30060942820047!3d-5.367512812182379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40c35634c1a611%3A0xcb3cf692dbb4f26!2sInstitut%20Teknologi%20Sumatera%20%22ITERA%22!5e0!3m2!1sid!2sid!4v1737009801238!5m2!1sid!2sid"
                width="100%"
                height="450"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
        </div>
    );
};

export default MapPage;
