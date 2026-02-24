import { useFonts } from 'expo-font';
import { Text } from 'react-native';

const CustomText = ({ text, fontFamily = 'Poppins-Regular', fontSize = 16 }) => {
    const [fontsLoaded] = useFonts({
        'Poppins-Regular': require('@/assets/fonts/Poppins-Regular.ttf'),
        'Poppins-SemiBold': require('@/assets/fonts/Poppins-SemiBold.ttf'),
        'Poppins-Bold': require('@/assets/fonts/Poppins-Bold.ttf'),
    });

    return (
        <Text
            style={{ color: '#000000', fontSize: fontSize, fontFamily: fontFamily }}
        >
            {text}
        </Text>
    );
}

export default CustomText;