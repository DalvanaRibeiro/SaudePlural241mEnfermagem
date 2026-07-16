import { Colors } from '@/constants/Colors';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function AboutScreen() {
  const router = useRouter();

  return (
    <View style={styles.mainContainer}>
      <LinearGradient
        colors={Colors.rainbow as any}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.background}
      />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.card}>
          <Text style={styles.text}>
            Este curso pretende ampliar e aperfeiçoar a capacitação de profissionais do serviço de saúde, quanto ao atendimento e acolhimento à comunidade LGBTQIAPNA+, visando diminuir o preconceito e discriminação dentro das unidades básicas de saúde, proporcionando um ambiente de maior conforto e respeito.
          </Text>

          <Text style={styles.text}>
            Como parte do Projeto Integrador, possui o intuito de gerar um impacto social positivo dentro da comunidade, relacionando saúde e diversidade.
          </Text>

          <View style={styles.divider} />

          <Text style={styles.footerText}>
            Criado e desenvolvido pela turma do Técnico de Enfermagem 24.1M, Senac São Leopoldo, 2024.
          </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push('/(tabs)/two')}
          >
            <Text style={styles.buttonText}>Acessar Conteúdo</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Increased transparency for glass effect
    padding: 30,
    borderRadius: 20,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    fontSize: 18,
    color: '#333',
    lineHeight: 28,
    textAlign: 'justify',
    marginBottom: 20,
  },
  divider: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 20,
  },
  footerText: {
    fontSize: 16,
    color: Colors.primary,
    textAlign: 'center',
    fontWeight: '600',
    fontStyle: 'italic',
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 30,
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
