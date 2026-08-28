import { View, Text, StyleSheet } from 'react-native';

type Contato = {
  id: string;
  nome: string;
  telefone: string;
};

type Props = {
  contato: Contato;
};

export default function ContatoCard({ contato }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.nome}>{contato.nome}</Text>
      <Text style={styles.telefone}>{contato.telefone}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },

  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 5,
  },

  telefone: {
    fontSize: 16,
    color: '#666',
  },
});