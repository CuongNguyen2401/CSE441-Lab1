import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

const HomeIcon = ({ color }: { color: string }) => (
  <IconSymbol size={28} name="house.fill" color={color} />
);

const AssignmentIcon = ({ color }: { color: string }) => (
  <MaterialIcons name="assignment" size={24} color={color} />
);

export default function TabLayout() {
	const colorScheme = useColorScheme();

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
				headerShown: false,
				tabBarButton: HapticTab,
				tabBarBackground: TabBarBackground,
				tabBarStyle: Platform.select({
					ios: {
						position: 'absolute',
					},
					default: {},
				}),
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: 'Home',
					tabBarIcon: HomeIcon,
				}}
			/>

			<Tabs.Screen
				name="assignment"
				options={{
					title: 'Assignment',
					tabBarIcon: AssignmentIcon,
				}}
			/>
		</Tabs>
	);
}
