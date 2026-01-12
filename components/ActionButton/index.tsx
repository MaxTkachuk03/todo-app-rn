import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { ComponentProps } from "react";
import { ColorValue, StyleProp, TouchableOpacity, ViewStyle } from "react-native";

interface ActionButtonProps {
  onPress: () => void;
  colors: readonly [ColorValue, ColorValue];
  iconName: ComponentProps<typeof Ionicons>["name"];
  style?: StyleProp<ViewStyle>
}

const ActionButton = ({ onPress, colors, iconName, style }: ActionButtonProps) => {

  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient colors={colors} style={style}>
        <Ionicons name={iconName} size={14} color="#fff" />
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default ActionButton;
