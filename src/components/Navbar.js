import React from "react";
import { View, Text, TouchableOpacity, KeyboardAvoidingView,} from "react-native";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Navbar = () => {
  const navigation = useNavigation();

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
        <BottomTab
          onPress={() => navigation.navigate("Home")}
          icon={<Entypo name="home" size={24} color="white" />}
          text="Home"
        />
        <BottomTab
          onPress={() => navigation.navigate("Account")}
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
