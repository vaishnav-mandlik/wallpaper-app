import {
  Text,
  View,
  useColorScheme,
  SafeAreaView,
  StatusBar,
} from "react-native";
import React from "react";
import { useRouter, Stack } from "expo-router";
// TrendingCard
import TrendingCard from "../components/Home/TrendingCard";

const Home = () => {
  const router = useRouter();
  const theme = useColorScheme();
  //   console.log(theme);
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
      <TrendingCard />
      <Text style={{ color: "#fff" }}>Home</Text>
    </SafeAreaView>
  );
};

export default Home;
