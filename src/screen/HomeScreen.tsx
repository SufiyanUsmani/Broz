import React, { useEffect, useState, useCallback } from 'react';
import { Appearance, Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import { SliderBox } from "react-native-image-slider-box";
import DropDownPicker from "react-native-dropdown-picker";
import axios from "axios";
import ProductItems from '../component/ProductItems';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { addToCart } from '../../redux/CartReducer';

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

type Offer = {
  id: string;
  title: string;
  offer: string;
  oldPrice: number;
  price: number;
  image: string;
  carouselImages: string[];
  color: string;
  size: string;
};

interface Item {
  label: string;
  value: string;
}

type NavigationProp = {
  navigate: (screen: string, params?: any) => void;
};

type HomeScreenProps = {
  navigation: NavigationProp;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [theme, setTheme] = useState<string>(Appearance.getColorScheme() || 'light');
  const [search, setSearch] = useState<boolean>(true);
  const [products, setProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState<string>("jewelery");
  const [open, setOpen] = useState<boolean>(false);
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const [addedToCart, setAddedToCart] = useState<boolean>(false);
  const dispatch =useDispatch();
  const addItemToCart=(item) =>{
    setAddedToCart(true);
    dispatch(addToCart(item));
    setTimeout(()=>{
      setAddedToCart(false);
    },60000)
  }
  const [items, setItems] = useState<Item[]>([
    { label: "Men's clothing", value: "men's clothing" },
    { label: "jewelery", value: "jewelery" },
    { label: "electronics", value: "electronics" },
    { label: "women's clothing", value: "women's clothing" },
  ]);

  useEffect(() => {
    const listener = ({ colorScheme }: { colorScheme: 'light' | 'dark' | null }) => {
      setTheme(colorScheme === 'dark' ? 'dark' : 'light');
    };
    Appearance.addChangeListener(listener);
    return () => {
      Appearance.removeChangeListener(listener);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.log("error message", error);
      }
    };
    fetchData();
  }, []);

  const onGenderOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const cart = useSelector((state: RootState) => state.cart.cart);
  console.log(cart, "cart");

  const list = [
    {
      name: "Iphone",
      image: "https://inventstore.in/wp-content/uploads/2023/04/Purple-scaled.webp"
    },
    {
      name: "Android",
      image: "https://images.samsung.com/is/image/samsung/assets/in/explore/brand/5-best-android-mobile-phones-2022-in-india/banner-mobile-720x761-080422.jpg?$720_N_JPG$"
    },
    {
      name: "Cover",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJITzTBGILsTFrZ8nUMgnaOVyPELMvr60sgw&s"
    },
    {
      name: "Headphone",
      image: "https://hammeronline.in/cdn/shop/files/HammerBash2.0Headphones.webp?v=1690436990"
    },
    {
      name: "Earphones",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqb5FqimTiObiGynlU680P816sfNyq5gZo8w&s"
    },
    {
      name: "EarBuds",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDcYYVgWJWyg2dK7fkSFPvYUEX9oYLtEumsA&s"
    },
    {
      name: "Bluetooth",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmGbDl40NOIuVRvySdLY2TU5Lhp2nZgnU6FQ&s"
    },
    {
      name: "Screen",
      image: "https://www.shutterstock.com/image-vector/3d-high-quality-vector-mobile-600nw-2121419597.jpg"
    }
  ];

  const images = [
    "https://img.etimg.com/thumb/msid-93051525,width-1070,height-580,imgsize-2243475,overlay-economictimes/photo.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/PD23/Launches/Updated_ingress1242x550_3.gif",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Books/BB/JULY/1242x550_Header-BB-Jul23.jpg",
  ];

  const offers: Offer[] = [
    {
      id: "0",
      title: "Oppo Enco Air3 Pro True Wireless in Ear Earbuds with Industry First Composite Bamboo Fiber, 49dB ANC, 30H Playtime, 47ms Ultra Low Latency,Fast Charge,BT 5.3 (Green)",
      offer: "72% off",
      oldPrice: 7500,
      price: 4500,
      image: "https://m.media-amazon.com/images/I/61a2y1FCAJL._AC_UL640_FMwebp_QL65_.jpg",
      carouselImages: [
        "https://m.media-amazon.com/images/I/61a2y1FCAJL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/71DOcYgHWFL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/71LhLZGHrlL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/61Rgefy4ndL._SX679_.jpg",
      ],
      color: "Green",
      size: "Normal",
    },
    {
      id: "1",
      title: "Fastrack Limitless FS1 Pro Smart Watch|1.96 Super AMOLED Arched Display with 410x502 Pixel Resolution|SingleSync BT Calling|NitroFast Charging|110+ Sports Modes|200+ Watchfaces|Upto 7 Days Battery",
      offer: "40%",
      oldPrice: 7955,
      price: 3495,
      image: "https://m.media-amazon.com/images/I/41mQKmbkVWL._AC_SY400_.jpg",
      carouselImages: [
        "https://m.media-amazon.com/images/I/71h2K2OQSIL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/71BlkyWYupL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/71c1tSIZxhL._SX679_.jpg",
      ],
      color: "black",
      size: "Normal",
    },
    {
      id: "2",
      title: "Aishwariya System On Ear Wireless On Ear Bluetooth Headphones",
      offer: "40%",
      oldPrice: 7955,
      price: 3495,
      image: "https://m.media-amazon.com/images/I/41t7Wa+kxPL._AC_SY400_.jpg",
      carouselImages: ["https://m.media-amazon.com/images/I/41t7Wa+kxPL.jpg"],
      color: "black",
      size: "Normal",
    },
    {
      id: "3",
      title: "Fastrack Limitless FS1 Pro Smart Watch|1.96 Super AMOLED Arched Display with 410x502 Pixel Resolution|SingleSync BT Calling|NitroFast Charging|110+ Sports Modes|200+ Watchfaces|Upto 7 Days Battery",
      offer: "40%",
      oldPrice: 24999,
      price: 19999,
      image: "https://m.media-amazon.com/images/I/71k3gOik46L._AC_SY400_.jpg",
      carouselImages: [
        "https://m.media-amazon.com/images/I/41bLD50sZSL._SX300_SY300_QL70_FMwebp_.jpg",
        "https://m.media-amazon.com/images/I/616pTr2KJEL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/71wSGO0CwQL._SX679_.jpg",
      ],
      color: "Norway Blue",
      size: "8GB RAM, 128GB Storage",
    },
  ];

  return (
    <SafeAreaView style={{ backgroundColor: theme === "light" ? "#d9d9d9" : "#222831", flex: 1 }}>
      <View style={styles.ZZXX}>
        <Text style={{ fontSize: 24, fontWeight: "700", color: "#2A4C54", margin: 10 }}>Broz</Text>
        <TouchableOpacity onPress={() => setSearch(!search)}>
          <Ionicons name="search-outline" size={26} style={{ margin: 10, color: theme === "light" ? "#000" : "#646464" }} />
        </TouchableOpacity>
      </View>
      {!search && (
        <View style={styles.H50}>
          <TextInput
            style={styles.BCD3}
            placeholder='Search Here...'
            placeholderTextColor={"#000"}
          />
        </View>
      )}
      <ScrollView>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {list.map((item, index) => (
            <Pressable key={index} style={{ justifyContent: "center", alignItems: "center", marginHorizontal: 5, marginVertical: 10 }}>
              <Image style={{ height: 70, width: 70, resizeMode: "contain", borderRadius: 100, borderColor: "#d3d3d3", borderWidth: 0.5 }} source={{ uri: item.image }} />
              <Text style={{ textAlign: "center", fontSize: 12, fontWeight: "500", color: theme === "light" ? "#000" : "#d3d3d3" }}>{item.name}</Text>
            </Pressable>
          ))}
        </ScrollView>
        {/* <SliderBox images={images} autoPlay circleLoop dotColor={"#13274F"} inactiveDotColor="#90A4AE" ImageComponentStyle={{ width: "100%" }} /> */}
        <Text style={{ padding: 10, fontSize: 20, fontWeight: "bold", color: theme === "light" ? "#000" : "#d3d3d3" }}>Trending Product</Text>
       

        <Text style={styles.Grey} />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {offers.map((item, index) => (
            <Pressable
              key={index}
              style={{ marginVertical: 10, alignItems: "center", justifyContent: "center" }}
              onPress={() =>
                navigation.navigate("ProductInfo", {
                  id: item.id,
                  title: item.title,
                  price: item.price,
                  carouselImages: item.carouselImages,
                  color: item.color,
                  size: item.size,
                  oldPrice: item.oldPrice,
                  item: item,
                })
              }
            >
              <Image style={styles.WH150} source={{ uri: item.image }} />
              <View style={styles.W130}>
                <Text style={styles.WhiteF13}>Upto {item.offer}</Text>
              </View>
            </Pressable>
          ))}
        </ScrollView>

        <Text style={styles.Grey} />
        {/* <View style={{ marginHorizontal: "5%", marginTop: 20, width: "90%", marginBottom: open ? 70 : 15 }}>
          <DropDownPicker
            style={{ borderColor: "#B7B7B7", height: 30, marginBottom: open ? 120 : 15 }}
            open={open}
            items={items}
            setOpen={setOpen}
            setValue={setCategory}
            setItems={setItems}
            placeholder="choose category"
            onOpen={onGenderOpen}
            zIndex={3000}
            zIndexInverse={1000}
            multiple={true} // or false depending on your requirement
            // value={selectedValues} // specify the selected values
          />
        </View> */}
        <View style={{ flexDirection: "row", alignItems: "center", flexWrap: "wrap" }}>
          {products?.filter((item) => item.category === category)
            .map((item, index) => (<ProductItems item={item} key={index} />))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  H50: { height: 50 },
  H48: { height: 48, width: 250, marginHorizontal: 10 },
  Grey: { height: 1, borderColor: "#D0D0D0", borderWidth: 2, marginTop: 15 },
  WhiteF13: { textAlign: "center", color: "white", fontSize: 13, fontWeight: "bold" },
  JACenter: { justifyContent: "center", alignItems: "center" },
  BuyNow: { color: "#fff", fontSize: 16, fontWeight: "600" },
  H450: { height: 450, width: "96%", margin: "2%", borderRadius: 15 },
  W130: { backgroundColor: "#E31837", paddingVertical: 5, width: 130, justifyContent: "center", alignItems: "center", marginTop: 10, borderRadius: 4 },
  ZZXX: { backgroundColor: "#d3d3d3", flexDirection: "row", height: 50, justifyContent: "space-between", borderBottomColor: "#646464", borderBottomWidth: 0.3 },
  BCD3: { borderWidth: 0.3, backgroundColor: "#d3d3d3", padding: 10, marginHorizontal: 10, marginVertical: 5, borderRadius: 12 },
  WH150: { width: 150, height: 150, resizeMode: "contain" },
  Touchable: { height: 45, width: "90%", marginHorizontal: "5%", marginVertical: 10, backgroundColor: "#2A4C54", borderRadius: 10 }
});

export default HomeScreen;
