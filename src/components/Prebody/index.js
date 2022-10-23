import React from "react";
import NFTCard from "./NFTCard";
import Carousel from "react-elastic-carousel";
import { useRef } from "react";
import "./style.css";

const Prebody = () => {
  const carouselRef = useRef(null);
  let resetTimeout;
  return (
    <div className="prebodywrapper">
      <h1 className="heading">Explore, Collect and Sell Indian NFTs</h1>
      <Carousel
        ref={carouselRef}
        enableAutoPlay={true}
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
        style={{
          margin: "10px",
          heigt: "100%",
          width: "100%",
        }}
        breakPoints={[
          { width: 500, itemsToShow: 1 },
          { width: 500, itemsToShow: 2 },
          { width: 750, itemsToShow: 3 },
          { width: 1000, itemsToShow: 4 },
        ]}
        itemsToShow={4}
      >
        <NFTCard name={"Harsh"} isVerified={true} price={1} />
        <NFTCard
          name={"This is the dark night...."}
          isVerified={false}
          price={20}
        />
        <NFTCard name={"Modi during Covid"} isVerified={true} price={1000} />
        <NFTCard name={"Ram Mandir"} isVerified={true} price={1000000} />
        <NFTCard name={"Battles"} isVerified={true} price={1000} />
        <NFTCard name={"Heaven in Siege"} isVerified={false} price={1000} />
      </Carousel>
    </div>
  );
};

export default Prebody;
