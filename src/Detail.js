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

