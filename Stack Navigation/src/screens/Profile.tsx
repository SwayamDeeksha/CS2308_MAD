import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const Profile = ({ navigation }: any) => {
  return (
    <View>

      <Text>Profile</Text>

      <Button
        title="Home"
        onPress={() => navigation.navigate('Home')}
      />

    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})
