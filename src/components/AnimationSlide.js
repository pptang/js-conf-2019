import React from 'react'
import styled from 'styled-components'
import videoBg from '../../assets/background-video.mp4';

const AnimationSlide = ({ title }) => {
  return (
    <Wrapper>
      <BackgroundVideo autoPlay loop src={videoBg} />
      <Foreground>
        <Subtitle>PM:</Subtitle>
        <Title>{title}</Title>
      </Foreground>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

const BackgroundVideo = styled.video`
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.75;
  mix-blend-mode: color-dodge;
`

const Foreground = styled.div`
  position: relative;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-shadow: 4px 4px 0px rgba(0, 0, 0, 0.8);
`

const Subtitle = styled.h4`
  font-size: 32px;
  font-family: 'Merriweather';
  font-weight: 300;
  color: rgba(255, 255, 255, 0.75);
  margin-bottom: 10px;
`

const Title = styled.h1`
  font-size: 128px;
  font-family: 'Oswald';
  font-weight: 900;
  color: #fff;
  margin: 0;
`

export default AnimationSlide;