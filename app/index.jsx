import { LinearGradient } from 'expo-linear-gradient'
import { Link, Stack, useRouter } from 'expo-router'
import React from 'react'
import { Platform, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Knife from '@expo/vector-icons/MaterialCommunityIcons';

const Home = () => {
  const router = useRouter()
  return (
  <LinearGradient colors={["#fc8c3f", "#f35144"]} style={styles.container}>
   <View style={styles.innerContainer}>
     <Knife name="silverware-fork-knife" size={55} color="white" />
      <View style={styles.innerWrapper}>
          <Text style={styles.heading}>FoodSwift</Text>
        <Text style={styles.text}>Delicious meals, delivered in minutes</Text>
      </View>
        <TouchableOpacity
        style={styles.customBtn}
        activeOpacity={0.8}
        onPress={()=> router.push("/home")}
        >
          <Text href="/home" style={styles.btnText}>Get Started</Text>
        </TouchableOpacity>
   </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
    container: {
paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
backgroundColor: "red",
flex: 1,
justifyContent: "center",
alignItems: "center"
    },
    innerContainer: {
alignItems: "center",
gap: 20
    },
    innerWrapper: {
alignItems: "center",
gap: 6
    },
  text: {
    color: "white",
    fontSize: 15
  },
  heading: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold"
  },
  customBtn: {
    backgroundColor: "white",
paddingVertical: 10,
paddingHorizontal: 24,
borderRadius: 20,
marginTop: 12
  },
  btnText: {
    color: "#f35144",
    fontWeight: 600
  }
})

export default Home