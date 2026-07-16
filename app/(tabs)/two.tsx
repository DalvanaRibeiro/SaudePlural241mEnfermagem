import { Colors } from '@/constants/Colors';
import { modules } from '@/data/modules';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function ResourcesScreen() {
  const router = useRouter();
  const [participantName, setParticipantName] = useState('');

  function openModule(moduleId: string) {
    const name = participantName.trim();

    if (!name) {
      Alert.alert('Informe seu nome', 'Digite seu nome completo para acessar os módulos e emitir o certificado.');
      return;
    }

    router.push({ pathname: '/module/[id]', params: { id: moduleId, name } });
  }

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={Colors.rainbow as any}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.background}
      />

      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/images/LGB.jpg')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
        <View>
          <Text style={styles.headerTitle}>Saúde Plural</Text>
          <Text style={styles.headerSubtitle}>Escolha uma unidade curricular</Text>
        </View>
      </View>

      <View style={styles.userBar}>
        <Ionicons name="book-outline" size={24} color="#333" />
        <Text style={styles.userName}>Curso de acolhimento em saúde</Text>
        <Ionicons name="school-outline" size={28} color="#333" />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.nameCard}>
          <View style={styles.nameHeader}>
            <Ionicons name="person-circle-outline" size={26} color={Colors.primary} />
            <View style={styles.nameHeaderText}>
              <Text style={styles.nameTitle}>Nome do participante</Text>
              <Text style={styles.nameHint}>Este nome será exibido no certificado.</Text>
            </View>
          </View>

          <TextInput
            style={styles.nameInput}
            value={participantName}
            onChangeText={setParticipantName}
            placeholder="Digite seu nome completo"
            placeholderTextColor="#888"
            autoCapitalize="words"
            returnKeyType="done"
          />
        </View>

        {modules.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.card}
            activeOpacity={0.85}
            onPress={() => openModule(item.id)}
          >
            <View style={[styles.cardBorder, { backgroundColor: item.color }]} />
            <View style={styles.cardContent}>
              <Text style={[styles.cardTitle, { color: item.color }]}>{item.title}</Text>
              <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
              <Text style={styles.cardDescription}>{item.description}</Text>
            </View>
            <View style={[styles.iconContainer, { backgroundColor: item.color + '20' }]}>
              <Ionicons name="chevron-forward" size={24} color={item.color} />
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  background: { position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 },
  header: { flexDirection: 'row', alignItems: 'center', paddingTop: 50, paddingHorizontal: 20, paddingBottom: 10 },
  logoContainer: { width: 56, height: 56, borderRadius: 28, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', marginRight: 12, elevation: 4 },
  logo: { width: 44, height: 44, borderRadius: 22 },
  headerTitle: { fontSize: 26, fontWeight: 'bold', color: '#000' },
  headerSubtitle: { fontSize: 13, color: '#333', marginTop: 2 },
  userBar: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'rgba(255,255,255,0.92)', marginHorizontal: 20, padding: 12, borderRadius: 30, marginBottom: 20 },
  userName: { fontSize: 15, color: '#333', fontWeight: '600' },
  scrollContent: { paddingHorizontal: 20, paddingBottom: 28 },
  nameCard: { backgroundColor: 'rgba(255,255,255,0.96)', borderRadius: 18, padding: 16, marginBottom: 18, elevation: 5, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.12, shadowRadius: 5 },
  nameHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  nameHeaderText: { flex: 1, marginLeft: 10 },
  nameTitle: { fontSize: 16, fontWeight: 'bold', color: '#222' },
  nameHint: { fontSize: 12, color: '#666', marginTop: 2 },
  nameInput: { borderWidth: 1, borderColor: '#d8d8d8', backgroundColor: '#fff', borderRadius: 13, paddingHorizontal: 14, paddingVertical: 13, fontSize: 16, color: '#222' },
  card: { flexDirection: 'row', backgroundColor: '#fff', borderRadius: 18, marginBottom: 15, overflow: 'hidden', minHeight: 112, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.12, shadowRadius: 5, elevation: 5 },
  cardBorder: { width: 7, height: '100%' },
  cardContent: { flex: 1, padding: 15, justifyContent: 'center' },
  cardTitle: { fontSize: 17, fontWeight: 'bold', marginBottom: 2 },
  cardSubtitle: { fontSize: 14, color: '#222', fontWeight: '700', marginBottom: 5 },
  cardDescription: { fontSize: 12, color: '#666', lineHeight: 16 },
  iconContainer: { width: 50, justifyContent: 'center', alignItems: 'center', borderLeftWidth: 1, borderLeftColor: '#eee' },
});
