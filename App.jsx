import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { BottomTab } from './navigations/BottomTab';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style='auto' />
      <BottomTab />
    </NavigationContainer>
  );
}