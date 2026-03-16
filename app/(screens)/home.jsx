import React, { useState } from 'react'
import { Image, Platform, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native'
import { View } from 'react-native'
import Search from '@expo/vector-icons/EvilIcons';
import Heart from '@expo/vector-icons/EvilIcons';
import Star from '@expo/vector-icons/Entypo';
import { useRouter } from 'expo-router';

const categories = [
    "All",
    "Pizza",
    "Burger",
    "Biryani",
    "Pasta",
    "Italian",
]

const cards = [1,2,3,4,5,6,7,8,9,10]

const Home = () => {
    const [activeCat, setActiveCat] = useState("All")
    const router = useRouter()
  return (
    <ScrollView style={styles.container}>
        <View style={styles.section_1}>
            <View>
                <Text style={styles.heading}>FoodSwift</Text>
            <Text>Order Your Favourite Food</Text>
            </View>
            <View>
                <TouchableOpacity onPress={()=> router.push("/login")} style={styles.loginBtn}>
                    <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>

        <View style={styles.inputContainer}>
<Search name="search" size={24} color="black" />
            <TextInput
            placeholder='Search'
            ></TextInput>
        </View>

<View style={styles.catContainer}>
    <ScrollView
          horizontal 
          showsHorizontalScrollIndicator={false} 
          contentContainerStyle={styles.catContainer}
        >
    {
        categories.map((cat)=> {
            return <TouchableOpacity key={cat} activeOpacity={0.8} onPress={()=> setActiveCat(cat)} style={activeCat === cat ? styles.active : styles.catBtn}>
        <Text style={activeCat === cat ? styles.activeText : styles.catText}>{cat}</Text>
    </TouchableOpacity>
        })
    }
    </ScrollView>
</View>

 <View style={styles.cardCon}>
{
    cards.map((card)=> {
        return <TouchableOpacity key={card} style={styles.card} onPress={()=> router.push("/order")} activeOpacity={0.7}>
       <View style={{alignItems: "center"}}>
         <Image
        source={require("../../assets/images/foodItem_1.png")}
        style={styles.cardImg}
        />
       </View>
        <View style={styles.cardTop}>
            <Text style={{fontSize: 12}}>Cheeseburger</Text>
            <Text style={{fontWeight: "bold", fontSize: 12}}>Wendy's burger</Text>
        </View>
        <View style={styles.cardBottom}>
            <View style={{alignItems: "center", flexDirection: "row", gap: 4}}>
<Star name="star" size={20} color="orange"/>
                <Text>4.9</Text> 
            </View>
            <Heart name="heart" size={24} color="black" />
        </View>
    </TouchableOpacity>
    })
}
</View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
container: {
    padding: 25,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
backgroundColor: "white",
    },
    section_1: {
flexDirection: "row",
justifyContent: "space-between",
alignItems: "center",
marginTop: 20
    },
    loginBtn: {
backgroundColor: "#f35144",
paddingVertical: 10,
paddingHorizontal: 20,
borderRadius: 20
    },
    loginText: {
color: "white"
    },
    heading: {
        fontSize: 25,
        fontWeight: "bold",
        marginBottom: 2
    },
    inputContainer: {
        alignItems: "center",
        flexDirection: "row",
        gap: 5,
        width: "100%",
        paddingHorizontal: 13,
        paddingVertical: 3,
        boxShadow: "1px 1px 10px #d6d6d6",
        borderRadius: 20,
        marginTop: 30
    },
    catContainer: {
flexDirection: "row",
gap: 10,
marginTop: 20
    },
    active: {
backgroundColor: "#f35144",
 paddingVertical: 13,
            paddingHorizontal: 17,
            borderRadius: 13,
    },
    activeText: {
        color: "white"
    },
    catBtn: {
            backgroundColor: "#f3f4f6",
            paddingVertical: 13,
            paddingHorizontal: 17,
            borderRadius: 13
    },
    catText: {
        color: "#979797",
        fontSize: 16
    },
    img: {
width: '100%',
    height: 200,
    borderRadius: 15,
    marginTop: 20,
    resizeMode: 'cover'
},
    cardCon: {
flexDirection: "row",
flexWrap: "wrap",
justifyContent: "space-between",
gap: 15,
marginTop: 35,
marginBottom: 85,
},
    card: {
width: "47%",
padding: 13,
borderRadius: 15,
boxShadow: "1px 1px 10px #cccccc",
},
    cardImg: {
        width: '85%',
        height: 100,
        resizeMode: "cover"
},
    cardTop: {
        gap: 3,
        marginTop: 5
},
    cardBottom: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10
},
})

export default Home