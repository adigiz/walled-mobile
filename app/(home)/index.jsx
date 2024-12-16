import { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export default function Home() {
  const [user, setUser] = useState({})
  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem("token");
        if (value !== null) {
          const res = await axios.get(
            "https://6776-182-3-53-7.ngrok-free.app/profile",
            {
              headers: {
                Authorization: `Bearer ${value}`,
              },
            }
          );
          const user = res.data.data
          setUser(user)
        }
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, []);
  return (
    <View style={styles.container}>
      {user?.fullname && <Text>{user.fullname}</Text>}
      <Text>Home Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 50,
    height: 50,
  },
});
