import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useCustomContext } from "../context/Context";

const Card = ({ item }) => {
  const { increment } = useCustomContext();
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleBookmark = () => {
    if (isBookmarked) {
      increment(-1);
    } else {
      increment(1); 
    }
    setIsBookmarked(!isBookmarked); 
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Flight: {item.callsign}</Text>
      <Text style={styles.detail}>
        Airline: {item.airline?.name || "Unknown"}
      </Text>
      <Text style={styles.detail}>
        Origin: {item.origin?.name || "Unknown"}
      </Text>
      <Text style={styles.detail}>
        Destination: {item.destination?.name || "Unknown"}
      </Text>

      <TouchableOpacity
        style={[
          styles.bookmarkButton,
          { backgroundColor: isBookmarked ? "#4caf50" : "#000" },
        ]}
        onPress={handleBookmark}
      >
        <Text style={styles.bookmarkText}>
          {isBookmarked ? "Marked" : "Bookmark"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  title: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 8,
  },
  detail: {
    fontSize: 14,
    color: "#333",
    marginBottom: 4,
  },
  bookmarkButton: {
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    height: 40,
  },
  bookmarkText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default Card;
