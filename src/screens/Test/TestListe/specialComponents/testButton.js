import React, { useState, useEffect } from "react";
import { TouchableOpacity, Text, Image, StyleSheet } from "react-native";

const TestImageButton = ({ images, text, backgroundColor,onPress }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor,
          borderColor: "white",
        },
      ]}
      onPress={()=> onPress()}
    >
      <Image source={images[currentImageIndex]} style={styles.image} />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    borderEndWidth: 1,
    borderBottomWidth: 1.5,
    margin: 10,
    padding: 12,
  },
  image: {
    width: 50,
    height: 50,
  },
  text: {
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 10,
    color: "white",
    flexWrap: "wrap",
  },
});

export default TestImageButton;
