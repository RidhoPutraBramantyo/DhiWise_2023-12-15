import React from "react";

import { Button, Img, Input, List, Text } from "components";
import MainPageCard from "components/MainPageCard";
import MainPageMenucategories from "components/MainPageMenucategories";
import MainPageMenucategories1 from "components/MainPageMenucategories1";
import Sidebar1 from "components/Sidebar1";

import { CloseSVG } from "../../assets/images";

const MainPagePage = () => {
  const [searchbarvalue, setSearchbarvalue] = React.useState("");
  const mainPageCardPropList = [
    {},
    {
      splitza: "Frankfuter BBQ",
      imagefifteen: "images/img_image12.png",
      twotoppingtext:
        "Frankfurter Sapi, Daging Sapi Cincang, dan Keju Mozzarella",
    },
    {
      splitza: "Cheeseburger",
      imagefifteen: "images/img_image17.png",
      twotoppingtext:
        "Daging Sapi Cincang Berbumbu, Keju Cheddar, Onion, Tomat, Beef Bits, Saus Mustard, dan Keju Mozarella",
    },
    {
      splitza: "Meat Monsta",
      imagefifteen: "images/img_image14.png",
      twotoppingtext:
        "Frankfurter Sapi, Daging Sapi Asap, Daging Sapi Cincang, Jamur, dan Keju Mozzarella",
    },
    {
      splitza: "Super Supreme",
      imagefifteen: "images/img_image17.png",
      twotoppingtext:
        "Daging Sapi Cincang, Daging Sapi Asap, Burger Sapi, Daging ayam Asap, Keju Mozarella, Jamur, Nanas, Paprika Merah, dan Paprika Hijau",
    },
    {
      splitza: "Pepperoni",
      imagefifteen: "images/img_image18.png",
      twotoppingtext: "Pepperoni Sapi dan Keju Mozzarella",
    },
    {
      splitza: "American Fav",
      imagefifteen: "images/img_image17.png",
      twotoppingtext:
        "Pepperoni Sapi, Daging Sapi Cincang, Onion, Jamur, dan Keju Mozzarella",
    },
    {
      splitza: "Cheese Lovers",
      imagefifteen: "images/img_image21.png",
      twotoppingtext: "Keju Mozzarella (String & Shredded) dan Keju Parmesan",
    },
  ];

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <Sidebar1 className="!sticky !w-28 bg-white-A700 border-blue_gray-100 border-r border-solid flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
          <div className="flex flex-1 flex-col gap-[38px] items-center justify-start md:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-12 items-start justify-between max-w-[871px] w-full">
              <div className="flex flex-col gap-2 items-start justify-start w-auto">
                <div className="flex flex-row gap-4 items-center justify-start w-auto">
                  <Text
                    className="text-3xl sm:text-[26px] md:text-[28px] text-center text-gray-900 w-[228px]"
                    size="txtPoppinsSemiBold30"
                  >
                    Welcome Back
                  </Text>
                  <Img
                    className="h-8 w-[33px]"
                    src="images/img_thumbsup_blue_400.svg"
                    alt="thumbsup_One"
                  />
                </div>
                <Text
                  className="text-base text-blue_gray-500 text-center w-auto"
                  size="txtPoppinsRegular16Bluegray500"
                >
                  You can manage customer orders easily
                </Text>
              </div>
              <div className="flex sm:flex-1 sm:flex-col flex-row gap-[21px] items-start justify-between w-[450px] sm:w-full">
                <Input
                  name="searchbar"
                  placeholder="Search Menu"
                  value={searchbarvalue}
                  onChange={(e) => setSearchbarvalue(e)}
                  className="p-0 placeholder:text-blue_gray-300 text-base text-center w-full"
                  wrapClassName="border border-blue_gray-300 border-solid flex sm:w-full"
                  prefix={
                    <Img
                      className="mt-auto mb-px cursor-pointer h-6 mr-4"
                      src="images/img_search.svg"
                      alt="search"
                    />
                  }
                  suffix={
                    <CloseSVG
                      fillColor="#99a3b2"
                      className="cursor-pointer h-6 my-auto"
                      onClick={() => setSearchbarvalue("")}
                      style={{
                        visibility:
                          searchbarvalue?.length <= 0 ? "hidden" : "visible",
                      }}
                      height={24}
                      width={24}
                      viewBox="0 0 24 24"
                    />
                  }
                ></Input>
                <div className="flex flex-row gap-3 items-center justify-end w-auto">
                  <Img
                    className="h-12 md:h-auto object-cover w-12"
                    src="images/img_avatars3davatar2.png"
                    alt="avatars3davatar"
                  />
                  <div className="flex flex-col gap-1 items-start justify-start w-auto">
                    <Text
                      className="text-base text-gray-900_01 text-right w-auto"
                      size="txtPoppinsSemiBold16"
                    >
                      Olivia Jane
                    </Text>
                    <Text
                      className="text-center text-gray-700 text-sm w-auto"
                      size="txtPoppinsMedium14"
                    >
                      Cashier
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 items-start justify-start max-w-[919px] sm:px-5 px-6 w-full">
              <div className="flex flex-col gap-1 items-start justify-start w-full">
                <Text
                  className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl w-auto"
                  size="txtPoppinsMedium24"
                >
                  Order List
                </Text>
                <div className="flex md:flex-col flex-row gap-3 items-start justify-start py-2 w-full">
                  <div className="bg-gray-50_01 border border-indigo-50 border-solid flex flex-row gap-4 items-center justify-start p-4 rounded-lg w-60">
                    <Button
                      className="!text-red-900 cursor-pointer font-medium min-w-[60px] rounded-lg text-2xl md:text-[22px] text-center sm:text-xl"
                      shape="round"
                    >
                      01
                    </Button>
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Text
                        className="text-center text-gray-900 text-xl w-auto"
                        size="txtPoppinsMedium20"
                      >
                        Mr. Bram
                      </Text>
                      <Text
                        className="text-blue_gray-500 text-center text-sm w-auto"
                        size="txtPoppinsMedium14Bluegray500"
                      >
                        2 Items
                      </Text>
                    </div>
                  </div>
                  <div className="bg-gray-50_01 border border-indigo-50 border-solid flex flex-row gap-4 items-center justify-start p-4 rounded-lg w-60">
                    <Button
                      className="!text-red-900 cursor-pointer font-medium min-w-[60px] rounded-lg text-2xl md:text-[22px] text-center sm:text-xl"
                      shape="round"
                    >
                      02
                    </Button>
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Text
                        className="text-center text-gray-900 text-xl w-auto"
                        size="txtPoppinsMedium20"
                      >
                        Mr. Agung
                      </Text>
                      <Text
                        className="text-blue_gray-500 text-center text-sm w-auto"
                        size="txtPoppinsMedium14Bluegray500"
                      >
                        3 Items
                      </Text>
                    </div>
                  </div>
                  <div className="bg-gray-50_01 border border-indigo-50 border-solid flex flex-row gap-4 items-start justify-start p-4 rounded-lg w-60">
                    <Button
                      className="!text-red-900 cursor-pointer font-medium min-w-[60px] rounded-lg text-2xl md:text-[22px] text-center sm:text-xl"
                      shape="round"
                    >
                      03
                    </Button>
                    <div className="flex flex-col gap-2 items-start justify-start w-auto">
                      <Text
                        className="text-center text-gray-900 text-xl w-auto"
                        size="txtPoppinsMedium20"
                      >
                        Ms. Tya
                      </Text>
                      <Text
                        className="text-blue_gray-500 text-center text-sm w-auto"
                        size="txtPoppinsMedium14Bluegray500"
                      >
                        1 Items
                      </Text>
                    </div>
                  </div>
                  <div className="bg-gray-50_01 border border-indigo-50 border-solid flex flex-row gap-4 items-start justify-start p-4 rounded-lg w-[139px]">
                    <Button
                      className="cursor-pointer font-medium min-w-[60px] rounded-lg text-2xl md:text-[22px] text-center sm:text-xl"
                      shape="round"
                    >
                      04
                    </Button>
                    <div className="flex flex-col gap-2 items-start justify-start w-auto">
                      <Text
                        className="text-center text-gray-900 text-xl w-auto"
                        size="txtPoppinsMedium20"
                      >
                        Ms. Sari
                      </Text>
                      <Text
                        className="text-blue_gray-500 text-center text-sm w-auto"
                        size="txtPoppinsMedium14Bluegray500"
                      >
                        1 Items
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1 items-start justify-start w-full">
                <Text
                  className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl w-auto"
                  size="txtPoppinsMedium24"
                >
                  Categories
                </Text>
                <List
                  className="sm:flex-col flex-row gap-2 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-start py-2 w-full"
                  orientation="horizontal"
                >
                  <MainPageMenucategories className="bg-deep_orange-50 flex flex-row gap-1 items-center justify-start pl-2 pr-4 py-1 rounded-[12px] w-auto" />
                  <MainPageMenucategories1 className="bg-red-900 flex flex-row gap-1 items-center justify-start pl-2 pr-4 py-1 rounded-[12px] w-auto" />
                  <MainPageMenucategories
                    className="bg-deep_orange-50 flex flex-row gap-1 items-center justify-start pl-2 pr-4 py-1 rounded-[12px] w-auto"
                    bestseller="images/img_ricepasta.png"
                    submenu="Rice & Pasta"
                  />
                  <MainPageMenucategories
                    className="bg-deep_orange-50 flex flex-row gap-1 items-center justify-start pl-2 pr-4 py-1 rounded-[12px] w-auto"
                    bestseller="images/img_appatizer.png"
                    submenu="Appetizer"
                  />
                  <MainPageMenucategories
                    className="bg-deep_orange-50 flex flex-row gap-1 items-center justify-start pl-2 pr-4 py-1 rounded-[12px] w-auto"
                    bestseller="images/img_drinks.png"
                    submenu="Drinks"
                  />
                </List>
              </div>
              <div className="gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 h-[601px] items-start min-h-[auto] py-2 w-auto md:w-full">
                {mainPageCardPropList.map((props, index) => (
                  <React.Fragment key={`MainPageCard${index}`}>
                    <MainPageCard
                      className="bg-white-A700 border border-indigo-50 border-solid flex flex-col gap-1 items-start justify-start pb-4 rounded-lg w-full"
                      {...props}
                    />
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
          <div className="border-blue_gray-100 border-l border-solid flex flex-1 flex-col md:gap-10 gap-[164px] h-[1024px] md:h-auto items-start justify-between pb-6 pl-4 pr-6 pt-8 md:px-5 w-full">
            <div className="flex flex-col gap-4 items-start justify-start w-full">
              <div className="flex flex-col gap-2 items-start justify-center w-full">
                <div className="flex flex-row items-center justify-between w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl w-auto"
                    size="txtPoppinsMedium24"
                  >
                    Order Detail
                  </Text>
                  <Img
                    className="h-6 w-6"
                    src="images/img_morevertical.svg"
                    alt="morevertical"
                  />
                </div>
                <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
                  <Text
                    className="text-base text-blue_gray-500 w-auto"
                    size="txtPoppinsRegular16Bluegray500"
                  >
                    Mon, October 16 2022 10:00 PM
                  </Text>
                  <Text
                    className="text-base text-blue_gray-500 w-auto"
                    size="txtPoppinsRegular16Bluegray500"
                  >
                    #Order001
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-2 items-start justify-start w-full">
                <Input
                  name="button"
                  placeholder="Add Customer Name"
                  className="font-medium p-0 placeholder:text-blue_gray-800 text-center text-lg w-full"
                  wrapClassName="border border-blue_gray-100 border-solid flex rounded-md w-full"
                  type="text"
                  prefix={
                    <Img
                      className="mt-0.5 mb-px h-6 mr-2"
                      src="images/img_plus.svg"
                      alt="plus"
                    />
                  }
                  color="white_A700"
                  size="xs"
                ></Input>
                <Button
                  className="border border-blue_gray-100 border-solid cursor-pointer font-medium text-center text-lg w-full"
                  shape="round"
                  color="white_A700"
                >
                  Dine In
                </Button>
              </div>
              <div className="flex flex-col gap-6 items-start justify-start w-full">
                <div className="flex flex-col gap-2 items-start justify-start w-full">
                  <div className="flex flex-row items-start justify-between w-full">
                    <Text
                      className="text-blue_gray-800 text-center text-lg w-auto"
                      size="txtPoppinsRegular18"
                    >
                      Super Supreme x2
                    </Text>
                    <Text
                      className="text-blue_gray-800 text-center text-lg w-auto"
                      size="txtPoppinsRegular18"
                    >
                      Rp. 179.998{" "}
                    </Text>
                  </div>
                  <div className="flex flex-col gap-2 items-start justify-start w-auto">
                    <div className="flex flex-row gap-2 items-start justify-start w-auto">
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
                    </div>
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[153px]"
                      leftIcon={
                        <Img
                          className="h-4 mt-px mb-1 mr-1"
                          src="images/img_plus_red_900_01.svg"
                          alt="plus"
                        />
                      }
                      size="xs"
                    >
                      <div className="text-center text-sm">Keju Mozarella</div>
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
                <div className="flex flex-col gap-2 items-start justify-start w-full">
                  <div className="flex flex-row items-start justify-between w-full">
                    <Text
                      className="text-blue_gray-800 text-center text-lg w-auto"
                      size="txtPoppinsRegular18"
                    >
                      Meat Monsta x1
                    </Text>
                    <Text
                      className="text-blue_gray-800 text-center text-lg w-auto"
                      size="txtPoppinsRegular18"
                    >
                      Rp. 89.999{" "}
                    </Text>
                  </div>
                  <div className="flex flex-col gap-2 items-start justify-start w-auto">
                    <Button
                      className="cursor-pointer text-center text-sm w-[90px]"
                      size="xs"
                    >
                      8 Slices
                    </Button>
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[127px]"
                      leftIcon={
                        <Img
                          className="h-4 mr-1 my-0.5"
                          src="images/img_minus.svg"
                          alt="minus"
                        />
                      }
                      size="xs"
                    >
                      <div className="text-center text-sm">Mushroom</div>
                    </Button>
                  </div>
                </div>
              </div>
              <Button
                className="cursor-pointer text-base text-center w-full"
                color="blue_gray_100"
                size="sm"
                variant="outline"
              >
                Clear Sale
              </Button>
            </div>
            <div className="flex flex-col gap-6 items-center justify-start w-full">
              <div className="flex flex-col gap-2 items-center justify-start w-full">
                <div className="border-b border-black-900 border-dashed flex flex-col gap-1 items-start justify-start py-2 w-auto">
                  <div className="flex flex-row items-start justify-between w-[295px]">
                    <Text
                      className="text-blue_gray-500 text-center text-lg w-auto"
                      size="txtPoppinsMedium18"
                    >
                      Subtotal
                    </Text>
                    <Text
                      className="text-blue_gray-800 text-center text-lg w-auto"
                      size="txtPoppinsRegular18"
                    >
                      Rp. 269.997
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-between w-[295px]">
                    <Text
                      className="text-blue_gray-500 text-center text-lg w-auto"
                      size="txtPoppinsMedium18"
                    >
                      Tax 10%
                    </Text>
                    <Text
                      className="text-blue_gray-800 text-center text-lg w-auto"
                      size="txtPoppinsRegular18"
                    >
                      Rp. 26.999
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-between w-full">
                  <Text
                    className="text-blue_gray-800 text-center text-lg w-auto"
                    size="txtPoppinsSemiBold18"
                  >
                    Total
                  </Text>
                  <Text
                    className="text-blue_gray-800 text-center text-lg w-auto"
                    size="txtPoppinsSemiBold18"
                  >
                    Rp. 296.996
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-2 items-start justify-start w-full">
                <div className="flex flex-row gap-2 items-start justify-start w-full">
                  <Button
                    className="border border-blue_gray-100 border-solid cursor-pointer flex-1 font-medium text-center text-lg w-full"
                    shape="round"
                    color="white_A700"
                  >
                    Save Bill
                  </Button>
                  <Button
                    className="border border-blue_gray-100 border-solid cursor-pointer flex-1 font-medium text-center text-lg w-full"
                    shape="round"
                    color="white_A700"
                  >
                    Print Bill
                  </Button>
                </div>
                <Button
                  className="cursor-pointer font-medium text-center text-lg w-full"
                  shape="round"
                  color="red_900"
                >
                  Charge
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPagePage;
