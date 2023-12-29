import { FlatList, View, Text, Dimensions, StyleSheet, Image } from 'react-native'
import React from 'react'

const Data = [
    {
        id: 1,
        name: 'Ruffles',
        url: require('../../assets/icon.png')
    },
    {
        id: 2,
        name: 'Ruffles2',
        url: require('../../assets/icon.png')
    },
    {
        id: 3,
        name: 'Ruffles3',
        url: require('../../assets/icon.png')
    },
    {
        id: 4,
        name: 'Ruffles4',
        url: require('../../assets/icon.png')
    },
    {
        id: 5,
        name: 'Ruffles5',
        url: require('../../assets/icon.png')
    },
    {
        id: 6,
        name: 'Ruffles6',
        url: require('../../assets/icon.png')
    },
    {
        id: 7,
        name: 'Ruffles7',
        url: require('../../assets/icon.png')
    },
    {
        id: 8,
        name: 'Ruffles8',
        url: require('../../assets/icon.png')
    },
]

const { height, width } = Dimensions.get('window')

export default function StoryBar() {
    return (
        <View style={{ borderBottomWidth: 1, borderColor: 'rgba(0,0,0,0.2)', backgroundColor: 'white', height: height * 0.12 }}>
            <FlatList
                data={Data}
                renderItem={({ item }) => <ListOfStory url={item.url} name={item.name} />}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

function ListOfStory({ url, name }) {
    return (
        <View style={{ marginHorizontal: 8, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ borderWidth: 2, width: 70, height: 70, justifyContent: 'center', alignItems: 'center', borderRadius: 35 }}>
                <Image source={url} style={{ width: 60, height: 60, borderRadius: 50 }} resizeMode='cover' />
            </View>
            <Text style={{ fontSize: 12 }}>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

})