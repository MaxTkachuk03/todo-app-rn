import "react-native-get-random-values";

if (typeof window === "undefined") {
  (global as any).window = {};
}
if (!(global as any).window.addEventListener) {
  (global as any).window.addEventListener = () => {};
}
if (!(global as any).window.removeEventListener) {
  (global as any).window.removeEventListener = () => {};
}
