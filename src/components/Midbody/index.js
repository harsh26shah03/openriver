import React from "react";
import NFTWithProfileCard from "./NFTWithProfileCard";
import Carousel from "react-elastic-carousel";
import { useRef } from "react";
import "./style.css";

const Midbody = () => {
  const carouselRef = useRef(null);
  let resetTimeout;
  return (
    <div className="midbodywrapper">
      <div className="midbodyheading">New and Notable</div>
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
        <NFTWithProfileCard name={"Fjord Norway"} isVerified={true} price={1} />
        <NFTWithProfileCard name={"Glacier Cave"} isVerified={false} />
        <NFTWithProfileCard name={"Lofoten Norway"} isVerified={true} />
        <NFTWithProfileCard name={"Royal Danish Garden"} isVerified={true} />
        <NFTWithProfileCard name={"Skagen Denmark"} isVerified={true} />
        <NFTWithProfileCard name={"The Troll Wall"} isVerified={false} />
      </Carousel>
    </div>
  );
};

export default Midbody;
