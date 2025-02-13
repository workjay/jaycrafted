"use client";
import React, { useRef } from "react";
import { Swiper } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Box, IconButton, styled } from "@mui/material";
import { ChevronLeft, ChevronRight } from "lucide-react";

const StyledIconButton = styled(IconButton)(() => ({
  position: "absolute",
  top: "50%",
  zIndex: 10,
  transform: "translateY(-50%)",
}));

interface CustomNavButtonProps {
  direction: "prev" | "next";
  icon: React.ReactNode;
  onClick: () => void;
}

const CustomNavButton = ({
  direction,
  onClick,
  icon,
}: CustomNavButtonProps) => (
  <StyledIconButton
    onClick={onClick}
    color="primary"
    sx={{
      left: direction === "prev" ? "0px" : "auto",
      right: direction === "next" ? "0px" : "auto",
    }}
  >
    {icon}
  </StyledIconButton>
);

const StyledSwiperWrapper = styled(Box)(() => ({
  position: "relative",
  width: "100%",
  "& .swiper": {
    padding: "10px 0",
  },
}));

interface PrimarySliderProps {
  children: React.ReactNode;
}

const PrimarySlider = ({ children }: PrimarySliderProps) => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <>
      <StyledSwiperWrapper>
        {/* Left Navigation Button */}
        <CustomNavButton
          direction="prev"
          icon={<ChevronLeft />}
          onClick={() => swiperRef.current?.slidePrev()}
        />

        <Box paddingX={"50px"}>
          <Swiper
            modules={[Navigation]}
            speed={500}
            loop={true}
            slidesPerView={1}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {children}
          </Swiper>
        </Box>

        {/* Right Navigation Button (Rotated Left Arrow) */}
        <CustomNavButton
          direction="next"
          icon={<ChevronRight />}
          onClick={() => swiperRef.current?.slideNext()}
        />
      </StyledSwiperWrapper>
    </>
  );
};

export default PrimarySlider;
