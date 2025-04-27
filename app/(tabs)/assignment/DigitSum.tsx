import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const DigitSum = () => {
	const [number, setNumber] = useState('');
	const [result, setResult] = useState<string | null>(null);

	const calculateSum = () => {
		const numStr = number.replace(/\D/g, ''); 
		if (numStr.length === 0) {
			setResult('Please enter a valid number');
			return;
		}
		const firstDigit = numStr[0];
		const lastDigit = numStr[numStr.length - 1];
		const sum = parseInt(firstDigit) + parseInt(lastDigit);
		setResult(`Sum of first (${firstDigit}) and last (${lastDigit}) digit: ${sum}`);
	};

	return (
		<View style={styles.container}>
			<Text style={styles.label}>Enter a Number:</Text>
			<TextInput style={styles.input} value={number} onChangeText={setNumber} placeholder="Enter number" keyboardType="numeric" />
			<Button title="Calculate Sum" onPress={calculateSum} />
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

export default DigitSum;
