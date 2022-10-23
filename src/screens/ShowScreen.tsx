import React, { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { useResult } from "../hooks/useResults";

export function ResultsShowScreen({ route }: any): JSX.Element {
  const { id } = route.params as { id: string };
  const [restaurant, loading, error] = useResult(id);

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Text>{error.message}</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>{restaurant?.name}</Text>
      <FlatList
        data={restaurant?.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 200,
  },
});
