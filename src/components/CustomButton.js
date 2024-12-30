import React from "react";
import { Text, TouchableOpacity } from "react-native";

const CustomButton = ({ text, onPress, style }) => {
  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor: "#72a0c1",
          paddingHorizontal: 24,
          paddingVertical: 12,
          borderRadius: 100,
          alignItems: "center",
          justifyContent: "center",
        },
        style,
      ]}
      onPress={onPress}
    >
      <Text
        style={{
          color: "#fff",
          fontSize: 16,
          fontWeight: "bold",
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;