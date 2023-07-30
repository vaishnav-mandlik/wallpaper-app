import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { CategoryList } from "../Constants";
import useFetch from "../../hook/useFetch";

const CategoryListUi = ({ item, isActive, onPress }) => {
  return (
    <TouchableOpacity
      onPress={() => onPress(item.label)}
      style={{
        backgroundColor: "#1F2125",
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 20,
        borderColor: isActive ? "#C68822" : "#4D4E51",
        borderWidth: 1,
        margin: 5,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          color: isActive ? "#C68822" : "#4D4E51",
          fontSize: 16,
          fontWeight: "bold",
        }}
      >
        {item.label}
      </Text>
    </TouchableOpacity>
  );
};

const Category = () => {
  const [activeCategory, setActiveCategory] = useState(
    CategoryList[0]?.label || "CategoryList[0].label"
  );
  const [page, setPage] = useState(1);
  const { data, loading } = useFetch(
    "search",
    `${activeCategory} wallpaper`,
    page
  );
  console.log(data, "data from category.js");

  const handleCategoryPress = (categoryId) => {
    setActiveCategory(categoryId);
  };

  const handleLoadMore = () => {
    if (!loading) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <View style={styles.cardContainer}>
      <Text style={styles.heading}>Category</Text>

      <FlatList
        data={CategoryList}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.label.toString()}
        renderItem={({ item }) => (
          <CategoryListUi
            item={item}
            isActive={item.label === activeCategory}
            onPress={handleCategoryPress}
          />
        )}
      />
      <ScrollView>
        <View>
          {data && (
            <FlatList
              data={data.photos}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <Image
                  source={{ uri: item.src.medium }}
                  style={{ width: 200, height: 200, margin: 5 }}
                />
              )}
              onEndReached={handleLoadMore}
              onEndReachedThreshold={0.5}
              ListFooterComponent={() =>
                loading ? <Text>Loading...</Text> : null
              }
            />
          )}
        </View>
      </ScrollView>
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
    marginTop: 10,
  },
});

export default Category;
