import React from 'react';
import { TextInput, View } from 'react-native';
import MyIcon from './MyIcon';


export default function Menu() {
    return (
        <View style={{ borderWidth :1, borderColor :"gray",borderRadius :10 ,margin :20 , padding:20 }}>
            {/*ก้อนที่ 1*/ }
            <View>
                <TextInput placeholder="what're you looking for?"/>
            </View>
            {/*ก้อนที่ 2*/ }
            <View style={{ flexDirection: 'row',justifyContent:'space-around', margin :10}}>
                <MyIcon title ='Hotel' name='building' size={30} color='red' />
                <MyIcon title ='Tour' name='map-marker' size={30} color='redorange' />
                <MyIcon title ='Car' name='car' size={30} color='orange' />
                <MyIcon title ='Fligth' name='plane' size={30} color='yelloworange' />
            </View>
            {/*ก้อนที่ 3*/ }
            <View style={{ flexDirection: 'row',justifyContent:'space-around',}}> 
                <MyIcon title ='Cruise' name='ship' size={30} color='violet' />
                <MyIcon title ='Bus' name='bus' size={30} color='blueviolet' />
                <MyIcon title ='Event' name='star' size={30} color='bluegreen' />
                <MyIcon title ='More' name='ellipsis-h' size={30} color='green' />
            </View>
            
        </View>    
    );
}
