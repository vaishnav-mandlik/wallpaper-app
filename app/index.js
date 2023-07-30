import { Text, SafeAreaView, StatusBar } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import TrendingCard from "../components/Home/TrendingCard";
import Category from "../components/Home/Category";

const Home = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#2F3439",
        marginTop: StatusBar.currentHeight || 0,
      }}
    >
      <StatusBar backgroundColor="#2F3439" barStyle="light-content" />
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: "#2F3439",
          },
          headerShadowVisible: false,
          headerShown: false,
        }}
      />
      <Text
        style={{
          color: "#F9B520",
          fontSize: 20,
          fontWeight: "bold",
          margin: 10,
        }}
      >
        Latest Wallpaper for you
      </Text>
      <TrendingCard />
      <Category />
    </SafeAreaView>
  );
};

export default Home;
