import { ActivityIndicator, Alert, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Constants from "expo-constants";
import Weatherinfo from "./Weatherinfo";
import { StatusBar } from "expo-status-bar";

const API_KEY = "c4c401b4301fb564335f0cdf87e619c6";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loaded, setLoaded] = useState(false);

  const fetchWeatherData = async (cityName) => {
    try {
      setLoaded(false);
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
    );

      if (response.status == 200) {
        const data = await response.json();
        setWeatherData(data);
      }
      else{
        setWeatherData(null);
      }
          setLoaded(true);
    } catch (error) {
      Alert.alert('Error',error.message);
    }


  };

  useEffect(()=>{
fetchWeatherData("Hyderabad");
  },[])
if(!loaded){
  return (
    <View style={styles.container}>
      <ActivityIndicator size='large' color='red' />
    </View>

  );
}
else if(weatherData === null) {
    return (
      <View>
        <Text style={styles.errorMessage}> City Not Found </Text>
      </View>
    );
  }
  return (
    <>
      <StatusBar backgroundColor="#000"/>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Weather App</Text>
        </View>
        <Weatherinfo
          weatherData={weatherData}
          fetchWeatherData={fetchWeatherData}
        />
      </View>
    </>
  );
};

export default Weather;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCF5DB",
    paddingTop: Constants.statusBarHeight,
  },
  header: {
    backgroundColor: "#C5D2EF",
    height:65,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: "bold",
  },
  errorMessage : {
fontSize:30,
fontWeight:'bold',
alignItems:'center',
justifyContent:'center',
paddingTop:Constants.statusBarHeight,
  },
});
