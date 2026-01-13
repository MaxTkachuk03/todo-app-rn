import { createSettingsStyles } from "@/assets/styles/settings.styles";
import useTheme from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React, { ComponentProps } from "react";
import { ColorValue, Text, View } from "react-native";

interface ProgressSatusItemProps {
  iconName: ComponentProps<typeof Ionicons>["name"];
  statNumber: number;
  statLabel?: string;
  gradientColors: readonly [ColorValue, ColorValue];
  borderLeftColor: ColorValue | undefined;
}

const ProgressSatusItemComponent = ({
  iconName,
  statNumber,
  statLabel,
  gradientColors,
    borderLeftColor,
}: ProgressSatusItemProps) => {
  const { theme } = useTheme();

  const settingsStyles = createSettingsStyles(theme);
  return (
    <LinearGradient
      colors={theme.gradients.background}
      style={[settingsStyles.statCard, { borderLeftColor: borderLeftColor }]}
    >
      <View style={settingsStyles.statIconContainer}>
        <LinearGradient
          colors={gradientColors}
          style={settingsStyles.statIcon}
        >
          <Ionicons name={iconName} size={20} color='#fff' />
        </LinearGradient>
      </View>

      <View>
        <Text style={settingsStyles.statNumber}>{statNumber}</Text>
        <Text style={settingsStyles.statLabel}>{statLabel}</Text>
      </View>
    </LinearGradient>
  );
};

export default ProgressSatusItemComponent;
