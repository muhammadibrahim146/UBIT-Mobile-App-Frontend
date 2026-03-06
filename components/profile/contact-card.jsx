import { MaterialIcons } from '@expo/vector-icons';
import { View } from 'react-native';
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
                Contact Information
            </CustomText>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 15,
                }}
            >
                <MaterialIcons name="email" size={24} color="#800000" backgroundColor="#8000002d" style={{ padding: 8, borderRadius: 6 }} />
                <View>
                    <CustomText style={{ fontSize: 12, fontFamily: 'Poppins-SemiBold', color: '#818181' }}                >
                        EMAIL ADDRESS
                    </CustomText>

                    <CustomText style={{ fontSize: 16 }} >bilalahmed2520@gmail.com</CustomText>
                </View>
            </View>

            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 15,
                }}
            >
                <MaterialIcons name="phone" size={24} color="#800000" backgroundColor="#8000002d" style={{ padding: 8, borderRadius: 6 }} />
                <View>
                    <CustomText style={{ fontSize: 12, fontFamily: 'Poppins-SemiBold', color: '#818181' }}                >
                        PHONE NUMBER
                    </CustomText>

                    <CustomText style={{ fontSize: 16 }} >+92 300 1234567</CustomText>
                </View>
            </View>
        </View>
    );
}

export default ContactCard;