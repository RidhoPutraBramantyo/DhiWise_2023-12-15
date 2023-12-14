import React from "react";

import { Button, Img, Text } from "components";
import Sidebar1 from "components/Sidebar1";

const ReportPagePage = () => {
  return (
    <>
      <div className="bg-gray-50 flex sm:flex-col md:flex-col flex-row font-poppins sm:gap-5 md:gap-5 items-start mx-auto w-full">
        <Sidebar1 className="!sticky !w-28 bg-white-A700 border-blue_gray-100 border-r border-solid flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
        <div className="flex flex-1 flex-col items-center justify-end md:px-5 w-full">
          <div className="flex flex-col relative w-full">
            <div className="bg-white-A700 border-blue_gray-100 border-r border-solid flex flex-col items-center justify-start mx-auto py-6 w-full">
              <div className="bg-blue_gray-50 border-b border-indigo-50 border-solid flex flex-col gap-2 items-end justify-center sm:px-5 px-6 py-4 w-auto">
                <Text
                  className="text-blue_gray-800 text-right text-xl w-auto"
                  size="txtPoppinsMedium20Bluegray800"
                >
                  5 min ago
                </Text>
                <Text
                  className="text-green-A700 text-right text-xl w-auto"
                  size="txtPoppinsMedium20GreenA700"
                >
                  Completed
                </Text>
              </div>
              <div className="border-b border-blue_gray-100 border-solid flex flex-col gap-2 items-end justify-center sm:px-5 px-6 py-4 w-auto">
                <Text
                  className="text-blue_gray-800 text-right text-xl w-auto"
                  size="txtPoppinsMedium20Bluegray800"
                >
                  36 min ago
                </Text>
                <Text
                  className="text-green-A700 text-right text-xl w-auto"
                  size="txtPoppinsMedium20GreenA700"
                >
                  Completed
                </Text>
              </div>
              <div className="border-b border-blue_gray-100 border-solid flex flex-col gap-2 items-end justify-center sm:px-5 px-6 py-4 w-auto">
                <Text
                  className="text-blue_gray-800 text-right text-xl w-auto"
                  size="txtPoppinsMedium20Bluegray800"
                >
                  38 min ago
                </Text>
                <Text
                  className="text-green-A700 text-right text-xl w-auto"
                  size="txtPoppinsMedium20GreenA700"
                >
                  Completed
                </Text>
              </div>
              <div className="border-b border-blue_gray-100 border-solid flex flex-col gap-2 items-end justify-center sm:px-5 px-6 py-4 w-auto">
                <Text
                  className="text-blue_gray-800 text-right text-xl w-auto"
                  size="txtPoppinsMedium20Bluegray800"
                >
                  52 min ago
                </Text>
                <Text
                  className="text-green-A700 text-right text-xl w-auto"
                  size="txtPoppinsMedium20GreenA700"
                >
                  Completed
                </Text>
              </div>
              <div className="border-b border-blue_gray-100 border-solid flex flex-col gap-2 items-end justify-center sm:px-5 px-6 py-4 w-auto">
                <Text
                  className="text-blue_gray-800 text-right text-xl w-auto"
                  size="txtPoppinsMedium20Bluegray800"
                >
                  Today 9:25 PM
                </Text>
                <Text
                  className="text-green-A700 text-right text-xl w-auto"
                  size="txtPoppinsMedium20GreenA700"
                >
                  Completed
                </Text>
              </div>
              <div className="border-b border-blue_gray-100 border-solid flex flex-col gap-2 items-end justify-center sm:px-5 px-6 py-4 w-auto">
                <Text
                  className="text-blue_gray-800 text-right text-xl w-auto"
                  size="txtPoppinsMedium20Bluegray800"
                >
                  Today 8:32 PM
                </Text>
                <Text
                  className="text-green-A700 text-right text-xl w-auto"
                  size="txtPoppinsMedium20GreenA700"
                >
                  Completed
                </Text>
              </div>
              <div className="border-b border-blue_gray-100 border-solid flex flex-col gap-2 items-end justify-center sm:px-5 px-6 py-4 w-auto">
                <Text
                  className="text-blue_gray-800 text-right text-xl w-auto"
                  size="txtPoppinsMedium20Bluegray800"
                >
                  Today 7:15 PM
                </Text>
                <Text
                  className="text-green-A700 text-right text-xl w-auto"
                  size="txtPoppinsMedium20GreenA700"
                >
                  Completed
                </Text>
              </div>
              <div className="border-b border-blue_gray-100 border-solid flex flex-col gap-2 items-end justify-center sm:px-5 px-6 py-4 w-auto">
                <Text
                  className="text-blue_gray-800 text-right text-xl w-auto"
                  size="txtPoppinsMedium20Bluegray800"
                >
                  Today 6:10 PM
                </Text>
                <Text
                  className="text-green-A700 text-right text-xl w-auto"
                  size="txtPoppinsMedium20GreenA700"
                >
                  Completed
                </Text>
              </div>
              <div className="border-b border-blue_gray-100 border-solid flex flex-col gap-2 items-end justify-center sm:px-5 px-6 py-4 w-auto">
                <Text
                  className="text-blue_gray-800 text-right text-xl w-auto"
                  size="txtPoppinsMedium20Bluegray800"
                >
                  Today 5:05 PM
                </Text>
                <Text
                  className="text-green-A700 text-right text-xl w-auto"
                  size="txtPoppinsMedium20GreenA700"
                >
                  Completed
                </Text>
              </div>
              <div className="border-b border-blue_gray-100 border-solid flex flex-col gap-2 items-end justify-center mb-4 sm:px-5 px-6 py-4 w-auto">
                <Text
                  className="text-blue_gray-800 text-right text-xl w-auto"
                  size="txtPoppinsMedium20Bluegray800"
                >
                  Today 4:04 PM
                </Text>
                <Text
                  className="text-green-A700 text-right text-xl w-auto"
                  size="txtPoppinsMedium20GreenA700"
                >
                  Completed
                </Text>
              </div>
            </div>
            <div className="border-b border-blue_gray-100 border-solid flex flex-col gap-2 items-end justify-center mt-[-40px] mx-auto sm:px-5 px-6 py-4 w-auto z-[1]">
              <Text
                className="text-blue_gray-800 text-right text-xl w-auto"
                size="txtPoppinsMedium20Bluegray800"
              >
                Today 4:04 PM
              </Text>
              <Text
                className="text-green-A700 text-right text-xl w-auto"
                size="txtPoppinsMedium20GreenA700"
              >
                Completed
              </Text>
            </div>
          </div>
          <div className="border-b border-blue_gray-100 border-solid flex flex-col gap-2 items-end justify-center sm:px-5 px-6 py-4 w-auto">
            <Text
              className="text-blue_gray-800 text-right text-xl w-auto"
              size="txtPoppinsMedium20Bluegray800"
            >
              Today 4:04 PM
            </Text>
            <Text
              className="text-green-A700 text-right text-xl w-auto"
              size="txtPoppinsMedium20GreenA700"
            >
              Completed
            </Text>
          </div>
        </div>
        <div className="bg-gray-50_01 flex flex-1 flex-col gap-10 h-[1021px] md:h-auto items-start justify-start mb-[3px] p-6 md:px-5 w-full">
          <Text
            className="border-b border-blue_gray-100 border-solid sm:pr-5 pr-[35px] py-3 text-3xl sm:text-[26px] md:text-[28px] text-black-900 w-auto"
            size="txtPoppinsMedium30Black900"
          >
            Order Detail
          </Text>
          <div className="flex flex-col items-start justify-start w-auto md:w-full">
            <div className="border-b border-blue_gray-100 border-solid flex flex-row sm:gap-10 items-start justify-between max-w-[871px] pb-4 pt-2 w-full">
              <Text
                className="text-blue_gray-800 text-xl w-auto"
                size="txtPoppinsMedium20Bluegray800"
              >
                Order from
              </Text>
              <Text
                className="text-blue_gray-500 text-xl w-auto"
                size="txtPoppinsMedium20Bluegray500"
              >
                Mrs. Tyaa
              </Text>
            </div>
            <div className="border-b border-blue_gray-100 border-solid flex flex-row sm:gap-10 items-start justify-between max-w-[871px] pb-4 pt-2 w-full">
              <Text
                className="text-blue_gray-800 text-xl w-auto"
                size="txtPoppinsMedium20Bluegray800"
              >
                Order ID
              </Text>
              <Text
                className="text-blue_gray-500 text-xl w-auto"
                size="txtPoppinsMedium20Bluegray500"
              >
                #Order001
              </Text>
            </div>
            <div className="border-b border-blue_gray-100 border-solid flex sm:flex-col flex-row sm:gap-10 items-start justify-between max-w-[871px] pb-4 pt-2 w-full">
              <Text
                className="text-blue_gray-800 text-xl w-auto"
                size="txtPoppinsMedium20Bluegray800"
              >
                Time of Order
              </Text>
              <Text
                className="text-blue_gray-500 text-xl w-auto"
                size="txtPoppinsRegular20"
              >
                Mon, October 16 2022 10:00 PM
              </Text>
            </div>
            <div className="border-b border-blue_gray-100 border-solid flex flex-row sm:gap-10 items-start justify-between max-w-[871px] pb-4 pt-2 w-full">
              <Text
                className="text-blue_gray-800 text-xl w-auto"
                size="txtPoppinsMedium20Bluegray800"
              >
                Payment Method
              </Text>
              <Text
                className="text-blue_gray-500 text-xl w-auto"
                size="txtPoppinsRegular20"
              >
                Cash
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start w-auto md:w-full">
            <Text
              className="border-b border-blue_gray-100 border-solid max-w-[871px] md:max-w-full pb-3.5 sm:pr-5 pr-[35px] pt-[7px] text-blue_gray-800 text-xl w-full"
              size="txtPoppinsSemiBold20"
            >
              Items
            </Text>
            <div className="border-b border-blue_gray-100 border-solid flex sm:flex-col flex-row sm:gap-10 items-start justify-between max-w-[871px] py-4 w-full">
              <div className="flex sm:flex-1 flex-col gap-4 items-start justify-start w-auto sm:w-full">
                <Text
                  className="text-blue_gray-800 text-xl w-auto"
                  size="txtPoppinsMedium20Bluegray800"
                >
                  Super Supreme x 2
                </Text>
                <div className="flex sm:flex-col flex-row gap-2 items-start justify-start w-full">
                  <Button
                    className="cursor-pointer text-center text-sm w-[90px]"
                    size="xs"
                  >
                    Beef
                  </Button>
                  <Button
                    className="cursor-pointer text-center text-sm w-[90px]"
                    size="xs"
                  >
                    8 Slices
                  </Button>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[157px]"
                    leftIcon={
                      <Img
                        className="h-4 mt-px mb-[3px] mr-2"
                        src="images/img_plus_red_900_01.svg"
                        alt="plus"
                      />
                    }
                    size="xs"
                  >
                    <div className="text-center text-sm"> Keju Mozarella</div>
                  </Button>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[109px]"
                    leftIcon={
                      <Img
                        className="h-4 mt-px mb-1 mr-1"
                        src="images/img_minus.svg"
                        alt="minus"
                      />
                    }
                    size="xs"
                  >
                    <div className="text-center text-sm">Peppers</div>
                  </Button>
                </div>
              </div>
              <Text
                className="text-blue_gray-500 text-lg w-auto"
                size="txtPoppinsRegular18Bluegray500"
              >
                Rp. 179.998{" "}
              </Text>
            </div>
            <div className="border-b border-blue_gray-100 border-solid flex flex-row sm:gap-10 items-start justify-between max-w-[871px] py-4 w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-auto">
                <Text
                  className="text-blue_gray-800 text-xl w-auto"
                  size="txtPoppinsMedium20Bluegray800"
                >
                  Meat Monsta x 1
                </Text>
                <div className="flex flex-row gap-2 items-start justify-start w-full">
                  <Button
                    className="cursor-pointer text-center text-sm w-[90px]"
                    size="xs"
                  >
                    8 Slices
                  </Button>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[130px]"
                    leftIcon={
                      <Img
                        className="h-4 mr-1 my-0.5"
                        src="images/img_minus.svg"
                        alt="minus"
                      />
                    }
                    size="xs"
                  >
                    <div className="text-center text-sm">mushroom</div>
                  </Button>
                </div>
              </div>
              <Text
                className="text-blue_gray-500 text-lg w-auto"
                size="txtPoppinsRegular18Bluegray500"
              >
                Rp. 89.999{" "}
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start w-auto md:w-full">
            <div className="border-b border-blue_gray-100 border-solid flex flex-row sm:gap-10 items-start justify-between max-w-[871px] pb-4 pt-2 w-full">
              <Text
                className="text-blue_gray-800 text-xl w-auto"
                size="txtPoppinsMedium20Bluegray800_1"
              >
                Subtotal
              </Text>
              <Text
                className="text-blue_gray-500 text-xl w-auto"
                size="txtPoppinsRegular20"
              >
                Rp. 269.997{" "}
              </Text>
            </div>
            <div className="border-b border-blue_gray-500 border-solid flex flex-row sm:gap-10 items-start justify-between max-w-[871px] pb-4 pt-2 w-full">
              <Text
                className="text-blue_gray-800 text-xl w-auto"
                size="txtPoppinsMedium20Bluegray800_1"
              >
                Tax 10%
              </Text>
              <Text
                className="text-blue_gray-500 text-xl w-auto"
                size="txtPoppinsRegular20"
              >
                Rp. 26.999
              </Text>
            </div>
            <div className="flex flex-row sm:gap-10 items-start justify-between max-w-[871px] pb-4 pt-2 w-full">
              <Text
                className="text-blue_gray-800 text-xl w-auto"
                size="txtPoppinsMedium20Bluegray800_1"
              >
                Total
              </Text>
              <Text
                className="text-blue_gray-800 text-xl w-auto"
                size="txtPoppinsSemiBold20Bluegray800"
              >
                Rp. 296.996
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReportPagePage;
