import { useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

type Tarefa = {
  id: string;
  texto: string;
  concluida: boolean;
};

const tarefasIniciais: Tarefa[] = [
  {
    id: '1',
    texto: 'Estudar React Native',
    concluida: true,
  },
  {
    id: '2',
    texto: 'Fazer os exercícios',
    concluida: false,
  },
  {
    id: '3',
    texto: 'Praticar TypeScript',
    concluida: true,
  },
  {
    id: '4',
    texto: 'Subir projeto para o GitHub',
    concluida: false,
  },
  {
    id: '5',
    texto: 'Revisar o conteúdo',
    concluida: false,
  },
];

export default function Tarefas() {
  const [tarefas, setTarefas] = useState(tarefasIniciais);

  function alternarTarefa(id: string) {
    setTarefas((tarefasAtuais) =>
      tarefasAtuais.map((tarefa) =>
        tarefa.id === id
          ? {
              ...tarefa,
              concluida: !tarefa.concluida,
            }
          : tarefa
      )
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Exercício 3
      </Text>

      <Text style={styles.subtitulo}>
        Lista de Tarefas
      </Text>

      <FlatList
        data={tarefas}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => alternarTarefa(item.id)}
          >
            {/* Checkbox visual */}
            <View
              style={[
                styles.checkbox,
                item.concluida && styles.checkboxConcluido,
              ]}
            >
              <Text style={styles.check}>
                {item.concluida ? '✓' : '○'}
              </Text>
            </View>

            {/* Texto da tarefa */}
            <Text
              style={[
                styles.textoTarefa,
                item.concluida && styles.tarefaConcluida,
              ]}
            >
              {item.texto}
            </Text>
          </TouchableOpacity>
        )}
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

  card: {
    backgroundColor: '#fff',
    minHeight: 65,
    borderRadius: 12,
    marginBottom: 12,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',

    elevation: 3,

    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },

  checkbox: {
    width: 35,
    height: 35,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#999',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },

  checkboxConcluido: {
    borderColor: '#2196F3',
  },

  check: {
    fontSize: 24,
    color: '#2196F3',
    fontWeight: 'bold',
  },

  textoTarefa: {
    flex: 1,
    fontSize: 17,
    color: '#333',
  },

  tarefaConcluida: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
});