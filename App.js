// The code below will display my BioSketch @ UC, and it's amazing!!!!!

import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      <Image
        source={require('./assests/asha.png')}
        style={styles.image}
      />

      <Text style={styles.title}>
        WELCOME TO THE UNIVERSITY of the CUMBERLANDS
        {"\n"}
        Course ID: MSCS 533
      </Text>

      <Text style={styles.bio}>
        Hello everyone!

        My name is Asha Kilaru. I am currently pursuing my Master’s in
        Computer Science at the University of the Cumberlands.

        Professionally, I work as a Fullstack Java Developer where I design,
        develop, and implement solutions to improve IT operations and
        business workflows.

        My technical interests include mobile application development,
        cloud computing, automation, and software engineering.

        I am excited to learn React Native and build cross-platform
        mobile applications in this course.
      </Text>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#e60026',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  image: {
    width: 180,
    height: 180,
    borderRadius: 90,
    marginBottom: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },

  bio: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    lineHeight: 28,
  },
});
