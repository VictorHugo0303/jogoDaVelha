import { useState } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import Cell from './Cell';

export default function TableHumano() {
  const [tabuleiro, setTabuleiro] = useState(Array(9).fill(''));
  const [jogadorX, setJogadorX] = useState(true);
  const [fimDeJogo, setFimDeJogo] = useState(false);
  const [mensagem, setMensagem] = useState('');

  const vitorias = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
  ];

  const checarVencedor = (tab) => {
    for (const [a, b, c] of vitorias) {
      if (tab[a] && tab[a] === tab[b] && tab[a] === tab[c]) {
        return tab[a];
      }
    }
    if (!tab.includes('')) return 'Empate';
    return null;
  };

  const jogar = (index) => {
    if (tabuleiro[index] !== '' || fimDeJogo) return;

    const novoTab = [...tabuleiro];
    novoTab[index] = jogadorX ? 'X' : 'O';
    const vencedor = checarVencedor(novoTab);

    setTabuleiro(novoTab);
    setJogadorX(!jogadorX);

    if (vencedor) {
      setFimDeJogo(true);
      setMensagem(vencedor === 'Empate' ? 'Empate!' : `${vencedor} venceu!`);
    }
  };

  const resetar = () => {
    setTabuleiro(Array(9).fill(''));
    setJogadorX(true);
    setFimDeJogo(false);
    setMensagem('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.board}>
        {tabuleiro.map((valor, i) => (
          <Cell key={i} value={valor} onPress={() => jogar(i)} />
        ))}
      </View>
      {fimDeJogo && (
        <View style={styles.mensagem}>
          <Text style={styles.text}>{mensagem}</Text>
          <Button title="Jogar novamente" onPress={resetar} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
  board: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 300,
  },
  mensagem: {
    marginTop: 20,
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 10,
  }
});
