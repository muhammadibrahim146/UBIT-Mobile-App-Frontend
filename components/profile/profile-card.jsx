// import { MaterialIcons } from "@expo/vector-icons";
// import { Image, View } from "react-native";
// import CustomText from "../CustomText";

// const ProfileCard = ({ name }) => {
//   return (
//     <View style={{ alignItems: "center", marginTop: 20 }}>
//       <View
//         style={{
//           width: "90%",
//           backgroundColor: "#ffff",
//           borderRadius: 20,
//           marginTop: 60,
//           paddingVertical: 20,
//           alignItems: "center",
//         }}
//       >
//           <View>
//             <Image
//               source={{
//                 uri: "https://miro.medium.com/v2/resize:fit:500/0*X7e4LM92V7Qnrbyn",
//               }}
//               style={{
//                 width: 120,
//                 height: 120,
//                 borderRadius: 80,
//                 marginTop: -80,
//                 marginBottom: 20,
//                 borderColor: "#800000",
//                 borderWidth: 3,
//               }}
//             />

//             <View
//               style={{
//                 backgroundColor: "green",
//                 width: 20,
//                 height: 20,
//                 borderRadius: 80,
//                 position: "absolute",
//                 right: 10,
//                 bottom: 24,
//                 borderWidth: 2,
//                 borderColor: "#ffff",
//               }}
//             ></View>
//           </View>

//         <CustomText style={{ fontSize: 22, fontFamily: "Poppins-Bold" }}>
//           {name}
//         </CustomText>

//         <CustomText style={{ fontSize: 16 }}>Student ID: 123456789</CustomText>

//         <View
//           style={{
//             flexDirection: "row",
//             alignItems: "center",
//             backgroundColor: "#fff1f1",
//             paddingHorizontal: 10,
//             paddingVertical: 5,
//             borderRadius: 10,
//             marginTop: 10,
//           }}
//         >
//           <MaterialIcons
//             name="school"
//             size={16}
//             color="#800000"
//             style={{ marginRight: 6 }}
//           />
//           <CustomText
//             style={{
//               fontSize: 14,
//               color: "#800000",
//               lineHeight: 20,
//             }}
//           >
//             Department of Computer Science
//           </CustomText>
//         </View>

//         <View
//           style={{
//             height: 1,
//             width: "40%",
//             backgroundColor: "#d8d7d7",
//             marginVertical: 20,
//           }}
//         ></View>

//         <CustomText style={{ fontSize: 14, color: "#818181" }}>
//           Current Enrolment
//         </CustomText>
//         <CustomText
//           style={{
//             fontSize: 14,
//             fontFamily: "Poppins-SemiBold",
//             color: "#800000",
//           }}
//         >
//           Third Year (5th Semester)
//         </CustomText>
//       </View>
//     </View>
//   );
// };

// export default ProfileCard;

import { MaterialIcons } from "@expo/vector-icons";
import { Image, View, TouchableOpacity, Text } from "react-native";
import CustomText from "../CustomText";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";

const ProfileCard = ({ name }) => {
  const route = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  const [profileImage, setProfileImage] = useState(
    "https://miro.medium.com/v2/resize:fit:500/0*X7e4LM92V7Qnrbyn",
  );

  const handleImageUpload = async () => {
    // Request permission to access media library
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== "granted") {
      alert(
        "Sorry, we need camera roll permissions to change profile picture!",
      );
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  return (
    <View style={{ alignItems: "center", marginTop: 20 }}>
      <View
        style={{
          width: "90%",
          backgroundColor: "#ffff",
          borderRadius: 20,
          marginTop: 60,
          paddingVertical: 20,
          alignItems: "center",
        }}
      >
        <View>
          <TouchableOpacity
            onPress={handleImageUpload}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            activeOpacity={0.9}
            style={{
              position: "relative",
            }}
          >
            <Image
              source={{ uri: profileImage }}
              style={{
                width: 120,
                height: 120,
                borderRadius: 80,
                marginTop: -80,
                marginBottom: 20,
                borderColor: "#800000",
                borderWidth: 3,
              }}
            />

            {/* Hover overlay with pencil icon */}
            {isHovered && (
              <View
                style={{
                  position: "absolute",
                  top: -80,
                  left: 0,
                  right: 0,
                  bottom: 20,
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                  borderRadius: 80,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <MaterialIcons name="edit" size={40} color="#ffffff" />
              </View>
            )}
          </TouchableOpacity>

          <View
            style={{
              backgroundColor: "green",
              width: 20,
              height: 20,
              borderRadius: 80,
              position: "absolute",
              right: 10,
              bottom: 24,
              borderWidth: 2,
              borderColor: "#ffff",
            }}
          ></View>
        </View>

        <Text
          style={{
            fontSize: 12,
            fontFamily: "Poppins-SemiBold",
            color: "#800000",
            marginTop: -6,
          }}
          onPress={() => route.navigate('/edit-screen')}
        >
          Edit
        </Text>

        <CustomText style={{ fontSize: 22, fontFamily: "Poppins-Bold" }}>
          {name}
        </CustomText>

        <CustomText style={{ fontSize: 16 }}>Student ID: 123456789</CustomText>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#fff1f1",
            paddingHorizontal: 10,
            paddingVertical: 5,
            borderRadius: 10,
            marginTop: 10,
          }}
        >
          <MaterialIcons
            name="school"
            size={16}
            color="#800000"
            style={{ marginRight: 6 }}
          />
          <CustomText
            style={{
              fontSize: 14,
              color: "#800000",
              lineHeight: 20,
            }}
          >
            Department of Computer Science
          </CustomText>
        </View>

        <View
          style={{
            height: 1,
            width: "40%",
            backgroundColor: "#d8d7d7",
            marginVertical: 20,
          }}
        ></View>

        <CustomText style={{ fontSize: 14, color: "#818181" }}>
          Current Enrolment
        </CustomText>
        <CustomText
          style={{
            fontSize: 14,
            fontFamily: "Poppins-SemiBold",
            color: "#800000",
          }}
        >
          Third Year (5th Semester)
        </CustomText>
      </View>
    </View>
  );
};

export default ProfileCard;
