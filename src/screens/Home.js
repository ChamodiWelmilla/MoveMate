import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import Navbar from "../components/Navbar";
import { StatusBar } from "expo-status-bar";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import StartModal from "../components/StartModal";
import { BlurView } from "expo-blur"; 

const Home = () => {
  const [location, setLocation] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const getLocationPermission = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      console.log("Location Permission Status: ", status);
      if (status !== "granted") {
        console.error("Permission to access location was denied");
      } else {
        const userLocation = await Location.getCurrentPositionAsync({});
        console.log("User Location: ", userLocation);
        setLocation(userLocation);
      }
    };
    getLocationPermission();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="light" />
      <MapView
        style={{
          flex: 1,
          width: "100%",
          height: "100%",
        }}
        initialRegion={
          location
            ? {
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.01,
                longitudeDelta: 0.001,
              }
            : null
        }
        toolbarEnabled={false}
      >
        {location && (
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            title="You are Here!"
          />
        )}
      </MapView>
      <View
        style={{
          position: "absolute",
          width: "100%",
          paddingTop: "13%",
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          padding: 10,
          borderRadius: 10,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 4,
          elevation: 5,
          zIndex: 999,
        }}
      >
        <MaterialIcons name="account-circle" size={40} color="white" />
        <Text style={{ marginLeft: 10, fontSize: 18, color: "white" }}>
          Hello Chamodi
        </Text>
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: 100,
        }}
      >
        <StartModal
          visible={isModalVisible}
          onClose={() => setModalVisible(false)}
        />

        <Navbar
          navigation={{
            navigate: (screenName) => {
              if (screenName === "Start") {
                setModalVisible(true);
              }
            },
          }}
        />
      </View>
    </View>
  );
};

export default Home;
