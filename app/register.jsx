import Checkbox from "expo-checkbox";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  TextInput,
  Image,
  Text,
  Modal,
  Pressable,
  TouchableOpacity,
} from "react-native";
import Button from "../components/Button";
import { Link } from "expo-router";

export default function Register() {
  const [isChecked, setChecked] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/logo.png")}
        style={styles.logo}
        resizeMode="stretch"
      />

      <TextInput
        style={styles.input}
        placeholder="Fullname"
        placeholderTextColor="#aaa"
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#aaa"
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#aaa"
        secureTextEntry={true}
      />

      <TextInput
        style={styles.input}
        placeholder="Avatar Url"
        placeholderTextColor="#aaa"
      />
      <View style={styles.tnc}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? "#4630EB" : undefined}
        />
        <Text style={styles.tncText}>I have read and agreee to the </Text>
        <Link href="/tnc">
          <Text style={styles.tncLink}>Terms and Conditions</Text>
        </Link>
      </View>
      <Button text="Register" />
      <Text style={styles.link}>
        Have an account?{" "}
        <Link href="/" style={styles.linkText}>
          Login here
        </Link>
      </Text>
      <StatusBar style="auto" hidden />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logo: {
    width: 233,
    height: 57,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: "#f9f9f9",
    fontSize: 16,
  },
  button: {
    backgroundColor: "#4DB6AC",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 15,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  link: {
    marginTop: 10,
    textAlign: "left",
    width: "100%",
  },
  linkText: {
    color: "#19918F",
    paddingTop: 0,
    marginTop: 0,
  },
  tnc: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flext-start",
    flexWrap: "nowrap",
    textAlign: "left",
    paddingTop: 10,
    paddingBottom: 10,
  },
  tncText: {
    marginLeft: 10,
    fontSize: 12,
  },
  tncLink: {
    color: "#19918F",
    fontSize: 12,
  },
});
