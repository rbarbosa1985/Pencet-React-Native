import React, { useEffect, useState } from 'react';
import { Text, FlatList, View, Image, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './Styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Funcionario} from './Types';
import Item from '../../components/Flatlist/Flatlist';
import axios from 'axios';
import { Link } from '@react-navigation/native';

const BASE_URL = 'http://residencia-ecommerce.us-east-1.elasticbeanstalk.com';

const Home = () => {

  const [funcionarios, setFuncionarios] = useState<Funcionario[]>([]);

  useEffect(() => {
    axios.get(`${BASE_URL}/funcionario`).
    then(response => {
      setFuncionarios(response.data);})
      .catch(() => Alert.alert('Erro ao listar os Funcionarios!'));
    }, []);

  const renderItem = ({item}) => (
    
      <Item nome={item.nome} cpf={item.cpf} />
    
  );

  return (
    <SafeAreaView style={styles.container} >
      <Text style={styles.title}>Funcionários</Text>
      <FlatList data={funcionarios} renderItem={renderItem} keyExtractor={ item=>item.id }/>  
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Novo Funcionário</Text>
      </TouchableOpacity>  
    </SafeAreaView>
  );
};

export default Home;