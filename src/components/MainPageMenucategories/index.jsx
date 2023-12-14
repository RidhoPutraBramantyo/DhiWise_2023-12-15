import React from "react";

import { Img, Text } from "components";

const MainPageMenucategories = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col h-[52px] items-center justify-start w-[52px]">
          <Img
            className="h-[52px] md:h-auto object-cover w-[52px]"
            alt="bestseller"
            src={props?.bestseller}
          />
        </div>
        <Text
          className="text-center text-lg text-red-900_01 w-auto"
          size="txtPoppinsMedium18Red90001"
        >
          {props?.submenu}
        </Text>
      </div>
    </>
  );
};

MainPageMenucategories.defaultProps = {
  bestseller: "images/img_bestseller.png",
  submenu: "Best seller menu",
};

export default MainPageMenucategories;
