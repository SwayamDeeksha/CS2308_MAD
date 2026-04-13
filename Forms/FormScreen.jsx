import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";

export default function FormScreen() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("Male");
  const [age, setAge] = useState("");
  const [dob, setDob] = useState(new Date());
  const [showDate, setShowDate] = useState(false);
  const [state, setState] = useState("Tamil Nadu");
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = () => {
    setSubmittedData({
      name,
      password,
      address,
      gender,
      age,
      dob: dob.toDateString(),
      state,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Form</Text>

      <TextInput
        placeholder="User Name"
        style={styles.input}
        onChangeText={setName}
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
        style={styles.input}
        onChangeText={setPassword}
      />

      <TextInput
        placeholder="Address"
        style={styles.input}
        onChangeText={setAddress}
      />

      <Text style={styles.label}>Gender:</Text>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => setGender("Male")}>
          <Text style={gender === "Male" ? styles.selected : styles.option}>
            Male
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setGender("Female")}>
          <Text style={gender === "Female" ? styles.selected : styles.option}>
            Female
          </Text>
        </TouchableOpacity>
      </View>

      <TextInput
        placeholder="Age"
        keyboardType="numeric"
        style={styles.input}
        onChangeText={setAge}
      />

      <Button title="Select Date of Birth" onPress={() => setShowDate(true)} />
      {showDate && (
        <DateTimePicker
          value={dob}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            setShowDate(false);
            if (selectedDate) setDob(selectedDate);
          }}
        />
      )}

      <Text style={styles.label}>State:</Text>
      <Picker
        selectedValue={state}
        onValueChange={(itemValue) => setState(itemValue)}
      >
        <Picker.Item label="Tamil Nadu" value="Tamil Nadu" />
        <Picker.Item label="Karnataka" value="Karnataka" />
        <Picker.Item label="Kerala" value="Kerala" />
        <Picker.Item label="Andhra Pradesh" value="Andhra Pradesh" />
      </Picker>

      <Button title="Submit" onPress={handleSubmit} />

      {submittedData && (
        <View style={styles.result}>
          <Text>Name: {submittedData.name}</Text>
          <Text>Password: {submittedData.password}</Text>
          <Text>Address: {submittedData.address}</Text>
          <Text>Gender: {submittedData.gender}</Text>
          <Text>Age: {submittedData.age}</Text>
          <Text>DOB: {submittedData.dob}</Text>
          <Text>State: {submittedData.state}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  input: {
    borderWidth: 1,
    marginBottom: 10,
    padding: 8,
    borderRadius: 5,
  },
  label: { fontWeight: "bold", marginTop: 10 },
  row: { flexDirection: "row", gap: 20, marginBottom: 10 },
  option: { fontSize: 16 },
  selected: { fontSize: 16, color: "blue", fontWeight: "bold" },
  result: { marginTop: 20, padding: 10, borderWidth: 1 },
});
