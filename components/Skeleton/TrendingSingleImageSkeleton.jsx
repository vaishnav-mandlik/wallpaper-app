import { View, StyleSheet } from "react-native";
import React from "react";

const TrendingSingleImageSkeleton = () => {
  return <View style={styles.skeleton} />;
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

export default TrendingSingleImageSkeleton;
