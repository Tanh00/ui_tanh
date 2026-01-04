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
      <TextInput style={styles.input} placeholder="Nhập email của bạn" />

      <Text style={styles.label}>Password</Text>
      <TextInput style={styles.input} placeholder="Nhập mật khẩu của bạn"
        secureTextEntry
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
