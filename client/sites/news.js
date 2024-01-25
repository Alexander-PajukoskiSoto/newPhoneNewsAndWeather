import * as React from "react";
import { View, Text, FlatList, Button, Pressable } from "react-native";
import NewsInfo from "../sites/newsInfo";
export default function News({ navigation, route }) {
	const news = route.params.news;
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<FlatList
				data={news}
				key={news.url}
				renderItem={({ item }) => (
					<Pressable
						style={{
							backgroundColor: "#3388ff",
							paddingHorizontal: 100,
							paddingVertical: 50,
							marginHorizontal: 20,
							borderRadius: 8,
							borderWidth: 3,
							borderColor: "#888888",
							marginTop: 20,
							border: "black",
							shadowColor: "black",
							shadowOpacity: 0.8,
							shadowOffset: 1,
						}}
						onPress={() => navigation.navigate("NewsInfo", { newsInfo: item })}
					>
						<Text style={{ color: "white", fontSize: 20 }}>{item.title}</Text>
					</Pressable>
				)}
			/>
		</View>
	);
}
//REMEMBER TRY WITH BETTER NAME (BIG LETTER BEFORE TRYING SOMETHING ELSE)
