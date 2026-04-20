import React, { useState } from "react";
import {
  View,
  ScrollView,
  Switch,
  TouchableOpacity,
  Alert,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import CustomText from "@/components/CustomText";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";

const NotificationSettingsScreen = () => {
  const router = useRouter();

  // States
  const [pushEnabled, setPushEnabled] = useState(true);
  const [attendanceConfirm, setAttendanceConfirm] = useState(true);
  const [classReminder, setClassReminder] = useState(true);
  const [announcements, setAnnouncements] = useState(true);
  const [grades, setGrades] = useState(false);

  const handleSave = () => {
    Alert.alert("Success", "Notification settings saved!", [
      { text: "OK", onPress: () => router.back() },
    ]);
  };

  const handleCancel = () => {
    router.back();
  };

  return (
    <>
      <StatusBar backgroundColor="#800000" style="light" />

      <ScrollView style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
        <View style={{ alignItems: "center", paddingBottom: 40 }}>
          
          {/* Card Container */}
          <View
            style={{
              width: "90%",
              backgroundColor: "#fff",
              borderRadius: 20,
              marginTop: 80,
              paddingVertical: 20,
              paddingHorizontal: 15,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.1,
              shadowRadius: 8,
              elevation: 5,
            }}
          >
            
            {/* Header */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 15,
              }}
            >
              <TouchableOpacity onPress={handleCancel}>
                <MaterialIcons name="arrow-back" size={24} color="#800000" />
              </TouchableOpacity>

              <CustomText
                style={{
                  fontSize: 18,
                  fontFamily: "Poppins-SemiBold",
                  color: "#800000",
                }}
              >
                Notifications
              </CustomText>

              <View style={{ width: 24 }} />
            </View>

            {/* Title */}
            <CustomText
              style={{
                fontSize: 16,
                fontFamily: "Poppins-SemiBold",
                color: "#800000",
                marginBottom: 5,
              }}
            >
              Preferences
            </CustomText>

            <CustomText
              style={{
                fontSize: 12,
                color: "#666",
                marginBottom: 15,
              }}
            >
              Manage how you receive updates and alerts.
            </CustomText>

            {/* Global Toggle */}
            <View
              style={{
                backgroundColor: "#800000",
                padding: 15,
                borderRadius: 15,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 15,
              }}
            >
              <View>
                <CustomText
                  style={{
                    color: "#fff",
                    fontFamily: "Poppins-SemiBold",
                  }}
                >
                  Push Notifications
                </CustomText>
                <CustomText style={{ color: "#f3caca", fontSize: 11 }}>
                  Enable or disable all alerts
                </CustomText>
              </View>

              <Switch
                value={pushEnabled}
                onValueChange={setPushEnabled}
              />
            </View>

            {/* Attendance Section */}
            <SectionTitle title="Attendance Alerts" />

            <ToggleItem
              title="Marking Confirmation"
              desc="Alert when marked present/absent"
              value={attendanceConfirm}
              onChange={setAttendanceConfirm}
            />

            <ToggleItem
              title="Class Reminders"
              desc="15 minutes before class"
              value={classReminder}
              onChange={setClassReminder}
            />

            {/* Academic Section */}
            <SectionTitle title="Academic Updates" />

            <ToggleItem
              title="Announcements"
              desc="University updates"
              value={announcements}
              onChange={setAnnouncements}
            />

            <ToggleItem
              title="Grade Alerts"
              desc="New results published"
              value={grades}
              onChange={setGrades}
            />

            {/* Info Box */}
            <View
              style={{
                backgroundColor: "#fcecec",
                padding: 12,
                borderRadius: 10,
                marginTop: 10,
              }}
            >
              <CustomText
                style={{
                  fontFamily: "Poppins-SemiBold",
                  color: "#800000",
                }}
              >
                Battery Optimization
              </CustomText>

              <CustomText style={{ fontSize: 11, color: "#555" }}>
                Disable battery saver to receive notifications properly.
              </CustomText>
            </View>

            {/* Buttons */}
            <View
              style={{
                flexDirection: "row",
                marginTop: 20,
              }}
            >
              <TouchableOpacity
                onPress={handleCancel}
                style={{
                  flex: 1,
                  backgroundColor: "#f5f5f5",
                  padding: 12,
                  borderRadius: 10,
                  marginRight: 10,
                  borderWidth: 1,
                  borderColor: "#800000",
                }}
              >
                <CustomText
                  style={{
                    textAlign: "center",
                    color: "#800000",
                    fontFamily: "Poppins-SemiBold",
                  }}
                >
                  Cancel
                </CustomText>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={handleSave}
                style={{
                  flex: 1,
                  backgroundColor: "#800000",
                  padding: 12,
                  borderRadius: 10,
                  marginLeft: 10,
                }}
              >
                <CustomText
                  style={{
                    textAlign: "center",
                    color: "#fff",
                    fontFamily: "Poppins-SemiBold",
                  }}
                >
                  Save Changes
                </CustomText>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default NotificationSettingsScreen;


/// 🔥 Reusable Components

const SectionTitle = ({ title }) => (
  <CustomText
    style={{
      marginTop: 10,
      marginBottom: 5,
      fontSize: 13,
      color: "#800000",
      fontFamily: "Poppins-SemiBold",
    }}
  >
    {title}
  </CustomText>
);

const ToggleItem = ({ title, desc, value, onChange }) => (
  <View
    style={{
      backgroundColor: "#f9f9f9",
      padding: 12,
      borderRadius: 10,
      marginBottom: 10,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    }}
  >
    <View style={{ flex: 1, paddingRight: 10 }}>
      <CustomText style={{ fontFamily: "Poppins-SemiBold" }}>
        {title}
      </CustomText>
      <CustomText style={{ fontSize: 11, color: "#666" }}>
        {desc}
      </CustomText>
    </View>

    <Switch value={value} onValueChange={onChange} />
  </View>
);