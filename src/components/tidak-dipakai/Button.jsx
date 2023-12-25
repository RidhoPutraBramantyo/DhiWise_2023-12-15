import React from "react";
import PropTypes from "prop-types";

const shapes = { square: "rounded-none", round: "rounded-md" };
const variants = {
  outline: {
    blue_gray_100: "border-blue_gray-100 border-solid border-y text-red-900",
  },
  fill: {
    white_A700: "bg-white-A700 text-blue_gray-800",
    red_900: "bg-red-900 text-white-A700",
    deep_orange_50: "bg-deep_orange-50 text-red-900_01",
  },
};
const sizes = { xs: "p-[3px]", sm: "p-2", md: "p-3" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "square",
  size = "md",
  variant = "fill",
  color = "deep_orange_50",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf([
    "blue_gray_100",
    "white_A700",
    "red_900",
    "deep_orange_50",
  ]),
};

export { Button };
