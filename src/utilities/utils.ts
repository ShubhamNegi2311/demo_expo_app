import { Alert } from 'react-native';

export const showAlert = (msg: string) => Alert.alert('ExpoApp', msg ?? 'Alert!');
