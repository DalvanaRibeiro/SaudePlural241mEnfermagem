import { Colors } from '@/constants/Colors';
import { getModuleById } from '@/data/modules';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function formatDate() {
  return new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' }).format(new Date());
}

export default function CertificateScreen() {
  const { id, score, name } = useLocalSearchParams();
  const router = useRouter();
  const moduleData = getModuleById(id);
  const finalScore = Array.isArray(score) ? score[0] : score;
  const participantName = (Array.isArray(name) ? name[0] : name)?.trim() || 'Participante';

  if (!moduleData) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorTitle}>Certificado não encontrado.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <LinearGradient colors={Colors.rainbow as any} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.background} />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.certificate}>
          <View style={[styles.ribbon, { backgroundColor: moduleData.color }]}>
            <Ionicons name="ribbon" size={54} color="#fff" />
          </View>

          <Text style={styles.smallTitle}>CERTIFICADO DE CONCLUSÃO</Text>
          <Text style={styles.mainTitle}>Saúde Plural</Text>

          <View style={styles.divider} />

          <Text style={styles.certText}>Certificamos que</Text>
          <Text style={[styles.participantName, { color: moduleData.color }]}>{participantName}</Text>
          <Text style={styles.certText}>concluiu com aproveitamento o módulo:</Text>
          <Text style={[styles.moduleTitle, { color: moduleData.color }]}>{moduleData.title} - {moduleData.subtitle}</Text>

          <Text style={styles.certText}>obtendo {finalScore || '5'} acertos de 5 questões na avaliação final.</Text>

          <View style={styles.dateBox}>
            <Text style={styles.dateLabel}>Emitido em</Text>
            <Text style={styles.dateText}>{formatDate()}</Text>
          </View>

          <Text style={styles.footer}>Projeto Integrador • Técnico de Enfermagem 24.1M • Senac São Leopoldo</Text>
        </View>

        <TouchableOpacity style={styles.primaryButton} onPress={() => router.replace('/(tabs)/two')}>
          <Ionicons name="home" size={20} color="#fff" />
          <Text style={styles.primaryButtonText}>Voltar aos módulos</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  background: { position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 },
  scrollContent: { flexGrow: 1, justifyContent: 'center', padding: 20, paddingTop: 55, paddingBottom: 35 },
  certificate: { backgroundColor: '#fff', borderRadius: 24, padding: 24, alignItems: 'center', borderWidth: 3, borderColor: 'rgba(0,0,0,0.08)', shadowColor: '#000', shadowOffset: { width: 0, height: 3 }, shadowOpacity: 0.16, shadowRadius: 7, elevation: 6 },
  ribbon: { width: 96, height: 96, borderRadius: 48, alignItems: 'center', justifyContent: 'center', marginBottom: 18 },
  smallTitle: { fontSize: 14, letterSpacing: 1.5, fontWeight: 'bold', color: '#555', textAlign: 'center' },
  mainTitle: { fontSize: 32, fontWeight: 'bold', color: '#111', marginTop: 8, textAlign: 'center' },
  divider: { width: '85%', height: 1, backgroundColor: '#ddd', marginVertical: 22 },
  certText: { fontSize: 16, color: '#444', lineHeight: 24, textAlign: 'center', marginBottom: 12 },
  participantName: { fontSize: 27, fontWeight: 'bold', textAlign: 'center', marginBottom: 12, textTransform: 'capitalize' },
  moduleTitle: { fontSize: 23, fontWeight: 'bold', textAlign: 'center', marginBottom: 14 },
  dateBox: { backgroundColor: '#f7f7f7', padding: 14, borderRadius: 14, width: '100%', alignItems: 'center', marginTop: 8, marginBottom: 18 },
  dateLabel: { color: '#777', fontSize: 13 },
  dateText: { color: '#222', fontSize: 16, fontWeight: 'bold', marginTop: 3, textTransform: 'capitalize' },
  footer: { fontSize: 12, color: '#777', textAlign: 'center', lineHeight: 18 },
  primaryButton: { backgroundColor: Colors.primary, padding: 16, borderRadius: 16, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', gap: 8, marginTop: 18 },
  primaryButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  errorTitle: { marginTop: 80, textAlign: 'center', fontSize: 20, fontWeight: 'bold' },
});
