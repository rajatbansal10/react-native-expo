import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';


export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="profile"
        options={{
          // 👇 This will rename both header & tab bar label
          title: 'Profile',
          tabBarIcon : ({color, size}) => (
            <FontAwesome name = "user" size = {size} color = {color} />
          )
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'About',
          tabBarIcon : ({color, size}) => {
            return (
                <View style = {styles.containers}>
                    <AntDesign name = "contacts" size = {28} color = {"white"} />
                </View>
            )
          }
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          title: 'Contact',
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
    containers : {
        width : 50,
        height : 50,
        borderRadius : 50,
        backgroundColor : "red", 
        bottom : 15,
        alignItems : "center",
        justifyContent : "center"
    }
})

