import * as React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Weather from "./sites/Weather";
import News from "./sites/news";
function HomeScreen({ navigation }) {
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text>Home Screen</Text>
			<Button title="Go to News" onPress={() => navigation.navigate("News")} />
			<Button
				title="Go to Weather"
				onPress={() => navigation.navigate("Weather")}
			/>
		</View>
	);
}

const Stack = createNativeStackNavigator();

function App() {
	const [news, setNews] = React.useState([]);
	React.useEffect(() => {
		fetch(
			"https://api.nytimes.com/svc/topstories/v2/world.json?api-key=edlvYvl7tG1vz8mWjgk9iW6HuTA1fLCD",
		).then((res) => setNews(res.results));
	}, []);
	console.log(news);
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen news={news} name="Home" component={HomeScreen} />
				<Stack.Screen name="News" component={News} />
				<Stack.Screen name="Weather" component={Weather} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
