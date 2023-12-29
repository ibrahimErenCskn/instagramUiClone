import { View, Image } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';

export default function HeaderLeftSide() {
    return (
        <View style={{ marginLeft: 15, flexDirection: 'row' }}>
            <Image source={require('../../assets/images/instagramlogo.png')} />
            <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
        </View>
    )
}