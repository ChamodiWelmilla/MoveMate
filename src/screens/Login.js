import React, { useState } from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const [passwordVisible, setPasswordVisible] = useState(false);

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleContinue = () => {
    navigation.navigate("Home", { username });
  };

  const isContinueDisabled = !username || !password;

  return (
    <View className="bg-white h-full w-full">
      <StatusBar style="light" />
      <Image
        className="h-45 w-full absolute"
        source={require("../assets/images/background.jpg")}
      />
      <View
        className="flex justify-center items-center mt-20 mx-4 space-y-4"
        style={{ marginTop: "65%" }}
      >
        <Text className="text-3xl text-black font-bold mt-10 pt-10 mb-6">
          Welcome Back
        </Text>
        <View className="justify-center items-center pb-20 space-y-7">
          <TextInput
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
            style={{
              width: 250,
              borderBottomWidth: 2,
              borderColor: "gray",
              paddingVertical: 8,
            }}
          />
          <View style={{ position: "relative", width: 250 }}>
            <TextInput
              placeholder="Password"
              secureTextEntry={!passwordVisible}
              value={password}
              onChangeText={handlePasswordChange}
              style={{
                borderBottomWidth: 2,
                borderColor: "gray",
                paddingVertical: 8,
                width: "100%",
              }}
            />
            <TouchableOpacity
              onPress={() => setPasswordVisible(!passwordVisible)}
              style={{
                position: "absolute",
                right: 10,
                top: 8,
              }}
            >
              <Ionicons
                name={passwordVisible ? "eye-off" : "eye"}
                size={20}
                color="gray"
              />
            </TouchableOpacity>
          </View>
          <View className="flex justify-center items-center">
            <Text className="text-[#72a0c1]">Forgot Password?</Text>
          </View>
        </View>
        <View className="flex justify-center items-center">
          <TouchableOpacity
            onPress={!isContinueDisabled ? handleContinue : null}
            disabled={isContinueDisabled}
            style={{
              backgroundColor: isContinueDisabled ? "#D3D3D3" : "#72a0c1",
              paddingHorizontal: 24,
              paddingVertical: 12,
              borderRadius: 100,
            }}
          >
            <Text className="text-white text-base">Continue →</Text>
          </TouchableOpacity>
          <Text className="text-[#4d5161] pt-2 text-xs">
            Don't you have on MoveMate?{" "}
            <TouchableOpacity
              style={{ marginTop: 10 }}
              onPress={() => navigation.navigate("Signup")}
            >
              <Text style={{ color: "blue", fontSize: 12.2, marginTop: 10 }}>
                Signup
              </Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Login;
