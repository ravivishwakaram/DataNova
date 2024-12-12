import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
 import Button from '../button/Button'

const LoginScreen : React.FC = (props:any) => {

  const navigation = useNavigation();

  return (
    <View style={styles.mainContainer}>
      <View style={styles.LoginView}>
        <Image
          resizeMode="contain"
          width={100}
          height={100}
          source={require("../../../assets/login_icon.png")}
        />
      </View>
      <View style={styles.welcomeToFlowlogicParent}>
        <Text style={[styles.welcomeToFlowlogic, styles.loginToGetFlexBox]}>
          Welcome to FlowLogic
        </Text>
        <Text style={styles.loginToGet}>
          Login to get started.
        </Text>
      </View>
      <View></View>
      <Button style={styles.button} title="Login" onPress={()=>navigation.navigate("AccountVerify")}/>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginHorizontal: 36,
    flexDirection: "column",
  },

  LoginView: {
    marginTop: 80,
    marginBottom: 60,
    alignItems:'center'
  },
  loginToGetFlexBox: {
    textAlign: "center",
    alignSelf: "stretch",
  },
  welcomeToFlowlogic: {
    fontSize: 28,
    letterSpacing: -0.6,
    lineHeight: 36,
    fontWeight: "600",
    fontFamily: "Inter-SemiBold",
    color: "#171717",
  },
  loginToGet: {
    fontSize: 18,
    lineHeight: 28,
    fontWeight: "500",
    fontFamily: "Inter-Medium",
    color: "#717171",
    textAlign: "center",

  },
  welcomeToFlowlogicParent: {
    width: "100%",
    gap: 16,
  },

  label: {
    fontSize: 16,
    lineHeight: 18,
    color: "#fff",
    textAlign: "center",
  },
  button: {
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(16, 24, 40, 0.06)",
    marginTop: 60,
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
    borderRadius: 8,
    backgroundColor: "#3b82f6",
    borderStyle: "solid",
    borderColor: "#3b82f6",
    borderWidth: 1,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
});

export default LoginScreen;
