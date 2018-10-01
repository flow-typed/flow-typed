import React, { Component } from "react";
import Slider from "react-slick";

class BadSlick1 extends Component<*> {
  render() {
    // $ExpectError
    return <Slider initialSlide="1" />;
  }
}

class BadSlick2 extends Component<*> {
  render() {
    // $ExpectError
    return <Slider slidesToShow="2" />;
  }
}

class BadSlick3 extends Component<*> {
  render() {
    // $ExpectError
    return <Slider afterChange={(currSlide: string) => console.log(currSlide)} />;
  }
}

class GoodSlick extends Component<*> {
  render() {
    return (
      <Slider
        accessibility
        className="className"
        adaptiveHeight
        arrows
        nextArrow={<div>Next</div>}
        prevArrow={<div>Prev</div>}
        autoplay
        autoplaySpeed={2}
        centerMode
        centerPadding="centerPadding"
        cssEase="cssEase"
        customPaging={index => <div>{index}</div>}
        dots
        dotsClass="dotsClass"
        draggable
        easing="easing"
        fade
        focusOnSelect
        infinite
        initialSlide={1}
        lazyLoad
        pauseOnHover
        responsive={[]}
        rtl
        slide="slide"
        slidesToShow={2}
        slidesToScroll={2}
        speed={2}
        swipe
        swipeToSlide
        touchMove
        touchThreshold={1}
        variableWidth
        useCSS
        vertical
        afterChange={currSlide => console.log(currSlide)}
        beforeChange={(currSlide, nextSlide) =>
          console.log(currSlide, nextSlide)
        }
        slickGoTo={2}
        edgeFriction={1}
        waitForAnimate
        edgeEvent={swipeDirection => console.log(swipeDirection)}
        swipeEvent={swipeDirection => console.log(swipeDirection)}
        init={() => console.log("init")}
      />
    );
  }
}
