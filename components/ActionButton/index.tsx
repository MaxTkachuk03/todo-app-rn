import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { ComponentProps } from "react";
import {
  ColorValue,
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";

interface ActionButtonProps {
  onPress: () => void;
  colors: readonly [ColorValue, ColorValue];
  iconName: ComponentProps<typeof Ionicons>["name"];
  style?: StyleProp<ViewStyle> | undefined;
  isEditing?: boolean;
  textStye?: StyleProp<TextStyle> | undefined;
  textTitle?: string;
}

const ActionButton = ({
  onPress,
  colors,
  iconName,
  style,
  isEditing,
  textStye,
  textTitle,
}: ActionButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={isEditing ? 0.8 : 1}>
      <LinearGradient colors={colors} style={style}>
        <Ionicons name={iconName} size={16} color="#fff" />
        {isEditing && <Text style={textStye}>{textTitle}</Text>}
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default ActionButton;
