import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  value?: string;
  onChange?: (value?: string) => void;
  onSubmit?: () => void;
}

export const SearchBar = ({ value, onChange, onSubmit }: Props) => {
  return (
    <View style={styles.container}>
      <Ionicons style={styles.icon} name="ios-search" size={24} color="black" />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        placeholder="Search"
        value={value}
        onChangeText={onChange}
        onEndEditing={onSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ddd",
    borderRadius: 4,
    alignItems: "center",
    paddingLeft: 12,
    flexDirection: "row",
    marginHorizontal: 24,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    height: 50,
    flex: 1,
    paddingRight: 12,
    fontSize: 18,
  },
});
