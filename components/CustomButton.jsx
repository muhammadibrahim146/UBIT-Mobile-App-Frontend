import { MaterialIcons } from '@react-native-vector-icons/material-icons';
import { Text, TouchableOpacity } from 'react-native';

const CustomButtom = ({ text, icon }) => {

    return (
        <TouchableOpacity
            onPress={() => { }}
            style={{
                backgroundColor: '#FFFFFF',
                paddingVertical: 10,
                paddingHorizontal: 16,
                borderRadius: 8,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',

                elevation: 2,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.2,
                shadowRadius: 1.41,
            }}
        >
            <Text
                style={{
                    color: '#000000',
                    fontSize: 14,
                    fontWeight: '600',
                    marginRight: 8
                }}
            >
                {text}
            </Text>
            <MaterialIcons name={icon} color="#000000" size={14} />
        </TouchableOpacity>
    );
}

export default CustomButtom;