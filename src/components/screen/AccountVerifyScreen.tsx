import React, { useState } from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import CustomTextInput from "../customTextInput/CustomTextInput";
import { useNavigation } from "@react-navigation/native";
import Button from "../button/Button";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const AccountVerifyScreen: React.FC = () => {
  const [email, setEmail] = useState("");
  const storedEmail = useSelector((state: RootState) => state.auth.email);
  const navigation = useNavigation();

  const verifyHandler = () => {
    if (emailRegex.test(email) && email === storedEmail) {
      console.log("validEmail", email);
      navigation.navigate("Signing");
    } else {
      alert("Email does not match.");
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.goBackView}
        onPress={() => navigation.goBack()}
      >
        <Image
          resizeMode="contain"
          width={100}
          height={20}
          source={require("../../../assets/arrow-left.png")}
        />
      </TouchableOpacity>
      <View style={styles.accountView}>
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
          keyboardType="email-address"
          leftIcon={require("../../../assets/mail.png")} // Replace with your local icon
        />
      </View>
      <Button
        style={styles.button}
        title="Verify"
        onPress={() => verifyHandler()}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, marginHorizontal: 36 },
  accountView: { marginBottom: 39 },
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
  goBackView: {
    marginTop: 96,
    marginBottom: 36,
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
});
export default AccountVerifyScreen;
