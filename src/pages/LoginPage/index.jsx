import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";

const LoginPagePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 flex flex-col font-poppins h-[1024px] items-center justify-start mx-auto p-[272px] md:px-10 sm:px-5 w-full"
        style={{ backgroundImage: "url('images/img_loginpage.png')" }}
      >
        <div className="bg-gray-50 border border-blue_gray-100 border-solid flex flex-col gap-8 sm:h-auto items-center justify-start p-10 md:px-5 rounded-[16px] w-[480px] sm:w-full">
          <Img
            className="h-[100px] w-60"
            src="images/img_pizzapizzazz.svg"
            alt="pizzapizzazz"
          />
          <div className="flex flex-col gap-8 items-center justify-start w-auto sm:w-full">
            <div className="flex flex-col gap-4 items-start justify-start w-[400px] sm:w-full">
              <div className="flex flex-col gap-2 items-start justify-start w-full">
                <Text
                  className="text-base text-black-900 w-full"
                  size="txtPoppinsRegular16"
                >
                  Username
                </Text>
                <Input
                  name="username_One"
                  placeholder="Username"
                  className="md:h-auto p-0 placeholder:text-blue_gray-300 sm:h-auto text-base text-left w-full"
                  wrapClassName="border border-blue_gray-300 border-solid w-full"
                  type="text"
                ></Input>
              </div>
              <div className="flex flex-col gap-2 items-start justify-start w-full">
                <Text
                  className="text-base text-black-900 w-full"
                  size="txtPoppinsRegular16"
                >
                  Password
                </Text>
                <Input
                  name="password_One"
                  placeholder="Password"
                  className="md:h-auto p-0 placeholder:text-blue_gray-300 sm:h-auto text-base text-left w-full"
                  wrapClassName="border border-blue_gray-300 border-solid w-full"
                  type="password"
                ></Input>
              </div>
            </div>
            <Button
              className="common-pointer cursor-pointer font-medium text-center text-lg w-full"
              onClick={() => navigate("/mainpage")}
              shape="round"
              color="red_900"
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPagePage;
