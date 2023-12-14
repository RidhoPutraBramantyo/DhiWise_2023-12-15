import React from "react";

const sizeClasses = {
  txtPoppinsRegular16Bluegray500: "font-normal font-poppins",
  txtPoppinsMedium18Red90001: "font-medium font-poppins",
  txtPoppinsMedium18WhiteA700: "font-medium font-poppins",
  txtPoppinsSemiBold18Red90001: "font-poppins font-semibold",
  txtPoppinsSemiBold30: "font-poppins font-semibold",
  txtPoppinsMedium20GreenA700: "font-medium font-poppins",
  txtPoppinsMedium14: "font-medium font-poppins",
  txtPoppinsSemiBold16: "font-poppins font-semibold",
  txtPoppinsMedium12: "font-medium font-poppins",
  txtPoppinsMedium30: "font-medium font-poppins",
  txtPoppinsSemiBold20Bluegray800: "font-poppins font-semibold",
  txtPoppinsMedium18: "font-medium font-poppins",
  txtPoppinsSemiBold18: "font-poppins font-semibold",
  txtPoppinsSemiBold18Bluegray900: "font-poppins font-semibold",
  txtPoppinsMedium20Bluegray800: "font-medium font-poppins",
  txtPoppinsRegular18: "font-normal font-poppins",
  txtPoppinsMedium20Bluegray500: "font-medium font-poppins",
  txtPoppinsRegular16: "font-normal font-poppins",
  txtPoppinsRegular18Bluegray500: "font-normal font-poppins",
  txtPoppinsMedium24: "font-medium font-poppins",
  txtPoppinsMedium20Bluegray800_1: "font-medium font-poppins",
  txtPoppinsMedium14Bluegray500: "font-medium font-poppins",
  txtPoppinsMedium30Black900: "font-medium font-poppins",
  txtPoppinsMedium20: "font-medium font-poppins",
  txtPoppinsSemiBold64: "font-poppins font-semibold",
  txtPoppinsSemiBold20: "font-poppins font-semibold",
  txtPoppinsMedium30Bluegray500: "font-medium font-poppins",
  txtPoppinsRegular20: "font-normal font-poppins",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
