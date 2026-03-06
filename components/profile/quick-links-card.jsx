import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity, View } from 'react-native';
import CustomText from '../CustomText';

const ContactCard = ({ data }) => {
    return (
        <View
            style={{
                width: '90%',
                backgroundColor: '#ffff',
                borderRadius: 20,
                marginTop: 20,
                paddingVertical: 20,
                paddingHorizontal: 20,
                gap: 15,
                alignSelf: 'center',
            }}
        >
            <CustomText style={{ fontFamily: 'Poppins-SemiBold' }}                >
                Quick Links
            </CustomText>

            {data.map((item, index) => (
                <TouchableOpacity
                    key={index}
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 15,
                        padding: 10,
                    }}
                    onPress={item.onPress}
                >
                    <MaterialIcons name={item.icon} size={24} />
                    <CustomText>{item.label}</CustomText>
                    <MaterialIcons name="chevron-right" size={24} style={{ position: 'absolute', right: 10 }} />
                </TouchableOpacity>
            ))}
        </View>
    );
}

export default ContactCard;