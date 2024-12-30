import React, { useState, useEffect } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { StatusBar } from "expo-status-bar";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { MaterialIcons } from "@expo/vector-icons";
import { useCustomContext } from "../context/Context";

const Home = ({ route }) => {
  const { username } = route.params || {};
  const { bookmarkCount } = useCustomContext();

  const [flights, setFlights] = useState([]);
  const [filteredFlights, setFilteredFlights] = useState([]);
  const [loading, setLoading] = useState(true);

  const [destination, setDestination] = useState("");
  const [airport, setAirport] = useState("");
  const [airline, setAirline] = useState("");

  const callsigns = ["DAL642", "UAL123", "AAL456"];
  const destinations = [
    "Salt Lake City International Airport",
    "Washington Dulles International Airport",
    "Sacramento International Airport",
  ];
  const airports = [
    "Licenciado Benito Juarez International Airport",
    "London Heathrow Airport",
    "Dallas Fort Worth International Airport",
  ];
  const airlines = [
    "Delta Air Lines",
    "United Airlines",
    "American Airlines",
    "Lufthansa",
  ];

  const fetchAllFlights = async () => {
    try {
      const flightPromises = callsigns.map((callsign) =>
        fetch(`https://api.adsbdb.com/v0/callsign/${callsign}`).then((res) =>
          res.json()
        )
      );
      const flightResults = await Promise.all(flightPromises);
      console.log("Fetched Flight Data:", flightResults);
      const allFlights = flightResults
        .map((result) => result?.response?.flightroute)
        .filter(Boolean);

      const fetchedCallsigns = allFlights.map((flight) => flight.callsign);
      const fetchedDestinations = [
        ...new Set(
          allFlights.map((flight) => flight?.destination?.name).filter(Boolean)
        ),
      ];
      const fetchedAirports = [
        ...new Set(
          allFlights.map((flight) => flight?.origin?.name).filter(Boolean)
        ),
      ];
      const fetchedAirlines = [
        ...new Set(
          allFlights.map((flight) => flight?.airline?.name).filter(Boolean)
        ),
      ];
      console.log("Fetched Callsigns:", fetchedCallsigns);
      console.log("Fetched Destinations:", fetchedDestinations);
      console.log("Fetched Airports:", fetchedAirports);
      console.log("Fetched Airlines:", fetchedAirlines);

      setFlights(allFlights);
      setFilteredFlights(allFlights);
    } catch (error) {
      console.error("Error fetching flight data:", error);
    } finally {
      setLoading(false);
    }
  };

  const applyFilters = () => {
    const filtered = flights.filter((flight) => {
      const matchesDestination = destination
        ? flight?.destination?.name?.toLowerCase() === destination.toLowerCase()
        : true;
      const matchesAirport = airport
        ? flight?.origin?.name?.toLowerCase() === airport.toLowerCase()
        : true;
      const matchesAirline = airline
        ? flight?.airline?.name?.toLowerCase() === airline.toLowerCase()
        : true;
      return matchesDestination && matchesAirport && matchesAirline;
    });
    setFilteredFlights(filtered);
  };

  useEffect(() => {
    fetchAllFlights();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [destination, airport, airline]);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="light" />
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
        <View style={{ flex: 1 }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: "white",
              paddingLeft: 10,
            }}
          >
            Welcome, {username ? username : "Guest"} !
          </Text>
          <Text style={{ fontSize: 14, color: "white", paddingLeft: 10 }}>
            Bookmarks: {bookmarkCount}
          </Text>
        </View>
      </View>

      <View
        style={{
          marginTop: "30%",
          padding: 10,
          backgroundColor: "#f0f0f0",
          borderBottomWidth: 1,
          borderBottomColor: "#ddd",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Picker
            selectedValue={airport}
            onValueChange={(itemValue) => setAirport(itemValue)}
            style={{
              flex: 1,
              marginHorizontal: 5,
              backgroundColor: "#fff",
              marginBottom: 10,
              borderRadius: 5,
              borderWidth: 1,
              borderColor: "#ccc",
            }}
          >
            <Picker.Item label="Starting" value="" style={{ fontSize: 12 }} />
            {airports.map((air, index) => (
              <Picker.Item key={index} label={air} value={air} />
            ))}
          </Picker>
          <Picker
            selectedValue={destination}
            onValueChange={(itemValue) => setDestination(itemValue)}
            style={{
              flex: 1,
              marginHorizontal: 5,
              backgroundColor: "#fff",
              marginBottom: 10,
              borderRadius: 5,
              borderWidth: 1,
              borderColor: "#ccc",
            }}
          >
            <Picker.Item
              label="Destination"
              value=""
              style={{ fontSize: 12 }}
            />
            {destinations.map((dest, index) => (
              <Picker.Item key={index} label={dest} value={dest} />
            ))}
          </Picker>
        </View>
        <Picker
          selectedValue={airline}
          onValueChange={(itemValue) => setAirline(itemValue)}
          style={{
            backgroundColor: "#fff",
            marginBottom: 10,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: "#ccc",
          }}
        >
          <Picker.Item label="Airline" value="" style={{ fontSize: 12 }} />
          {airlines.map((air, index) => (
            <Picker.Item key={index} label={air} value={air} />
          ))}
        </Picker>
      </View>

      <View style={{ flex: 1, padding: 10, marginBottom: 100 }}>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={filteredFlights}
            renderItem={({ item }) => <Card item={item} />}
            keyExtractor={(item) => item.callsign}
            contentContainerStyle={{ paddingBottom: 100 }} 
          />
        )}
      </View>

      <View
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: 100,
        }}
      >
        <Navbar />
      </View>
    </View>
  );
};

export default Home;
