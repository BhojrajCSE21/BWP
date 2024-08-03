import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Image, Platform, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as ImagePicker from 'expo-image-picker';
//import Background from '../components/Background';

const CertificateScreen = ({ navigation, route }) => {
  const [certificateNumber, setCertificateNumber] = useState('');
  const [certificateProvider, setCertificateProvider] = useState('');
  const [certificateDate, setCertificateDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [certificateImage, setCertificateImage] = useState(null);
  const [certificateFileName, setCertificateFileName] = useState('');

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || certificateDate;
    setShowDatePicker(Platform.OS === 'ios');
    setCertificateDate(currentDate);
  };

  const handleNext = () => {
    navigation.navigate('Aadhaar', {
      ...route.params,
      certificateNumber,
      certificateProvider,
      certificateDate: certificateDate.toISOString(), // Convert date to string
      certificateImage,
      certificateFileName,
    });
  };

  const selectImage = async () => {
    let result = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (result.granted === false) {
      Alert.alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!pickerResult.cancelled) {
      setCertificateImage({ uri: pickerResult.uri });
      setCertificateFileName(getFileNameFromUri(pickerResult.uri)); // Extract file name
    }
  };

  const getFileNameFromUri = (uri) => {
    if (!uri) return '';
    const pathParts = uri.split('/');
    return pathParts[pathParts.length - 1];
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      <Text style={styles.header}>Registration</Text>
      <View style={styles.uploadContainer}>
        <TextInput
          placeholder="Upload Certificate"
          style={styles.uploadInput}
          editable={false}
          value={certificateFileName ? certificateFileName : certificateImage ? "Certificate Uploaded" : ""}
        />
        <TouchableOpacity style={styles.cameraIconContainer} onPress={selectImage}>
          <Icon name="camera-alt" size={24} color="#000" />
        </TouchableOpacity>
      </View>
      {certificateImage && (
        <Image source={certificateImage} style={styles.imagePreview} />
      )}
      <TextInput
        placeholder="Certificate Number"
        value={certificateNumber}
        onChangeText={setCertificateNumber}
        style={styles.input}
      />
      <TextInput
        placeholder="Certificate Provider"
        value={certificateProvider}
        onChangeText={setCertificateProvider}
        style={styles.input}
      />
      <TouchableOpacity style={styles.datePickerButton} onPress={() => setShowDatePicker(true)}>
        <Text style={styles.datePickerText}>
          {certificateDate.toDateString()}
        </Text>
        <Icon name="calendar-today" size={24} color="#000" />
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={certificateDate}
          mode="date"
          display="default"
          onChange={onChangeDate}
        />
      )}
      <TouchableOpacity style={styles.buttonContainer} onPress={handleNext}>
        <LinearGradient
          colors={['#3432af', '#5f5dd6', '#3432af']}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Next</Text>
        </LinearGradient>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#e3ebff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 12,
    padding: 8,
    backgroundColor: '#fff',
  },
  uploadContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 12,
    padding: 8,
    backgroundColor: '#fff',
  },
  uploadInput: {
    flex: 1,
  },
  cameraIconContainer: {
    padding: 5,
  },
  datePickerButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    padding: 8,
    backgroundColor: '#fff',
    marginBottom: 12,
  },
  datePickerText: {
    fontSize: 16,
  },
  buttonContainer: {
    width: '100%',
    marginTop: 20,
  },
  button: {
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  imagePreview: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 12,
  },
});

export default CertificateScreen;
