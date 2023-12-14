import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";

const SuccessPaymentPagePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-poppins items-center justify-start mx-auto p-[127px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col gap-9 items-center justify-start w-auto">
          <div className="flex flex-col gap-6 items-center justify-start w-auto">
            <Text
              className="text-3xl sm:text-[26px] md:text-[28px] text-center text-red-900 w-auto"
              size="txtPoppinsMedium30"
            >
              Change
            </Text>
            <Text
              className="md:text-5xl text-[64px] text-center text-red-900 w-auto"
              size="txtPoppinsSemiBold64"
            >
              Rp. 3000
            </Text>
            <Text
              className="text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-500 text-center w-auto"
              size="txtPoppinsMedium30Bluegray500"
            >
              Paid Rp. 296.996
            </Text>
          </div>
          <div className="h-60 relative w-60">
            <Img
              className="h-60 m-auto object-cover w-60"
              src="images/img_httpslottief.png"
              alt="httpslottief"
            />
            <Img
              className="absolute h-[198px] inset-[0] justify-center m-auto object-cover w-[198px]"
              src="images/img_image25.png"
              alt="imageTwentyFive"
            />
          </div>
          <div className="flex flex-col gap-14 items-start justify-start w-auto">
            <div className="flex flex-col gap-4 items-start justify-start w-auto">
              <div className="flex flex-row gap-2 items-start justify-start w-[356px]">
                <Input
                  name="textfield"
                  placeholder="Email"
                  className="md:h-auto p-0 placeholder:text-blue_gray-300 sm:h-auto text-base text-center w-full"
                  wrapClassName="border border-blue_gray-300 border-solid w-[76%]"
                  type="email"
                ></Input>
                <Button
                  className="cursor-pointer font-medium min-w-[78px] text-center text-lg"
                  shape="round"
                  color="red_900"
                >
                  Send
                </Button>
              </div>
              <div className="flex flex-row gap-2 items-start justify-start w-[356px]">
                <Input
                  name="textfield_One"
                  placeholder="Phone"
                  className="md:h-auto p-0 placeholder:text-blue_gray-300 sm:h-auto text-base text-center w-full"
                  wrapClassName="border border-blue_gray-300 border-solid w-[76%]"
                  type="number"
                ></Input>
                <Button
                  className="cursor-pointer font-medium min-w-[78px] text-center text-lg"
                  shape="round"
                  color="red_900"
                >
                  Send
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-2 items-start justify-start w-auto">
              <Button
                className="cursor-pointer font-medium text-center text-lg w-[356px]"
                shape="round"
                color="red_900"
              >
                Print Receipt
              </Button>
              <Button
                className="common-pointer border border-blue_gray-100 border-solid cursor-pointer font-medium text-center text-lg w-[356px]"
                onClick={() => navigate("/mainpage")}
                shape="round"
                color="white_A700"
              >
                New Sale
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuccessPaymentPagePage;
