import React, { useState } from 'react';
import { Platform, View, StatusBar, StyleSheet, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, Feather, FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const OrderScreen = () => {
    const router = useRouter();
    const [count, setCount] = useState(1);
    const pricePerItem = 450;

    const increment = () => setCount(prev => prev + 1);
    const decrement = () => setCount(prev => (prev > 1 ? prev - 1 : 1));

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            
            {/* Header Section */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.iconBtn}>
                    <Ionicons name="chevron-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Details</Text>
                <TouchableOpacity style={styles.iconBtn}>
                    <Feather name="heart" size={22} color="red" />
                </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Image Section */}
                <View style={styles.imageContainer}>
                    <View />
                    <Image 
                        source={require("../../assets/images/foodItem_1.png")}
                        style={styles.orderImg}
                    />
                </View>

                {/* Content Section */}
                <View style={styles.contentCard}>
                    <View style={styles.titleRow}>
                        <Text style={styles.foodName}>Hamburger Veggie Burger</Text>
                        <View style={styles.ratingBadge}>
                            <FontAwesome name="star" size={14} color="#FFD700" />
                            <Text style={styles.ratingText}>4.8</Text>
                        </View>
                    </View>

                    <View style={styles.infoRow}>
                        <View style={styles.infoItem}>
                            <Feather name="clock" size={16} color="#f35144" />
                            <Text style={styles.infoText}>14 mins</Text>
                        </View>
                        <View style={styles.infoItem}>
                            <Ionicons name="flame-outline" size={16} color="#f35144" />
                            <Text style={styles.infoText}>350 Cal</Text>
                        </View>
                    </View>

                    <Text style={styles.sectionTitle}>Description</Text>
                    <Text style={styles.description}>
                        Experience the ultimate plant-based delight! Our Veggie Burger features a premium 
                        handmade patty, fresh organic lettuce, and our secret spicy sauce tucked between 
                        toasted brioche buns. 
                    </Text>

                    {/* Quantity Selector */}
                    <View style={styles.quantitySection}>
                        <Text style={styles.sectionTitle}>Quantity</Text>
                        <View style={styles.stepper}>
                            <TouchableOpacity onPress={decrement} style={styles.stepBtn}>
                                <Text style={styles.stepText}>-</Text>
                            </TouchableOpacity>
                            <Text style={styles.countText}>{count}</Text>
                            <TouchableOpacity onPress={increment} style={styles.stepBtn}>
                                <Text style={styles.stepText}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>

            {/* Bottom Bar */}
            <View style={styles.footer}>
                <View>
                    <Text style={styles.priceLabel}>Total Price</Text>
                    <Text style={styles.priceValue}>Rs. {pricePerItem * count}</Text>
                </View>
                <TouchableOpacity 
                    style={styles.orderBtn}
                    activeOpacity={0.8}
                    onPress={()=> router.push("/checkout")}
                >
                    <Text style={styles.orderBtnText}>Place Order</Text>
                    <View style={styles.btnIconCircle}>
                        <Ionicons name="cart-outline" size={20} color="#f35144" />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F9FA',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        height: 60,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#333',
    },
    iconBtn: {
        width: 40,
        height: 40,
        backgroundColor: 'white',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    imageContainer: {
        height: 280,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    imageBgCircle: {
        position: 'absolute',
        width: 220,
        height: 220,
        borderRadius: 110,
        backgroundColor: '#f3514420',
    },
    orderImg: {
        width: '80%',
        height: '80%',
        resizeMode: 'contain',
    },
    contentCard: {
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: 30,
        marginTop: -20,
        minHeight: 400,
    },
    titleRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    foodName: {
        fontSize: 24,
        fontWeight: '800',
        color: '#2D2D2D',
        width: '70%',
    },
    ratingBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF9E5',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 20,
        gap: 5,
    },
    ratingText: {
        fontWeight: '700',
        color: '#FFA500',
    },
    infoRow: {
        flexDirection: 'row',
        gap: 20,
        marginTop: 15,
        marginBottom: 25,
    },
    infoItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    infoText: {
        color: '#888',
        fontWeight: '500',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#333',
        marginBottom: 10,
    },
    description: {
        fontSize: 15,
        color: '#777',
        lineHeight: 22,
        marginBottom: 25,
    },
    quantitySection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
    stepper: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F1F1F1',
        borderRadius: 15,
        padding: 5,
    },
    stepBtn: {
        width: 35,
        height: 35,
        backgroundColor: 'white',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    stepText: {
        fontSize: 20,
        fontWeight: '600',
        color: '#f35144',
    },
    countText: {
        paddingHorizontal: 20,
        fontSize: 16,
        fontWeight: '700',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 25,
        paddingBottom: 40,
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderTopColor: '#EEE',
    },
    priceLabel: {
        color: '#999',
        fontSize: 13,
        fontWeight: '600',
    },
    priceValue: {
        fontSize: 22,
        fontWeight: '800',
        color: '#2D2D2D',
    },
    orderBtn: {
        backgroundColor: '#f35144',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderRadius: 20,
        gap: 12,
        elevation: 5,
        shadowColor: '#f35144',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
    },
    orderBtnText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '700',
    },
    btnIconCircle: {
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 10,
    }
});

export default OrderScreen;