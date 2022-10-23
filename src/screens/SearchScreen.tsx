import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { StackNavigationProp } from "react-navigation-stack/lib/typescript/src/vendor/types";
import { ResultsList } from "../components/ResultsList";
import { SearchBar } from "../components/SearchBar";
import { useResults } from "../hooks/useResults";
import { Restaurant } from "../model/restaurant";

export type RootStackParamList = {
  Search: undefined;
  ResultsShow: undefined;
};

const categories = [
  {
    label: "Cost Effective",
    price: 1,
  },
  {
    label: "A bit pricey",
    price: 2,
  },
  {
    label: "Delicattessen",
    price: 3,
  },
];

const filterResultsByPrice = (
  results: Restaurant[],
  length?: number
): Restaurant[] => {
  return results.filter((result) => result.price?.length === length);
};

export const SearchScreen = () => {
  const [term, setTerm] = useState<string>();
  const [searchApi, results, loading, error] = useResults();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <SearchBar
        value={term}
        onChange={(term) => setTerm(term)}
        onSubmit={() => searchApi(term)}
      />

      <View style={styles.results}>
        {loading ? (
          <Text style={styles.amount}>Loading...</Text>
        ) : error ? (
          <Text style={styles.amount}>{error.message}</Text>
        ) : (
          <View>
            <View style={styles.amount}>
              <Text>We have found {results.length} results</Text>
            </View>
            <ScrollView>
              {categories.map((category, index) => {
                return (
                  <React.Fragment key={category.label}>
                    {index > 0 && <View style={styles.separator} />}
                    <ResultsList
                      title={category.label}
                      results={filterResultsByPrice(results, category.price)}
                      onSelect={(item) => {
                        navigation.navigate("ResultsShow", { id: item.id });
                      }}
                    />
                  </React.Fragment>
                );
              })}
            </ScrollView>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    flex: 1,
    paddingBottom: 120,
  },
  results: {
    paddingVertical: 24,
  },
  amount: {
    marginBottom: 24,
    marginHorizontal: 24,
  },
  title: {
    fontWeight: "700",
  },
  separator: {
    height: 24,
  },
});
