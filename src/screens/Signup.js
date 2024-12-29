import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  Alert,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Signup = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const validatePhoneNumber = (phoneNumber) => {
    const sriLankanPhoneRegex = /^(?:\+94|0)?(?:7[0-9]{8})$/;
    return sriLankanPhoneRegex.test(phoneNumber);
  };

  const isPasswordValid = (password) => {
    return (
      password.length >= 6 && /[A-Z]/.test(password) && /\d/.test(password)
    );
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleConfirmPasswordChange = (text) => {
    setConfirmPassword(text);
    setErrors((prevErrors) => ({
      ...prevErrors,
      confirmPassword: password !== text ? "Passwords do not match." : "",
    }));
  };

  const handleContinue = () => {
    let valid = true;
    const newErrors = { phoneNumber: "", password: "", confirmPassword: "" };

    if (!validatePhoneNumber(phoneNumber)) {
      newErrors.phoneNumber = "Invalid phone number.";
      valid = false;
    }
    if (!isPasswordValid(password)) {
      newErrors.password = "Invalid password.";
      valid = false;
    }
    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      navigation.navigate("Login");
    }
  };

  const isContinueDisabled =
    !username ||
    !phoneNumber ||
    !isPasswordValid(password) ||
    password !== confirmPassword;

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
        <ScrollView>
          <Text className="text-3xl text-black font-bold mb-6">
            Let's Get Started
          </Text>
          <View className="justify-center items-center 4 pb-20 space-y-7">
            <TextInput
              placeholder="Username"
              value={username}
              onChangeText={setUsername}
              className="w-[250] border-b-2 border-gray py-2"
            />
            <TextInput
              placeholder="Phone Number"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              className="w-[250] border-b-2 border-gray py-2"
              keyboardType="numeric"
            />
            {errors.phoneNumber ? (
              <Text className="text-red-500 text-xs">{errors.phoneNumber}</Text>
            ) : null}
            <View className="relative w-[250]">
              <TextInput
                placeholder="Set Password"
                secureTextEntry={!passwordVisible}
                value={password}
                onChangeText={handlePasswordChange}
                className="border-b-2 border-gray py-2"
              />
              <TouchableOpacity
                onPress={() => setPasswordVisible(!passwordVisible)}
                style={{ position: "absolute", right: 10, top: 12 }}
              >
                <Ionicons
                  name={passwordVisible ? "eye-off" : "eye"}
                  size={20}
                  color="gray"
                />
              </TouchableOpacity>
              {!isPasswordValid(password) && (
                <Text className="text-xs text-gray-500 color-red">
                  Password must be at least 6 characters long, with an uppercase
                  letter and a number.
                </Text>
              )}
            </View>

            <View className="relative w-[250]">
              <TextInput
                placeholder="Confirm Password"
                secureTextEntry={!confirmPasswordVisible}
                value={confirmPassword}
                onChangeText={handleConfirmPasswordChange}
                className="border-b-2 border-gray py-2"
              />
              <TouchableOpacity
                onPress={() =>
                  setConfirmPasswordVisible(!confirmPasswordVisible)
                }
                style={{ position: "absolute", right: 10, top: 12 }}
              >
                <Ionicons
                  name={confirmPasswordVisible ? "eye-off" : "eye"}
                  size={20}
                  color="gray"
                />
              </TouchableOpacity>
              {errors.confirmPassword && (
                <Text style={{ color: "red", fontSize: 12 }}>
                  {errors.confirmPassword}
                </Text>
              )}
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
              Already on MoveMate?{"  "}
              <TouchableOpacity
                style={{ marginTop: 10 }}
                onPress={() => navigation.navigate("Login")}
              >
                <Text style={{ color: "blue", fontSize: 12.2, marginTop: 10 }}>
                  Login
                </Text>
              </TouchableOpacity>
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Signup;
