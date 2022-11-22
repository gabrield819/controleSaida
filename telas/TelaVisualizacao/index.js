import React from 'react';
import { StyleSheet, Text, SafeAreaView, Button, View } from 'react-native';

import ExcluirProduto from '../../componentes/ExcluirProduto';


export default function TelaVisualizacao({ route, navigation }) {
    const { id, produto, descricao, valorUnitario, quantidade } = route.params;
    const item = { id, produto, descricao, valorUnitario, quantidade };
    return (
        <SafeAreaView style={estilos.painelPrincipal}>
            <Text style={estilos.titulo}>{ produto }</Text>
            <Text style={estilos.rotulo}>Descrcição do produto:</Text>
            <Text style={estilos.campo}>{ descricao ? descricao : '--- não informado ---' }</Text>
            <Text style={estilos.rotulo}>valor por unidade:</Text>
            <Text style={estilos.campo}>{ valorUnitario }</Text>
            <Text style={estilos.rotulo}>Quantidade:</Text>
            <Text style={estilos.campo}>{ quantidade }</Text>
            <View style={estilos.painelBotoes}>
                <Button
                    onPress={() => {
                        navigation.goBack();
                    }}
                    title="Voltar"
                    color="#841584"
                    style={estilos.botao}
                />
                <ExcluirProduto produto={item} />
            </View>
        </SafeAreaView>
    );
}

const estilos = StyleSheet.create({
    painelPrincipal: {
        paddingHorizontal: 10,
    },
    titulo: {
        fontSize: 32,
    },
    rotulo: {
        color: 'grey',
        paddingTop: 10,
    },
    campo: {
        borderWidth: 1,
        borderStyle: 'dotted',
        borderColor: 'grey',
        paddingVertical: 10,
        paddingHorizontal: 6,
    },
    painelBotoes: {
        flexDirection: 'row',
        width: '100%',
        paddingVertical: 10,
        justifyContent: 'space-between',
    },
});
