import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const [username, setUsername] = useState("huy");
  const [password, setPassword] = useState("123");
  const navigation = useNavigation();
 
  const handleLogin = () => {
    console.log("Username:", username);
    console.log("Password:", password);

    if (username === "huy" && password === "123") {
      console.log("Login successful, navigating to 'Product'");
      navigation.navigate('Product');
    } else {
      console.log("Login failed");
      alert("Tên người dùng hoặc mật khẩu không đúng");
    }
  };

  const handleRegister = () => {
    // Add logic for registration here if needed
    navigation.navigate('Register');
  };

  return (
    <ImageBackground
    source={require("D:/huy/assets/product_images/huy1.jpg")}
    style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Đăng nhập</Text>

        <TextInput
          style={styles.input}
          placeholder="Tên người dùng"
          onChangeText={(text) => setUsername(text)}
          value={username}
        />

        <TextInput
          style={styles.input}
          placeholder="Mật khẩu"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button, { backgroundColor: "green" }]} onPress={handleLogin}>
            <Text style={styles.buttonText}>Đăng nhập</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, { backgroundColor: "orange" }]} onPress={handleRegister}>
            <Text style={styles.buttonText}>Đăng ký</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover", // or "stretch"
    justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "white", // Text color on top of the image
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent white background
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
  button: {
    padding: 10,
    borderRadius: 5,
    flex: 1,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default LoginScreen;
