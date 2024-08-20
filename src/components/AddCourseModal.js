import React, { useState } from 'react'
import { Alert, Modal, StyleSheet, Text, Pressable, View, TextInput, Button } from 'react-native'
import AddCourse from './AddCourse'

const AddCourseModal = ({ modalVisible, setModalVisible }) => {
  const [courseTitle, setCourseTitle] = useState('')
  const [courseDesc, setCourseDesc] = useState('')

  const AddCourseHandler = () => {
    fetch('http://localhost:3000/Courses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: Math.random().toString,
        title: courseTitle,
        desc: courseDesc,
      }),
    })
  }
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.')
          setModalVisible(!modalVisible)
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput
              style={styles.input}
              onChangeText={(courseTitle) => setCourseTitle(courseTitle)}
              placeholder="Kurs Başlığı"
              value={courseTitle}
            />
            <TextInput
              style={styles.input}
              onChangeText={(courseDesc) => setCourseDesc(courseDesc)}
              placeholder="Kurs Açıklaması"
              value={courseDesc}
            />
            <Button title="Add Course" onPress={AddCourseHandler} />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
    marginTop: 20,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    height: 50,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    borderColor: '#ccc',
    borderRadius: 5,
    width: 200,
  },
})

export default AddCourseModal
