"use client";

import { Box } from "@mui/material";
import SectionLayout from "../layouts/SectionLayout";
import PrimaryHeader from "../general/PrimaryHeader";
import SecondaryText from "../general/SecondaryText";
import { TESTIMONIALS } from "@/lib/data";
import { TestimonialDetailTypes } from "@/lib/types";
import PrimarySlider from "../general/PrimarySlider";
import { SwiperSlide } from "swiper/react";
import TestimonialDetail from "../general/TestimonialDetail";

export default function Testimonials() {
  return (
    <SectionLayout id="testimonials">
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
        <PrimaryHeader highlightedText="Say">What They </PrimaryHeader>
        <SecondaryText>
          Hear what others have to say about working with me:
        </SecondaryText>
        <Box display={"flex"} flexDirection={"column"} mt={4} width={"100%"}>
          <PrimarySlider slidesPerView={TESTIMONIALS?.length < 4 ? TESTIMONIALS?.length : 3}>
            {TESTIMONIALS.map(
              (testimonial: TestimonialDetailTypes, i: number) => (
                <SwiperSlide key={i}>
                  <TestimonialDetail {...testimonial} />
                </SwiperSlide>
              )
            )}
          </PrimarySlider>
        </Box>
      </Box>
    </SectionLayout>
  );
}
