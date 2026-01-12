import { createHomeStyles } from "@/assets/styles/home.styles";
import { api } from "@/convex/_generated/api";
import useTheme from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { useQuery } from "convex/react";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, View } from "react-native";

const Header = () => {
  const { theme } = useTheme();

  const homeStyles = createHomeStyles(theme);

  const allTodos = useQuery(api.todos.getTodos);

  const completedTodosCount = allTodos
    ? allTodos.filter((todo) => todo.isCompleted).length
    : 0;

  const allTodosCount = allTodos ? allTodos.length : 0;

  const completedTodosPercentage =
    allTodosCount > 0 ? (completedTodosCount / allTodosCount) * 100 : 0;

  return (
    <View style={homeStyles.header}>
      <View style={homeStyles.titleContainer}>
        <LinearGradient
          colors={theme.gradients.primary}
          style={homeStyles.iconContainer}
        >
          <Ionicons name="flash-outline" size={28} color="#fff" />
        </LinearGradient>

        <View style={homeStyles.titleTextContainer}>
          <Text style={homeStyles.title}>Today&apos;s Tasks 👀</Text>
          <Text style={homeStyles.subtitle}>
            {completedTodosCount} of {allTodosCount} completed
          </Text>
        </View>
      </View>

      <View style={homeStyles.progressContainer}>
        <View style={homeStyles.progressBarContainer}>
          <View style={homeStyles.progressBar}>
            <LinearGradient
              colors={theme.gradients.primary}
              style={[
                homeStyles.progressFill,
                { width: `${completedTodosPercentage}%` },
              ]}
            ></LinearGradient>
          </View>
          <Text style={homeStyles.progressText}>
            {Math.round(completedTodosPercentage)}%
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Header;
