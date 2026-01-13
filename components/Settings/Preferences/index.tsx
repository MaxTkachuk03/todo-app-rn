import { createSettingsStyles } from "@/assets/styles/settings.styles";
import useTheme from "@/hooks/useTheme";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { Text } from "react-native";
import PreferencesToggleComponent from "../PreferencesToggle";

const PreferencesComponent = () => {
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true);

  const { theme, isDarkMode, toggleTheme } = useTheme();

  const settingsStyles = createSettingsStyles(theme);
  return (
    <LinearGradient
      colors={theme.gradients.surface}
      style={settingsStyles.section}
    >
      <Text style={settingsStyles.sectionTitle}>Preferences</Text>

      <PreferencesToggleComponent
        label="Dark Mode"
        iconName="moon"
        colors={theme.gradients.primary}
        value={isDarkMode}
        onValueChange={toggleTheme}
        trueColor={theme.primary}
      />

      <PreferencesToggleComponent
        label="Notifications"
        iconName="notifications"
        colors={theme.gradients.warning}
        value={isNotificationsEnabled}
        onValueChange={() => setIsNotificationsEnabled(!isNotificationsEnabled)}
        trueColor={theme.warning}
      />
    </LinearGradient>
  );
};

export default PreferencesComponent;
