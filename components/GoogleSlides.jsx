import React, { useState, useEffect, useRef } from 'react';

function GoogleSlides({ src, sourceLink, aspectRatio = 16 / 9 }) {
    const [key, setKey] = useState(0); // Use key to force re-render
    const [height, setHeight] = useState(0);
    const containerRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            if (containerRef.current) {
                const width = containerRef.current.offsetWidth;
                setHeight(width / aspectRatio);
            }
        };

        handleResize(); // Call initially to set the correct height
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [aspectRatio]);

    const restartPresentation = () => {
        setKey(prevKey => prevKey + 1); // Increment key to re-render the iframe
    };

    // Button styles
    const buttonStyle = {
        backgroundColor: '#4CAF50', // Green background
        color: 'white', // White text
        padding: '10px 20px', // Padding around the text
        border: 'none', // No border
        borderRadius: '5px', // Rounded corners
        cursor: 'pointer', // Pointer cursor on hover
        outline: 'none', // No outline
        fontSize: '16px', // Font size
        fontWeight: 'bold', // Font weight
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)', // Subtle shadow
        transition: 'background-color 0.3s', // Smooth transition for hover effect
    };

    const linkStyle = {
        display: 'flex', // Use flex to center the link
        justifyContent: 'center', // Center horizontally
        margin: '20px 0' // Margin for spacing above and below
    };

    const buttonContainerStyle = {
        display: 'flex', // Enables flexbox
        justifyContent: 'center', // Centers the button horizontally
        margin: '10px 0' // Adds vertical spacing around the button
    };

    return (
        <>
            <div ref={containerRef} style={{ width: '100%', position: 'relative', maxWidth: '100%', backgroundColor: 'white' }}>
                <iframe
                    key={key}
                    src={src}
                    style={{
                        width: '100%',
                        height: `${height}px`,
                        border: '0',
                        allowFullScreen: true
                    }}
                ></iframe>
            </div>
            <div style={linkStyle}>
                <a href={sourceLink} target="_blank" rel="noopener noreferrer">(Source)</a>
            </div>
            <div style={buttonContainerStyle}>
                <button
                    onClick={restartPresentation}
                    style={buttonStyle}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#45a049'}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#4CAF50'}
                >
                    Restart Diagram
                </button>
            </div>
        </>
    );
}

export default GoogleSlides;
