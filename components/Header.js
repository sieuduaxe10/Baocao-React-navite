import React from "react";
import { View, Image, StyleSheet } from "react-native";
import Swiper from "react-native-swiper/src";

function Header(props) {
  return (
    <Swiper style={styles.wrapper} showsButtons={true}>
      <View style={styles.slide}>
        <Image
          source={require("D:/huy/assets/product_images/huy1.jpg")} // Replace with the actual path to your first image
          style={styles.image}
        />
      </View>
      <View style={styles.slide}>
        <Image
          source={require("D:/huy/assets/product_images/huy2.jpg")} // Replace with the actual path to your second image
          style={styles.image}
        />
      </View>
      {/* Add more slides as needed */}
    </Swiper>
  );
}

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 1000, // Adjust the width as needed
    height: 200, // Adjust the height as needed
    resizeMode: "contain", // Adjust the resizeMode based on your preference
  },
});

export default Header;
