import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import Navbar from "../components/Navbar";

const Home = () => {
  const [location, setLocation] = useState(null);

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
    <View
      style={{ bottom: 0, position: "absolute", height: "100%", width: "100%" }}
    >
      <View style={{}}>
        {location ? (
          <MapView
            style={{
              width: "100%",
              height: "90%",
              alignSelf: "center",
              top: "10%",
            }}
            initialRegion={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
              latitudeDelta: 0.01,
              longitudeDelta: 0.001,
            }}
            toolbarEnabled={false}
          >
            <Marker
              coordinate={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
              }}
              title="You are Here!"
            />
          </MapView>
        ) : (
          <View>
            <Text>Loading location...</Text>
          </View>
        )}
      </View>

      <Navbar />
    </View>
  );
};

export default Home;
