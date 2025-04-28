import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

export default function Conversao() {
    const [valor, setValor] = useState ('');
    const [resultado, setResultado] = useState ('');
    const [modo, setModo] = useState ('BRL-USD');

    async function converter() {
        if (valor == '') {
            alert ('Digite o valor');
            return;
        }

        try {
            const resposta = await fetch(`https://economia.awesomeapi.com.br/json/last/${modo}`)
            const dados = await resposta.json();
            const cotacao = modo === 'BRL-USD' ? dados.BRLUSD.high : dados.USDBRL.high;
            const valorConvertido = modo === 'BRL-USD'
            ? (parseFloat(valor) * cotacao).toFixed(2)
            : (parseFloat(valor) / cotacao).toFixed(2);

            setResultado(`Resultado: ${valorConvertido} ${modo === 'BRL-USD' ? 'USD' : 'BRL'}`);
        } catch (erro) {
            console.error('Erro ao buscar a API:', erro);
            alert('Erro na conversão');
        }
    }

    function trocarModo() {
        setModo(modo === 'BRL-USD' ? 'USD-BRL' : 'BRL-USD');
        setResultado('');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Digite o valor:</Text>
            <TextInput
                style={styles.input}
                placeholder='Valor'
                keyboardType='numeric'
                value={valor}
                onChangeText={setValor}
            />

            <Button title={`Converter ${modo === 'BRL-USD' ? 'Real → Dólar' : 'Dólar → Real'}`} 
                onPress={converter} 
            />
            <View style={{ marginTop: 20 }}>
                <Button title='Trocar Modo' onPress={trocarModo} color='gray' />
            </View>
            {resultado !== '' && <Text style={styles.resultado}>{resultado}</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 100,
      alignItems: 'center',
      backgroundColor: '#fff',
      paddingHorizontal: 20,
      gap: 20,
    },
    label: {
      fontSize: 24,
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      width: '100%',
      height: 50,
      paddingHorizontal: 10,
      fontSize: 18,
      borderRadius: 5,
    },
    resultado: {
      marginTop: 30,
      fontSize: 22,
      fontWeight: 'bold',
    },
  });