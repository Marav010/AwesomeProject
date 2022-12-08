import React from 'react';
import { Text, View } from 'react-native';


export default function Section4() {
    return (
        <View>
            {/* ก้อนที่1 */}
            <View style={{ borderWidth: 0.5, borderBottomWidth: 0.5, marginTop: 10 }}>
                <View style={{ marginLeft: 10 }}>
                    <Text style={{ fontSize: 15 }}>Hotel Description</Text>
                    <Text style={{ color: "gray" }}>218 Austen Moutntain, consectetur adipiscing, sed eiusmod tempor incididunt ut labore et dolore</Text>
                </View>
            </View>

        </View>
    );
}