import * as React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function News({ news }) {
	function logger() {
		console.log(news);
	}
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text>hi</Text>
			<Button title="hi" onPress={logger} />
		</View>
	);
}
