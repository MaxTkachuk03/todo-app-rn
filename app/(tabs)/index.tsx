import { createHomeStyles } from "@/assets/styles/home.styles";
import Header from "@/components/Header";
import TodoInput from "@/components/TodoInput";
import useTheme from "@/hooks/useTheme";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomePage() {
  const { toggleTheme, theme } = useTheme();
  const homeStyles = createHomeStyles(theme);

  return (
    <LinearGradient
      colors={theme.gradients.background}
      style={homeStyles.container}
    >
      <StatusBar barStyle={theme.statusBarStyle} />
      
      <SafeAreaView style={homeStyles.safeArea}>
        <Header />

        <TodoInput />

        <Text>Edit app/index.tsx to edit this screen. 123</Text>
        <TouchableOpacity onPress={() => toggleTheme()}>
          <Text> Toggle theme</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  );
}
