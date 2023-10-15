import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Text, View } from 'react-native';

const Tab = createBottomTabNavigator();

function Home() {
  return (
    <View>
      <Text>Home page, and pick bottle</Text>
    </View>
  );
}

function BottleCreation() {
  return (
    <View>
      <Text>Write bottle here</Text>
    </View>
  );
}

function MyBottles() {
  return (
    <View>
      <Text>All my bottles</Text>
    </View>
  );
}

function BottleCollection() {
  return (
    <View>
      <Text>All bottled I picked</Text>
    </View>
  );
}

function Settings() {
  return (
    <View>
      <Text>Settings</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        {/* TODO: Passing additional props, Use React context and wrap the navigator with a context provider to pass data to the screens */}
        <Tab.Screen component={Home} name="Home" options={{ title: 'Pick botte' }} />
        <Tab.Screen component={BottleCreation} name="Write Bottle" />
        <Tab.Screen component={MyBottles} name="My Bottles" />
        <Tab.Screen component={BottleCollection} name="Collections" />
        <Tab.Screen component={Settings} name="Settings" />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
