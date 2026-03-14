import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { Platform, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import ArrowBack from '@expo/vector-icons/Ionicons';
import { TextInput } from 'react-native';
import { useRouter } from 'expo-router';


const login = () => {
    const router = useRouter()
    return (
        <LinearGradient colors={["#fc8c3f", "#f35144"]} style={styles.container}>
            <View style={styles.top}>

                <View style={styles.btnsCon}>
                    <ArrowBack onPress={()=> router.push("/home")} name="arrow-back" size={24} color="white" />
                    <TouchableOpacity onPress={()=> router.push("/signup")} style={styles.btn}>
                        <Text style={styles.btnText}>Get Started</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.webName}>
                    <Text style={styles.webText}>FoodSwift</Text>
                </View>

            </View>

            <View style={styles.bottom}>
                <View style={styles.bottomTextCon}>
                    <Text style={styles.welcomeHeading}>Welcome Back</Text>
                    <Text style={styles.welcomeSubheading}>Enter Your Details Below</Text>
                </View>

                <View style={styles.inputCon}>
                    <View style={styles.customInput}>
                        <Text style={styles.inputText}>Email Address</Text>
                        <TextInput style={styles.inputField} autoComplete='off' placeholder='Enter Your Email'></TextInput>
                    </View>
                    <View style={styles.customInput}>
                        <Text style={styles.inputText}>Password</Text>
                        <TextInput placeholder='Enter Your Password' autoComplete='off'></TextInput>
                    </View>
                    <LinearGradient
                        colors={["#fc8c3f", "#f35144"]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={styles.loginBtn}>
                        <Text style={styles.loginBtnText}>Sign In</Text>
                    </LinearGradient>
                    <Text>Forget Your Password?</Text>
                </View>

            </View>

        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    btnsCon: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    webName: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 50
    },
    webText: {
        color: "white",
        fontSize: 28,
        fontWeight: "bold"
    },
    btn: {
        backgroundColor: "#ffffff30",
        paddingVertical: 8,
        paddingHorizontal: 18,
        borderRadius: 10
    },
    btnText: {
        color: "white",
    },
    top: {
        width: "100%",
        height: "26%",
        paddingHorizontal: 20,
        paddingTop: 20
    },
    bottom: {
        width: "100%",
        height: "74%",
        backgroundColor: "white",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },
    bottomTextCon: {
        alignItems: "center",
        marginTop: 30,
        gap: 5
    },
    welcomeHeading: {
        fontSize: 24,
        fontWeight: "bold"
    },
    welcomeSubheading: {
        fontSize: 13,
    },
    inputCon: {
        alignItems: "center",
        gap: 20,
        marginTop: 50
    },
    customInput: {
        width: "85%",
        paddingHorizontal: 20,
        paddingTop: 10,
        boxShadow: "1px 1px 10px #cccccc",
        borderRadius: 14
    },
    inputText: {
        fontSize: 10,
        color: 'gray'
    },
    loginBtn: {
        fontSize: 10,
        color: 'gray',
        paddingVertical: 15,
        alignItems: "center",
        width: "85%",
        borderRadius: 13
    },
    loginBtnText: {
        color: "white",
        fontSize: 13,
        fontWeight: "bold"
    },
})

export default login