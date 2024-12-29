import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import axios from "axios";

const StartModal = ({ visible, onClose, onConfirm }) => {
  const [startingLocation, setStartingLocation] = useState("");
  const [destination, setDestination] = useState("");
  const [startingSuggestions, setStartingSuggestions] = useState([]);
  const [destinationSuggestions, setDestinationSuggestions] = useState([]);
  const [vehicleType, setVehicleType] = useState("");
  const [schedule, setSchedule] = useState("now");
  const [loading, setLoading] = useState(false);

  const GOOGLE_API_KEY = "YOUR_API_KEY"; 

  const fetchPlaces = async (query, setSuggestions) => {
    if (query.length < 3) return; 
    setLoading(true);

    try {
      const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${query}&key=${GOOGLE_API_KEY}`;
      const response = await axios.get(url);
      const predictions = response.data.predictions;

      setSuggestions(predictions.map((item) => item.description));
    } catch (error) {
      console.error("Error fetching places:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSelectPlace = (place, setter, setSuggestions) => {
    setter(place);
    setSuggestions([]); 
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            padding: 20,
            borderRadius: 10,
            width: "90%",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              marginBottom: 20,
              textAlign: "center",
            }}
          >
            Find a Vehicle
          </Text>
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: "#ccc",
              borderRadius: 5,
              padding: 10,
              marginBottom: 15,
              fontSize: 16,
            }}
            placeholder="Starting Location"
            value={startingLocation}
            onChangeText={(text) => {
              setStartingLocation(text);
              fetchPlaces(text, setStartingSuggestions);
            }}
          />
          {loading && startingSuggestions.length === 0 ? (
            <ActivityIndicator size="small" color="#72a0c1" />
          ) : (
            <FlatList
              data={startingSuggestions}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() =>
                    handleSelectPlace(
                      item,
                      setStartingLocation,
                      setStartingSuggestions
                    )
                  }
                  style={{
                    padding: 10,
                    borderBottomWidth: 1,
                    borderColor: "#ccc",
                  }}
                >
                  <Text>{item}</Text>
                </TouchableOpacity>
              )}
            />
          )}
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: "#ccc",
              borderRadius: 5,
              padding: 10,
              marginBottom: 15,
              fontSize: 16,
            }}
            placeholder="Destination"
            value={destination}
            onChangeText={(text) => {
              setDestination(text);
              fetchPlaces(text, setDestinationSuggestions);
            }}
          />
          {loading && destinationSuggestions.length === 0 ? (
            <ActivityIndicator size="small" color="#72a0c1" />
          ) : (
            <FlatList
              data={destinationSuggestions}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() =>
                    handleSelectPlace(
                      item,
                      setDestination,
                      setDestinationSuggestions
                    )
                  }
                  style={{
                    padding: 10,
                    borderBottomWidth: 1,
                    borderColor: "#ccc",
                  }}
                >
                  <Text>{item}</Text>
                </TouchableOpacity>
              )}
            />
          )}

          <View
            style={{
              borderWidth: 1,
              borderColor: "#ccc",
              borderRadius: 5,
              marginBottom: 15,
            }}
          >
            <Picker
              selectedValue={vehicleType}
              onValueChange={(itemValue) => setVehicleType(itemValue)}
            >
              <Picker.Item label="Select Vehicle Type" value="" />
              <Picker.Item label="Trishow" value="trishow" />
              <Picker.Item label="Car" value="car" />
              <Picker.Item label="Van" value="van" />
            </Picker>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginBottom: 20,
            }}
          >
            <TouchableOpacity
              style={{
                padding: 10,
                borderRadius: 5,
                borderWidth: 1,
                borderColor: schedule === "now" ? "#72a0c1" : "#ccc",
                backgroundColor: schedule === "now" ? "#72a0c1" : "white",
                flex: 1,
                marginHorizontal: 5,
                alignItems: "center",
              }}
              onPress={() => setSchedule("now")}
            >
              <Text
                style={{
                  fontSize: 16,
                  color: schedule === "now" ? "white" : "black",
                }}
              >
                Find Vehicle Now
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                padding: 10,
                borderRadius: 5,
                borderWidth: 1,
                borderColor: schedule === "later" ? "#72a0c1" : "#ccc",
                backgroundColor: schedule === "later" ? "#72a0c1" : "white",
                flex: 1,
                marginHorizontal: 5,
                alignItems: "center",
              }}
              onPress={() => setSchedule("later")}
            >
              <Text
                style={{
                  fontSize: 16,
                  color: schedule === "later" ? "white" : "black",
                }}
              >
                Set a Time
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity
              style={{
                padding: 10,
                borderRadius: 5,
                flex: 1,
                marginHorizontal: 5,
                alignItems: "center",
                backgroundColor: "#ccc",
              }}
              onPress={onClose}
            >
              <Text
                style={{ color: "white", fontSize: 16, fontWeight: "bold" }}
              >
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default StartModal;
