import React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';

const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.labelStyle}>foodPanda</Text>
        </View>
    );
};

const deviceWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({
    container: {
        width: deviceWidth,
        height: 90,
        backgroundColor: '#2B1B17',
        paddingBottom: 20,
        alignItems: 'center',
    },
    labelStyle: {
        fontSize: 24,
        fontWeight: '700',
        margin: 'auto',
        color: "#808000"
    },
});

export default Header;
