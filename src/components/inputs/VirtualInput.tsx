import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

interface VirtualInputProps {
  label: string;
  value: string;
  helperText?: string;
}

const VirtualInput: React.FC<VirtualInputProps> = ({ label, value, helperText }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[styles.input, styles.lockedInput]}
        value={value}
        editable={false}
      />
      {helperText && <Text style={styles.helperText}>{helperText}</Text>}
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
  lockedInput: {
    opacity: 0.5,
  },
  helperText: {
    color: '#666',
    fontSize: 14,
    marginTop: 4,
  },
});

export default VirtualInput;
