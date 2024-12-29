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

const Signup = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");
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

  const evaluatePasswordStrength = (password) => {
    if (password.length < 6) {
      return "Weak";
    } else if (password.match(/^(?=.*[A-Z])(?=.*\d).*$/)) {
      return "Strong";
    }
    return "Medium";
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
    const strength = evaluatePasswordStrength(text);
    setPasswordStrength(strength);
  };

  const handleContinue = () => {
    let valid = true;
    const newErrors = { phoneNumber: "", password: "", confirmPassword: "" };

    if (!validatePhoneNumber(phoneNumber)) {
      newErrors.phoneNumber = "Invalid phone number.";
      valid = false;
    }
    if (passwordStrength === "Weak") {
      newErrors.password = "Password is too weak.";
      valid = false;
    }
    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      Alert.alert("Success", "Form submitted successfully!");
    }
  };

  const isContinueDisabled =
    !username ||
    !phoneNumber ||
    passwordStrength === "Weak" ||
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
                <Text>{passwordVisible ? "Hide" : "Show"}</Text>
              </TouchableOpacity>
              {passwordStrength ? (
                <Text
                  className={`text-xs ${
                    passwordStrength === "Weak"
                      ? "text-red-500"
                      : passwordStrength === "Medium"
                      ? "text-yellow-500"
                      : "text-green-500"
                  }`}
                >
                  Password Strength: {passwordStrength}
                </Text>
              ) : null}
              <Text className="text-xs text-gray-500 color-red">
                Password must be at least 6 characters long, with an uppercase
                letter and a number.
              </Text>
            </View>

            <View className="relative w-[250]">
              <TextInput
                placeholder="Confirm Password"
                secureTextEntry={!confirmPasswordVisible}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                className="border-b-2 border-gray py-2"
              />
              <TouchableOpacity
                onPress={() =>
                  setConfirmPasswordVisible(!confirmPasswordVisible)
                }
                style={{ position: "absolute", right: 10, top: 12 }}
              >
                <Text>{confirmPasswordVisible ? "Hide" : "Show"}</Text>
              </TouchableOpacity>
            </View>
            {errors.confirmPassword ? (
              <Text className="text-red-500 text-xs">
                {errors.confirmPassword}
              </Text>
            ) : null}
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
              <Text className="text-blue-500">Login</Text>
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Signup;
