import React, { useState } from 'react'
import { Platform, View, StatusBar, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import ArrowBack from '@expo/vector-icons/Ionicons';
import Search from '@expo/vector-icons/EvilIcons';
import Star from '@expo/vector-icons/Entypo';
import { useRouter } from 'expo-router';

const order = () => {
    const router = useRouter()
    const [count, setCount] = useState(1)
  return (
    <View style={styles.container}>

        <View style={styles.top}>
            <View style={{width: "100%", flexDirection: "row", justifyContent: "space-between"}}>
                <ArrowBack onPress={()=> router.push("/home")} name="arrow-back" size={24} color="black" />
                    <Search name="search" size={24} color="black" />
            </View>
        <Image 
        source={require("../../assets/images/foodItem_1.png")}
        style={styles.orderImg}
        />
        </View>

<View style={styles.bottom}>

    <View>
    <View>
<Text style={{fontSize: 18, fontWeight: "bold", textTransform: "capitalize"}}>
    hamburger Veggie Burger
</Text>
        <View style={{marginTop: 6, flexDirection: "row", gap: 7, alignItems: "center"}}>
            <Star name="star" size={20} color="orange"/>
        <Text style={{color: "gray"}}>4.8 - 14 mins</Text>
        </View>
    </View>

    <View>
      <Text style={{lineHeight: 20, color: "gray", marginTop: 13}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores exercitationem nemo error porro animi voluptas ipsam fuga incidunt magnam quidem illo harum eos ipsa reprehenderit, provident qui voluptatibus cupiditate corporis, nisi laudantium commodi a.</Text>
    </View>
</View>

<View style={{gap: 40}}>

    <View style={{flexDirection: "row", justifyContent: "center", gap: 15}}>
        <View style={{backgroundColor: "#f35144", paddingHorizontal: 17, borderRadius: 12, justifyContent: "center"}}>
            <Text style={{fontSize: 30, color: "white", marginBottom: 3}}>-</Text>
        </View>
        <View style={{justifyContent: "center"}}>
            <Text style={{fontSize: 15}}>{count}</Text>
        </View>
        <TouchableOpacity style={{backgroundColor: "#f35144", paddingHorizontal: 17, borderRadius: 12, justifyContent: "center"}} 
        onPress={()=> setCount(count + 1)}
        >
            <Text style={{fontSize: 22, color: "white", marginBottom: 3}}>+</Text>
        </TouchableOpacity>
    </View>

    <View style={{justifyContent: "space-between", flexDirection: "row"}}>
        <View style={{backgroundColor: "#f35144", paddingHorizontal: 17, paddingVertical: 10, borderRadius: 8, justifyContent: "center"}}>
            <Text style={{color: "white", fontSize: 14, fontWeight: "bold" }}>Rs. 450</Text>
        </View>
        <TouchableOpacity style={{backgroundColor: "#3C2F2F", justifyContent: "center", paddingHorizontal: 22, paddingVertical: 10, borderRadius: 7}}
        activeOpacity={0.7}
        >
            <Text style={{color: "white", fontSize: 13, fontWeight: "bold" }}>ORDER NOW</Text>
        </TouchableOpacity>
    </View>

</View>

</View>

    </View>
  )
}

const styles = StyleSheet.create({
      container: {
            flex: 1,
            paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
            backgroundColor: "white",
            padding: 20,
            paddingBottom: 40
        },
      top: {
            height: "45%",
            alignItems: "center",
            paddingTop: 10
        },
      bottom: {
            height: "55%",
            justifyContent: "space-between"
        },
        orderImg: {
            width: "70%",
            height: 200,
            resizeMode: "cover",
            marginTop: 30
        }
})

export default order