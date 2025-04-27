import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

const EmployeeEntryScreen = () => {
	const initialValue = {
		initialName: '',
		initialAge: '',
		initialOccupation: '',
	};

	const [name, setName] = useState(initialValue.initialName);
	const [age, setAge] = useState(initialValue.initialAge);
	const [occupation, setOccupation] = useState(initialValue.initialOccupation);
	const [message, setMessage] = useState('');
	const [showInfo, setShowInfo] = useState(false);

	const handleUpdate = () => {
		setMessage('Employee information updated successfully!');
		setShowInfo(true);
	};

	return (
		<ScrollView style={styles.container} keyboardShouldPersistTaps="handled">
			<Text style={styles.label}>Full Name:</Text>
			<TextInput style={styles.input} value={name} onChangeText={setName} placeholder="Enter full name" />

			<Text style={styles.label}>Age:</Text>
			<TextInput style={styles.input} value={age} onChangeText={setAge} placeholder="Enter age" keyboardType="numeric" />

			<Text style={styles.label}>Occupation:</Text>
			<TextInput style={styles.input} value={occupation} onChangeText={setOccupation} placeholder="Enter occupation" />

			<Button title="Update" onPress={handleUpdate} />

			{message ? <Text style={styles.message}>{message}</Text> : null}

			{showInfo && (
				<View style={styles.infoContainer}>
					<Text style={styles.infoTitle}>Employee Information:</Text>
					<View style={styles.infoItem}>
						<Text style={styles.infoLabel}>Name:</Text>
						<Text style={styles.infoValue}>{name || 'Not provided'}</Text>
					</View>
					<View style={styles.infoItem}>
						<Text style={styles.infoLabel}>Age:</Text>
						<Text style={styles.infoValue}>{age || 'Not provided'}</Text>
					</View>
					<View style={styles.infoItem}>
						<Text style={styles.infoLabel}>Occupation:</Text>
						<Text style={styles.infoValue}>{occupation || 'Not provided'}</Text>
					</View>
				</View>
			)}
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: '#fff',
	},
	label: {
		fontSize: 16,
		marginBottom: 5,
		fontWeight: '500',
	},
	input: {
		borderWidth: 1,
		borderColor: '#ccc',
		padding: 10,
		marginBottom: 15,
		borderRadius: 5,
		backgroundColor: '#f9f9f9',
	},
	message: {
		color: 'green',
		marginTop: 10,
		marginBottom: 15,
		fontSize: 16,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	infoContainer: {
		marginTop: 20,
		backgroundColor: '#f0f0f0',
		padding: 15,
		borderRadius: 8,
		borderWidth: 1,
		borderColor: '#ddd',
	},
	infoTitle: {
		fontSize: 18,
		fontWeight: 'bold',
		marginBottom: 10,
		color: '#333',
	},
	infoItem: {
		flexDirection: 'row',
		marginBottom: 8,
	},
	infoLabel: {
		fontWeight: 'bold',
		width: 100,
		fontSize: 15,
	},
	infoValue: {
		flex: 1,
		fontSize: 15,
	},
});

export default EmployeeEntryScreen;
