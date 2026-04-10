import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity } from 'react-native';

import AccountScreen from '../screens/AccountScreen';
import FeedScreen from '../screens/FeedScreen';
import HomeScreen from '../screens/HomeScreen';

const Tab = createBottomTabNavigator();

export default function MainNavigator({ navigation }) {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Feed') {
                        iconName = focused ? 'newspaper' : 'newspaper-outline';
                    } else if (route.name === 'Account') {
                        iconName = focused ? 'person' : 'person-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#295C55',
                tabBarInactiveTintColor: 'grey',
                tabBarShowLabel: true,
                headerStyle: {
                    backgroundColor: '#295C55',
                },
                headerTintColor: 'white',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                headerRight: () => (
                    <TouchableOpacity onPress={() => navigation.navigate('SignIn')} style={{ marginRight: 15 }}>
                        <Ionicons name="log-out-outline" size={24} color="white" />
                    </TouchableOpacity>
                ),
            })}>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: 'Início',
                }}
            />
            <Tab.Screen
                name="Feed"
                component={FeedScreen}
                options={{
                    title: 'Feed',
                }}
            />
            <Tab.Screen
                name="Account"
                component={AccountScreen}
                options={{
                    title: 'Conta',
                }}
            />
        </Tab.Navigator>
    );
}
