import React, { useState, useEffect } from 'react';

function RotatePrompt() {
  const [isLandscape, setIsLandscape] = useState(window.innerWidth > window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setIsLandscape(window.innerWidth > window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  if (isLandscape) {
    return null; 
  }

 

  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    zIndex: 10000,
  };

  const phoneStyle = {
    height: '100px',
    width: '150px',
    border: '4px solid white',
    borderRadius: '10px',
    animation: 'rotate 2s ease-in-out infinite alternate',
  };

  const messageStyle = {
    color: 'white',
    fontSize: '1.6em',
    fontWeight: "600",
    marginTop: '80px',
  };

  const keyframes = `
    @keyframes rotate {
      0% { transform: rotate(0deg); }
      50% { transform: rotate(-90deg); }
      100% { transform: rotate(-90deg); }
    }
  `;

  return (
    <div style={overlayStyle}>
    <style>{keyframes}</style> 
    <div style={phoneStyle}></div>
    <div style={messageStyle}>
    Please rotate your device to landscape mode for the best experience.
    </div>
  </div>
  );
}

export default RotatePrompt;
