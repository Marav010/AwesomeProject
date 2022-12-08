import React from 'react';
import { View } from 'react-native';
import MyIcon from '../week3/MyIcon';


export default function Section5() {
    return (
        <View style={{ borderColor: "gray", borderRadius: 10, margin: -25, paddingBottom: -25 }}>
            <View style={{ flexDirection: 'row', marginTop: 30, justifyContent: 'space-around' }}>
                <MyIcon title='Wifi' name='wifi' size={30} color='skyblue' />
                <MyIcon title='Coffee' name='coffee' size={30} color='skyblue' />
                <MyIcon title='Bath' name='bath' size={30} color='skyblue' />
                <MyIcon title='Car' name='car' size={30} color='skyblue' />
                <MyIcon title='Paw' name='paw' size={30} color='skyblue' />
            </View>
        </View>
    );
}