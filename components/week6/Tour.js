import React from "react";
import { Image, ScrollView } from "react-native";
import { Text, View } from "react-native";
import TourItem from "./TourItem";

export default function Tour(props) {
    return (
        <View style={props.style}>

            <Text style={{ fontSize: 20 }}>Tour</Text>
            <Text style={{ color: "gray", marginVertical: 10 }}> Let find out what most interesting things</Text>
            <ScrollView horizontal={true} >
                <View style={{ flexDirection: "row" }}>
                    <View style={{ marginRight: 10 }}>
                        <Image source={{ uri: 'https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-1.jpg' }}
                            style={{ height: 100, width: 200, borderRadius: 10 }} />
                        <View style={{ marginTop: -30, height: 30, width: 200, paddingHorizontal: 10, backgroundColor: "black", opacity: 0.5, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                            <Text style={{ fontSize: 20, color: "white" }}>
                                Tour in Somewhere
                            </Text>
                        </View>
                    </View>
                    <View style={{ marginRight: 10 }}>
                        <Image source={{ uri: 'https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-1.jpg' }}
                            style={{ height: 100, width: 200, borderRadius: 10 }} />
                        <View style={{ marginTop: -30, height: 30, width: 200, paddingHorizontal: 10, backgroundColor: "black", opacity: 0.5, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                            <Text style={{ fontSize: 20, color: "white" }}>
                                Tour in Somewhere
                            </Text>
                        </View>
                    </View>
                    <View style={{ marginRight: 10 }}>
                        <Image source={{ uri: 'https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-1.jpg' }}
                            style={{ height: 100, width: 200, borderRadius: 10 }} />
                        <View style={{ marginTop: -30, height: 30, width: 200, paddingHorizontal: 10, backgroundColor: "black", opacity: 0.5, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                            <Text style={{ fontSize: 20, color: "white" }}>
                                Tour in Somewhere
                            </Text>

                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}
