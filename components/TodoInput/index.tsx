import { createHomeStyles } from "@/assets/styles/home.styles";
import { api } from "@/convex/_generated/api";
import useTheme from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { useMutation } from "convex/react";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { Alert, TextInput, TouchableOpacity, View } from "react-native";

const TodoInput = () => {
  const { theme } = useTheme();
  const homeStyles = createHomeStyles(theme);
  const addTodo = useMutation(api.todos.addTodo);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = async () => {
    if (newTodo.trim().length === 0) return;
    
    try {
      await addTodo({ title: newTodo.trim() });
      setNewTodo("");
    } catch (error) {
      console.log("Error adding todo:", error);
      Alert.alert("Error", "Failed to add todo. Please try again.");
    }
  };

  return (
    <View style={homeStyles.inputSection}>
      <View style={homeStyles.inputWrapper}>
        <TextInput
          style={homeStyles.input}
          placeholder="What needs to be done?"
          placeholderTextColor={theme.textMuted}
          value={newTodo}
          onChangeText={setNewTodo}
          onSubmitEditing={handleAddTodo}
          multiline
          autoCorrect={false}
        />
        <TouchableOpacity
          onPress={handleAddTodo}
          activeOpacity={0.8}
          style={homeStyles.addButton}
          disabled={!newTodo.trim()}
        >
          <View
            style={
              newTodo.trim().length === 0
                ? homeStyles.addButtonDisabled
                : homeStyles.addButton
            }
          >
            <LinearGradient
              colors={
                newTodo.trim().length === 0
                  ? theme.gradients.muted
                  : theme.gradients.primary
              }
              style={[
                homeStyles.addButton,
                newTodo.trim() && homeStyles.addButtonDisabled,
              ]}
            >
              <Ionicons name="add-outline" size={24} color={theme.shadow} />
            </LinearGradient>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TodoInput;
