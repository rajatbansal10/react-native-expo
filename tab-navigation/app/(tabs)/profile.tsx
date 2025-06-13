import { Link, router } from 'expo-router';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Profile() {
    return (
        <View style={styles.container}>
            <Text>Profile</Text>
            <Button title="Go to Details Screen" onPress={() => router.push('/details')} /> 
            <Link href="/details">
                Go To Details Screen
            </Link>

        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});



