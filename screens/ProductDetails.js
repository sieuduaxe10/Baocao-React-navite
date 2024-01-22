import { View, Text, StatusBar, TouchableOpacity, TextInput,Button  } from 'react-native'
import React, { useState,useContext } from 'react'
import { Image } from 'react-native';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import {CartContext} from "../CartContext";
const ProductDetails = ({route}) =>{
    const navigation = useNavigation();
    const handleBack = () => {
        navigation.goBack();
    };
    const {addItemToCart} = useContext(CartContext)

    function onAddToCart(){
      addItemToCart(item.id)
    }
    const {item} =route.params;
   
    return(
        <View>
            <StatusBar translucent={true} backgroundColor='transparent'/>
            <TouchableOpacity style={styles.backButton} onPress={handleBack}>
                <Ionicons name="arrow-back" size={24} color="#1e88e5" />
            </TouchableOpacity>
                <Image source={{uri: item.image}} style={{width:'100%', height:'80%'}}/>
                
                <View style={styles.dess}>
                    <Text style={{color:'#fff'}}>Tên sản phẩm: {item.title}</Text>
                    <Text style={{color:'#fff'}}>Giá: {item.price}</Text>
                </View>
                <TouchableOpacity style={{backgroundColor:'#e21f6d', padding:15, borderRadius:30, marginTop:30}}>
                    <Button onPress={onAddToCart} title="Add To Cart" />
                    </TouchableOpacity>
              
           </View>
    )
}
export default ProductDetails;
const styles = StyleSheet.create({
    dess:{
        backgroundColor:'gray',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        padding:30, 
        marginTop:80,
        position:'absolute',
        top:'55%',
        width:'100%',
        height:'80%',
    },
    backButton: {
        position: 'absolute',
        top: 20,
        left: 20,
        zIndex: 1,
    },
    modal:{
        backgroundColor:'#fff',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        padding:30,
        position:'absolute',
        top:'45%',
        width:'100%',
        height:'100%',
    },
    btn:{
        backgroundColor:'#e21f6d',
        padding:15,
        position:'absolute',
        bottom:-135,
        width:'100%',
        
        
    }
})