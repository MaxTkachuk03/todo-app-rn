import { createSettingsStyles } from "@/assets/styles/settings.styles";
import { api } from "@/convex/_generated/api";
import useTheme from "@/hooks/useTheme";
import { useQuery } from "convex/react";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, View } from "react-native";
import ProgressSatusItemComponent from "../ProgressStatusItem";

const ProgressSatusComponent = () => {
  const { theme } = useTheme();

  const settingsStyles = createSettingsStyles(theme);
  const allTodos = useQuery(api.todos.getTodos);

  const completedTodosCount = allTodos
    ? allTodos.filter((todo) => todo.isCompleted).length
    : 0;

  const allTodosCount = allTodos ? allTodos.length : 0;

  const activeTodosCount = allTodosCount - completedTodosCount;

  return (
    <LinearGradient
      colors={theme.gradients.surface}
      style={settingsStyles.section}
    >
      <Text style={settingsStyles.sectionTitle}>Progress Status</Text>
      <View style={settingsStyles.statsContainer}>
        {/* Total Todos */}
        <ProgressSatusItemComponent
          iconName="list"
          statNumber={allTodosCount}
          statLabel="Total Todos"
          gradientColors={theme.gradients.primary}
          borderLeftColor={theme.primary}
        />

        {/* Completed Todos */}
        <ProgressSatusItemComponent
          iconName="checkmark-circle"
          statNumber={completedTodosCount}
          statLabel="Completed Todos"
          gradientColors={theme.gradients.success}
          borderLeftColor={theme.success}
        />

        {/* Active Todos */}
        <ProgressSatusItemComponent
          iconName="time"
          statNumber={activeTodosCount}
          statLabel="Active Todos"
          gradientColors={theme.gradients.warning}
          borderLeftColor={theme.warning}
        />
      </View>
    </LinearGradient>
  );
};

export default ProgressSatusComponent;
