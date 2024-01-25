import * as React from "react";
import { View, Text, Image, ScrollView } from "react-native";

export default function NewsInfo({ navigation, route }) {
	newsInfo = route.params.newsInfo;
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<ScrollView>
				<Text style={{ fontSize: 20, fontWeight: 600, margin: 20 }}>
					{newsInfo.title}
				</Text>
				<Text style={{ fontSize: 17 }}>{newsInfo.abstract}</Text>
				<Image
					style={{ width: "100%", height: 300 }}
					source={{ uri: newsInfo.multimedia[0].url }}
				/>
				<Text>&copy;</Text>
			</ScrollView>
		</View>
	);
}
