import React, {useEffect, useState, useContext} from "react";
import {View, Text, Button, FlatList, StyleSheet,TouchableOpacity} from "react-native";
import {CartContext} from "../CartContext";
import { Image } from 'react-native';
export function Cart({navigation}){
    const {items, getItemsCount, getTotalPrice,removeItemFromCart, increaseQuantity,
		decreaseQuantity, } = useContext(CartContext);

    function Totals(){
        let [total, setTotal] = useState(0);
        useEffect(() => {
            setTotal(getTotalPrice())
        })
        return(
            <View style={styles.cartLineTotal}>
                <Text style={[styles.lineLeft, styles.lineTotal]}>Total</Text>
                <Text style={styles.mainTotal}>$ {total}</Text>
            </View>
        )
    }
	function handleRemoveItem(id) {
		removeItemFromCart(id);
	  }

    function renderItem({item}){
        return(
            <>
                <View style={styles.cartLine}>
				<Image source={{uri: item.product.image}} style={{width:'50%', height:'100%'}}/>
				
                    <Text style={styles.lineLeft}>{item.product.title} x {item.qty} 
					<Text style={styles.productTotal}>${item.totalPrice}</Text>
					</Text>
                </View>
				<View style={{
					flexDirection:'row',
					justifyContent:'space-between'
					
				}}>
				<TouchableOpacity style={{backgroundColor:'#e21f6d',height:40,width:40,borderRadius:10}} onPress={() => decreaseQuantity(item.id)}>
					<Text style={[styles.quantityButton,{alignSelf:'center'}, { fontSize: 28 }]}>-</Text>
				</TouchableOpacity>
				<TouchableOpacity style={{backgroundColor:'#e21f6d',height:40,width:40,borderRadius:10}} onPress={() => increaseQuantity(item.id)}>
					<Text style={[styles.quantityButton,{alignSelf:'center'}, { fontSize: 28 }]}>+</Text>
				</TouchableOpacity>
				</View>
				<TouchableOpacity onPress={() => handleRemoveItem(item.id)}>
            <Text style={styles.removeButton}>Remove</Text>
          </TouchableOpacity>
            </>
        )
    }

    return(
        <FlatList
            style={styles.itemsList}
            contentContainerStyle={styles.itemsListContainer}
            data={items}
            renderItem={renderItem}
            keyExtractor={(item) => item.product.id.toString()}
            ListFooterComponent={Totals}
        />
    )

}

const styles = StyleSheet.create({
	cartLine: {
		flexDirection: 'row',
		width: '80%',
		paddingVertical: 10
	},
	image: {
		width: '25%',
		aspectRatio: 1,
		marginRight: 5
	},
	cartLineTotal: {
		flexDirection: 'row',
		borderTopColor: '#dddddd',
		borderTopWidth: 1
	},
	productTotal: {
		fontWeight: 'bold'
	},
	lineTotal: {
		fontWeight: 'bold'
	},
	lineLeft: {
		fontSize: 20,
		lineHeight: 40,
		color: '#333333'
	},
	lineRight: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#333333',
		textAlign: 'left',
	},
	mainTotal: {
		flex: 1,
		fontSize: 20,
		fontWeight: 'bold',
		lineHeight: 40,
		color: '#333333',
		textAlign: 'right'
	},
	itemsList: {
		backgroundColor: '#eeeeee'
	},
	itemsListContainer: {
		backgroundColor: '#eeeeee',
		paddingVertical: 8,
		marginHorizontal: 8
	}
})