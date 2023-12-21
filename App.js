import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Weather from './src'
const App = () => {
  return (
    <View style={styles.container}>
      <Weather/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
    
  },
})