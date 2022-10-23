import React from "react";
import NFTWithProfileCard from "./NFTWithProfileCard";
import Carousel from "react-elastic-carousel";
import { useRef } from "react";
import "./style.css";

const Latermidbody = () => {
  const carouselRef = useRef(null);
  let resetTimeout;
  return (
    <div className="latermidbodywrapper">
      <div className="latermidbodyheading">Dreamners Spotlight</div>
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
        <NFTWithProfileCard name={"Bleik"} isVerified={false} price={1} />
        <NFTWithProfileCard name={"Odda"} isVerified={true} />
        <NFTWithProfileCard name={"Reinebringen"} isVerified={false} />
        <NFTWithProfileCard name={"Roros Street"} isVerified={true} />
        <NFTWithProfileCard name={"Svolvaer"} isVerified={false} />
        <NFTWithProfileCard name={"Trolltunga"} isVerified={true} />
      </Carousel>
    </div>
  );
};

export default Latermidbody;
