import { useState } from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function FormularioCadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');

  function cadastrar() {
    if (!nome || !email || !telefone) {
      Alert.alert(
        'Atenção',
        'Preencha todos os campos!'
      );
      return;
    }

    Alert.alert(
      'Cadastro realizado!',
      `Nome: ${nome}\nEmail: ${email}\nTelefone: ${telefone}`
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Exercício 2
      </Text>

      <Text style={styles.subtitulo}>
        Formulário de Cadastro
      </Text>

      <View style={styles.formulario}>

        <Text style={styles.label}>
          Nome
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          value={nome}
          onChangeText={setNome}
        />

        <Text style={styles.label}>
          Email
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Digite seu email"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>
          Telefone
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Digite seu telefone"
          keyboardType="phone-pad"
          value={telefone}
          onChangeText={setTelefone}
        />

        <TouchableOpacity
          style={styles.botao}
          onPress={cadastrar}
        >
          <Text style={styles.textoBotao}>
            Cadastrar
          </Text>
        </TouchableOpacity>

      </View>
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

  formulario: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    elevation: 3,
  },

  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
    marginTop: 10,
  },

  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#fafafa',
  },

  botao: {
    height: 50,
    backgroundColor: '#2196F3',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },

  textoBotao: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
});