import React from "react";

import { Sidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Img } from "components/tidak-dipakai";

const Sidebar1 = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <Sidebar className={props.className}>
        <div className="flex flex-col md:gap-10 gap-20 items-center justify-start mt-11 mx-auto w-auto">
          <Img
            className="h-[33px] w-20"
            src="images/img_television.svg"
            alt="television"
          />
          <div className="flex flex-col gap-8 items-start justify-start w-auto">
            <div
              className="common-pointer flex flex-col items-center justify-start p-4 rounded-[12px] w-[72px]"
              onClick={() => navigate("/mainpage")}
            >
              <Img
                className="h-10 w-10"
                src="images/img_grid_blue_gray_500.svg"
                alt="grid"
              />
            </div>
            <div className="bg-deep_orange-50 flex flex-col items-center justify-start p-4 rounded-[12px] w-[72px]">
              <Img
                className="h-10 w-10"
                src="images/img_file_red_900.svg"
                alt="file"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start mb-6 mt-[595px] mx-auto p-4 rounded-[12px] w-[72px]">
          <Img
            className="h-10 w-10"
            src="images/img_thumbsup.svg"
            alt="thumbsup"
          />
        </div>
      </Sidebar>
    </>
  );
};

Sidebar1.defaultProps = {};

export default Sidebar1;
