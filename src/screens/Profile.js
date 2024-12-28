import React from "react";
import { View, Text, Image } from "react-native";
import { StatusBar } from "expo-status-bar";

const Profile = () => {
  return (
    <View style={{ backgroundColor: "white", height: "100%", width: "100%" }}>
      <StatusBar style="light" />
      <View
        className="flex h-40 w-90 justify-center items-center bg-[#72a0c1] mt-20 rounded-[10px] mx-3"
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
        <Text className="text-l" style={{ fontWeight: "bold" }}>
          {" "}
          Suggestions
        </Text>
        <View className="fles flex-row justify-between">
          <View className="bg-[#DFE0E1] w-20 h-20 rounded-[10px] mt-4">
            <Image
              style={{
                height: "100%",
                width: "120%",
                position: "absolute",
                right: -5,
              }}
              source={require("../assets/images/parcel.png")}
            />
            <Text>hi</Text>
          </View>
          <View className="bg-[#DFE0E1] w-20 h-20 rounded-[10px] mt-4">
            <Image
              style={{
                height: "100%",
                width: "120%",
                position: "absolute",
                right: -5,
              }}
              source={require("../assets/images/parcel.png")}
            />
            <Text>hi</Text>
          </View>
          <View className="bg-[#DFE0E1] w-20 h-20 rounded-[10px] mt-4">
            <Image
              style={{
                height: "100%",
                width: "120%",
                position: "absolute",
                right: -5,
              }}
              source={require("../assets/images/parcel.png")}
            />
            <Text>hi</Text>
          </View>
          <View className="bg-[#DFE0E1] w-20 h-20 rounded-[10px] mt-4">
            <Image
              style={{
                height: "100%",
                width: "120%",
                position: "absolute",
                right: -5,
              }}
              source={require("../assets/images/parcel.png")}
            />
            <Text>hi</Text>
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
    </View>
  );
};

export default Profile;
