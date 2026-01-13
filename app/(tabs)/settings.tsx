import { createSettingsStyles } from "@/assets/styles/settings.styles";
import DangerZoneComponent from "@/components/Settings/DangerZone";
import PreferencesComponent from "@/components/Settings/Preferences";
import ProgressSatusComponent from "@/components/Settings/ProgressStatus";
import useTheme from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SettingsScreen = () => {


  const { theme, isDarkMode, toggleTheme } = useTheme();

  const settingsStyle = createSettingsStyles(theme);

  return (
    <LinearGradient
      colors={theme.gradients.background}
      style={settingsStyle.container}
    >
      <SafeAreaView style={settingsStyle.safeArea}>
        {/* Header Section */}
        <View style={settingsStyle.header}>
          <View style={settingsStyle.titleContainer}>
            <LinearGradient
              colors={theme.gradients.primary}
              style={settingsStyle.iconContainer}
            >
              <Ionicons name="settings" size={28} color="#fff" />
            </LinearGradient>

            <Text style={settingsStyle.title}>Settings</Text>
          </View>
        </View>

        {/* Settings Options */}
        <ScrollView
          style={settingsStyle.scrollView}
          contentContainerStyle={settingsStyle.content}
          showsVerticalScrollIndicator={false}
        >
          <ProgressSatusComponent />

          <PreferencesComponent />

          <DangerZoneComponent />
          
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default SettingsScreen;
