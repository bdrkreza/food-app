import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import colorCollection from '../../assets/Colors/Colors';


const PrimaryButton = ({ title, onPress = () => { } }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={style.btnContainer}>
        <Text style={style.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
const SecondaryButton = ({ title, onPress = () => { } }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={{ ...style.btnContainer, backgroundColor: colorCollection.white }}>
        <Text style={{ ...style.title, color: colorCollection.primary }}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  title: { color: colorCollection.white, fontWeight: 'bold', fontSize: 18 },
  btnContainer: {
    backgroundColor: colorCollection.primary,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export { PrimaryButton, SecondaryButton };
