import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CoursesScreen from './src/screen/CoursesScreen'
import { NavigationContainer } from '@react-navigation/native'
import CoursesDetail from './src/screen/CoursesDetail'

const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Courses" component={CoursesScreen} />
        <Stack.Screen name="CourseDetail" component={CoursesDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
