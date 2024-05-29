import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';

interface Product {
    id: number;
    title: string;
    image: string;
    price: number;
    rating: {
        rate: number;
    };
}

const ProductItems: React.FC<{ item: Product }> = ({ item }) => {
    const [addedToCart, setAddedToCart] = useState<boolean>(false);

    const addItemToCart = (item: Product) => {
        // Implement your logic to add item to cart
        // setAddedToCart(true);
        // dispatch(addToCart(item));
        // setTimeout(() => {
        //     setAddedToCart(false);
        // }, 60000);
    };

    return (
        <View>
            <Pressable style={{ marginHorizontal: 5, marginVertical: 5 }}>
                <Image style={{ width: 185, height: 200, resizeMode: "contain", borderWidth: 0.5, borderColor: "#d3d3d3", borderRadius: 12 }} source={{ uri: item.image }} />
                <Text numberOfLines={1} style={{ width: 185, marginTop: 10 }}>{item.title}</Text>
                <View style={{ marginTop: 5, flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 5 }}>
                    <Text style={{ fontSize: 15, fontWeight: "bold" }}>₹{item.price}</Text>
                    <Text style={{ color: "#2A4C54", fontWeight: "bold" }}>{item.rating.rate} ratings</Text>
                </View>

                <Pressable onPress={() => addItemToCart(item)} style={{ backgroundColor: "#2A4C54", padding: 10, borderRadius: 20, justifyContent: "center", alignItems: "center", marginHorizontal: 10, marginTop: 10 }}>
                    {addedToCart ? (
                        <View>
                            <Text style={{ color: "#fff", fontWeight: "600" }}>Added to Cart</Text>
                        </View>
                    ) : (
                        <Text style={{ color: "#fff", fontWeight: "600" }}>Add to Cart</Text>
                    )}
                </Pressable>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({});

export default ProductItems;
