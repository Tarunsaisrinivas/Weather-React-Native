import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  SafeAreaView,
} from "react-native";
import React from "react";
import WeatherSearch from "./search";

const icon = '03n';
const Weatherinfo = ({ weatherData,fetchWeatherData }) => {
  const {
    name,
    visibility,
    weather: [{ icon, description }],
    main: { temp, humidity, feels_like },
    wind: { speed },
    sys: { sunrise, sunset },
  } = weatherData;
  return (
    <SafeAreaView style={styles.container}>
      <WeatherSearch fetchWeatherData={fetchWeatherData} />
      <View style={{ alignItems: "center" }}>
        <Text style={styles.title}>{name}</Text>
      </View>
      <View style={styles.logo}>
        <Image
          style={styles.largeIcon}
          source={require("../assets/clear-sky.png")}
          // source={{ uri: `http://openweatherapp.org/img/wn/${icon}.png` }}
        />
        <Text style={styles.currentTemp}>{temp} °C</Text>
      </View>
      <Text style={styles.description}>{description}</Text>
      <View style={styles.extrainfo}>
        <View style={styles.info}>
          <Image
            style={styles.smallicon}
            source={require("../assets/temperature.png")}
          />
          <Text style={styles.infoText}>{feels_like} °C</Text>
          <Text style={styles.infoText}>Feels Like </Text>
        </View>
        <View style={styles.info}>
          <Image
            style={styles.smallicon}
            source={require("../assets/humidity.png")}
          />
          <Text style={styles.infoText}>{humidity} %</Text>
          <Text style={styles.infoText}>Humidity </Text>
        </View>
      </View>

      <View style={styles.extrainfo}>
        <View style={styles.info}>
          <Image
            style={styles.smallicon}
            source={require("../assets/eye.png")}
          />
          <Text style={styles.infoText}>{visibility} </Text>
          <Text style={styles.infoText}>Visibility </Text>
        </View>
        <View style={styles.info}>
          <Image
            style={styles.smallicon}
            source={require("../assets/wind-direction.png")}
          />
          <Text style={styles.infoText}>{speed} m/s</Text>
          <Text style={styles.infoText}>Wind </Text>
        </View>
      </View>
      <View style={styles.extrainfo}>
        <View style={styles.info}>
          <Image
            style={styles.smallicon}
            source={require("../assets/sunrise.png")}
          />
          <Text style={styles.infoText}>
            {new Date(sunrise * 1000).toLocaleString()}{" "}
          </Text>
          <Text style={styles.infoText}>Sun Rise </Text>
        </View>
        <View style={styles.info}>
          <Image
            style={styles.smallicon}
            source={require("../assets/sunset.png")}
          />
          <Text style={styles.infoText}>
            {new Date(sunset * 1000).toLocaleString()} m/s
          </Text>
          <Text style={styles.infoText}>Sun Set </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Weatherinfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
  },
  title: {
    width: "100%",
    textAlign: "center",
    fontSize: 26,
    fontWeight: "bold",
    color: "#e96e50",
    marginTop: 15,
  },
  logo: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  largeIcon: {
    width: 200,
    height: 200,
  },
  currentTemp: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  description: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  extrainfo:{
    flexDirection:'row',
    justifyContent:'center',
    padding:7,
  },
  info:{
    width:Dimensions.get('screen').width/3,
backgroundColor:'#D0EAFA',
padding:10,
marginRight:20,
borderRadius:15,
justifyContent:'center',
  },
  smallicon:{
height:40,
width:40,
borderRadius:40/2,
marginLeft:35,
  },
  infoText:{
    textAlign:'center',
    fontSize:18,

  },
});
