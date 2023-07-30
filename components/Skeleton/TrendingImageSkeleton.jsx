import { View, StyleSheet } from "react-native";
import React from "react";

const TrendingImageSkeleton = () => {
  return (
    <View style={{ flexDirection: "row", marginHorizontal: 10 }}>
      <View style={styles.skeleton} />
      <View style={styles.skeleton} />
      <View style={styles.skeleton} />
      <View style={styles.skeleton} />
      <View style={styles.skeleton} />
    </View>
  );
};

const styles = StyleSheet.create({
  skeleton: {
    width: 150,
    height: 200,
    borderRadius: 20,
    backgroundColor: "#ddd",
    marginRight: 10,
  },
});

export default TrendingImageSkeleton;
