import React from 'react';
import { Text, Image, View } from 'react-native';
import {styles} from './Styles';

const Header = () => {
    return (
        <View style={ styles.container}>
            <Text style={ styles.text } >Pencet</Text>
            <Image style={ styles.logo } source={require('../../assets/img/logo.png')}></Image>
        </View>
    );
};

export default Header;