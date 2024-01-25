import * as React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import News from "./sites/news";
import Weather from "./sites/Weather";
import NewsInfo from "./sites/newsInfo";

function HomeScreen({ navigation }) {
	const [news, setNews] = React.useState([]);
	React.useEffect(() => {
		fetch(
			"https://api.nytimes.com/svc/topstories/v2/world.json?api-key=edlvYvl7tG1vz8mWjgk9iW6HuTA1fLCD",
		)
			.then((res) => res.json())
			.then((res) => setNews(res.results));
	}, []);

	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text>Home Screen</Text>
			<Button
				title="Go to News"
				onPress={() =>
					navigation.navigate(
						"News",
						{ news: news },
						{ navigation: navigation },
					)
				}
			/>
			<Button
				title="Go to Weather"
				onPress={() => navigation.navigate("Weather")}
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
