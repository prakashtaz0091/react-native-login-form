import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

export default function LoginApp() {
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function showPassword() {
    setIsSecureTextEntry(!isSecureTextEntry);
  }

  function handleSignUp() {
    console.log("sign up");
    resetForm();
  }

  function handleLogin() {
    console.log("login");
    resetForm();
  }

  function resetForm() {
    setEmail("");
    setPassword("");
    setIsSecureTextEntry(true);
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "none"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 50 : 0}
      style={styles.container}
    >
      <Text style={styles.text}>Welcome</Text>
      <Text style={styles.bgBox}>A</Text>
      <TextInput
        placeholder="Email"
        style={[styles.input, styles.textInput]}
        autoCapitalize="none"
        autoCorrect={false}
        value={email}
        onChangeText={setEmail}
      />
      <View style={styles.passwordWrapper}>
        <TextInput
          placeholder="Password"
          style={[styles.input, styles.passwordInput]}
          secureTextEntry={isSecureTextEntry}
          id="passwordField"
          autoCapitalize="none"
          autoCorrect={false}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          onPress={showPassword}
          style={styles.smallIconWrapper}
        >
          {isSecureTextEntry ? (
            <Image
              source={require("../assets/eye.webp")}
              style={styles.smallIcon}
            />
          ) : (
            <Image
              source={require("../assets/eye-cross.webp")}
              style={styles.smallIcon}
            />
          )}
        </TouchableOpacity>
      </View>
      <LinearGradient
        start={{ x: 0, y: 0 }} // Start position of the gradient
        end={{ x: 1, y: 0 }} // End position of the gradient
        colors={["lightblue", "blue"]} // Array of gradient colors
        style={styles.btn}
      >
        <TouchableOpacity onPress={handleLogin}>
          <Text style={styles.smallText}>Login</Text>
        </TouchableOpacity>
      </LinearGradient>
      <View style={styles.signup}>
        <Text>Don't have an account?</Text>
        <TouchableOpacity onPress={handleSignUp}>
          <Text>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
    paddingVertical: 20,
    borderRadius: 10,
  },
  buttonGradient: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#841584",
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 30,
  },
  bgBox: {
    backgroundColor: "black",
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 5,
    marginBottom: 35,
  },
  input: {
    marginBottom: 35,
    borderBottomWidth: 1,
    height: 30,
    paddingHorizontal: 10,
    borderColor: "grey",
  },
  textInput: {
    width: "80%",
  },
  passwordWrapper: {
    position: "relative",
    width: "80%",
  },

  btn: {
    width: "80%",
    padding: 10,
    borderRadius: 25,
    marginBottom: 25,
  },
  smallText: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  smallIcon: {
    width: 25,
    height: 25,
  },
  smallIconWrapper: {
    position: "absolute",
    top: 0,
    right: 0,
    zIndex: 999,
  },
  signup: {
    display: "flex",
    flexDirection: "row",
    gap: 3,
    justifyContent: "center",
    alignItems: "center",
  },
});
