import React, { Fragment } from "react";
import triangle from "./Triangle.svg";

const Triangle = () => {

  return (
    <div>
      
      </div>
  )
  var container = document.querySelector(".container");
  var triangle = document.querySelector(".triangle");

  TweenMax.set(container, {
    position: "absolute",
    top: "50%",
    left: "50%",
    xPercent: -50,
    yPercent: -50,
  });
  TweenMax.set(triangle, {
    scale: 0.95,
  });
  TweenMax.set("svg", {
    visibility: "visible",
  });

  var tl = new TimelineMax({ repeat: -1, repeatDelay: 1 });
  tl.timeScale(6);
  tl.to(triangle, 3, {
    rotation: "-=120",
    svgOrigin: "300 324.5",
    ease: Power2.easeInOut,
  })

    .staggerFrom(
      "#bottom path",
      2,
      {
        drawSVG: "100% 100%",
        ease: Power4.easeInOut,
        alpha: 0,
      },
      0.2,
      "-=2.5"
    )

    .staggerFrom(
      "#right path",
      2,
      {
        drawSVG: "100% 100%",
        ease: Power4.easeInOut,
        alpha: 0,
      },
      0.2,
      "-=2.5"
    )

    .staggerFrom(
      "#left path",
      2,
      {
        drawSVG: "100% 100%",
        ease: Power4.easeInOut,
        alpha: 0,
      },
      0.2,
      "-=2.5"
    )

    .to(
      ["#bottom path", "#right path", "#left path"],
      2,
      {
        drawSVG: "0% 0%",
        ease: Power1.easeOut,
      },
      "-=1.5"
    );
};
//TweenMax.globalTimeScale(0.5)
export default Triangle;
