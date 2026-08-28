import { useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const itens = [
  'React Native',
  'JavaScript',
  'TypeScript',
  'Python',
  'HTML',
  'CSS',
  'Node.js',
  'MongoDB',
  'MySQL',
  'GitHub',
];

export default function Busca() {
  const [busca, setBusca] = useState('');

  // Filtra os itens conforme o usuário digita
  const itensFiltrados = itens.filter((item) =>
    item.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Exercício 5
      </Text>

      <Text style={styles.subtitulo}>
        Busca em Lista
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Digite para buscar..."
        value={busca}
        onChangeText={setBusca}
      />

      <FlatList
        data={itensFiltrados}
        keyExtractor={(item) => item}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.texto}>
              {item}
            </Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.nenhumResultado}>
            Nenhum item encontrado.
          </Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 20,
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#222',
    marginTop: 20,
  },

  subtitulo: {
    fontSize: 18,
    color: '#666',
    marginBottom: 20,
  },

  input: {
    height: 50,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 15,
  },

  card: {
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 10,
    marginBottom: 10,

    elevation: 3,

    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },

  texto: {
    fontSize: 17,
    color: '#333',
  },

  nenhumResultado: {
    textAlign: 'center',
    fontSize: 16,
    color: '#777',
    marginTop: 30,
  },
});