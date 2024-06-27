import { StyleSheet, Text, View, SafeAreaView, ScrollView, ImageBackground, Dimensions, Pressable } from 'react-native';
import React, { useState } from 'react';
import { useRoute, RouteProp } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { addToCart } from '../../redux/CartReducer';

interface Item {
  id: number;
  name: string;
  price: number;
}
type RootStackParamList = {
  ProductInfo: { carouselImages: string[] };
};

type ProductInfoRouteProp = RouteProp<RootStackParamList, 'ProductInfo'>;

const ProductInfo: React.FC = () => {
  const route = useRoute<ProductInfoRouteProp>();
  const { width } = Dimensions.get("window")
  const height = (width * 100) / 100;
  const [addedToCart, setAddedToCart] = useState<boolean>(false);
  const dispatch =useDispatch();
  const addItemToCart=(item) =>{
    setAddedToCart(true);
    dispatch(addToCart(item));
    setTimeout(()=>{
      setAddedToCart(false);
    },60000)
  }
  const cart = useSelector((state: RootState) => state.cart.cart);
  console.log(cart, "cart");
  return (
    <SafeAreaView>
      <View style={{ height: 40, borderBottomColor: "#646464", borderBottomWidth: 0.5 }}>
        <Text style={{ fontSize: 22, fontWeight: "600", marginHorizontal: 15 }}>ProductInfo</Text>
      </View>
      <ScrollView>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {route.params.carouselImages.map((item, index) => (
            <ImageBackground source={{ uri: item }} key={index} style={{ width, height, marginVertical: 5, resizeMode: "contain" }}>
              <View style={{ padding: 20, alignItems: "center", flexDirection: "row", justifyContent: "space-between" }}>
                <View style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: "red", justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
                  <Text style={{ fontSize: 12, fontWeight: "500", textAlign: "center", color: "#fff" }}>20% off</Text>
                </View>
                <View style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: "#d3d3d3", justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
                  <Ionicons name='share-social-outline' size={26} />
                </View>
              </View>
            </ImageBackground>
          ))}
        </ScrollView>
        <View style={{ padding: 10 }}>
          <Text style={{ fontSize: 14, fontWeight: "500" }}>{route.params?.title}</Text>
          <Text style={{ fontSize: 16, fontWeight: "600", marginVertical: 5 }}>₹{route.params?.price}</Text>
        </View>

        <Text style={{ borderWidth: 1, borderColor: "#d3d3d3", height: 1 }} />
        <View style={{ flexDirection: "row", alignItems: "center", padding: 10 }}>
          <Text>Color: </Text>
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>{route.params?.color}</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", padding: 10 }}>
          <Text>Size: </Text>
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>{route.params?.size}</Text>
        </View>

        <Text style={{ borderWidth: 1, borderColor: "#d3d3d3", height: 1 }} />
        <View style={{ padding: 10 }}>
          <Text style={{ fontSize: 15, fontWeight: "bold", marginVertical: 10 }}>Total: ₹{route.params?.price}</Text>
          <Text style={{ color: "#00CED1" }}>FREE Delivery Tomorrow by 3 PM.Order within 10hrs 30mins</Text>
        </View>

        <View style={{ flexDirection: "row", marginVertical: 5, alignItems: "center", gap: 5 }}>
          <EvilIcons name='location' size={26} />
          <Text style={{ fontSize: 15, fontWeight: "500" }}>Deliver to suraj -Banglore 560019</Text>
        </View>
        <Text style={{ color: "green",marginHorizontal:10,fontWeight:"500" }}>In Stock</Text>
       
        <Pressable style={[styles.JACenter,{backgroundColor:"#FFC72C",padding:10,borderRadius:20,margin:10}]}
        onPress={()=>addItemToCart(route.params?.item)}>
         {addedToCart ? (<Text>Added to Cart</Text>):<Text>Add to Cart</Text>} 
        </Pressable>

        <Pressable style={[styles.JACenter,{backgroundColor:"#FFAC1C",padding:10,borderRadius:20,margin:10}]}>
          <Text>Buy Now</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductInfo;

const styles = StyleSheet.create({
  JACenter:{justifyContent:"center",alignItems:"center"}
});

