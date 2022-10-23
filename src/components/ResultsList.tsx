import React from "react";
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Restaurant } from "../model/restaurant";
import { ResultsDetail } from "./ResultsDetail";

interface Props {
  results: Restaurant[];
  title?: string;
  onSelect?: (restaurant: Restaurant) => void;
}

export const ResultsList = ({
  results,
  title,
  onSelect,
}: Props): JSX.Element => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        style={styles.list}
        horizontal
        data={results}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => (
          <ResultsDetail item={item} onPress={() => onSelect?.(item)} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 12,
    marginHorizontal: 24,
  },
  list: {
    paddingHorizontal: 24,
  },
});
