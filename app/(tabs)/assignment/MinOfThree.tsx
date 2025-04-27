import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const MinOfThree = () => {
	const [num1, setNum1] = useState('');
	const [num2, setNum2] = useState('');
	const [num3, setNum3] = useState('');
	const [result, setResult] = useState<string | null>(null);

	const findMinimum = () => {
		const n1 = parseFloat(num1);
		const n2 = parseFloat(num2);
		const n3 = parseFloat(num3);
		if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
			setResult('Please enter valid numbers');
			return;
		}
		const min = Math.min(n1, n2, n3);
		setResult(`Minimum of ${n1}, ${n2}, ${n3} is: ${min}`);
	};

	return (
		<View style={styles.container}>
			<Text style={styles.label}>Number 1:</Text>
			<TextInput style={styles.input} value={num1} onChangeText={setNum1} placeholder="Enter first number" keyboardType="numeric" />
			<Text style={styles.label}>Number 2:</Text>
			<TextInput style={styles.input} value={num2} onChangeText={setNum2} placeholder="Enter second number" keyboardType="numeric" />
			<Text style={styles.label}>Number 3:</Text>
			<TextInput style={styles.input} value={num3} onChangeText={setNum3} placeholder="Enter third number" keyboardType="numeric" />
			<Button title="Find Minimum" onPress={findMinimum} />
			{result ? <Text style={styles.result}>{result}</Text> : null}
		</View>
	);
};

const styles = StyleSheet.create({
	container: { flex: 1, padding: 20, backgroundColor: '#fff' },
	label: { fontSize: 16, marginBottom: 5 },
	input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 15, borderRadius: 5 },
	result: { marginTop: 10, fontSize: 16 },
});

export default MinOfThree;
