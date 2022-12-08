import React from 'react';
import { Text, View, Image } from 'react-native';


export default function Section7() {
    return (
        <View>
            <View><Text style={{ fontSize: 20 }}> Room Type </Text></View>
            <View style={{ flexDirection: 'row' }}>

                <Image style={{ width: 100, height: 150, borderRadius: 9 }} source={require('../../assets/week3/room-8.jpg')} />
                <View style={{ marginLeft: 10, }}>
                    <Text style={{ fontSize: 20 }}> Standard Twin Room</Text>
                    <Text style={{ color: "tomato", marginTop: 70, fontSize: 20 }}> $399.99</Text>
                    <Text style={{ color: "skyblue" }}> Hurry Up! This is your last room!</Text>
                </View>
            </View>
        </View>
    );
}