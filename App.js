import React, { useState } from "react";
import { Text, View, Switch } from "react-native";
import tw, { useAppColorScheme } from "twrnc";

export default function App() {
  const [colorScheme, toggleColorScheme] = useAppColorScheme(tw);
  const isDarkMode = colorScheme === 'dark';

  const [cardStyle, setCardStyle] = useState({
    backgroundColor: isDarkMode ? tw`bg-gray-400` : tw`bg-blue-500`,
    textColor: isDarkMode ? tw`text-gray-100` : tw`text-blue-100`,
    shadow: tw`shadow-md`,
  });

  const toggleCardColor = () => {
    setCardStyle((prevStyle) => ({
      backgroundColor: prevStyle.backgroundColor === tw`bg-gray-500`.backgroundColor
        ? (isDarkMode ? tw`bg-gray-400` : tw`bg-blue-600`)
        : (isDarkMode ? tw`bg-gray-400` : tw`bg-blue-500`),
      textColor: prevStyle.textColor,
      shadow: prevStyle.shadow,
    }));
  };

  return (
    <View style={[tw`flex h-full items-center justify-center bg-gray-600 dark:bg-gray-200`]}>
      <Text style={tw`text-lg font-bold text-gray-100 dark:text-gray-800`} >Dark Mode</Text>
      <Switch
        trackColor={{ false: tw`bg-gray-400`, true: tw`bg-green-100` }}
        thumbColor={isDarkMode ? tw`bg-gray-600` : tw`bg-white`}
        onValueChange={() => {
          toggleCardColor();
          toggleColorScheme();
        }}
        value={!isDarkMode}
      />

      <View style={[tw`p-6 rounded mt-6`, cardStyle.shadow, cardStyle.backgroundColor]}>
        <Text style={[tw`text-lg font-bold`, cardStyle.textColor]}>John Doe</Text>
      </View>

      <View style={[tw`p-6 rounded mt-6`, cardStyle.shadow, cardStyle.backgroundColor]}>
        <Text style={[tw`text-lg font-bold`, cardStyle.textColor]}>JavaScript</Text>
      </View>

      <View style={[tw`p-6 rounded mt-6`, cardStyle.shadow, cardStyle.backgroundColor]}>
        <Text style={[tw`text-lg font-bold`, cardStyle.textColor]}>Python</Text>
      </View>
    </View>
  );
}
