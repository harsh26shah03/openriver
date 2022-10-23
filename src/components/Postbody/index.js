import React from "react";
import ServiceCard from "./ServiceCard";
import Carousel from "react-elastic-carousel";
import { useRef } from "react";
import "./style.css";

const Postbody = () => {
  const carouselRef = useRef(null);
  let resetTimeout;
  return (
    <div className="postbodywrapper">
      <div className="postbodyheading">
        <div>
          NFTs 101
          <div className="postbodysubheading">
            Get comfortable with the basics.
          </div>
        </div>
        <div className="postbodyheadingbutton">Learn more</div>
      </div>
      <Carousel
        ref={carouselRef}
        enableAutoPlay={false}
        autoPlaySpeed={15000}
        pagination={false}
        disableArrowsOnEnd={false}
        disableArrowsOnStart={false}
        onNextEnd={({ index }) => {
          if (index === 2) {
            clearTimeout(resetTimeout);
            resetTimeout = setTimeout(() => {
              carouselRef?.current?.goTo(0);
            }, 5000); // same time
          }
        }}
        breakPoints={[
          { width: 500, itemsToShow: 1 },
          { width: 750, itemsToShow: 2 },
          { width: 1000, itemsToShow: 3 },
        ]}
        itemsToShow={3}
      >
        <ServiceCard name={"What is NFT?"} />
        <ServiceCard name={"How it works?"} />
        <ServiceCard name={"How to buy it?"} />
        <ServiceCard name={"What does it include?"} />
        <ServiceCard name={"Are they worth buying?"} />
        <ServiceCard name={"How to make money?"} />
      </Carousel>
    </div>
  );
};

export default Postbody;
