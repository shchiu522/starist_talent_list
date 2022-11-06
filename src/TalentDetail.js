// import logo from './logo.svg';
import './App.scss';
import { useState } from "react";
import audio from './assets/AUDIO1.m4a';

export function ContentTitle(props) {
  return (<div className='content-title'>
    {props.text}
  </div>)
}

export function ContentDetail(props) {
  return (<p className="content-detail">
    {props.text.split("\n").map((i, key) => {
      return <div key={key}>{i}</div>;
    })}
  </p>);
}


export function AudioDetail(props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleAudioOnClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <p className="content-detail">
      {props.audio.map((i, key) => {
        return key == 0
          ? <span style={{ cursor: "pointer" }} onClick={handleAudioOnClick} key={key}>Audio {key + 1}</span>
          : (<>
            <span> | </span> <span style={{ cursor: "pointer" }} onClick={handleAudioOnClick} key={key}> Audio {key + 1}</span>;
          </>)
      })}
      {isOpen ? <AudioOverly handleOverlayOnClick={handleAudioOnClick} /> : null}
    </p>);
}

function AudioOverly(props) {
  return (
    <div id="overlay" onClick={props.handleOverlayOnClick}>
      <audio controls>
        <source src={audio} type="audio/x-m4a" />
        Your browser does not support the audio element.
      </audio>
    </div>
  )
}
