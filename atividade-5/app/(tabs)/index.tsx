import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

type Contato = {
  id: string;
  nome: string;
  telefone: string;
};

const contatos: Contato[] = [
  {
    id: '1',
    nome: 'João Silva',
    telefone: '(81) 99999-1111',
  },
  {
    id: '2',
    nome: 'Maria Santos',
    telefone: '(81) 98888-2222',
  },
  {
    id: '3',
    nome: 'Pedro Oliveira',
    telefone: '(81) 97777-3333',
  },
  {
    id: '4',
    nome: 'Ana Costa',
    telefone: '(81) 96666-4444',
  },
  {
    id: '5',
    nome: 'Lucas Souza',
    telefone: '(81) 95555-5555',
  },
];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Lista de Contatos</Text>

      <FlatList
        data={contatos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.telefone}>{item.telefone}</Text>
          </View>
        )}
      />
    </SafeAreaView>
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
    marginBottom: 20,
    color: '#222',
  },

  card: {
    backgroundColor: '#fff',
    padding: 18,
    marginBottom: 12,
    borderRadius: 12,

    // Sombra
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,

    elevation: 3,
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