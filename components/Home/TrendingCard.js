import { View, Text } from "react-native";
import React from "react";
import useFetch from "../../hook/useFetch";

const TrendingCard = () => {
  const { data } = useFetch("search", "nature");
  console.log(data, "TrendingCard");

  return (
    <View>
      <Text
        style={{
          color: "#000",
        }}
      >
        TrendingCard
      </Text>
    </View>
  );
};

export default TrendingCard;
