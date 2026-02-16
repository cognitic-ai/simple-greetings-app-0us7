import { ScrollView, Text, View, useColorScheme } from "react-native";

export default function IndexRoute() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={{
        flex: 1,
        backgroundColor: isDark ? '#000' : '#fff',
      }}
    >
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        minHeight: '100%',
      }}>
        <Text style={{
          fontSize: 32,
          fontWeight: 'bold',
          color: isDark ? '#fff' : '#000',
          textAlign: 'center',
          marginBottom: 16,
        }}>
          Hello World! 👋
        </Text>
        <Text style={{
          fontSize: 18,
          color: isDark ? '#ccc' : '#666',
          textAlign: 'center',
          lineHeight: 24,
        }}>
          Welcome to your Expo app built with Expo Router
        </Text>
      </View>
    </ScrollView>
  );
}
