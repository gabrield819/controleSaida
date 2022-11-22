import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, TextInput,
    Button, View, Alert } from 'react-native';
import { inserirProduto } from '../../services/ProdutosService';


export default function TelaRegistro({ navigation }) {
    const [produto, onChangeProduto] = useState("");
    const [descricao, onChangeDescricao] = useState(null);
    const [valorUnitario, onChangeValorUnitario] = useState(null);
    const [quantidade, onChangeQuantidade] = useState(null);

    return (
        <SafeAreaView style={estilos.painel}>
            <Text style={estilos.titulo}>Novo produto</Text>

            <Text>Produto</Text>
            <TextInput
                style={estilos.input}
                onChangeText={onChangeProduto}
                placeholder="Informe o produto"
                value={produto}
            />

            <Text>Descrição</Text>
            <TextInput
                style={estilos.input}
                onChangeText={onChangeDescricao}
                placeholder="descreva o produto"
                value={descricao}
            />

            <Text>Valor unitario</Text>
            <TextInput
                style={estilos.input}
                onChangeText={onChangeValorUnitario}
                value={valorUnitario}
                placeholder="informe o valor unitario"
                keyboardType="number-pad"
            />

            <Text>Quantidade</Text>
            <TextInput
                style={estilos.input}
                onChangeText={onChangeQuantidade}
                value={quantidade}
                placeholder="Informe a quantidade"
                keyboardType="number-pad"
            />

            <View style={estilos.painelBotoes}>
                <Button
                    onPress={() => {
                        const novoProduto = {
                            produto: produto,
                            descricao: descricao,
                            valorUnitario: valorUnitario,
                            quantidade: quantidade,
                        };
                        if (produto.length === 0) {
                            Alert.alert("Erro", "O campo produto é uma informação obrigatória!");
                            return;
                        }
                        inserirProduto({ novoProduto });
                        navigation.navigate('Listagem');
                    }}
                    title="Salvar"
                    color="#841584"
                />

                <Button
                    onPress={() => {
                        navigation.goBack();
                    }}
                    title="Cancelar"
                />
            </View>

        </SafeAreaView>
    );
}

const estilos = StyleSheet.create({
    painel: {
        paddingHorizontal: 8,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    titulo: {
        fontSize: 22,
        marginTop: 6,
        marginBottom: 10,
    },
    painelBotoes: {
        flexDirection: 'row',
        width: '100%',
        marginTop: 10,
        paddingHorizontal: 12,
        justifyContent: 'space-between',
    },
});
