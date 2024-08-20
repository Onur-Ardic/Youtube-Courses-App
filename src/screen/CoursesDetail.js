import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'

export default function CoursesDetail({ route }) {
  const [data, setData] = useState([])
  const id = route.params.id
  useEffect(() => {
    fetch(`http://localhost:3000/Courses/${id}`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error))
  }, [])

  return (
    <View>
      <Text style={styles.coursesDetailTitle}>{data.title}</Text>
      <Text style={styles.coursesDetailDesc}>{data.desc}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  coursesDetailTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
    marginVertical: 20,
  },

  coursesDetailDesc: {
    fontSize: 18,
    textAlign: 'center',
  },
})
