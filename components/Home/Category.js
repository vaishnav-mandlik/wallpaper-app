import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { FlatList } from "react-native-gesture-handler";
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
  const [activeCategory, setActiveCategory] = useState(CategoryList[0]?.label);
  const { data } = useFetch("search", `${activeCategory} wallpaper`, 1);
  console.log(data, "data from category.js");

  const handleCategoryPress = (categoryId) => {
    setActiveCategory(categoryId);
  };
  const windowWidth = Dimensions.get("window").width;
  const imageWidth = windowWidth / 3 - 20;

  return (
    <View style={styles.cardContainer}>
      <Text style={styles.heading}>Category</Text>
      <View>
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
      </View>
      <View>
        {data && (
          <FlatList
            data={data.photos}
            numColumns={3}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Image
                source={{ uri: item.src.medium }}
                style={{
                  width: imageWidth,
                  height: imageWidth,
                  margin: 10,
                  borderRadius: 10,
                }}
              />
            )}
          />
        )}
      </View>
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
