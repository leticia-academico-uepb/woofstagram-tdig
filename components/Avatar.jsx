import { Image } from 'react-native';

export default function Avatar({ source, size = 60 }) {
    return (
        <Image
            source={source}
            style={{
                width: size,
                height: size,
                borderRadius: size / 2,
            }}
        />
    );
}
