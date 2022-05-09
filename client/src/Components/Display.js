import React from 'react';

export default function Display (props) {
  let indents = [];


  if(props.content.length >= 2) {
    for(let i=0; i<props.content.length; i++) {
      indents.push(
        <div>
        <h1>{props.content[i].idea.Desc}</h1>
        <p>{props.content[i].idea.Links}</p>
        </div>
      )
    }
    console.log(indents);
  }
  return (
    indents
  );
}
