import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import MapViewDirections from "react-native-maps-directions";
import { StatusBar } from "expo-status-bar";
import AppMapView from "../Home/AppMapView";


const origin = {
  latitude: 13.70306780417351,
  longitude: 100.38074115291238,
};
const destination = {
  latitude: 13.714107611892615,
  longitude: 100.39550872519612,
};
const GOOGLE_MAPS_APIKEY = "AIzaSyC2PzPPkZ7--zDeI8azWxX4jHkJfQBahFY";
export default function CalculateScreen() {

  const navigation = useNavigation();
  const route = useRoute();
  const { latDestination, longDestination } = route.params;
  const handlePress = () => {
    navigation.navigate("HomeScreen");
  };
  //cheack passdata form Destination
  console.log("latDestination:" ,{latDestination});
  console.log("longDestination:" ,{longDestination});

  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.title}>คำนวณราคา</Text>
        <Text style={styles.title}>
          จาก: <Text style={styles.subtitle}>โลตัส บ้านสวนธน</Text>
        </Text>
        <Text style={styles.title}>
          ถึง: <Text style={styles.subtitle}>ตำแหน่งปลายทาง</Text>
        </Text>
      </View>

      <AppMapView
      >
        <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={5}
          strokeColor="hotpink"
          optimizeWaypoints={true}
        />
      </AppMapView>

      <View style={styles.buttomContainer}>
        <View style={styles.leftSide}>
          <Text style={styles.sub}>ราคาโดยประมาณ</Text>
          <Text style={styles.sub}>ระยะทาง</Text>
        </View>
        <View style={styles.rightSide}>
          <Text style={styles.price}>30 บาท</Text>
          <Text style={styles.distance}>5 กิโลเมตร</Text>
        </View>
      </View>
      <View>
        <TouchableOpacity style={styles.containerConfirm} onPress={handlePress}>
          <Text style={styles.text}>ตกลง</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  subtitle: {
    fontSize: 20,
    fontFamily: "BaiJamjuree-Bold",
  },
  sub: {
    fontSize: 20,
    fontFamily: "BaiJamjuree-Bold",
  },
  rightSide: {},
  leftSide: {},
  price: {
    fontSize: 20,
    fontFamily: "BaiJamjuree-Bold",
  },
  distance: {
    fontSize: 20,
    fontFamily: "BaiJamjuree-Regular",
  },
  containerConfirm: {
    flexDirection: "column",
    backgroundColor: "#FF9A62",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    width: 320,
    height: 55,
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
  },
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "center",
    top: 50,
  },

  head: {
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    height: "20%",
  },
  // buttomContainer: {
  //   backgroundColor: "#EFEFEF",
  //   position: "absolute",
  //   flexDirection: "column",
  //   top: 700,
  //   width: "100%",
  //   height: "25%",
  //   alignItems: "center",
  // },
  buttomContainer: {
    backgroundColor: "#EFEFEF",
    position: "absolute",
    flexDirection: "row",
    top: 700,
    width: "100%",
    height: "20%",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 30,
  },
});
