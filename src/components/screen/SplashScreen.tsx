import React, { useEffect } from "react";
import { Image, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SplashScreen: React.FC = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("Login");
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.splashScreen}>
           
      <Image
        style={styles.Icon}
        resizeMode="contain"
        source={require('../icons/flowlogic-logo.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Icon: {
    width: 179,
height: 30
  },
  splashScreen: {
    backgroundColor: "#eff6ff",
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    padding: 9
  },
});

export default SplashScreen;
