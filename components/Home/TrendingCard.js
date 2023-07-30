import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import React from "react";
import useFetch from "../../hook/useFetch";
import TrendingImageSkeleton from "../Skeleton/TrendingImageSkeleton";
import TrendingSingleImageSkeleton from "../Skeleton/TrendingSingleImageSkeleton";

const renderCard = ({ item }) => {
  if (!item) {
    return <TrendingSingleImageSkeleton />;
  }
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: item?.src?.portrait }}
        style={styles.image}
        alt=""
      />
    </View>
  );
};

const TrendingCard = () => {
  const { data } = useFetch("search", "trending wallpaper");

  return (
    <View>
      <Text style={styles.heading}>Trending Wallpaper</Text>
      {data && data.photos && data.photos.length > 0 ? (
        <FlatList
          data={data.photos}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderCard}
          contentContainerStyle={styles.cardContainer}
        />
      ) : (
        <TrendingImageSkeleton />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    color: "#E8EBEC",
    fontSize: 18,
    fontWeight: "bold",
    margin: 10,
  },
  cardContainer: {
    paddingHorizontal: 10,
  },
  card: {
    marginRight: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  image: {
    width: 150,
    height: 200,
    borderRadius: 20,
    elevation: 5,
  },
  photographer: {
    marginTop: 5,
  },
  skeleton: {
    width: 150,
    height: 200,
    borderRadius: 20,
    backgroundColor: "#ddd",
    marginRight: 10,
  },
});

export default TrendingCard;
