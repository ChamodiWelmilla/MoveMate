import React from "react";
import { View, Text, Image, TextInput } from "react-native";
import { StatusBar } from "expo-status-bar";
import Navbar from "../components/Navbar";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const Profile = () => {
  return (
    <View>
      <StatusBar style="light" />
      <View className="flex-row justify-end items-center mt-10 mx-5">
        <MaterialCommunityIcons name="logout" size={30} color="black" />
      </View>
      <View className="flex-row ml-5 items-center space-y-1">
        <MaterialIcons
          name="account-circle"
          size={40}
          color="black"
          style={{ marginTop: "8%" }}
        />
        <Text className="text-xl text-black mt-10 pt-12 mb-6">
          Chamodi Welmilla
        </Text>
      </View>

      <View
        className="h-40 w-90 justify-center items-center bg-[#72a0c1] mt-4 rounded-[10px] mx-3"
        style={{ flexDirection: "row-reverse", alignItems: "center" }}
      >
        <Image
          style={{
            height: "100%",
            width: "40%",
            position: "absolute",
            right: 40,
          }}
          source={require("../assets/images/search.png")}
        />
        <Text
          className="color-white text-xl"
          style={{ marginRight: "35%", fontWeight: "bold" }}
        >
          Want a better deal..
        </Text>
      </View>

      <View className="mt-7 mx-4">
        <Text className="text-2xl" style={{ fontWeight: "semibold" }}>
          Suggestions
        </Text>
        <View className="flex-row justify-around">
          <View className="bg-[#f4f4f4] w-40 h-32 rounded-[10px] mt-4 flex justify-end items-center">
            <Image
              style={{
                height: "75%",
                width: "80%",
                position: "absolute",
                top: 10,
              }}
              source={require("../assets/images/parcel.png")}
            />
            <Text className="items-bottom pt-5 font-bold pb-2 color-[#72a0c1]">
              Delivery Services
            </Text>
          </View>

          <View className="bg-[#f4f4f4] w-40 h-32 rounded-[10px] mt-4 flex justify-end items-center">
            <Image
              style={{
                height: "80%",
                width: "80%",
                position: "absolute",
                top: 10,
              }}
              source={require("../assets/images/rent.png")}
            />
            <Text className="items-bottom pt-5 font-bold pb-2 color-[#72a0c1]">
              Rental Services
            </Text>
          </View>
        </View>
      </View>

      <View
        className="flex h-40 w-90 justify-center items-center bg-[#72a0c1] mt-7 rounded-[10px] mx-3"
        style={{ flexDirection: "row-reverse", alignItems: "center" }}
      >
        <Image
          style={{
            height: "100%",
            width: "80%",
            position: "absolute",
            right: -65,
            top: 10,
          }}
          source={require("../assets/images/tag.png")}
        />
        <View className="flex justify-center">
          <Text
            className="color-white text-xl"
            style={{ marginRight: "35%", width: "80%", fontWeight: "bold" }}
          >
            Get your Promo
          </Text>
          <Text className="text-xs color-white">Terms apply ➙</Text>
        </View>
      </View>
      <View className="mt-7" style={{ height: 100 }}>
        <Navbar />
      </View>
    </View>
  );
};

export default Profile;
