import React, { useState } from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity, Alert } from "react-native";
import CustomTextInput from "../customTextInput/CustomTextInput";
import { useNavigation } from "@react-navigation/native";
import Button from "../button/Button";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const AccountVerifyScreen: React.FC = () => {
  const [email, setEmail] = useState("");
  const navigation = useNavigation();

  const verifyHandler = () => {
    if (emailRegex.test(email)) {
      Alert.alert("Successfull");

      navigation.navigate("Signing", { email });
    } else {
      Alert.alert("Invalid Input", "Please enter valid email and password");
    }
  };

  return (
    <View style={{ flex: 1, marginHorizontal: 36 }}>
      <TouchableOpacity style={{ marginTop: 96, marginBottom: 36 }}onPress={() => navigation.goBack()}>
        <Image
          resizeMode="contain"
          width={100}
          height={20}
          source={require("../../../assets/arrow-left.png")}
        />
      </TouchableOpacity>
      <View style={{ marginBottom: 39 }}>
        <Text style={styles.letsFindYour}>Let’s find your account</Text>
        <Text style={styles.enterYourEmail}>
          Enter your email address below to find your flowlogic account.
        </Text>
      </View>
      <View>
        <Text style={styles.label}>Enter your email address</Text>
        <CustomTextInput
          placeholder=""
          value={email}
          onChangeText={setEmail}
          regex={emailRegex}
          errorMessage="Invalid email address"
          leftIcon={require("../../../assets/mail.png")} // Replace with your local icon
        />
      </View>
      <Button   style={styles.button} title="Verify" onPress={()=> verifyHandler()}/>
    </View>
  );
};
const styles = StyleSheet.create({
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
    marginTop: 36,
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
    marginBottom:8
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
});
export default AccountVerifyScreen;
