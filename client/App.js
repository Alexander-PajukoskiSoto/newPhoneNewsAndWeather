import * as React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import moment from "moment/moment";
import News from "./sites/news";
import Weather from "./sites/Weather";
import NewsInfo from "./sites/newsInfo";

function HomeScreen({ navigation }) {
	const [news, setNews] = React.useState([]);
	const [weatherData, setWeatherData] = React.useState([]);
	const [dateTime, setDateTime] = React.useState([""]);

	setInterval(() => {
		{
			setDateTime(moment().format("MMMM Do YYYY, h:mm:ss a").toString());
		}
	}, 900);

	React.useEffect(() => {
		fetch(
			"https://api.nytimes.com/svc/topstories/v2/world.json?api-key=edlvYvl7tG1vz8mWjgk9iW6HuTA1fLCD",
		)
			.then((res) => res.json())
			.then((res) => setNews(res.results));
	}, []);
	React.useEffect(() => {
		fetch(
			"https://api.openweathermap.org/data/2.5/weather?lat=59.2293827&lon=17.9748815&units=metric&appid=cfdeb26907457c26a1360e06821fc8b8",
		)
			.then((res) => res.json())
			.then((res) => {
				setWeatherData(res);
			});
	}, []);

	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text>{dateTime}</Text>
			<Text>Home Screen</Text>
			<Button
				title="Go to News"
				onPress={() => navigation.navigate("News", { news: news })}
			/>
			<Button
				title="Go to Weather"
				onPress={() =>
					navigation.navigate("Weather", { weatherData: weatherData })
				}
			/>
		</View>
	);
}

const Stack = createNativeStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="News" component={News} />
				<Stack.Screen name="NewsInfo" component={NewsInfo} />
				<Stack.Screen name="Weather" component={Weather} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
