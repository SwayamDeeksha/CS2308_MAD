import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const Home = ({ navigation }: any) => {
  return (
    <View>

      <Text>Home</Text>

      <Button
        title="Profile"
        onPress={() => navigation.navigate('Profile')}
      />

    </View>
  )
}

export default Home

const styles = StyleSheet.create({})
