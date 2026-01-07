import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingTop: 80,
  },

  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 4,
  },

  subTitle: {
    fontSize: 22,
    color: '#64748b',
    marginBottom: 24,
  },

  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#0f172a',
    marginBottom: 6,
  },

  inputBox: {
    height: 48,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 10,
    paddingHorizontal: 12,
    justifyContent: 'center',
    marginBottom: 16,
  },

  input: {
    fontSize: 14,
    color: '#0f172a',
  },

  buttonBox: {
    height: 50,
    backgroundColor: '#1d4ed8',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },

  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
  },

  loginText: {
    marginTop: 12,
    textAlign: 'center',
    fontSize: 16,
    color: '#e70f57ff',
  },

  loginLink: {
    color: '#2563eb',
    fontWeight: '600',
  },
});
