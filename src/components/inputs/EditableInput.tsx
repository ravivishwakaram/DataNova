import React from 'react';
import { StyleSheet, Text, TextInput, View, TextInputProps } from 'react-native';

interface EditableInputProps extends TextInputProps {
  label: string;
}

const EditableInput: React.FC<EditableInputProps> = ({ label, placeholder, ...props }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#aaa"
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    color: '#333',
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
  },
});

export default EditableInput;
