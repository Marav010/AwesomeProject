import React from 'react';
import { Button, TextInput, View } from 'react-native';


export default function Signup() {
    return (
        <View style={{ padding : 20  }}>
            <TextInput Placeholder ='Input id' />
            <TextInput Placeholder ='Input email' />
            <TextInput Placeholder ='Input address' />
            <Button title='Sign up'color={"tomato"}/>
        </View>    
    );
}
