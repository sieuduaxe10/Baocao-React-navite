import React, { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View, TextInput, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from "./Header";

const Product = () => {
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [categories, setCategories] = useState([]);

  const getApi = () => {
    return fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getApi();
  }, []);

  useEffect(() => {
    const uniqueCategories = [...new Set(products.map(item => item.category))];
    setCategories(uniqueCategories);
  }, [products]);

  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase() === searchTerm.toLowerCase()
  );

  return (
    <View>
      <Header style={styles.header} />
      <ScrollView>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search products..."
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
          />
        </View>
        <ScrollView horizontal>
          {categories.map(category => (
            <TouchableOpacity
              key={category}
              onPress={() => setSearchTerm(category)}
              style={{
                paddingHorizontal: 10,
                paddingVertical: 5,
                marginRight: 10,
                marginLeft: 10,
                borderRadius: 15,
                borderWidth: 1,
                borderColor: searchTerm === category ? 'blue' : 'grey',
              }}
            >
              <Text style={{ color: 'black' }}>{category}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <View style={styles.container}>
          <FlatList
            scrollEnabled={false}
            data={filteredProducts}
            numColumns={2}
            columnWrapperStyle={styles.row}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <TouchableOpacity onPress={() => navigation.navigate("ProductDetails", { item })}>
                  <Image source={{ uri: item.image }} style={{ width: "100%", height: 150 }} />
                  <View style={styles.dess}>
                    <Text style={{ color: "#fff", textAlign: "center", padding: 7 }}>{item.title}</Text>
                    <Text style={{ color: "#fff", textAlign: "center", padding: 7 }}>{item.price}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  item: {
    width: "45%",
    marginBottom: 10,
  },
  dess: {
    backgroundColor: "black",
  },
  row: {
    flex: 1,
    justifyContent: "space-between",
  },
  searchContainer: {
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  searchInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
  },
});

export default Product;
