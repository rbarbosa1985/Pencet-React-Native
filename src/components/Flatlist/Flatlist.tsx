import React from 'react';
import { Text, Image, View } from 'react-native';
import {styles} from './Styles';

const Item = ({nome, cpf}) => {
    return (
      <View style={styles.item}> 
        <View style={styles.viewimg}>
          <Image style={ styles.logo } source={require('../../assets/img/logo.png')}></Image>
        </View>
        <View style={styles.viewtxt}>
          <Text style={styles.nome}>Nome: {nome}</Text>
          <Text style={styles.cargo}>CPF: {cpf}</Text>
        </View>
      </View>
    );
};

export default Item;