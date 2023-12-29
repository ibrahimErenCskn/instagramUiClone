import { View, Text, Image, Button, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Entypo, AntDesign, Feather, Ionicons, MaterialIcons } from '@expo/vector-icons';

export default function Post() {

    const fullText = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Provident atque fuga doloribus esse voluptate explicabo, error distinctio voluptatum, cupiditate officiis officia facilis nobis aspernatur incidunt dolore voluptates asperiores autem optio!'
    const [showFullText, setShowFullText] = useState(false);
    const [componentBoyut, setComponentBoyut] = useState({ width: 0, height: 0 });

    const toggleText = () => {
        setShowFullText(!showFullText);
    };
    const handleLayout = (event) => {
        const { width, height } = event.nativeEvent.layout;
        setComponentBoyut({ width, height });
    };
    return (
        <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 5, paddingHorizontal: 10 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={require('../../assets/icon.png')} style={{ width: 50, height: 50, borderRadius: 25, marginRight: 10 }} />
                    <View>
                        <Text style={{ fontWeight: 'bold' }}>
                            Ruffles
                        </Text>
                        <Text style={{ fontSize: 12 }}>
                            Sponsored
                        </Text>
                    </View>
                </View>
                <Entypo name="dots-three-horizontal" size={18} color="black" />
            </View>
            <View>
                <Image source={require('../../assets/images/1_1.png')} style={{ width: '100%', height: 400 }} resizeMode='stretch' />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 5, marginVertical: 5 }}>
                <View style={{ flexDirection: 'row', gap: 8 }}>
                    <AntDesign name="hearto" size={24} color="red" />
                    <Feather name="message-circle" size={24} color="black" />
                    <Ionicons name="md-paper-plane-outline" size={24} color="black" />
                </View>
                <View>
                    <MaterialIcons name="padding" size={24} color="black" />
                </View>
            </View>
            <View style={{ paddingHorizontal: 5 }}>
                <Text style={{ fontWeight: 'bold' }}>100 Likes</Text>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', position: 'relative' }}>
                    <Text onLayout={handleLayout}>{showFullText ? fullText : `${fullText.slice(0, 100)}...`}</Text>
                    <Pressable onPress={toggleText} style={{ position: 'absolute', bottom: 0, right: componentBoyut.width / 6 }}>
                        <Text style={{ opacity: 0.45 }}>{!showFullText && 'more'}</Text>
                    </Pressable>
                </View>
                <View style={{ marginTop: 5, marginBottom: 20 }}>
                    <Text style={{ opacity: 0.6 }}>
                        View all 16 comments
                    </Text>
                </View>
            </View>
        </View>
    )
}