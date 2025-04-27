import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet } from 'react-native';

const HailstoneSequence = () => {
	const [number, setNumber] = useState('');
	const [sequence, setSequence] = useState<number[]>([]);

	const generateSequence = () => {
		const n = parseInt(number);
		if (isNaN(n) || n <= 0) {
			setSequence([NaN]);
			return;
		}
		let current = n;
		const seq = [current];
		while (current !== 1) {
			if (current % 2 === 0) {
				current = current / 2;
			} else {
				current = current * 3 + 1;
			}
			seq.push(current);
		}
		setSequence(seq);
	};

	return (
		<View style={styles.container}>
			<Text style={styles.label}>Enter a Positive Number:</Text>
			<TextInput style={styles.input} value={number} onChangeText={setNumber} placeholder="Enter number" keyboardType="numeric" />
			<Button title="Generate Sequence" onPress={generateSequence} />
			<ScrollView style={styles.sequenceContainer}>
				{sequence.length > 0 && <Text style={styles.sequence}>Hailstone Sequence Sequence: {sequence.join(' -> ')}</Text>}
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: { flex: 1, padding: 20, backgroundColor: '#fff' },
	label: { fontSize: 16, marginBottom: 5 },
	input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 15, borderRadius: 5 },
	sequenceContainer: { marginTop: 10 },
	sequence: { fontSize: 16 },
});

export default HailstoneSequence;
