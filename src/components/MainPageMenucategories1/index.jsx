import React from "react";

import { Img, Text } from "components";

const MainPageMenucategories1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col h-[52px] items-center justify-start w-[52px]">
          <Img
            className="h-[52px] md:h-auto object-cover w-[52px]"
            src="images/img_pizza.png"
            alt="pizza"
          />
        </div>
        <Text
          className="text-center text-lg text-white-A700 w-auto"
          size="txtPoppinsMedium18WhiteA700"
        >
          {props?.submenutext}
        </Text>
      </div>
    </>
  );
};

MainPageMenucategories1.defaultProps = { submenutext: "Pizza" };

export default MainPageMenucategories1;
