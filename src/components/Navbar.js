import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { Entypo, Ionicons } from "@expo/vector-icons";

const Navbar = ({ navigation }) => {
  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={0}
      style={{ flex: 1 }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          height: 75,
          backgroundColor: "#72a0c1",
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        {/* Bottom tabs */}
        <BottomTab
          onPress={() => navigateToScreen("Home")}
          icon={<Entypo name="home" size={24} color="white" />}
          text="Home"
        />

        <TouchableOpacity
          style={{
            position: "absolute",
            bottom: 30,
            alignSelf: "center",
            width: 80,
            height: 80,
            borderRadius: 100,
            backgroundColor: "#72a0c1",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1,
            borderColor: "white",
            borderWidth: 1,
            marginHorizontal:"20%"
          }}
          onPress={() => navigateToScreen("Start")}
        >
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
            START
          </Text>
        </TouchableOpacity>

        <BottomTab
          onPress={() => navigateToScreen("Profile")}
          icon={<Ionicons name="person" size={22} color="white" />}
          text="Account"
        />
      </View>
    </KeyboardAvoidingView>
  );
};

const BottomTab = ({ onPress, icon, text }) => (
  <TouchableOpacity style={{ alignItems: "center" }} onPress={onPress}>
    {icon}
    <Text style={{ alignItems: "center", color: "white" }}>{text}</Text>
  </TouchableOpacity>
);

export default Navbar;
