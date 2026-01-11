import { ConvexError, v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const getTodos = query({
  args: {},
  handler: async (context) => {
    return await context.db.query("todos").order("desc").collect();
  },
});

export const addTodo = mutation({
  args: {
    title: v.string(),
  },
  handler: async (context, args) => {
    const todoId = await context.db.insert("todos", {
      title: args.title,
      isCompleted: false,
    });
    return todoId;
  },
});

export const toggleTodo = mutation({
  args: {
    todoId: v.id("todos"),
    isCompleted: v.boolean(),
  },
  handler: async (context, args) => {
    const todo = await context.db.get(args.todoId);
    if (!todo) throw new ConvexError("Todo not found");

    const toggleTodo = await context.db.patch("todos", args.todoId, {
      isCompleted: !todo.isCompleted,
    });

    return toggleTodo;
  },
});

export const deleteTodo = mutation({
  args: {
    todoId: v.id("todos"),
  },
  handler: async (context, args) => {
    return await context.db.delete(args.todoId);
  },
});

export const updateTodo = mutation({
  args: {
    todoId: v.id("todos"),
    title: v.string(),
  },
  handler: async (context, args) => {
    return await context.db.patch("todos", args.todoId, {
      title: args.title,
    });
  },
});

export const clearAllTodos = mutation({
  handler: async (context) => {
    const allTodos = await context.db.query("todos").collect();

    for (const todo of allTodos) {
      await context.db.delete(todo._id);
    }

    return { deletedCount: allTodos.length };
  },
});
