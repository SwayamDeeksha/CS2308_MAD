import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import FormScreen from "./FormScreen";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <FormScreen />
      </ScrollView>
    </SafeAreaView>
  );
}
