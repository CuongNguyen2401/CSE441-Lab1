import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function AssignmentScreen() {
	const colorScheme = useColorScheme();

	return (
		<View style={[styles.container, { backgroundColor: Colors[colorScheme ?? 'light'].background }]}>
			<Text style={styles.title}>Select an Assignment</Text>
			<View style={styles.buttonContainer}>
				<Link href="/assignment/Employee" style={styles.link}>
					<Text style={styles.linkText}>Employee Information Entry</Text>
				</Link>
				<Link href="/assignment/DigitSum" style={styles.link}>
					<Text style={styles.linkText}>Sum of First and Last Digit</Text>
				</Link>
				<Link href="/assignment/MinOfThree" style={styles.link}>
					<Text style={styles.linkText}>Minimum of Three Numbers</Text>
				</Link>
				<Link href="/assignment/HailstoneSequence" style={styles.link}>
					<Text style={styles.linkText}>Hailstone Sequence</Text>
				</Link>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1, padding: 20, alignItems: 'center' },
	title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
	buttonContainer: { width: '100%', alignItems: 'center' },
	link: {
		backgroundColor: '#007AFF',
		padding: 15,
		borderRadius: 10,
		marginVertical: 10,
		width: '80%',
		alignItems: 'center',
	},
	linkText: { color: '#fff', fontSize: 16, fontWeight: '500' },
});
