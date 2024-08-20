import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import AddCourse from '../components/AddCourse'
import AddCourseModal from '../components/AddCourseModal'
import { useNavigation } from '@react-navigation/native'

export default function CoursesScreen() {
  const navigation = useNavigation()
  const [modalVisible, setModalVisible] = useState(false)
  const [result, setResult] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/Courses')
      .then((result) => {
        return result.json()
      })
      .then((data) => {
        setResult(data)
      })
      .catch((err) => {
        console.log('Error fetching data:', err)
      })
  }, [])

  return (
    <View>
      <AddCourse handlerFunction={() => setModalVisible(true)} />
      <AddCourseModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
      <FlatList
        data={result}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('CourseDetail', {
                id: item.id,
              })
            }
          >
            <View style={styles.coursesCard}>
              <Text style={styles.coursesTitle}>{item.title}</Text>
              <Text style={styles.coursesDesc}>{item.desc}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  coursesCard: {
    margin: 10,
    backgroundColor: '#fcf',
    borderRadius: 10,
    padding: 20,
  },

  coursesTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  coursesDesc: {
    fontSize: 20,
  },
})
