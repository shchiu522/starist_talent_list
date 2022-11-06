// import logo from './logo.svg';
import './App.scss';
// import { useState } from "react";

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
  return (<p className="content-detail">
    {props.audio.map((i, key) => {
      return key == 0 ? <span key={key}>Audio {key + 1}</span> : <span key={key}> | Audio {key + 1}</span>;
    })}
  </p>);
}
