// GoogleSlides.jsx
import React from 'react';

function GoogleSlides({ src, width = "100%", height = "100%", paddingBottom = "56.25%" }) {
    return (
        <div style={{ position: 'relative', height: '0', paddingBottom, overflow: 'hidden', maxWidth: '100%' }}>
            <iframe
                src={src}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width,
                    height,
                    frameBorder: '0',
                    allowFullScreen: true
                }}
            ></iframe>
        </div>
    );
}

export default GoogleSlides;
