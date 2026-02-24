import { MaterialIcons } from '@react-native-vector-icons/material-icons';
import { Text, View } from 'react-native';

const Card = ({ icon, text }) => {
    return (
        <View
            style={{
                alignItems: 'center',
                padding: 20,
                backgroundColor: '#ffff',
                borderRadius: 10,
                width: 120,

                elevation: 2,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.2,
                shadowRadius: 1.41,

            }}
        >
            <MaterialIcons name={icon} size={30} />
            <Text style={{ fontSize: 16, marginTop: 8, textAlign: 'center' }}>{text}</Text>
        </View >
    );
}

export default Card;