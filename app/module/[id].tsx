import { Colors } from '@/constants/Colors';
import { getModuleById } from '@/data/modules';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ModuleDetailScreen() {
  const { id, name } = useLocalSearchParams();
  const router = useRouter();
  const moduleData = getModuleById(id);

  if (!moduleData) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorTitle}>Módulo não encontrado.</Text>
        <TouchableOpacity style={styles.primaryButton} onPress={() => router.back()}>
          <Text style={styles.primaryButtonText}>Voltar</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <LinearGradient colors={Colors.rainbow as any} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.background} />

      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={26} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{moduleData.title}</Text>
        <View style={{ width: 36 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.card}>
          <View style={[styles.cardHeader, { backgroundColor: moduleData.color }]}>
            <Ionicons name="book" size={34} color="#fff" />
            <Text style={styles.cardTitle}>{moduleData.title}</Text>
            <Text style={styles.cardSubtitle}>{moduleData.subtitle}</Text>
          </View>

          <View style={styles.cardBody}>
            {moduleData.content.map((paragraph, index) => (
              <Text key={index} style={styles.content}>{paragraph}</Text>
            ))}

            <View style={styles.infoBox}>
              <Ionicons name="checkmark-circle" size={22} color={moduleData.color} />
              <Text style={styles.infoText}>Após estudar este módulo, responda a prova com 5 questões. Para gerar o certificado, acerte pelo menos 3 questões.</Text>
            </View>

            <TouchableOpacity
              style={[styles.primaryButton, { backgroundColor: moduleData.color }]}
              onPress={() => router.push({ pathname: '/quiz/[id]', params: { id: moduleData.id, name: Array.isArray(name) ? name[0] : name } })}
            >
              <Text style={styles.primaryButtonText}>Iniciar prova</Text>
              <Ionicons name="arrow-forward" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  background: { position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingTop: 50, paddingHorizontal: 20, paddingBottom: 18 },
  backButton: { padding: 6, backgroundColor: 'rgba(255,255,255,0.7)', borderRadius: 20 },
  headerTitle: { fontSize: 21, fontWeight: 'bold', color: '#000' },
  scrollContent: { padding: 20, paddingBottom: 30 },
  card: { backgroundColor: '#fff', borderRadius: 22, overflow: 'hidden', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.14, shadowRadius: 5, elevation: 5 },
  cardHeader: { padding: 24, alignItems: 'center' },
  cardTitle: { fontSize: 28, fontWeight: 'bold', color: '#fff', marginTop: 8, marginBottom: 4 },
  cardSubtitle: { fontSize: 16, color: 'rgba(255,255,255,0.95)', textAlign: 'center', fontWeight: '600' },
  cardBody: { padding: 22 },
  content: { fontSize: 16, lineHeight: 25, color: '#333', marginBottom: 14, textAlign: 'justify' },
  infoBox: { flexDirection: 'row', gap: 10, backgroundColor: '#f7f7f7', padding: 14, borderRadius: 14, marginTop: 8, marginBottom: 22 },
  infoText: { flex: 1, fontSize: 14, color: '#444', lineHeight: 20 },
  primaryButton: { padding: 16, borderRadius: 14, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', gap: 8 },
  primaryButtonText: { color: '#fff', fontSize: 17, fontWeight: 'bold' },
  errorTitle: { marginTop: 80, textAlign: 'center', fontSize: 20, fontWeight: 'bold' },
});
