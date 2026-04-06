

// import { MaterialIcons } from "@expo/vector-icons";
// import { Image, View, TouchableOpacity, Text } from "react-native";
// import CustomText from "@/components/CustomText";
// import { useState } from "react";
// import * as ImagePicker from "expo-image-picker";
// import { useRouter } from "expo-router";

// const EditScreen = ({ name }) => {
//   const route = useRouter();

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

// export default EditScreen;

import { MaterialIcons } from "@expo/vector-icons";
import { Image, View, TouchableOpacity, Text, TextInput, ScrollView, Alert } from "react-native";
import CustomText from "@/components/CustomText";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";

const EditScreen = ({ name: initialName }) => {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  const [profileImage, setProfileImage] = useState("https://miro.medium.com/v2/resize:fit:500/0*X7e4LM92V7Qnrbyn");
  
  // Form fields state
  const [name, setName] = useState(initialName || "");
  const [studentId, setStudentId] = useState("");
  const [department, setDepartment] = useState("");
  const [year, setYear] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");

  const handleImageUpload = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
    if (status !== 'granted') {
      Alert.alert('Permission Needed', 'Sorry, we need camera roll permissions to change profile picture!');
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

  const handleSave = () => {
    // Here you would typically save the data to your backend
    Alert.alert(
      'Success',
      'Profile updated successfully!',
      [
        {
          text: 'OK',
          onPress: () => router.back()
        }
      ]
    );
  };

  const handleCancel = () => {
    router.back();
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
      <View style={{ alignItems: "center", marginTop: 20, paddingBottom: 40 }}>
        <View
          style={{
            width: "90%",
            backgroundColor: "#ffff",
            borderRadius: 20,
            marginTop: 60,
            paddingVertical: 20,
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 8,
            elevation: 5,
          }}
        >
          {/* Profile Image Section */}
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

          {/* Form Fields */}
          <View style={{ width: "85%", marginTop: 10 }}>
            {/* Name Field */}
            <View style={{ marginBottom: 15 }}>
              <CustomText style={{ fontSize: 14, color: "#800000", marginBottom: 5, fontFamily: "Poppins-SemiBold" }}>
                Full Name
              </CustomText>
              <TextInput
                style={{
                  borderWidth: 1,
                  borderColor: "#e0e0e0",
                  borderRadius: 10,
                  paddingHorizontal: 15,
                  paddingVertical: 12,
                  fontSize: 14,
                  backgroundColor: "#f9f9f9",
                }}
                value={name}
                onChangeText={setName}
                placeholder="Enter your full name"
              />
            </View>

            {/* Student ID Field */}
            <View style={{ marginBottom: 15 }}>
              <CustomText style={{ fontSize: 14, color: "#800000", marginBottom: 5, fontFamily: "Poppins-SemiBold" }}>
                Student ID
              </CustomText>
              <TextInput
                style={{
                  borderWidth: 1,
                  borderColor: "#e0e0e0",
                  borderRadius: 10,
                  paddingHorizontal: 15,
                  paddingVertical: 12,
                  fontSize: 14,
                  backgroundColor: "#f9f9f9",
                }}
                value={studentId}
                onChangeText={setStudentId}
                placeholder="Enter student ID"
                editable={true} // Make student ID read-only
              />
            </View>

            {/* Email Field */}
            <View style={{ marginBottom: 15 }}>
              <CustomText style={{ fontSize: 14, color: "#800000", marginBottom: 5, fontFamily: "Poppins-SemiBold" }}>
                Email Address
              </CustomText>
              <TextInput
                style={{
                  borderWidth: 1,
                  borderColor: "#e0e0e0",
                  borderRadius: 10,
                  paddingHorizontal: 15,
                  paddingVertical: 12,
                  fontSize: 14,
                  backgroundColor: "#f9f9f9",
                }}
                value={email}
                onChangeText={setEmail}
                placeholder="Enter email address"
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            {/* Contact Number Field */}
            <View style={{ marginBottom: 15 }}>
              <CustomText style={{ fontSize: 14, color: "#800000", marginBottom: 5, fontFamily: "Poppins-SemiBold" }}>
                Contact Number
              </CustomText>
              <TextInput
                style={{
                  borderWidth: 1,
                  borderColor: "#e0e0e0",
                  borderRadius: 10,
                  paddingHorizontal: 15,
                  paddingVertical: 12,
                  fontSize: 14,
                  backgroundColor: "#f9f9f9",
                }}
                value={contact}
                onChangeText={setContact}
                placeholder="Enter contact number"
                keyboardType="phone-pad"
              />
            </View>

            {/* Department Field */}
            <View style={{ marginBottom: 15 }}>
              <CustomText style={{ fontSize: 14, color: "#800000", marginBottom: 5, fontFamily: "Poppins-SemiBold" }}>
                Department
              </CustomText>
              <TextInput
                style={{
                  borderWidth: 1,
                  borderColor: "#e0e0e0",
                  borderRadius: 10,
                  paddingHorizontal: 15,
                  paddingVertical: 12,
                  fontSize: 14,
                  backgroundColor: "#f9f9f9",
                }}
                value={department}
                onChangeText={setDepartment}
                placeholder="Enter department"
              />
            </View>

            {/* Year/Semester Field */}
            <View style={{ marginBottom: 20 }}>
              <CustomText style={{ fontSize: 14, color: "#800000", marginBottom: 5, fontFamily: "Poppins-SemiBold" }}>
                Year & Semester
              </CustomText>
              <TextInput
                style={{
                  borderWidth: 1,
                  borderColor: "#e0e0e0",
                  borderRadius: 10,
                  paddingHorizontal: 15,
                  paddingVertical: 12,
                  fontSize: 14,
                  backgroundColor: "#f9f9f9",
                }}
                value={year}
                onChangeText={setYear}
                placeholder="Enter year and semester"
              />
            </View>

            {/* Separator */}
            <View
              style={{
                height: 1,
                width: "100%",
                backgroundColor: "#d8d7d7",
                marginVertical: 10,
              }}
            ></View>

            {/* Action Buttons */}
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
              <TouchableOpacity
                onPress={handleCancel}
                style={{
                  flex: 1,
                  backgroundColor: "#f5f5f5",
                  paddingVertical: 12,
                  borderRadius: 10,
                  marginRight: 10,
                  borderWidth: 1,
                  borderColor: "#800000",
                }}
              >
                <CustomText style={{ color: "#800000", textAlign: "center", fontFamily: "Poppins-SemiBold" }}>
                  Cancel
                </CustomText>
              </TouchableOpacity>
              
              <TouchableOpacity
                onPress={handleSave}
                style={{
                  flex: 1,
                  backgroundColor: "#800000",
                  paddingVertical: 12,
                  borderRadius: 10,
                  marginLeft: 10,
                }}
              >
                <CustomText style={{ color: "#ffffff", textAlign: "center", fontFamily: "Poppins-SemiBold" }}>
                  Save Changes
                </CustomText>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default EditScreen;