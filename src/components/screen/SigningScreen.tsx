import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import CustomTextInput from "../customTextInput/CustomTextInput";
import { useNavigation } from "@react-navigation/native";
import Button from "../button/Button";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^.{6,}$/;

const SigningScreen: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isText, setText] = useState("");

  const navigation = useNavigation();

  const verifyHandler = () => {
    if (emailRegex.test(email) && passwordRegex.test(password)) {
      Alert.alert("Successfull");
      //navigation.navigate("NextScreen", { email });
    } else {
      Alert.alert("Invalid Input", "Please enter valid email and password");
    }
  };

  return (
    <View style={{ flex: 1, marginHorizontal: 36 }}>
      <TouchableOpacity
        style={{ marginTop: 96, marginBottom: 36 }}
        onPress={() => navigation.goBack()}
      >
        <Image
          resizeMode="contain"
          width={100}
          height={20}
          source={require("../../../assets/arrow-left.png")}
        />
      </TouchableOpacity>
      <View style={{ marginBottom: 39 }}>
        <Text style={styles.letsFindYour}>Welcome Back!</Text>
        <Text style={styles.enterYourEmail}>Sign into your account below</Text>
      </View>
      <View>
        <Text style={styles.label}>Email</Text>
        <CustomTextInput
          placeholder=""
          value={email}
          onChangeText={setEmail}
          regex={emailRegex}
          errorMessage="Invalid email address"
          leftIcon={require("../../../assets/mail.png")} // Replace with your local icon
          RightCloseIcon={""}
          RightOpenIcon={""}
        />
      </View>

      <View style={{ marginTop: 24 }}>
        <View>
          <Text style={styles.label}>Password</Text>
          <CustomTextInput
            placeholder=""
            value={password}
            onChangeText={setPassword}
            regex={passwordRegex}
            errorMessage="Please enter password"
            leftIcon={require("../../../assets/Left Content.png")} // Replace with your local icon
            RightCloseIcon={require("../../../assets/eye-off.png")}
            RightOpenIcon={require("../../../assets/mail.png")}
            isPasswordField
          />

          {/* <CustomTextInput
          placeholder=""
          value={isText}
          onChangeText={setText}
          regex={''}
          errorMessage="Please enter password"
          leftIcon={null} // Replace with your local icon
          RightCloseIcon={''}
          RightOpenIcon={''}
        /> */}

          <TouchableOpacity
            style={{ alignItems: "flex-end", justifyContent: "flex-end" }}
          >
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Button
        style={styles.button}
        title="Continue"
        onPress={() => verifyHandler()}
      />
      <View
        style={{
          flexDirection: "row",
          marginVertical: 24,
          alignItems: "center",
        }}
      >
        <View style={styles.line}></View>

        <Text style={styles.orSignIn}>{`Or sign in with `}</Text>
        <View style={styles.line}></View>
      </View>
      <TouchableOpacity style={{ marginVertical: 24, alignItems: "center" }}>
        <Image
          resizeMode="contain"
          width={26}
          height={26}
          source={require("../../../assets/Integrations.png")}
        />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  line: {
    flex: 0.5,
    height: 1, // Line height
    backgroundColor: "#D3D3D3", // Grey color (you can adjust it as per your need)
    marginVertical: 10, // Space above and below the line
  },
  letsFindYour: {
    alignSelf: "stretch",
    fontSize: 24,
    letterSpacing: -0.5,
    lineHeight: 32,
    fontWeight: "700",
    fontFamily: "Inter-Bold",
    color: "#171717",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
  },
  button: {
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(16, 24, 40, 0.06)",
    marginTop: 24,
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
  label: {
    fontSize: 14,
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: "Inter-Medium",
    color: "#171717",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    marginBottom: 8,
  },
  enterYourEmail: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: "Inter-Medium",
    color: "#717171",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
  },
  forgotPassword: {
    fontSize: 12,
    lineHeight: 14,
    fontWeight: "600",
    fontFamily: "Inter-SemiBold",
    color: "#3b82f6",
    textAlign: "right",
    display: "flex",
    alignItems: "center",
    marginTop: 4,
  },

  orSignIn: {
    fontSize: 10,
    lineHeight: 14,
    fontFamily: "Inter-Regular",
    color: "#aaa",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
  },
});
export default SigningScreen;
