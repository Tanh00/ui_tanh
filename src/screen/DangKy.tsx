import { TextInput, View ,Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './DangKyStyte';

export default function DangKy() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}><Ionicons name="arrow-back-outline" size={24} color="#0f172a" /> Đăng Ký</Text>
            <Text style={styles.subTitle}>Tạo tài khoản mới</Text>
            
            <Text style={styles.label}>Họ và Tên</Text>
            <View style={styles.inputBox}>
                <TextInput style={styles.input} placeholder="Nhập họ và tên" />
            </View>
            <Text style={styles.label}>Email</Text>
            <View style={styles.inputBox}>
                <TextInput style={styles.input} placeholder="Nhập email" />
            </View>
            <Text style={styles.label}>Mật Khẩu</Text>
            <View style={styles.inputBox}>
                <TextInput style={styles.input} placeholder="Nhập mật khẩu"
                 secureTextEntry />  
            </View>
            <Text style={styles.label}>Xác Nhận Mật Khẩu</Text>
            <View style={styles.inputBox}> 
                <TextInput style={styles.input} placeholder="Xác nhận mật khẩu"
                 secureTextEntry />
            </View>
            <TouchableOpacity style={styles.buttonBox}>
                    <Text style={styles.loginText}>Đăng Ký</Text>
                  </TouchableOpacity>
            <Text style={styles.loginText}>
                Đã có tài khoản? <Text style={styles.loginLink}>Đăng Nhập</Text>
            </Text> 
        </View>
    );
}