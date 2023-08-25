import { Image, Modal } from "@mantine/core";
import { Carousel, useAnimationOffsetEffect } from "@mantine/carousel";
import { useState } from "react";

import imgProduct1 from "./../../assets/image-product-1.jpg";
import imgProduct1Thumbnail from "./../../assets/image-product-1-thumbnail.jpg";
import imgProduct2 from "./../../assets/image-product-2.jpg";
import imgProduct2Thumbnail from "./../../assets/image-product-2-thumbnail.jpg";
import imgProduct3 from "./../../assets/image-product-3.jpg";
import imgProduct3Thumbnail from "./../../assets/image-product-3-thumbnail.jpg";
import imgProduct4 from "./../../assets/image-product-4.jpg";
import imgProduct4Thumbnail from "./../../assets/image-product-4-thumbnail.jpg";

const ImgContainer = () => {
  const [activeImg, setActiveImg] = useState(imgProduct1);
  const TRANSITION_DURATION = 200;
  const [opened, setOpened] = useState(false);
    const [embla, setEmbla] = useState<Embla | null>(null);

  useAnimationOffsetEffect(embla, TRANSITION_DURATION);
  return (
    <>
      <div className="w-full md:flex flex-col items-center justify-center h-full hidden ">
        <div className="w-6/12 md:w-5/6 ">
          <img
            src={activeImg}
            alt="Preview"
            className="rounded-md aspect-auto"
            onClick={() => setOpened(true)}
          />
        </div>
        <div className="flex md:gap-6 pt-3 mt-6 w-6/12 md:w-5/6 gap-1">
          <Image
            src={imgProduct1Thumbnail}
            onClick={() => setActiveImg(imgProduct1)}
            radius="sm"
            className={`cursor-pointer border-4 rounded-md ${
              activeImg === imgProduct1
                ? "opacity-50 border-Orange"
                : "border-White"
            } `}
          />
          <Image
            src={imgProduct2Thumbnail}
            onClick={() => setActiveImg(imgProduct2)}
            radius="sm"
            className={`cursor-pointer border-4 rounded-lg ${
              activeImg === imgProduct2
                ? "opacity-50 border-Orange"
                : "border-White"
            } `}
          />
          <Image
            src={imgProduct3Thumbnail}
            onClick={() => setActiveImg(imgProduct3)}
            radius="sm"
            className={`cursor-pointer border-4 rounded-lg ${
              activeImg === imgProduct3
                ? "opacity-50 border-Orange"
                : "border-White"
            } `}
          />
          <Image
            src={imgProduct4Thumbnail}
            onClick={() => setActiveImg(imgProduct4)}
            radius="sm"
            className={`cursor-pointer border-4 rounded-lg ${
              activeImg === imgProduct4
                ? "opacity-50 border-Orange"
                : "border-White"
            } `}
          />
        </div>
      </div>
      <Carousel
        withIndicators
        loop
        slideGap="md"
        className="md:hidden w-5/6 p-2"
        getEmblaApi={setEmbla}
        styles={{
          indicator: {
            transition: "width 250ms ease",
            background: "white",
          },
        }}
      >
        <Carousel.Slide>
          <Image src={imgProduct1} radius="md" />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image src={imgProduct2} radius="md" />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image src={imgProduct3} radius="md" />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image src={imgProduct4} radius="md" />
        </Carousel.Slide>
      </Carousel>
      <Modal
        opened={opened}
        size={600}
        padding={0}
        transitionProps={{ duration: TRANSITION_DURATION }}
        withCloseButton={true}
        onClose={() => setOpened(false)}
        overlayProps={{
          opacity: 0.55,
          blur: 6,
        }}
        centered
      >
        <Carousel
          withIndicators
          loop
          slideGap="md"
          className=""
          styles={{
            indicator: {
              transition: "width 250ms ease",
              background: "white",
            },
          }}
        >
          <Carousel.Slide>
            <Image src={imgProduct1} radius="md" />
          </Carousel.Slide>
          <Carousel.Slide>
            <Image src={imgProduct2} radius="md" />
          </Carousel.Slide>
          <Carousel.Slide>
            <Image src={imgProduct3} radius="md" />
          </Carousel.Slide>
          <Carousel.Slide>
            <Image src={imgProduct4} radius="md" />
          </Carousel.Slide>
        </Carousel>
      </Modal>
    </>
  );
};

export default ImgContainer;
