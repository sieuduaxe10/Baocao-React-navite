import React from "react";
import {StyleSheet, View, Text} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Cart } from "./screens/Cart.js";
import { CartIcon } from "./components/CartIcon.js";
import { CartProvider } from "./CartContext.js";
import Product from "./components/Product.js";
import ProductDetails from "./screens/ProductDetails.js";
import Login from "./screens/Login.js";
import Register from"./screens/Register.js"


const Stack = createNativeStackNavigator();

function App(){
  return(
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">  
          <Stack.Screen name="Product" component={Product}  options={({navigation}) => ({title: 'Home', headerRight: () => <CartIcon navigation={navigation} />})} />
          <Stack.Screen name="ProductDetails" component={ProductDetails}  options={({navigation}) => ({title: 'Products', headerRight: () => <CartIcon navigation={navigation} />})}  />
          <Stack.Screen name="Cart" component={Cart} options={({navigation}) => ({title: 'Products', headerRight: () => <CartIcon navigation={navigation} />})} />
          <Stack.Screen name ="Login" component={Login}/>
          <Stack.Screen name="Register" component={Register}/>
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  )
}

const styles = StyleSheet.create({
  Container: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  }
})

export default App;