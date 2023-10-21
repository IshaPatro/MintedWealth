import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import stock from '../img/stock.jpg'; 

const FeatureButton = () => {
  return(
    <>
      <button className="featureButton">
        <a href="#" target="_blank">
          <span> </span>
          <span> </span>
          <span> </span>
          <span> </span>
          Explore Now 
        </a>
      </button>
    </>
  )
}


export const Features = (props) => {
  return (
    <div className="text-center">
      <div className="container">
        <div id="features" style={{ height: '100%' }}>
          <div className="col-md-10 col-md-offset-1 section-title">
            <h2>Features</h2>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <img src={stock} className="featureImg"/>
            </div>
            <div class="col-lg-6">
              <div class="p-5 mt-4">
                  <h1 class="display-4">Stock Market Navigator</h1>
                  <p class="lead">Stay ahead of the curve with our cutting-edge platform that delivers real-time stock market data at your fingertips. Make informed decisions, track trends, and secure your financial future with ease </p>
                  <FeatureButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
