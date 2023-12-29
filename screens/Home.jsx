import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import StoryBar from '../components/header/StoryBar'
import Post from '../components/homeMain/Post'

export default function Home() {
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <ScrollView>
                <StoryBar />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </ScrollView>
        </View>
    )
}