import Avatar from '@/components/Avatar';
import Title from '@/components/Title';
import { StyleSheet, View } from 'react-native';

export default function WoofCard({ name, avatar }) {
    return (
        <View style={styles.card}>
            <Avatar source={{ uri: avatar }} size={80} />

            <View style={styles.titleWrapper}>
                <Title>{name}</Title>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 14,
        padding: 15,
        alignItems: 'center',
        width: 110,
    },
    titleWrapper: {
        alignItems: 'center',
        marginTop: 10,
    },
});
