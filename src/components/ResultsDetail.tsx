import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Restaurant } from "../model/restaurant";

interface Props {
  item: Restaurant;
  onPress?: () => void;
}

export function ResultsDetail({ item, onPress }: Props): JSX.Element {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.item}>
        <ImageBackground
          source={{ uri: item.image_url }}
          resizeMode="cover"
          style={styles.image}
        />
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.rating}>
          {item.rating} Stars, {item.review_count} Reviews
        </Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  item: {
    marginRight: 24,
    maxWidth: 240,
  },
  image: {
    marginBottom: 8,
    height: 160,
    width: 240,
    borderRadius: 12,
    overflow: "hidden",
    marginRight: 12,
  },
  rating: {
    fontSize: 14,
  },
});
