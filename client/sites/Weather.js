import * as React from "react";
import { View, Text, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function Weather({ navigation, route }) {
	const weather = route.params.weatherData;
	const iconPart1 = "https://openweathermap.org/img/wn/";
	const iconPart2 = "@4x.png";
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text>
				{weather.name},{weather.sys.country}
			</Text>
			<Text>{weather.main.temp}&deg;C</Text>
			<Text>
				{weather.main.temp_min}&deg;C to {weather.main.temp_max}&deg;C
			</Text>
			<Image
				source={{
					uri: iconPart1 + weather.weather[0].icon + iconPart2,
				}}
				style={{
					width: 200,
					height: 200,
				}}
			/>
			<Text>{weather.weather[0].description}</Text>
			<Text>{weather.wind.speed}m/s</Text>
			<Text>{weather.main.humidity}%</Text>
		</View>
	);
}
