import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Image,
  TextInputProps,
  ImageSourcePropType,
  TouchableOpacity,
} from "react-native";

interface CustomTextInputProps extends TextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  regex?: any;
  errorMessage?: string;
  leftIcon?: any;
  RightOpenIcon: any; // Eye-open icon image source
  RightCloseIcon: any; // Eye-close icon image source
  isPasswordField?: boolean
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  value,
  onChangeText,
  placeholder,
  regex,
  errorMessage,
  leftIcon,
  RightOpenIcon,
RightCloseIcon,
isPasswordField=false,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);


  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (regex && value) {
      setIsValid(regex.test(value));
    }
  };
  const handleChangeText = (text: string) => {
    onChangeText(text);
    if (text === "") {
      setIsValid(true); // Reset validation when the input is cleared
    }
  };

  const getBorderColor = (): string => {
    if (isFocused) return "blue"; // Blue when focused or empty
    if (!isValid) return "red"; // Red when invalid
    return "#ccc"; // Default border
  };

  return (
    <View >
      <View
        style={[
          styles.inputContainer,
          { borderColor: getBorderColor() },
          isFocused && styles.focused,
          !isValid && styles.error,
        ]}
      >
        {leftIcon && !value  ? <Image source={leftIcon} style={[styles.leftIcon,{marginRight:leftIcon?10:0}]} /> : ""}
        

        <TextInput
          style={styles.textInput}
          placeholder={placeholder}
          value={value}
          onChangeText={handleChangeText}
          onFocus={() => setIsFocused(true)}
          onBlur={handleBlur}
          secureTextEntry={isPasswordField && !isPasswordVisible}
          {...props}
        />


{isPasswordField && (
          <TouchableOpacity style={{alignItems: "flex-end",
            alignSelf: "flex-end",}} onPress={togglePasswordVisibility}>
            <Image
              source={isPasswordVisible ? RightOpenIcon : RightCloseIcon}
              style={styles.icon}
            />
          </TouchableOpacity>
        )}

      </View>
      {!isValid && errorMessage && (
        <Text style={styles.errorText}>{errorMessage}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
    icon: {
        width: 20,
        height: 20,
      },
  leftIcon: {
    width: 20,
    height: 20,
  },
  inputContainer: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    flexDirection: "row",
  },
  focused: {
    borderColor: "blue",
  },
  error: {
    borderColor: "red",
  },
  textInput: {
    flex: 1,
    fontSize: 16,
  },
  errorContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  errorIcon: {
    width: 16,
    height: 16,
    marginRight: 5,
  },
  errorText: {
    color: "red",
    fontSize: 12,
    alignItems: "flex-end",
    textAlign: "right",
    alignSelf: "flex-end",
  },
});

export default CustomTextInput;
