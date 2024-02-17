import React from "react";
import { StyleSheet, View, Platform, Text } from "react-native";

const FolderDetails = () => {
    return (
        <View style={[styles.container, Platform.OS === 'android' && styles.androidShadow]}>
            <View style={styles.row}>
                <View style={styles.column}>
                    <View style={[styles.roundedBackground, Platform.OS === 'android' && styles.androidShadow ]}>
                        <Text style={styles.texts1}>Item Number:</Text>
                    </View>
                    <View style={[styles.roundedBackground, Platform.OS === 'android' && styles.androidShadow ]}>
                        <Text style={styles.texts3}>116</Text>
                    </View>
                    <View style={[styles.roundedBackground, Platform.OS === 'android' && styles.androidShadow ]}>
                        <Text style={styles.texts5}>Creator:</Text>
                    </View>
                    <View style={[styles.roundedBackground, Platform.OS === 'android' && styles.androidShadow ]}>
                        <Text style={styles.texts1}>CreatorName</Text>
                    </View>
                </View>
                <View style={styles.column}>
                    <View style={[styles.roundedBackground, Platform.OS === 'android' && styles.androidShadow ]}>
                        <Text style={styles.texts2}>Created on:</Text>
                    </View>
                    <View style={[styles.roundedBackground, Platform.OS === 'android' && styles.androidShadow ]}>
                        <Text style={styles.texts4}>Date</Text>
                    </View>
                    <View style={[styles.roundedBackground, Platform.OS === 'android' && styles.androidShadow ]}>
                        <Text style={styles.texts6}>Deleting in:</Text>
                    </View>
                    <View style={[styles.roundedBackground, Platform.OS === 'android' && styles.androidShadow ]}>
                        <Text style={styles.texts2}>timeuntil</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 25,
        width: 340,
        backgroundColor: '#424769',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: '100%',
    },
    column: {
        flex: 1,
        alignItems: "center",
    },
    roundedBackground: {
        backgroundColor: '#7077A1',
        borderRadius: 20,
        padding: 5,
        margin: 5,
        marginTop: 5,
        marginRight: 5,
    },
    androidShadow: {
        elevation: 5,
    },
    texts1: {
        fontWeight: "bold",
        fontSize: 17,
        color: '#F6B17A',
        marginTop: 5,
    },
    texts2: {
        fontWeight: "bold",
        fontSize: 17,
        color: '#F6B17A',
        marginTop: 5,
    },
    texts3: {
        fontWeight: "bold",
        fontSize: 17,
        color: '#F6B17A',
        marginTop: 5,
    },
    texts4: {
        fontWeight: "bold",
        fontSize: 17,
        color: '#F6B17A',
        marginTop: 5,
    },
    texts5: {
        fontWeight: "bold",
        fontSize: 17,
        color: '#F6B17A',
        marginTop: 5,
    },
    texts6: {
        fontWeight: "bold",
        fontSize: 17,
        color: '#F6B17A',
        marginTop: 5,

    },
});

export default FolderDetails;
