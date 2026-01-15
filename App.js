// 

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

export default function App() {
  const [phone, setPhone] = useState('');

  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Đăng nhập</Text>

      {/* Label */}
      <Text style={styles.label}>Nhập số điện thoại</Text>

      {/* Description */}
      <Text style={styles.desc}>
        Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại OneHousing Pro
      </Text>

      {/* Input */}
      <TextInput
        style={styles.input}
        placeholder="Nhập số điện thoại của bạn"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />

      {/* Button */}
      <TouchableOpacity
        style={[
          styles.button,
          phone.length < 9 && styles.buttonDisabled
        ]}
        disabled={phone.length < 9}
        onPress={() => console.log('Số điện thoại:', phone)}
      >
        <Text style={styles.buttonText}>Tiếp tục</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5
  },
  desc: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 8,
    marginBottom: 30
  },
  button: {
    height: 45,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  buttonDisabled: {
    backgroundColor: '#eee'
  },
  buttonText: {
    color: '#999',
    fontSize: 16
  }
});