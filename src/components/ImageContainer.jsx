import React from 'react';
import FeatureButton from './featureButton';
const ImageContainer = ({imgSrc, stylingId, index,  title, subtitle, bodyContent}) => {

const shouldReverseStyles = index % 2 === 0;
return (
<div className="text-center" style={{height:'100%'}}>
    <div className="container">
      <div id={stylingId}  className="features">
        <div className="container">
          <div className="col-md-10 col-md-offset-1 section-title">
            <h2>{title}</h2>
          </div>
          <div class="container flex-column-reverse">
            <div class={shouldReverseStyles ? "row" : "row flex-row-reverse"}>
              <div class="col-lg-6">
                <img src={imgSrc} className="featureImg"/>
              </div>
              <div class="col-lg-6">
                <div class="p-5 mt-4">
                  <br/><br/>
                  <h1 class="display-4">{subtitle}</h1>
                  <p class="lead">{bodyContent} </p>
                  <FeatureButton buttonText="Explore Now" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
};

export default ImageContainer;