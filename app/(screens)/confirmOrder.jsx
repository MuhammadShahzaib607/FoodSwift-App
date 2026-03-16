import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, TouchableOpacity, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const SuccessScreen = () => {
    const router = useRouter();
    
    // Animations ke liye initial values
    const scaleValue = useRef(new Animated.Value(0)).current; // Circle aur icon ka scale
    const opacityValue = useRef(new Animated.Value(0)).current; // Text ki opacity

    useEffect(() => {
        // Animation sequence chalana
        Animated.sequence([
            // 1. Circle aur Tick ko chota se bada karna (Bounce effect)
            Animated.spring(scaleValue, {
                toValue: 1,
                friction: 5,
                useNativeDriver: true,
            }),
            // 2. Text ko slowly show karna
            Animated.timing(opacityValue, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
            })
        ]).start();
    }, []);

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            
            <View style={styles.mainContent}>
                {/* Animated Circle Wrapper */}
                <Animated.View style={[
                    styles.circle, 
                    { transform: [{ scale: scaleValue }] }
                ]}>
                    <Ionicons name="checkmark-sharp" size={80} color="white" />
                </Animated.View>

                {/* Animated Text Content */}
                <Animated.View style={{ alignItems: 'center' }}>
                    <Text style={styles.title}>Order Confirmed!</Text>
                    <Text style={styles.subtitle}>
                        Your delicious meal is on its way.{"\n"}
                        Sit tight and relax!
                    </Text>
                </Animated.View>
            </View>

            {/* Bottom Button */}
            <View style={styles.footer}>
                <TouchableOpacity 
                    style={styles.homeBtn} 
                    onPress={() => router.push('/home')}
                    activeOpacity={0.8}
                >
                    <Text style={styles.homeBtnText}>Go to Home Page</Text>
                    <Ionicons name="home-outline" size={20} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    mainContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 40,
    },
    circle: {
        width: 150,
        height: 150,
        borderRadius: 75,
        backgroundColor: '#4CAF50', // Success Green
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
        // Shadow for premium look
        elevation: 10,
        shadowColor: '#4CAF50',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.3,
        shadowRadius: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: '800',
        color: '#2D2D2D',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#888',
        textAlign: 'center',
        lineHeight: 24,
    },
    footer: {
        padding: 30,
        paddingBottom: 50,
    },
    homeBtn: {
        backgroundColor: '#f35144',
        height: 60,
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 12,
        elevation: 5,
        shadowColor: '#f35144',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
    },
    homeBtnText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '700',
    }
});

export default SuccessScreen;