import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SearchScreen } from "./src/screens/SearchScreen";
import { ResultsShowScreen } from "./src/screens/ShowScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{ title: "BusinessSearch" }}
        />
        <Stack.Screen
          name="ResultsShow"
          component={ResultsShowScreen}
          options={{ title: "Business Search" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
