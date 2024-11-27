import React, { useState, useEffect } from "react";
import { Text, View, Image, StatusBar, TextInput, } from "react-native";

const Login = () => {
  return (
    <View className="bg-white h-full w-full">
      <StatusBar style="light" />
      <Image
        className="h-45 w-full absolute"
        source={require("../assets/images/background2.jpg")}
      />
      <View
        className="flex justify-center items-center mt-20 mx-4 space-y-4"
        style={{ marginTop: "65%" }}
      >
        <Text className="text-3xl text-black font-bold mt-10 pt-10 mb-6">
          Welcome Back
        </Text>
        <View className="justify-center items-center 4 pb-20 space-y-7">
          <TextInput
            placeholder="Username"
            className=" w-[250] border-b-2 border-gray py-2 "
          />
          <TextInput
            placeholder="Password"
            className=" w-[250] border-b-2 border-gray py-2"
          />
          <View className="flex justify-center items-center">
            <Text className="text-[#72a0c1]">Forgot Password?</Text>
          </View>
        </View>
        <View className="flex justify-center items-center">
          <Text className="bg-[#72a0c1] text-white px-6 py-3 rounded-[100px] text-base">
            Login →
          </Text>
          <Text className="text-[#4d5161] pt-2 text-xs">
            Don't you have on MoveMate?{"  "}
            <Text className="text-blue-500">Register</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};
export default Login;
