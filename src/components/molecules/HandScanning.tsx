import styled from 'styled-components';

const HandScanning = () => {
    return (
        <StyledWrapper>
            <div className="container">
                <div className="scan">
                    <div className="hand">
                        <div className="lines" />
                    </div>
                </div>
            </div>
        </StyledWrapper>
    )
}

const StyledWrapper = styled.div`
container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #000;
}
  
.scan {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.scan .hand {
  position: relative;
  width: 300px;
  height: 300px;
  background-image: url('/images/HAND1.svg');
  background-size: 300px;
}

.scan .hand::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/images/HAND2.png');
  background-size: 300px;
  animation: animate 4s ease-in-out infinite;
}

@keyframes animate {
  0%,
  100% {
    height: 0%;
  }
  50% {
    height: 100%;
  }
}

.scan .hand::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 8px;
  background: #00FF00;
  border-radius: 8px;
  filter: drop-shadow(0 0 20px #00FF00) drop-shadow(0 0 60px #00FF00);
  animation: animateLines 4s ease-in-out infinite;
}

@keyframes animateLines {
  0%,
  100% {
    top: 0%;
  }
  50% {
    top: 100%;
  }
}

.scan h3 {
  text-transform: uppercase;
  font-size: 2em;
  letter-spacing: 2px;
  margin-top: 20px;
  color: #00FF00;
  filter: drop-shadow(0 0 20px #00FF00) drop-shadow(0 0 60px #00FF00);
  animation: animateText 0.5s steps(1) infinite;
}

@keyframes animateText {
  0%,
  100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}

.scan .hand .lines {
  position: absolute;
  inset: 0;
}

.scan .hand .lines::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 300px;
  height: 300px;
  background-image: url('/images/HAND3.svg');
  background-size: 300px;
  animation: handLines 4s ease-in-out infinite;
}

@keyframes handLines {
  0%,
  25%,
  100% {
    height: 0;
  }
  50% {
    height: 100%;
  }
}

.scan .hand .lines::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 300px;
  height: 300px;
  background-image: url('/images/HAND4.png');
  background-size: 300px;
  animation: handPoints 4s ease-in-out infinite;
}
  
@keyframes handPoints {
  0%,
  100% {
    height: 0;
  }
  50% {
    height: 100%;
  }
}`;

export default HandScanning