import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function ClosetScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to your closet 👕</Text>

      <View style={styles.grid}>
        {['Tees', 'Pants', 'Shoes', 'Jackets', 'Hats'].map((item) => (
          <View key={item} style={styles.card}>
            <Text style={styles.cardText}>{item}</Text>
          </View>
        ))}
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Outfit')}
      >
        <Text style={styles.buttonText}>🎲 Random Outfit</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonSecondary}
        onPress={() => navigation.navigate('Upload')}
      >
        <Text style={styles.buttonText}>➕ Add Item</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#111',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    marginBottom: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  card: {
    backgroundColor: '#222',
    padding: 20,
    borderRadius: 10,
    width: '45%',
  },
  cardText: {
    color: '#fff',
    fontSize: 16,
  },
  button: {
    marginTop: 30,
    backgroundColor: '#00c853',
    padding: 15,
    borderRadius: 10,
  },
  buttonSecondary: {
    marginTop: 10,
    backgroundColor: '#2962ff',
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});