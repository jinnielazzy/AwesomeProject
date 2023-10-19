// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationContainer } from '@react-navigation/native';
// import { Text, View } from 'react-native';

// const Tab = createBottomTabNavigator();

// function Home() {
//   return (
//     <View>
//       <Text>Home page, and pick bottle</Text>
//     </View>
//   );
// }

// function BottleCreation() {
//   return (
//     <View>
//       <Text>Write bottle here</Text>
//     </View>
//   );
// }

// function MyBottles() {
//   return (
//     <View>
//       <Text>All my bottles</Text>
//     </View>
//   );
// }

// function BottleCollection() {
//   return (
//     <View>
//       <Text>All bottled I picked</Text>
//     </View>
//   );
// }

// function Settings() {
//   return (
//     <View>
//       <Text>Settings</Text>
//     </View>
//   );
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         {/* TODO: Passing additional props, Use React context and wrap the navigator with a context provider to pass data to the screens */}
//         <Tab.Screen component={Home} name="Home" options={{ title: 'Pick botte' }} />
//         <Tab.Screen component={BottleCreation} name="Write Bottle" />
//         <Tab.Screen component={MyBottles} name="My Bottles" />
//         <Tab.Screen component={BottleCollection} name="Collections" />
//         <Tab.Screen component={Settings} name="Settings" />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

import { withAuthenticator, useAuthenticator } from '@aws-amplify/ui-react-native';
import { API, graphqlOperation, Amplify } from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, SafeAreaView } from 'react-native';

import awsExports from './src/aws-exports';

Amplify.configure(awsExports);

// retrieves only the current value of 'user' from 'useAuthenticator'
const userSelector = (context) => [context.user];

function SignOutButton() {
  const { user, signOut } = useAuthenticator(userSelector);
  return (
    <Pressable onPress={signOut} style={styles.buttonContainer}>
      <Text style={styles.buttonText}>Hello, {user.username}! Click here to sign out!</Text>
    </Pressable>
  );
}

const initialFormState = { name: '', description: '' };

function App() {
  const [formState, setFormState] = useState(initialFormState);

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value });
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <SignOutButton />
        <TextInput
          onChangeText={(value) => setInput('name', value)}
          placeholder="Name"
          style={styles.input}
          value={formState.name}
        />
        <TextInput
          onChangeText={(value) => setInput('description', value)}
          placeholder="Description"
          style={styles.input}
          value={formState.description}
        />
      </View>
    </SafeAreaView>
  );
}

export default withAuthenticator(App);

const styles = StyleSheet.create({
  container: { width: 400, flex: 1, padding: 20, alignSelf: 'center' },
  todo: { marginBottom: 15 },
  input: { backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
  todoName: { fontSize: 20, fontWeight: 'bold' },
  buttonContainer: {
    alignSelf: 'center',
    backgroundColor: 'black',
    paddingHorizontal: 8,
  },
  buttonText: { color: 'white', padding: 16, fontSize: 18 },
});
