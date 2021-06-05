import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import FoodCard from '../FoodCard/FoodCard';
import Header from '../Header/Header';
import infoData from '../../assets/data/infoData'
import { FlatList } from 'react-native';


const HomeScreen = () => {

    return (
        <>
            <View style={styles.container}>
                <Header />
                <StatusBar barStyle="dark-content" />
                <FlatList
                    data={infoData}
                    renderItem={({ item }) => {
                        return <FoodCard info={item} />;
                    }}
                    keyExtractor={(restaurant) => restaurant.id.toString()}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
});


export default HomeScreen;