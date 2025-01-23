import React from 'react';
import styled from 'styled-components';

const WaveLoader = () => {
    return (
        <StyledWrapper>
            <div className="container">
                <div className="item" style={{"--i": 0} as React.CSSProperties} />
                <div className="item" style={{"--i": 1} as React.CSSProperties} />
                <div className="item" style={{"--i": 2} as React.CSSProperties} />
                <div className="item" style={{"--i": 3} as React.CSSProperties} />
                <div className="item" style={{"--i": 4} as React.CSSProperties} />
                <div className="item" style={{"--i": 5} as React.CSSProperties} />
                <div className="item" style={{"--i": 6} as React.CSSProperties} />
                <div className="item" style={{"--i": 7} as React.CSSProperties} />
                <div className="item" style={{"--i": 8} as React.CSSProperties} />
                <div className="item" style={{"--i": 9} as React.CSSProperties} />
                <div className="item" style={{"--i": 10} as React.CSSProperties} />
                <div className="item" style={{"--i": 11} as React.CSSProperties} />
                <div className="item" style={{"--i": 12} as React.CSSProperties} />
                <div className="item" style={{"--i": 13} as React.CSSProperties} />
                <div className="item" style={{"--i": 14} as React.CSSProperties} />
                <div className="item" style={{"--i": 15} as React.CSSProperties} />
                <div className="item" style={{"--i": 16} as React.CSSProperties} />
                <div className="item" style={{"--i": 17} as React.CSSProperties} />
                <div className="item" style={{"--i": 18} as React.CSSProperties} />
                <div className="item" style={{"--i": 19} as React.CSSProperties} />
                <div className="item" style={{"--i": 20} as React.CSSProperties} />
            </div>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  .container {
    position: absolute;
    top: 40%;
    height: 90%;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  }

  .item {
    position: absolute;
    background-color: transparent;
    width: calc(var(--i) * 2.5vmin);
    aspect-ratio: 1;
    border-radius: 50%;
    border: .9vmin solid #0F0;
    transform-style: preserve-3d;
    transform: rotateX(70deg) translateZ(50px);
    animation: my-move 3s ease-in-out calc(var(--i) * 0.08s) infinite;
    box-shadow: 0px 0px 15px #0F0,
      inset 0px 0px 15px #0F0;
  }

  @keyframes my-move {
    0%,
    100% {
      transform: rotateX(70deg) translateZ(50px) translateY(0px);
      filter: hue-rotate(0deg);
    }

    50% {
      transform: rotateX(70deg) translateZ(50px) translateY(-50vmin);
      filter: hue-rotate(180deg);
    }
  }`;

export default WaveLoader;
