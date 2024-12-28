import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { Entypo, FontAwesome6, Ionicons } from "@expo/vector-icons";

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
          height: "75%",
          paddingVertical: "2%",
          backgroundColor: "#72a0c1",
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        <BottomTab
          onPress={() => navigateToScreen("Home")}
          icon={<Entypo name="home" size={24} color="white" />}
          text="Home"
        />
        <BottomTab
          onPress={() => navigateToScreen("Notification")}
          icon={<Ionicons name="notifications" size={22} color="white" />}
          text="Notification"
        />
        <BottomTab
          onPress={() => navigateToScreen("Profile")}
          icon={<Ionicons name="person" size={22} color="white" />}
          text="Profile"
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
