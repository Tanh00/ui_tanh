import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { styles } from './DangNhapStyte';

export default function DangNhap() {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image
          source={require('../../assets/hunonic.png')}
          style={styles.logoImage}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.title}>App quản lý TestCase</Text>
      <Text style={styles.subtitle}>Đăng nhập</Text>

      <Text style={styles.label}>Email</Text>
      <TextInput placeholder="Enter your email" 
      secureTextEntry
      style={styles.input} />

      <Text style={styles.label}>Password</Text>
      <TextInput
        placeholder="Enter your password"
        secureTextEntry
        style={styles.input}
      />

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>Đăng Nhập</Text>
      </TouchableOpacity>

      <Text style={styles.registerText}>
        Bạn chưa có tài khoản? <Text style={styles.registerLink}>Đăng ký</Text>
      </Text>
    </View>
  );
}
