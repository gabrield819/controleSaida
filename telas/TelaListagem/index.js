import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, SafeAreaView, FlatList, StatusBar, Button, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ExcluirProduto from '../../componentes/ExcluirProduto';
import {listarProdutos, selecionarProduto } from '../../services/ProdutosService';


function Produto({ produto }) {
    const navigation = useNavigation();

    return (
        <View style={estilos.itemContainer}>
            <TouchableOpacity onPress={() => {
                navigation.navigate('Visualizacao', { ...produto });
                selecionarProduto({ id: produto.id });
            }} style={[estilos.item]}>
                <Text style={estilos.titulo}>{ produto?.produto} = {produto?.quantidade} volumes.</Text>
            </TouchableOpacity>
            <ExcluirProduto produto={produto} />
        </View>
    );
}

function Cabecalho() {
    return (
        <View style={estilos.painel}>
            <Text style={estilos.titulo}>Meus produtos</Text>
        </View>
    );
}

function Rodape() {
    const navigation = useNavigation();
    return (
        <View style={estilos.painel}>
            <Button
                onPress={() => {
                    navigation.navigate('Registro', { produto: null });
                }}
                title="Registrar"
                color="#841584"
                accessibilityLabel="Registrar um novo produto"
            />
        </View>
);
}

function ListaVazia() {
    return (
        <View style={estilos.painel}>
            <Text>Não tem nenhum produto registrado.</Text>
            <Text>Faça o registro utilizando o botão "Registrar"</Text>
        </View>
    );
}

export default function TelaListagem() {
    const [selectedId, setSelectedId] = useState(null);

    const renderProduto = ({ item: produto }) => {
        const backgroundColor = Produto?.id === selectedId ? "#6e3b6e" : "#f9c2ff";
        const color = Produto?.id === selectedId ? 'white' : 'black';
        return (
            <Produto
                produto={produto}
                onPress={() => setSelectedId(produto.id)}
                backgroundColor={{ backgroundColor }}
                textColor={{ color }}
            />
        );
    };
    var meusProdutos = listarProdutos();

    return (
        <SafeAreaView style={estilos.container}>
            <FlatList
                data={meusProdutos}
                renderItem={renderProduto}
                keyExtractor={Produto => Produto.id}
                ListHeaderComponent={Cabecalho}
                ListFooterComponent={Rodape}
                ListEmptyComponent={ListaVazia}
            />
        </SafeAreaView>
    );
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        width: '80%',
    },
    titulo: {
        fontSize: 20,
    },
    itemContainer: {
        flexDirection: 'row',
    },
    painel: {
        paddingHorizontal: 10,
        paddingTop: 10,
    },
});
