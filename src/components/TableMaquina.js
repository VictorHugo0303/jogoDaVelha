import { useState } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import Cell from './Cell';

export default function TableMaquina() {
  const [tabuleiro, setTabuleiro] = useState(Array(9).fill(''));
  const [fimDeJogo, setFimDeJogo] = useState(false);
  const [mensagem, setMensagem] = useState('');

  const vitorias = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6],
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

  const maquinaJoga = (tab) => {
    const novoTab = [...tab];
    const index = novoTab.findIndex(v => v === '');
    if (index !== -1) {
      novoTab[index] = 'O';
    }
    return novoTab;
  };

  const jogar = (index) => {
    if (tabuleiro[index] !== '' || fimDeJogo) return;

    const novoTabuleiro = [...tabuleiro];
    novoTabuleiro[index] = 'X';

    let vencedor = checarVencedor(novoTabuleiro);
    if (vencedor) {
      setTabuleiro(novoTabuleiro);
      setFimDeJogo(true);
      setMensagem(vencedor === 'Empate' ? 'Empate!' : `${vencedor} venceu!`);
      return;
    }

    const aposMaquina = maquinaJoga(novoTabuleiro);
    vencedor = checarVencedor(aposMaquina);

    setTabuleiro(aposMaquina);
    if (vencedor) {
      setFimDeJogo(true);
      setMensagem(vencedor === 'Empate' ? 'Empate!' : `${vencedor} venceu!`);
    }
  };

  const resetar = () => {
    setTabuleiro(Array(9).fill(''));
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
