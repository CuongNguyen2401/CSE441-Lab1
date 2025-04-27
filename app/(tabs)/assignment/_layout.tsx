import { Stack } from 'expo-router';

export default function AssignmentLayout() {
	return (
		<Stack
			screenOptions={{
				headerShown: true,
				headerStyle: { backgroundColor: '#f8f8f8' },
				headerTintColor: '#000',
			}}
		>
			<Stack.Screen name="index" options={{ title: 'Assignments' }} />
			<Stack.Screen name="Employee" options={{ title: 'Employee Entry' }} />
			<Stack.Screen name="DigitSum" options={{ title: 'Digit Sum' }} />
			<Stack.Screen name="MinOfThree" options={{ title: 'Minimum of Three' }} />
			<Stack.Screen name="HailstoneSequence" options={{ title: 'Hailstone Sequence' }} />
		</Stack>
	);
}
