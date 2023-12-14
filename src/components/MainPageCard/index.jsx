import React from "react";

import { Img, Text } from "components";

const MainPageCard = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-gray-200 flex flex-col items-center justify-start p-2.5 rounded-tl-lg w-full">
          <Img
            className="h-[113px] md:h-auto my-2 object-cover w-full"
            alt="imageFifteen"
            src={props?.imagefifteen}
          />
        </div>
        <div className="flex flex-col gap-2 items-start justify-start px-3 py-2 w-[196px]">
          <Text
            className="text-blue_gray-900 text-lg w-full"
            size="txtPoppinsSemiBold18Bluegray900"
          >
            {props?.splitza}
          </Text>
          <Text
            className="leading-[18.00px] max-w-[172px] md:max-w-full text-blue_gray-500 text-xs"
            size="txtPoppinsMedium12"
          >
            {props?.twotoppingtext}
          </Text>
          <Text
            className="text-lg text-red-900_01 w-full"
            size="txtPoppinsSemiBold18Red90001"
          >
            {props?.pricetext}
          </Text>
        </div>
      </div>
    </>
  );
};

MainPageCard.defaultProps = {
  imagefifteen: "images/img_image15.png",
  splitza: "Splitza",
  twotoppingtext: "2 Pilihan topping dalam 1 pizza",
  pricetext: "Rp. 89.999",
};

export default MainPageCard;
