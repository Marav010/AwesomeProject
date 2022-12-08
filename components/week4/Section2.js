import React from 'react';
import { Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Section2() {
    return (
        <View style={{ flex: 1, borderWidth: 1, borderColor: 'gray', backgroundColor: 'lightgray', borderRadius: 10, marginTop: -50, padding: -10 }}>
            {/* ก้อนที่1 */}
            <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'center' }}>
                <Text style={{ fontSize: 20 }}>Hilton San Francisco </Text>
            </View>
            {/* ก้อนที่2 */}
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <View style={{ flexDirection: 'row' }}>

                    <FontAwesome name="star" size={12} color="orange" />
                    <FontAwesome name="star" size={12} color="orange" />
                    <FontAwesome name="star" size={12} color="orange" />
                    <FontAwesome name="star" size={12} color="orange" />
                    <FontAwesome name="star-half" size={12} color="orange" />
                </View>
            </View>
            {/* ก้อนที่3 */}
            <View>
                <View style={{ justifyContent: 'center', marginVertical: 5 }}>
                    <Text style={{ textAlign: 'center' }} >Facilities provided may range from a modest quality mattress in a small room to large suites</Text>

                </View>
            </View>

        </View>

    );
}