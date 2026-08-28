import { useState } from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function CalculadoraIMC() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState<number | null>(null);
  const [classificacao, setClassificacao] = useState('');

  function calcularIMC() {
    const pesoNumerico = Number(peso.replace(',', '.'));
    const alturaNumerica = Number(altura.replace(',', '.'));

    if (
      !peso ||
      !altura ||
      pesoNumerico <= 0 ||
      alturaNumerica <= 0
    ) {
      Alert.alert(
        'Atenção',
        'Digite um peso e uma altura válidos.'
      );
      return;
    }

    // Fórmula: IMC = peso / (altura * altura)
    const imc = pesoNumerico / (alturaNumerica * alturaNumerica);

    setResultado(imc);

    if (imc < 18.5) {
      setClassificacao('Abaixo do peso');
    } else if (imc < 25) {
      setClassificacao('Peso normal');
    } else if (imc < 30) {
      setClassificacao('Sobrepeso');
    } else if (imc < 35) {
      setClassificacao('Obesidade grau I');
    } else if (imc < 40) {
      setClassificacao('Obesidade grau II');
    } else {
      setClassificacao('Obesidade grau III');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Exercício 4
      </Text>

      <Text style={styles.subtitulo}>
        Calculadora de IMC
      </Text>

      <View style={styles.formulario}>

        {/* PESO */}

        <Text style={styles.label}>
          Peso (kg)
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Ex: 70"
          keyboardType="decimal-pad"
          value={peso}
          onChangeText={setPeso}
        />

        {/* ALTURA */}

        <Text style={styles.label}>
          Altura (m)
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Ex: 1.75"
          keyboardType="decimal-pad"
          value={altura}
          onChangeText={setAltura}
        />

        {/* BOTÃO */}

        <TouchableOpacity
          style={styles.botao}
          onPress={calcularIMC}
        >
          <Text style={styles.textoBotao}>
            Calcular
          </Text>
        </TouchableOpacity>

        {/* RESULTADO */}

        {resultado !== null && (
          <View style={styles.resultado}>
            <Text style={styles.textoResultado}>
              Seu IMC
            </Text>

            <Text style={styles.valorIMC}>
              {resultado.toFixed(2)}
            </Text>

            <Text style={styles.classificacao}>
              {classificacao}
            </Text>
          </View>
        )}

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

    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },

  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
    marginBottom: 8,
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

  resultado: {
    marginTop: 25,
    padding: 20,
    backgroundColor: '#f0f7ff',
    borderRadius: 10,
    alignItems: 'center',
  },

  textoResultado: {
    fontSize: 16,
    color: '#555',
  },

  valorIMC: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#2196F3',
    marginVertical: 5,
  },

  classificacao: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});