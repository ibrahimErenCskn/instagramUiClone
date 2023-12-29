import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import { HeaderRightIcon } from '../components/header/HeaderRightIcon';
import HeaderLeftSide from '../components/header/HeaderLeftSide';
import { Foundation } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();


export function BottomTab() {
    return (
        <Tab.Navigator screenOptions={{ tabBarShowLabel: false }}>
            <Tab.Screen name="Home" component={Home} options={{ headerTitle: '', tabBarIcon: ((focused) => <Foundation name="home" size={24} color={focused ? 'black' : 'red'} />), headerRight: (() => <HeaderRightIcon />), headerLeft: (() => <HeaderLeftSide />) }} />
        </Tab.Navigator>
    );
}