import React from 'react';
import { Button, Text, View } from 'react-native';


export default function Section8() {
    return (
        <View style={{ padding: -10}}>
         <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
                <View style={{ flexDirection: 'column' }}>
                <Text>Price</Text>
                <Text>$399.99</Text>
                <Text>AGV/Nigth</Text>
            </View>
            <View style={{alignItems:'flex-end',justifyContent:'flex-end'}}>
                <Button title='Book Now' color={"tomato"} />
            </View>
        </View>
        </View>
    );
}