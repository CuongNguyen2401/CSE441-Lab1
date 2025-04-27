import { Image, StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
	return (
		<ParallaxScrollView
			headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
			headerImage={<Image source={require('@/assets/images/partial-react-logo.png')} style={styles.reactLogo} />}
		>
			<ThemedView style={styles.titleContainer}>
				<ThemedText type="title">Nguyễn Phúc Cường's assignment</ThemedText>
			</ThemedView>
			<ThemedView style={styles.stepContainer}>
				<ThemedText type="subtitle">Introduction:</ThemedText>
				<ThemedText>In this assignment I will explain the features of the app.</ThemedText>
			</ThemedView>

			<ThemedView style={styles.stepContainer}>
				<ThemedText type="subtitle">App Overview:</ThemedText>
				<ThemedText>
					This is a React Native app built with Expo Router that demonstrates various React concepts including components, props, and state
					management. The app is organized into several interactive examples that showcase different programming challenges.
				</ThemedText>
			</ThemedView>

			<ThemedView style={styles.stepContainer}>
				<ThemedText type="subtitle">Navigation:</ThemedText>
				<ThemedText>• The app uses a tab-based navigation system with three main tabs:</ThemedText>
				<ThemedText style={styles.bulletPoint}>- Home (current screen): Provides an overview and documentation</ThemedText>
				<ThemedText style={styles.bulletPoint}>Assignment: Contains the assignment details and links to each assignment</ThemedText>
			</ThemedView>

			<ThemedView style={styles.stepContainer}>
				<ThemedText type="subtitle">Features on Assignment Tab:</ThemedText>
				<ThemedText style={styles.bulletPoint}>
					1. Employee Information Form: Demonstrates component props by allowing entry of employee data with name, age, and specialization fields
				</ThemedText>
				<ThemedText style={styles.bulletPoint}>
					2. Sum First & Last Digit: Uses state to calculate the sum of the first and last digits of any number
				</ThemedText>
				<ThemedText style={styles.bulletPoint}>3. Minimum Number Finder: Uses state to find the smallest value among three input numbers</ThemedText>
				<ThemedText style={styles.bulletPoint}>
					4. Hailstone Sequence Generator: Implements the mathematical Hailstone sequence algorithm with interactive state management
				</ThemedText>
			</ThemedView>

			<ThemedView style={styles.stepContainer}>
				<ThemedText type="subtitle">Technical Implementation:</ThemedText>
				<ThemedText>The app is built using modern React Native practices:</ThemedText>
				<ThemedText style={styles.bulletPoint}>• Functional components with React Hooks (useState)</ThemedText>
				<ThemedText style={styles.bulletPoint}>• Props for component communication</ThemedText>
				<ThemedText style={styles.bulletPoint}>• Themed components for consistent styling</ThemedText>
				<ThemedText style={styles.bulletPoint}>• Responsive layout with StyleSheet</ThemedText>
				<ThemedText style={styles.bulletPoint}>• Parallax scrolling for enhanced user experience</ThemedText>
			</ThemedView>

			<ThemedView style={styles.stepContainer}>
				<ThemedText type="subtitle">How to Use:</ThemedText>
				<ThemedText>
					Navigate between tabs using the bottom tab bar. On the Question 6 tab, you'll find four interactive components where you can:
				</ThemedText>
				<ThemedText style={styles.bulletPoint}>• Enter and update employee information</ThemedText>
				<ThemedText style={styles.bulletPoint}>• Calculate digit sums by entering any number</ThemedText>
				<ThemedText style={styles.bulletPoint}>• Find the minimum value by entering three different numbers</ThemedText>
				<ThemedText style={styles.bulletPoint}>• Generate and visualize the Hailstone sequence from any positive starting number</ThemedText>
			</ThemedView>
		</ParallaxScrollView>
	);
}

const styles = StyleSheet.create({
	titleContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 8,
	},
	stepContainer: {
		gap: 8,
		marginBottom: 16,
		paddingHorizontal: 4,
	},
	reactLogo: {
		height: 178,
		width: 290,
		bottom: 0,
		left: 0,
		position: 'absolute',
	},
	bulletPoint: {
		marginLeft: 16,
		marginTop: 4,
		lineHeight: 22,
	},
});
