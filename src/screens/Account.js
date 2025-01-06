import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import Navbar from "../components/Navbar";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

const Account = ({ route }) => {
  const navigation = useNavigation();

  const handleLogout = () => {
    navigation.navigate("Login");
  };

  return (
    <View>
      <StatusBar style="light" />
      <View className="flex-row justify-end items-center mt-10 mx-5">
        <TouchableOpacity onPress={handleLogout}>
          <MaterialCommunityIcons name="logout" size={30} color="black" />
        </TouchableOpacity>
      </View>
      <View
        className="h-40 w-90 justify-center items-center bg-[#72a0c1] mt-10 rounded-[10px] mx-3"
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

      <View className="mt-10 mx-4">
        <Text className="text-2xl" style={{ fontWeight: "semibold" }}>
          Suggestions
        </Text>
        <View className="flex-row justify-around">
          <View className="bg-[#e8e7e7] w-40 h-32 rounded-[10px] mt-4 flex justify-end items-center">
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
              Cargo Services
            </Text>
          </View>

          <View className="bg-[#e8e7e7] w-40 h-32 rounded-[10px] mt-4 flex justify-end items-center">
            <Image
              style={{
                height: "73%",
                width: "73%",
                position: "absolute",
                top: 10,
              }}
              source={require("../assets/images/booking.jpg")}
            />
            <Text className="items-bottom pt-5 font-bold pb-2 color-[#72a0c1]">
              Ticket Booking
            </Text>
          </View>
        </View>
      </View>

      <View
        className="flex h-40 w-90 justify-center items-center bg-[#72a0c1] mt-8 rounded-[10px] mx-3"
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

      <View
        style={{
          position: "absolute",
          top: "113%",
          width: "100%",
          height: 100,
        }}
      >
        <Navbar />
      </View>
    </View>
  );
};

export default Account;
