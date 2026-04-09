import Heading from '@/components/Heading';
import WoofCard from '@/components/WoofCard';
import WoofPost from '@/components/WoofPost';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Heading>Trending Woofs</Heading>

                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {DATA.woofs.map((woof) => (
                        <WoofCard key={woof.id} name={woof.name} avatar={woof.avatar} />
                    ))}
                </ScrollView>

                <Heading>New Woof Posts</Heading>

                {DATA.posts.map((post) => (
                    <WoofPost key={post.id} image={post.image} title={post.title} description={post.description} />
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
});

const DATA = {
    woofs: [
        {
            id: 1,
            name: 'Rex',
            avatar: 'https://placedog.net/200/200?id=1',
        },
        {
            id: 2,
            name: 'Luna',
            avatar: 'https://placedog.net/200/200?id=2',
        },
        {
            id: 3,
            name: 'Thor',
            avatar: 'https://placedog.net/200/200?id=3',
        },
        {
            id: 4,
            name: 'Max',
            avatar: 'https://placedog.net/200/200?id=4',
        },
    ],
    posts: [
        {
            id: 1,
            image: 'https://placedog.net/300/200?id=10',
            title: 'Como escolher brinquedos',
            description: 'Veja as melhores opções para entreter seu cão.',
        },
        {
            id: 2,
            image: 'https://placedog.net/300/200?id=11',
            title: 'Alimentação saudável',
            description: 'Dicas para melhorar a saúde do seu pet.',
        },
        {
            id: 3,
            image: 'https://placedog.net/300/200?id=12',
            title: 'Passeios ideais',
            description: 'Como melhorar a rotina do seu cachorro.',
        },
    ],
};
