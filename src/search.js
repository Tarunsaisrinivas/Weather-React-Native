import { StyleSheet, Text, View,Dimensions, TextInput } from 'react-native'
import React,{useState} from 'react'
import { EvilIcons } from '@expo/vector-icons';

const weatherSearch = ({fetchWeatherData}) => {
  const [cityName,setCityName]=useState('');
  return (
    <View style={styles.searchBar}>
      <TextInput placeholder='Search City'
      value={cityName}

      style={styles.text}
      onChangeText={(text)=>setCityName(text)}
      />
      <EvilIcons size={28} name='search' color='black'
      onPress={()=>fetchWeatherData(cityName)}
      />
    </View>
  )
}

export default weatherSearch

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: Dimensions.get("screen").width - 20,
    borderWidth: 1.5,
    paddingVertical: 6,
    borderRadius: 25,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    backgroundColor: "light-grey",
  },
  text: {
    width:'90%',
    color: "#000",
  },
});