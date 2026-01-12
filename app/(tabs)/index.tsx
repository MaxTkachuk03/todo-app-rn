import { createHomeStyles } from "@/assets/styles/home.styles";
import ActionButton from "@/components/ActionButton";
import Header from "@/components/Header";
import LoadingSpinner from "@/components/LoadingSpinner";
import TodoInput from "@/components/TodoInput";
import { api } from "@/convex/_generated/api";
import { Doc, Id } from "@/convex/_generated/dataModel";
import useTheme from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { useMutation, useQuery } from "convex/react";
import { LinearGradient } from "expo-linear-gradient";
import {
  Alert,
  FlatList,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import EmptyListComponent from '../../components/EmptyListComponent/index';

type Todo = Doc<"todos">;
type TodoId = Id<"todos">;

export default function HomePage() {
  const { theme } = useTheme();
  const homeStyles = createHomeStyles(theme);

  // mutation hooks (WebSockets)
  const todos = useQuery(api.todos.getTodos);
  const toggleTodo = useMutation(api.todos.toggleTodo);

  const isLoading = todos === undefined;

  const handleEditTodo = async (id: string, title: string) => {};

  const handleToggleTodo = async (id: TodoId) => {
    try {
      await toggleTodo({ todoId: id });
    } catch (error) {
      console.log("Error toggling todo:", error);
      Alert.alert("Error", "Failed to toggle todo. Please try again.");
    }
  };

  const renderTodoItem = ({ item }: { item: Todo }) => {
    return (
      <View style={homeStyles.todoItemWrapper}>
        <LinearGradient
          colors={theme.gradients.surface}
          style={homeStyles.todoItem}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <TouchableOpacity
            style={homeStyles.checkbox}
            activeOpacity={0.7}
            onPress={() => handleToggleTodo(item._id)}
          >
            <LinearGradient
              colors={
                item.isCompleted
                  ? theme.gradients.success
                  : theme.gradients.muted
              }
              style={[
                homeStyles.checkboxInner,
                {
                  borderColor: !item.isCompleted ? "transparent" : theme.border,
                },
              ]}
            >
              {item.isCompleted && (
                <Ionicons name="checkmark" size={18} color="#fff" />
              )}
            </LinearGradient>
          </TouchableOpacity>
          <View style={homeStyles.todoTextContainer}>
            <Text
              style={[
                homeStyles.todoText,
                item.isCompleted && {
                  textDecorationLine: "line-through",
                  color: theme.textMuted,
                  opacity: 0.6,
                },
                { marginTop: 5 },
              ]}
            >
              {item.title}
            </Text>

            <View style={homeStyles.todoActions}>
              <ActionButton
                iconName="pencil"
                style={homeStyles.actionButton}
                onPress={() => {}}
                colors={theme.gradients.warning}
              />
              <ActionButton
                iconName="trash"
                style={homeStyles.actionButton}
                onPress={() => {}}
                colors={theme.gradients.danger}
              />
            </View>
          </View>
        </LinearGradient>
      </View>
    );
  };

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <LinearGradient
      colors={theme.gradients.background}
      style={homeStyles.container}
    >
      <StatusBar barStyle={theme.statusBarStyle} />

      <SafeAreaView style={homeStyles.safeArea}>
        <Header />

        <TodoInput />

        <FlatList
          data={todos}
          keyExtractor={(todo) => todo._id}
          renderItem={renderTodoItem}
          style={homeStyles.todoList}
          contentContainerStyle={homeStyles.todoListContent}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={<EmptyListComponent />}
        />
      </SafeAreaView>
    </LinearGradient>
  );
}
