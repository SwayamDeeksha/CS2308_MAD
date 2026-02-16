import React from 'react';
import { StyleSheet, View, ScrollView, Image, Text, useColorScheme } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const App = () => {

  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: isDark ? '#000' : '#fff' }}>
      
      <View
        style={[
          styles.container,
          { backgroundColor: isDark ? '#333' : '#dadada' }
        ]}
      >

        {/* Profile Picture replacing first name */}
        <View style={styles.card}>
          <Image
            source={{ uri: 'https://i.pravatar.cc/150?img=1' }}
            style={styles.profileImage}
          />
        </View>

        {/* Horizontal Scroll */}
        <ScrollView
          contentContainerStyle={{ gap: 10 }}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.box1} />
          <View style={styles.box2} />
          <View style={styles.box3} />
          <View style={styles.box1} />
          <View style={styles.box2} />
          <View style={styles.box3} />
        </ScrollView>

      </View>

      <View style={{ padding: 10 }}>
        <Text style={{ color: isDark ? '#fff' : '#000' }}>
          hellowwww
        </Text>
      </View>

    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 5,
    flex: 1,   // ✅ FIXED (instead of height: "100%")
  },

  box1: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: 'red',
  },

  box2: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: 'green',
  },

  box3: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: 'blue',
  },

  /* Retained but unused */
  card1: {
    width: 100,
    height: 100,
    borderRadius: 10,
    backgroundColor: '#f2f2f2',
    alignItems: "center",
    justifyContent: "center"
  },

  card2: {
    width: 100,
    height: 100,
    borderRadius: 10,
    backgroundColor: '#e6e6e6',
    alignItems: "center",
    justifyContent: "center"
  },

  card3: {
    width: 100,
    height: 100,
    borderRadius: 10,
    backgroundColor: '#d9d9d9',
    alignItems: "center",
    justifyContent: "center"
  },

  card: {
    width: 100,
    height: 100,
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'white',
    alignItems: "center",
    justifyContent: "center"
  },

  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
});
