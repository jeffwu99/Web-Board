import React, { useState, useEffect } from 'react';
import lemon from '../lemonspice.png';



export default function ScrollToShow() {

  const [position, setPosition] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      let scrollY = window.scrollY;
      setPosition(scrollY);
  }


  window.addEventListener("scroll", handleScroll, { passive: true });

  return () => window.removeEventListener("scroll", handleScroll)
  }, [position]);


  let conversion = 0;
  let opacity = 0;
  if (position > 1500) {
    conversion = (position - 1500)/650*8;
  };
  if (position > 1700) {
      opacity = (position - 1700)/300;
      console.log(opacity);
  }


  const pitch = {
    top: '-300px',
    left: '700px',
    position: 'relative'
  }

  const bruhOne = {
    opacity: opacity
  }

  const bruhTwo = {
    marginTop: '10px',
    marginLeft: '100px',
    width: '550px',
    opacity: opacity
  }

  const comparisonExample = {
    display: 'flex',
    justifyContent: 'center',
    listStyleType: 'none'
  }

  const comparisonText = {
    margin: '60px',
    marginBottom: '150px',
    lineHeight: '200%'
  }

  const ideaBackgroundOne = {
    marginTop: '100px',
    marginLeft: '50px',
    marginRight: '50px',
    backgroundColor: '#e9897a',
    filter: `blur(${conversion}px)`,

    borderStyle: 'solid',
    borderColor: '#e2624e',
    borderWidth: '15px',
    borderRadius: '10px 75px 75px 75px',
    boxShadow: '1px 1px 30px #de4d38'
  }

  const ideaBackgroundTwo = {
    marginTop: '100px',
    marginLeft: '50px',
    marginRight: '50px',
    backgroundColor: '#e9897a',
    filter: `blur(${conversion}px)`,

    borderStyle: 'solid',
    borderColor: '#e2624e',
    borderWidth: '15px',
    borderRadius: '75px 10px 75px 75px',
    boxShadow: '1px 1px 30px #de4d38'
  }

  const comparisonHeaders = {
    marginTop: '40px',
    marginLeft: '150px',
    fontSize: '20px'
  }

  return (
    <div>
      <ul style={comparisonExample}>
        <li style={ideaBackgroundOne}>
        <h1 style={comparisonHeaders}>
          <img src={lemon} style={{height: '40px', width: '75px', float: 'left'}} alt="lemon"/>
          Review Library Page
        </h1>
        <p style={comparisonText}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type
        </p>
        </li>
        <li style={ideaBackgroundTwo}>
        <h2 style={comparisonHeaders}>
          <img src={lemon} style={{height: '40px', width: '75px', float: 'left'}} alt="lemon"/>
          Book review App
        </h2>
        <p style={comparisonText}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type
        </p>
        </li>
      </ul>
      <span style={pitch}>
        <h5 style={bruhOne}>Chances Are That If You Thought Of It, Someone Else Has Well </h5>
        <p style={bruhTwo}>
          ...well great! Multiple people having the same or similar concept means it
          has more merit. Connect with the others over LinkedIn and develop that idea
          further or better yet, organize it into a group project.
        </p>
      </span>
    </div>
  )
}
