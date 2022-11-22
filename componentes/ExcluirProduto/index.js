import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { excluirProduto } from '../../services/ProdutosService';
import lixeira from '../../assets/lixeira.png';


export default function ExcluirProduto({ produto }) {
  const navigation = useNavigation();
  return (
        <TouchableOpacity onPress={() => {
            excluirProduto({ id: produto.id });
            navigation.navigate('Listagem');
        } }>
          <Image source={ lixeira } style={estilos.lixeira} />
        </TouchableOpacity>
    );
}

const estilos = StyleSheet.create({
  lixeira: {
    margin: 6,
    width: 20,
    height: 20,
  },
});
