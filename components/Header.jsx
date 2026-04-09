import { MaterialIcons } from "@expo/vector-icons";
import { View } from "react-native";
import CustomText from "./CustomText";
import { useRouter } from "expo-router";

const Header = ({ leftIcon, rightIcon }) => {
  const route = useRouter()
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingTop: 10,
      }}
    >
      <MaterialIcons
        name={leftIcon}
        color="#ffff"
        size={20}
        style={{ paddingTop: 10 }}
        onPress={()=>route.back()}
      />
      <CustomText
        style={{ fontSize: 20, fontFamily: "Poppins-SemiBold", color: "#ffff" }}
      >
        Student Profile
      </CustomText>
      <MaterialIcons
        name={rightIcon}
        color="#ffff"
        size={20}
        style={{ paddingTop: 10 }}
        onPress={()=>route.navigate('/settings-screen')}
      />
    </View>
  );
};

export default Header;
