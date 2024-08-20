import { Button, StyleSheet, Text, View } from 'react-native'

export default function AddCourse({ handlerFunction }) {
  return (
    <View>
      <Button
        onPress={handlerFunction}
        title="Add Course"
        color="#841584"
        accessibilityLabel="Add Course Button"
      />
    </View>
  )
}

const styles = StyleSheet.create({})
