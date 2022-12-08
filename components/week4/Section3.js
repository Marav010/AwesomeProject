import React from 'react';
import { View, Text } from 'react-native';


export default function Section3() {
    return (
        <View style={{ flexDirection: 'row', marginTop: 30 }}>
            {/* ก้อนที่1 */}
            <View style={{ height: 50, width: 50, borderRadius: 50 / 2, backgroundColor: 'tomato', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 20, color: "white" }}>9.5</Text>
            </View>

            {/* ก้อนที่2 */}

            <View style={{ marginLeft: 10 }}>
                <Text style={{ fontSize: 15, color: "tomato" }}>Excellent</Text>
                <Text style={{ color: "gray" }}>See 801 reviews</Text>
            </View>
        </View>
    );
}