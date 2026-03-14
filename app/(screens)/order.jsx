import React from 'react'
import { Platform, View, StatusBar, StyleSheet, Text, Image } from 'react-native'
import ArrowBack from '@expo/vector-icons/Ionicons';
import Search from '@expo/vector-icons/EvilIcons';
import Star from '@expo/vector-icons/Entypo';
import { useRouter } from 'expo-router';

const order = () => {
    const router = useRouter()
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
        <Text>
            <Star name="star" size={20} color="orange"/>
        <Text style={{color: "gray"}}>4.8 - 14 mins</Text>
        </Text>
    </View>

    <View>
      <Text>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores exercitationem nemo error porro animi voluptas ipsam fuga incidunt magnam quidem illo harum eos ipsa reprehenderit, provident qui voluptatibus cupiditate corporis, nisi laudantium commodi a.</Text>
    </View>
</View>

<View>
    <View>
        <Text>-</Text>
        <Text>1</Text>
        <Text>+</Text>
    </View>
    <View>
        <Text>Rs. 450</Text>
        <Text>ORDER NOW</Text>
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
            padding: 15
        },
      top: {
            height: "35%",
            alignItems: "center"
        },
      bottom: {
            height: "65%",
            justifyContent: "space-between"
        },
        orderImg: {
            width: "50%",
            height: 180,
            resizeMode: "cover",
            marginTop: 16
        }
})

export default order