import Title from '@/components/Title';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function WoofPost({ image, title, description }) {
    return (
        <View style={styles.postCard}>
            <Image source={{ uri: image }} style={styles.postImage} />

            <View style={styles.content}>
                <Title>{title}</Title>
                <Text style={styles.description}>{description}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    postCard: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 14,
        padding: 12,
        marginBottom: 15,
    },
    postImage: {
        flex: 1,
        height: 100,
        borderRadius: 10,
        marginRight: 12,
    },
    content: {
        flex: 2,
        justifyContent: 'center',
    },
    description: {
        marginTop: 6,
        color: '#666',
        lineHeight: 20,
    },
});
