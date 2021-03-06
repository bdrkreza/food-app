import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colorCollection from '../../assets/Colors/Colors';

const FoodCard = ({ info }) => {
    const { name, categories, image } = info;
    console.log(info)
    return (
        <View style={styles.container}>
            <View style={styles.cardContainer}>
                <Image style={styles.imageStyle} source={image} />

                <View style={styles.infoStyle}>

                    <Text style={styles.titleStyle}>{name}</Text>
                    <View style={styles.btn}>
                        <Text style={styles.categoryStyle}>{categories}
                        </Text>
                        <View style={styles.addToCartBtn}>
                            <Icon name="add" size={20} color={colorCollection.white} />
                        </View>
                    </View>

                </View>
            </View>
        </View>
    );
};

const deviceWidth = Math.round(Dimensions.get('window').width);
const offset = 40;
const radius = 20;
const styles = StyleSheet.create({
    container: {
        width: deviceWidth - 20,
        alignItems: 'center',
        marginTop: 25,
    },
    cardContainer: {
        width: deviceWidth - offset,
        backgroundColor: '#B6B6B4',
        height: 200,
        borderRadius: radius,

        shadowColor: '#000',
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.75,
        shadowRadius: 5,
        elevation: 9,
    },
    imageStyle: {
        height: 130,
        width: deviceWidth - offset,
        borderTopLeftRadius: radius,
        borderTopRightRadius: radius,
        opacity: 0.9,
        alignContent: 'center',
        alignSelf: 'center',
    },
    titleStyle: {
        fontSize: 20,
        fontWeight: '800',
    },
    categoryStyle: {
        fontWeight: '200',
    },
    infoStyle: {
        marginHorizontal: 10,
        marginVertical: 5,
    },
    iconLabelStyle: {
        flexDirection: 'row',
        marginTop: 10,
    },
    addToCartBtn: {
        height: 40,
        width: 40,
        borderRadius: 20,
        backgroundColor: colorCollection.primary,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: "360px",
    },
    btn: {
        display: 'flex',
        justifyContent: "space-evenly"
    }
});

export default FoodCard;
