import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  Switch,
  TouchableOpacity,
  Alert,
  Modal,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/components/Header";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const SettingsScreen = () => {
  const route = useRouter();
  const [theme, setTheme] = useState("system"); // 'light', 'dark', 'system'
  const [language, setLanguage] = useState("English");
  const [fontSize, setFontSize] = useState("medium"); // 'small', 'medium', 'large'
  const [dataSaver, setDataSaver] = useState(false);
  const [offlineMode, setOfflineMode] = useState(false);
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const [showThemeModal, setShowThemeModal] = useState(false);
  const [showFontModal, setShowFontModal] = useState(false);
  const appVersion = "1.0.0";

  const languages = ["English", "Urdu", "Arabic", "Spanish", "French"];
  const themes = [
    { label: "Light", value: "light" },
    { label: "Dark", value: "dark" },
    { label: "System Default", value: "system" },
  ];
  const fontSizes = [
    { label: "Small", value: "small", size: 12 },
    { label: "Medium", value: "medium", size: 16 },
    { label: "Large", value: "large", size: 20 },
  ];

  const clearCache = () => {
    Alert.alert(
      "Clear Cache",
      "Are you sure you want to clear all cached data? This action cannot be undone.",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Clear",
          style: "destructive",
          onPress: () => {
            // Implement cache clearing logic
            Alert.alert("Success", "Cache cleared successfully");
          },
        },
      ],
    );
  };

  const checkForUpdates = () => {
    Alert.alert(
      "Check for Updates",
      `Current version: ${appVersion}\nYou are using the latest version.`,
      [{ text: "OK" }],
    );
  };

  const SettingItem = ({
    icon,
    label,
    value,
    onPress,
    isSwitch = false,
    switchValue,
    onSwitchChange,
  }) => (
    <TouchableOpacity
      onPress={onPress}
      disabled={isSwitch}
      activeOpacity={isSwitch ? 1 : 0.7}
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 16,
        paddingHorizontal: 20,
        backgroundColor: "#ffffff",
        borderBottomWidth: 1,
        borderBottomColor: "#f0f0f0",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
        <Ionicons
          name={icon}
          size={24}
          color="#800000"
          style={{ marginRight: 12 }}
        />
        <Text
          style={{
            fontFamily: "Poppins-Regular",
            fontSize: 16,
            color: "#333333",
            flex: 1,
          }}
        >
          {label}
        </Text>
        {isSwitch ? (
          <Switch
            value={switchValue}
            onValueChange={onSwitchChange}
            trackColor={{ false: "#767577", true: "#800000" }}
            thumbColor={switchValue ? "#ffffff" : "#f4f3f4"}
          />
        ) : (
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{
                fontFamily: "Poppins-Regular",
                fontSize: 14,
                color: "#666666",
                marginRight: 8,
              }}
            >
              {value}
            </Text>
            <Ionicons name="chevron-forward" size={20} color="#cccccc" />
          </View>
        )}
      </View>
    </TouchableOpacity>
  );

  const SectionHeader = ({ title }) => (
    <View
      style={{
        backgroundColor: "#f8f8f8",
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#e0e0e0",
      }}
    >
      <Text
        style={{
          fontFamily: "Poppins-Regular",
          fontSize: 14,
          fontWeight: "600",
          color: "#800000",
          textTransform: "uppercase",
        }}
      >
        {title}
      </Text>
    </View>
  );

  const ModalPicker = ({
    visible,
    onClose,
    title,
    options,
    selectedValue,
    onSelect,
  }) => (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <TouchableOpacity
        style={{
          flex: 1,
          backgroundColor: "rgba(0,0,0,0.5)",
          justifyContent: "flex-end",
        }}
        activeOpacity={1}
        onPress={onClose}
      >
        <View
          style={{
            backgroundColor: "#ffffff",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            maxHeight: "80%",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 20,
              borderBottomWidth: 1,
              borderBottomColor: "#e0e0e0",
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins-Regular",
                fontSize: 18,
                fontWeight: "600",
                color: "#333333",
              }}
            >
              {title}
            </Text>
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close" size={24} color="#800000" />
            </TouchableOpacity>
          </View>
          <ScrollView>
            {options.map((option) => (
              <TouchableOpacity
                key={typeof option === "string" ? option : option.value}
                style={{
                  padding: 16,
                  borderBottomWidth: 1,
                  borderBottomColor: "#f0f0f0",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
                onPress={() => {
                  onSelect(option);
                  onClose();
                }}
              >
                <Text
                  style={{
                    fontFamily: "Poppins-Regular",
                    fontSize: 16,
                    color: "#333333",
                  }}
                >
                  {typeof option === "string" ? option : option.label}
                </Text>
                {selectedValue ===
                  (typeof option === "string" ? option : option.value) && (
                  <Ionicons name="checkmark" size={24} color="#800000" />
                )}
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </TouchableOpacity>
    </Modal>
  );

  const HelpItem = ({ icon, label, onPress }) => (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 16,
        paddingHorizontal: 20,
        backgroundColor: "#ffffff",
        borderBottomWidth: 1,
        borderBottomColor: "#f0f0f0",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Ionicons
          name={icon}
          size={24}
          color="#800000"
          style={{ marginRight: 12 }}
        />
        <Text
          style={{
            fontFamily: "Poppins-Regular",
            fontSize: 16,
            color: "#333333",
          }}
        >
          {label}
        </Text>
      </View>
      <Ionicons name="chevron-forward" size={20} color="#cccccc" />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f8f8f8" }}>
      <StatusBar style="light" backgroundColor="#800000" />
      <View
        style={{
          position: "absolute",
          height: 200,
          width: "100%",
          backgroundColor: "#800000",
        }}
      />
      <Header
        leftIcon="arrow-back"
        rightIcon="settings"
        onPress={() => route.navigate("/settings-screen")}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        <View
          style={{
            marginTop: 20,
            marginHorizontal: 16,
            borderRadius: 12,
            overflow: "hidden",
            backgroundColor: "#ffffff",
            ...Platform.select({
              ios: {
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 4,
              },
              android: { elevation: 3 },
            }),
          }}
        >
          <SectionHeader title="Appearance" />
          <SettingItem
            icon="color-palette-outline"
            label="Theme"
            value={themes.find((t) => t.value === theme)?.label || "System"}
            onPress={() => setShowThemeModal(true)}
          />
          <SettingItem
            icon="language-outline"
            label="Language"
            value={language}
            onPress={() => setShowLanguageModal(true)}
          />
          <SettingItem
            icon="text-outline"
            label="Font Size"
            value={
              fontSizes.find((f) => f.value === fontSize)?.label || "Medium"
            }
            onPress={() => setShowFontModal(true)}
          />
        </View>

        <View
          style={{
            marginTop: 16,
            marginHorizontal: 16,
            borderRadius: 12,
            overflow: "hidden",
            backgroundColor: "#ffffff",
            ...Platform.select({
              ios: {
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 4,
              },
              android: { elevation: 3 },
            }),
          }}
        >
          <SectionHeader title="Data Management" />
          <SettingItem
            icon="save-outline"
            label="Data Saver Mode"
            isSwitch={true}
            switchValue={dataSaver}
            onSwitchChange={setDataSaver}
          />
          <SettingItem
            icon="download-outline"
            label="Offline Mode (View Cached Data)"
            isSwitch={true}
            switchValue={offlineMode}
            onSwitchChange={setOfflineMode}
          />
          <SettingItem
            icon="trash-outline"
            label="Clear Cache"
            onPress={clearCache}
          />
        </View>

        <View
          style={{
            marginTop: 16,
            marginHorizontal: 16,
            borderRadius: 12,
            overflow: "hidden",
            backgroundColor: "#ffffff",
            ...Platform.select({
              ios: {
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 4,
              },
              android: { elevation: 3 },
            }),
          }}
        >
          <SectionHeader title="About" />
          <SettingItem
            icon="information-circle-outline"
            label="App Version"
            value={appVersion}
            onPress={checkForUpdates}
          />
          <SettingItem
            icon="refresh-outline"
            label="Check for Updates"
            onPress={checkForUpdates}
          />
        </View>

        <View
          style={{
            marginTop: 16,
            marginHorizontal: 16,
            borderRadius: 12,
            overflow: "hidden",
            backgroundColor: "#ffffff",
            ...Platform.select({
              ios: {
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 4,
              },
              android: { elevation: 3 },
            }),
          }}
        >
          <SectionHeader title="Help & Support" />
          <HelpItem
            icon="help-circle-outline"
            label="Help & Support"
            onPress={() =>
              Alert.alert(
                "Help & Support",
                "Contact us at: support@yourapp.com\nPhone: +1-234-567-8900",
              )
            }
          />
          <HelpItem
            icon="document-text-outline"
            label="FAQ / Tutorials"
            onPress={() =>
              Alert.alert(
                "FAQ / Tutorials",
                "Quick tips:\n1. Swipe to navigate\n2. Tap to view details\n3. Long press for more options\n\nFull documentation available online.",
              )
            }
          />
        </View>

        <TouchableOpacity
          onPress={() =>
            Alert.alert("Reset Settings", "Reset all settings to default?", [
              { text: "Cancel", style: "cancel" },
              {
                text: "Reset",
                style: "destructive",
                onPress: () => {
                  setTheme("system");
                  setLanguage("English");
                  setFontSize("medium");
                  setDataSaver(false);
                  setOfflineMode(false);
                  Alert.alert("Success", "Settings reset to default");
                },
              },
            ])
          }
          style={{
            marginTop: 24,
            marginHorizontal: 16,
            paddingVertical: 14,
            borderRadius: 8,
            backgroundColor: "#ffffff",
            alignItems: "center",
            borderWidth: 1,
            borderColor: "#ff4444",
          }}
        >
          <Text
            style={{
              fontFamily: "Poppins-Regular",
              color: "#ff4444",
              fontSize: 16,
              fontWeight: "600",
            }}
          >
            Reset All Settings
          </Text>
        </TouchableOpacity>
      </ScrollView>

      <ModalPicker
        visible={showThemeModal}
        onClose={() => setShowThemeModal(false)}
        title="Select Theme"
        options={themes}
        selectedValue={theme}
        onSelect={(option) => setTheme(option.value)}
      />
      <ModalPicker
        visible={showLanguageModal}
        onClose={() => setShowLanguageModal(false)}
        title="Select Language"
        options={languages}
        selectedValue={language}
        onSelect={(option) => setLanguage(option)}
      />
      <ModalPicker
        visible={showFontModal}
        onClose={() => setShowFontModal(false)}
        title="Select Font Size"
        options={fontSizes}
        selectedValue={fontSize}
        onSelect={(option) => setFontSize(option.value)}
      />
    </SafeAreaView>
  );
};

export default SettingsScreen;
