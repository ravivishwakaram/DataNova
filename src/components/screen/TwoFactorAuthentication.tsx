import React, { useRef, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Alert,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Button from "../button/Button";

const TwoFactorAuthenticationScreen: React.FC = () => {
  const [values, setValues] = useState<string[]>(["", "", "", "", "", ""]);
  const [focusedIndex, setFocusedIndex] = useState<number[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [correctOtp, setCorrectOtp] = useState<string>("123456");
  const inputRefs = useRef<(TextInput | null)[]>([]);
  const navigation = useNavigation();

  const handleTextChange = (text: string, index: number) => {
    const updatedValues = [...values];
    updatedValues[index] = text;

    setValues(updatedValues);

    if (text && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    validateOtp(updatedValues);
  };

  const handleKeyPress = (key: string, index: number) => {
    if (key === "Backspace" && index > 0 && !values[index]) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleFocus = (index: number) => {
    setFocusedIndex((prev) => (prev.includes(index) ? prev : [...prev, index]));
  };

  const handleBlur = (index: number) => {
    setFocusedIndex((prev) => prev.filter((i) => i !== index));
  };

  const validateOtp = (otpValues: string[]) => {
    const currentOtp = otpValues.join("");
    if (currentOtp.length === 6) {
      if (currentOtp !== correctOtp) {
        setErrorMessage("The entered OTP is incorrect.");
      } else {
        setErrorMessage("");
      }
    } else {
      setErrorMessage("");
    }
  };

  return (
    <View style={styles.mainContainer}>
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
      <View>
        <Text style={styles.twoFactorAuthentication}>
          Two-factor Authentication
        </Text>

        <Text style={styles.enterThe6}>
          Enter the 6 digit code sent to your authenticator app/sms/email.
        </Text>

        <View style={styles.container}>
          <View style={styles.inputContainer}>
            {values.map((value, index) => (
              <TextInput
                key={index}
                style={[
                  styles.input,
                  focusedIndex.includes(index)
                    ? styles.inputActive
                    : value !== "" && errorMessage
                    ? styles.inputError
                    : styles.inputDefault,
                ]}
                value={value}
                onChangeText={(text) => handleTextChange(text, index)}
                onKeyPress={({ nativeEvent }) =>
                  handleKeyPress(nativeEvent.key, index)
                }
                onFocus={() => handleFocus(index)}
                onBlur={() => handleBlur(index)}
                ref={(ref) => (inputRefs.current[index] = ref)}
                maxLength={1}
                keyboardType="numeric"
                returnKeyType="next"
              />
            ))}
          </View>
          {errorMessage ? (
            <Text style={styles.errorText}>{errorMessage}</Text>
          ) : null}
        </View>
        <TouchableOpacity style={styles.didNotReceiveContainer}>
          <Text style={styles.didNotReceive}>{`Did not receive a code? `}</Text>
          <Text style={styles.resend}> {"Resend "}</Text>
        </TouchableOpacity>
      </View>

      <Button style={styles.button} title="Continue" onPress={() => ""} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 36,
  },
  goBackView: { marginTop: 96, marginBottom: 36 },
  mainContainer: { flex: 1, marginHorizontal: 36 },
  inputContainer: {
    flexDirection: "row",
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    textAlign: "center",
    fontSize: 18,
    width: 40,
    height: 50,
    marginHorizontal: 4,
  },
  inputDefault: {
    borderColor: "#ccc",
    backgroundColor: "#f5f5f5",
  },
  inputActive: {
    borderColor: "#007BFF",
  },
  inputError: {
    borderColor: "red",
  },
  errorText: {
    color: "red",
    marginTop: 10,
    fontSize: 14,
  },
  didNotReceive: {
    fontWeight: "500",
    fontFamily: "Inter-Medium",
    color: "#717171",
  },
  resend: {
    fontWeight: "600",
    fontFamily: "Inter-SemiBold",
    color: "#3b82f6",
  },

  didNotReceiveContainer: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 36,
  },

  twoFactorAuthentication: {
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

  enterThe6: {
    alignSelf: "stretch",
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: "Inter-Medium",
    color: "#717171",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    marginTop: 6,
  },

  button: {
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(16, 24, 40, 0.06)",
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
  resendButton: {
    marginTop: 20,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#ccc",
  },
  resendButtonEnabled: {
    backgroundColor: "#007bff",
  },
  resendText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default TwoFactorAuthenticationScreen;
