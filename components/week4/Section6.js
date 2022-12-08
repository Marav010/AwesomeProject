import React from 'react';
import { Text, View, Image } from 'react-native';


export default function Section6() {
    return (
        <View>
            {/* ก้อนที่1 */}
            <View style={{ marginTop: 30 }}>
                <View style={{ marginLeft: 10 }}>
                    <Text style={{ fontSize: 15 }}>Location</Text>
                    <Text style={{ color: "gray" }}>218 Austen Mountain, consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et…</Text>
                </View>
                {/* ก้อนที่2 */}
                <View>
                    <Image style={{ flex: 1, resizeMode: 'cover', aspectRatio: 2.5 }} source={require('../../assets/week3/map.jpg')} />
                </View>
            </View>
        </View>
    );
}