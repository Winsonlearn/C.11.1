import React from 'react';

export default function Article(props) {

  return (
    <div className="feature">
      <div className="feature__details">
        <h3 className="feature__title">{props.title}</h3>
        <h5 className="feature__sub__title">{props.subtitle}</h5>
      </div>
      <div className={props.className}>
        <img src={props.img} alt="Feature image" className="feature__image" />
        {props.video && (
          <div className="feature__backgroud__video__container">
            <video autoPlay="" loop="" muted="" className="feature__backgroud__video">
              <source src={props.video} type="video/mp4" />
            </video>
          </div>
        )}
        {props.poster && (
          <div className="feature__2__poster__container">
            <div className="poster__container">
              <img src={props.poster.Img} alt="poster" className="poster" />
            </div>
            <div className="poster__details">
              <h4>{props.poster.title}</h4>
              <h6>{props.poster.subtitle}</h6>
            </div>
            <div className="download__gif__container">
              <img src={props.poster.gif} alt="downloading gif" className="gif" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}