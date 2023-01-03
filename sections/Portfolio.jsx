"use client";

import React, { useState } from "react";
import { SectionTitle, SectionSubtitle, SectionDescription, Button, Modal } from "../components";
import { portfolioList } from "../constants/data";

export default function Portfolio() {
  const [openModal, setOpenModal] = useState({
    isOpen: false,
    selectedModal: null,
  });

  const handleOpenModal = (index) => setOpenModal({ isOpen: true, selectedModal: index });

  const handleCloseModal = () => setOpenModal({ isOpen: false, selectedModal: null });

  const handleRenderModal = () => {
    const { isOpen, selectedModal } = openModal;

    if (selectedModal !== null) {
      const { title, subtitle, img, description } = portfolioList[selectedModal];

      return (
        <Modal
          isOpen={isOpen}
          closeModal={handleCloseModal}
          title={title}
          subtitle={subtitle}
          img={img}
          description={description}
        />
      );
    }
  };

  const truncateString = (string) => {
    const stringLimit = 75;

    if (string.length > stringLimit) {
      return string.slice(0, stringLimit) + "...";
    }

    return string;
  };

  return (
    <section
      className="p-sectionPadding"
      id="portfolio"
    >
      {/* Portfolio Section Title */}
      <SectionTitle>Portfolio</SectionTitle>

      {/* Portfolio Section Container */}
      <div className="xl:max-w-sectionWidth max-w-[62.5rem] mx-auto">
        {/* Portfolio Section Subtitle & Description */}
        <SectionSubtitle>Project i'm created</SectionSubtitle>
        <SectionDescription>I'm created a few project while i'm learing about frontend development. and the project i'll explain below</SectionDescription>

        {/* Portfolio Section Content */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:w-full w-[80%] lg:mx-0 mx-auto gap-10 mt-16">
          {portfolioList.map(({ title, subtitle, img, description }, index) => (
            <div
              key={index}
              className="p-5 bg-white shadow-cardShadow flex flex-col gap-y-4 rounded-lg border-[1.5px] transition-all duration-300 hover:border-primary"
            >
              <div className="overflow-hidden rounded-xl h-[250px] border-[3px]">
                <img
                  src={img}
                  alt="Portfolio Banner"
                  className="h-full w-full object-cover rounded-[9px]"
                />
              </div>
              <div className="flex flex-col gap-y-2">
                <h3 className="font-semibold xl:text-[1.2em] lg:text-[1.1em] text-[1em]">{title}</h3>
                <h4 className="font-medium text-light xl:text-[1em] text-[0.85em]">{subtitle}</h4>
                <p className="font-normal text-[0.9em]">{truncateString(description)}</p>
              </div>
              <div className="flex items-center gap-x-5 xl:max-w-[85%] w-full mt-4">
                <Button
                  href={"/"}
                  onClick={() => handleOpenModal(index)}
                  type="primary"
                  size="small"
                  className="rounded-md font-medium text-center"
                >
                  View More
                </Button>
                <Button
                  href={"/"}
                  type="outline-primary"
                  size="small"
                  className="rounded-md font-medium text-center"
                >
                  Live Preview
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Portfolio Modal Render */}
        <React.Fragment>{handleRenderModal()}</React.Fragment>

        {/* View All Portfolio Button */}
        <div className="flex justify-center items-center w-full mt-10">
          <Button
            href={"/portfolio"}
            scroll={true}
            type="primary"
            size="normal"
            className="rounded-md shadow-lg"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
