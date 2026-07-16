import { Colors } from '@/constants/Colors';
import { getModuleById } from '@/data/modules';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useMemo, useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function QuizScreen() {
  const { id, name } = useLocalSearchParams();
  const router = useRouter();
  const moduleData = getModuleById(id);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const passingScore = 3;

  const score = useMemo(() => {
    if (!moduleData) return 0;
    return moduleData.questions.reduce((total, question, index) => {
      return total + (answers[index] === question.answerIndex ? 1 : 0);
    }, 0);
  }, [answers, moduleData]);

  if (!moduleData) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorTitle}>Prova não encontrada.</Text>
      </View>
    );
  }

  const totalAnswered = Object.keys(answers).length;
  const completed = totalAnswered === moduleData.questions.length;

  function finishQuiz() {
    if (!completed) {
      Alert.alert('Atenção', 'Responda todas as 5 questões antes de finalizar.');
      return;
    }

    if (score >= passingScore) {
      router.replace({ pathname: '/certificate/[id]', params: { id: moduleData!.id, score: String(score), name: Array.isArray(name) ? name[0] : name } });
      return;
    }

    Alert.alert(
      'Tente novamente',
      `Você acertou ${score} de ${moduleData!.questions.length}. Para gerar o certificado, é necessário acertar pelo menos ${passingScore} questões.`,
      [{ text: 'Refazer prova', onPress: () => setAnswers({}) }]
    );
  }

  return (
    <View style={styles.container}>
      <LinearGradient colors={Colors.rainbow as any} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.background} />

      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={26} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Prova - {moduleData.title}</Text>
        <View style={{ width: 36 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.summaryCard}>
          <Text style={styles.summaryTitle}>{moduleData.subtitle}</Text>
          <Text style={styles.summaryText}>Responda as 5 questões. Acertando 3 ou mais, o certificado será liberado automaticamente.</Text>
          <Text style={[styles.progress, { color: moduleData.color }]}>Respondidas: {totalAnswered}/5</Text>
        </View>

        {moduleData.questions.map((question, questionIndex) => (
          <View key={questionIndex} style={styles.questionCard}>
            <Text style={styles.questionTitle}>Questão {questionIndex + 1}</Text>
            <Text style={styles.questionText}>{question.question}</Text>

            {question.options.map((option, optionIndex) => {
              const selected = answers[questionIndex] === optionIndex;
              return (
                <TouchableOpacity
                  key={optionIndex}
                  style={[styles.optionButton, selected && { borderColor: moduleData.color, backgroundColor: moduleData.color + '18' }]}
                  activeOpacity={0.85}
                  onPress={() => setAnswers((previous) => ({ ...previous, [questionIndex]: optionIndex }))}
                >
                  <View style={[styles.radio, selected && { borderColor: moduleData.color, backgroundColor: moduleData.color }]}>
                    {selected && <Ionicons name="checkmark" size={14} color="#fff" />}
                  </View>
                  <Text style={styles.optionText}>{option}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        ))}

        <TouchableOpacity style={[styles.finishButton, { backgroundColor: moduleData.color }]} onPress={finishQuiz}>
          <Text style={styles.finishButtonText}>Finalizar prova</Text>
          <Ionicons name="ribbon" size={22} color="#fff" />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  background: { position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingTop: 50, paddingHorizontal: 20, paddingBottom: 18 },
  backButton: { padding: 6, backgroundColor: 'rgba(255,255,255,0.7)', borderRadius: 20 },
  headerTitle: { fontSize: 18, fontWeight: 'bold', color: '#000', maxWidth: '75%', textAlign: 'center' },
  scrollContent: { padding: 20, paddingBottom: 34 },
  summaryCard: { backgroundColor: '#fff', borderRadius: 18, padding: 18, marginBottom: 16, elevation: 4, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.12, shadowRadius: 4 },
  summaryTitle: { fontSize: 18, fontWeight: 'bold', color: '#222', marginBottom: 8 },
  summaryText: { fontSize: 14, color: '#555', lineHeight: 20 },
  progress: { marginTop: 10, fontWeight: 'bold', fontSize: 15 },
  questionCard: { backgroundColor: '#fff', borderRadius: 18, padding: 18, marginBottom: 16, elevation: 4, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4 },
  questionTitle: { fontSize: 14, fontWeight: 'bold', color: '#777', marginBottom: 6 },
  questionText: { fontSize: 17, fontWeight: '700', color: '#222', lineHeight: 24, marginBottom: 12 },
  optionButton: { flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#e0e0e0', backgroundColor: '#fafafa', borderRadius: 13, padding: 12, marginTop: 8 },
  radio: { width: 22, height: 22, borderRadius: 11, borderWidth: 2, borderColor: '#bbb', alignItems: 'center', justifyContent: 'center', marginRight: 10 },
  optionText: { flex: 1, fontSize: 14, color: '#333', lineHeight: 19 },
  finishButton: { padding: 17, borderRadius: 16, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', gap: 10, marginTop: 6 },
  finishButtonText: { color: '#fff', fontSize: 17, fontWeight: 'bold' },
  errorTitle: { marginTop: 80, textAlign: 'center', fontSize: 20, fontWeight: 'bold' },
});
