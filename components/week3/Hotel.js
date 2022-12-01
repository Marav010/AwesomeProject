import React from 'react';
import { Image, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Hotel() {
    return (
        <View style={{ }}>
            {/*ก้อนที่1*/ }
            <View style={{ flexdirectoin : 'row'}}>
                <Image style={{width :50, height:50,borderRadius:50/2}} source={require('../../assets/week3/room-1.jpg')} />  
                </View>
            {/*ก้อนที่2*/ }
            <View style={{ flexdirectoin : 'row',marginTop :10 }}>
            <FontAwesome name="map-marker"  size={32} color="orange" />
            <Text style={{ color : 'grey', fontSize :20}}>553 Cislason Radial</Text>
            </View>
            {/*ก้อนที่3*/ }
            <View>
            <Text style={{fontSize :20}}>Boston Hotel</Text>
            </View>
            {/*ก้อนที่4*/ }
            <View style={{ flexdirectoin : 'row',justifyContent : 'space-between', marginTop :10}}>
            <FontAwesome name="star"  size={32} color="orange" />
            <FontAwesome name="star"  size={32} color="orange" />
            <FontAwesome name="star"  size={32} color="orange" />
            <FontAwesome name="star"  size={32} color="orange" />
            <FontAwesome name="star-haft"  size={32} color="orange" />
            </View>
            <View>
                <Text style={{ color : 'grey'}}>100 Reviews</Text>
            </View>
            {/*ก้อนที่5*/ }
            <View>
                <Text style={{ fontSize :30 ,color : 'gtomato'}}>$125 Reviews</Text>
            </View>
        </View>    
    );
}
