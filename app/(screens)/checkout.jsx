import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Platform, StatusBar } from 'react-native';
import { Ionicons, MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const CheckoutScreen = () => {
    const router = useRouter();

    const Section = ({ title, children, onEdit }) => (
        <View style={styles.section}>
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>{title}</Text>
                {onEdit && (
                    <TouchableOpacity onPress={onEdit}>
                        <Text style={styles.editLink}>Change</Text>
                    </TouchableOpacity>
                )}
            </View>
            {children}
        </View>
    );

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
                    <Ionicons name="chevron-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Checkout</Text>
                <View style={{ width: 40 }} /> 
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                
                {/* Delivery Address Section */}
                <Section title="Delivery Address" onEdit={() => {}}>
                    <View style={styles.addressCard}>
                        <View style={styles.iconCircle}>
                            <Ionicons name="location" size={20} color="#f35144" />
                        </View>
                        <View style={styles.addressInfo}>
                            <Text style={styles.addressName}>Home</Text>
                            <Text style={styles.addressDetail}>House #42, Block 5, Gulshan-e-Iqbal, Karachi</Text>
                        </View>
                    </View>
                </Section>

                {/* Payment Method Section */}
                <Section title="Payment Method" onEdit={() => {}}>
                    <View style={styles.paymentCard}>
                        <View style={styles.paymentRow}>
                            <MaterialCommunityIcons name="credit-card-outline" size={24} color="#f35144" />
                            <Text style={styles.paymentText}>Master Card (**** 4242)</Text>
                            <Ionicons name="checkmark-circle" size={20} color="#4CAF50" />
                        </View>
                    </View>
                </Section>

                {/* Order Summary */}
                <Section title="Order Summary">
                    <View style={styles.summaryCard}>
                        <View style={styles.summaryRow}>
                            <Text style={styles.summaryLabel}>Subtotal</Text>
                            <Text style={styles.summaryValue}>Rs. 450</Text>
                        </View>
                        <View style={styles.summaryRow}>
                            <Text style={styles.summaryLabel}>Delivery Fee</Text>
                            <Text style={styles.summaryValue}>Rs. 50</Text>
                        </View>
                        <View style={styles.divider} />
                        <View style={styles.summaryRow}>
                            <Text style={styles.totalLabel}>Total</Text>
                            <Text style={styles.totalValue}>Rs. 500</Text>
                        </View>
                    </View>
                </Section>

            </ScrollView>

            {/* Confirm Button Footer */}
            <View style={styles.footer}>
                <TouchableOpacity
                style={styles.confirmBtn}
                activeOpacity={0.8}
                onPress={()=> router.push("/confirmOrder")}
                >
                    <Text style={styles.confirmBtnText}>Confirm Order</Text>
                    <Feather name="arrow-right" size={20} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FBFBFB',
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
        fontSize: 20,
        fontWeight: '700',
    },
    backBtn: {
        width: 40,
        height: 40,
        backgroundColor: 'white',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 2,
    },
    scrollContent: {
        padding: 20,
    },
    section: {
        marginBottom: 25,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '700',
        color: '#333',
    },
    editLink: {
        color: '#f35144',
        fontWeight: '600',
    },
    addressCard: {
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 16,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2,
    },
    iconCircle: {
        width: 40,
        height: 40,
        backgroundColor: '#f3514415',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addressInfo: {
        marginLeft: 15,
        flex: 1,
    },
    addressName: {
        fontWeight: '700',
        fontSize: 15,
        marginBottom: 2,
    },
    addressDetail: {
        color: '#777',
        fontSize: 13,
    },
    paymentCard: {
        backgroundColor: 'white',
        padding: 18,
        borderRadius: 16,
        elevation: 2,
    },
    paymentRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    paymentText: {
        flex: 1,
        fontWeight: '500',
    },
    summaryCard: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 20,
        elevation: 2,
    },
    summaryRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    summaryLabel: {
        color: '#888',
    },
    summaryValue: {
        fontWeight: '600',
    },
    divider: {
        height: 1,
        backgroundColor: '#EEE',
        marginVertical: 10,
    },
    totalLabel: {
        fontSize: 16,
        fontWeight: '700',
    },
    totalValue: {
        fontSize: 18,
        fontWeight: '800',
        color: '#f35144',
    },
    footer: {
        padding: 20,
        paddingBottom: Platform.OS === 'ios' ? 40 : 55,
    },
    confirmBtn: {
        backgroundColor: '#f35144',
        height: 55,
        borderRadius: 18,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        elevation: 4,
    },
    confirmBtnText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '700',
    },
});

export default CheckoutScreen;