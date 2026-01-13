import { createSettingsStyles } from "@/assets/styles/settings.styles";
import useTheme from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React, { ComponentProps } from "react";
import { ColorValue, Switch, Text, View } from "react-native";

interface PreferencesToggleProps {
  label: string;
  iconName: ComponentProps<typeof Ionicons>["name"];
  colors: readonly [ColorValue, ColorValue];
  value: boolean | undefined;
  onValueChange: ((value: boolean) => void | Promise<void>) | null | undefined;
  trueColor: ColorValue | null | undefined;
}

const PreferencesToggleComponent = ({
  label,
  iconName,
  colors,
  value,
  onValueChange,
  trueColor,
}: PreferencesToggleProps) => {
  const { theme } = useTheme();

  const settingsStyles = createSettingsStyles(theme);
  return (
    <View style={settingsStyles.settingItem}>
      <View style={settingsStyles.settingLeft}>
        <LinearGradient colors={colors} style={settingsStyles.settingIcon}>
          <Ionicons name={iconName} size={18} color="white" />
        </LinearGradient>
        <Text style={settingsStyles.settingText}>{label}</Text>
      </View>
      <Switch
        value={value}
        onValueChange={onValueChange}
        thumbColor={"#fff"}
        trackColor={{ false: theme.border, true: trueColor }}
        ios_backgroundColor={theme.border}
      />
    </View>
  );
};

export default PreferencesToggleComponent;
