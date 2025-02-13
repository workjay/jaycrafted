"use client";
import React, { useRef } from "react";
import { Swiper } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Box, styled } from "@mui/material";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CustomNavigationButton from "./CustomNavigationButton";

const StyledSwiperWrapper = styled(Box)(() => ({
  position: "relative",
  width: "100%",
  "& .swiper": {
    padding: "10px 0",
  },
}));

interface PrimarySliderProps {
  children: React.ReactNode;
  slidesPerView?: number;
}

const PrimarySlider = ({ children, slidesPerView = 1 }: PrimarySliderProps) => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <>
      <StyledSwiperWrapper>
        {/* Left Navigation Button */}
        <CustomNavigationButton
          direction="prev"
          icon={<ChevronLeft />}
          onClick={() => swiperRef.current?.slidePrev()}
        />

        <Box paddingX={"50px"}>
          <Swiper
            modules={[Navigation]}
            speed={500}
            loop={true}
            slidesPerView={slidesPerView}
            spaceBetween={30}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              900: {
                slidesPerView: slidesPerView > 1 ? 2 : 1,
              },
              1250: {
                slidesPerView: slidesPerView > 1 ? 3 : 1,
              },
            }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {children}
          </Swiper>
        </Box>

        {/* Right Navigation Button (Rotated Left Arrow) */}
        <CustomNavigationButton
          direction="next"
          icon={<ChevronRight />}
          onClick={() => swiperRef.current?.slideNext()}
        />
      </StyledSwiperWrapper>
    </>
  );
};

export default PrimarySlider;
