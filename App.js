import { Dimensions, View, Text, Image, StyleSheet } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Swiper from "react-native-swiper";
import * as SplashScreen from "expo-splash-screen";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import { useCallback } from "react";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

SplashScreen.preventAutoHideAsync();

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    paddingTop: 80,
    marginHorizontal: 30,
  },
  img: {
    alignSelf: "center",
    borderTopRightRadius: 80,
    borderBottomLeftRadius: 80,
    height: height * 0.5,
    width: width * 0.9,
  },
  title: {
    fontFamily: "Montserrat_700Bold",
    marginTop: 60,
    marginHorizontal: 20,
    fontSize: 32,
  },
  text: {
    color: "#767676",
    fontFamily: "Montserrat_400Regular",
    marginTop: 20,
    fontSize: 16,
    lineHeight: 25,
    marginLeft: 10,
  },
  nextButtonStyle: {
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#8A56AC",
  },
  prevButtonStyle: {
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#8A56AC",
    marginHorizontal: 20,
  },
});

const App = () => {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Swiper
      onLayout={onLayoutRootView}
      buttonWrapperStyle={{
        backgroundColor: "transparent",
        flexDirection: "row",
        position: "absolute",
        bottom: 0,
        left: 0,
        flex: 1,
        paddingHorizontal: 30,
        paddingVertical: 20,
        justifyContent: "flex-end",
        alignItems: "flex-end",
      }}
      style={styles.wrapper}
      showsButtons={true}
      paginationStyle={{
        marginBottom: height * 0.02,
        marginRight: width * 0.7,
      }}
      activeDotColor="#8A56AC"
      dotColor="#998FA2"
      nextButton={
        <View style={styles.nextButtonStyle}>
          <AntDesign name="arrowright" size={22} color="#fff" />
        </View>
      }
      prevButton={
        <View style={styles.prevButtonStyle}>
          <AntDesign name="arrowleft" size={22} color="#fff" />
        </View>
      }
    >
      <View style={styles.slide}>
        <Image source={require("./images/img.png")} style={styles.img} />
        <Text style={styles.title}>Meet Up UI-Kit</Text>
        <Text style={styles.text}>
          When I was 5 years old, my mother always told me that happiness was
          the key to life. When I went to school, they asked me what I wanted to
          be when I grew up.
        </Text>
      </View>
      <View style={styles.slide}>
        <Image source={require("./images/img2.png")} style={styles.img} />
        <Text style={styles.title}>Discover</Text>
        <Text style={styles.text}>
          When I was 5 years old, my mother always told me that happiness was
          the key to life. When I went to school, they asked me what I wanted to
          be when I grew up.
        </Text>
      </View>

      <View style={styles.slide}>
        <Image source={require("./images/img3.png")} style={styles.img} />
        <Text style={styles.title}>Get Started</Text>
        <Text style={styles.text}>
          When I was 5 years old, my mother always told me that happiness was
          the key to life. When I went to school, they asked me what I wanted to
          be when I grew up.
        </Text>
      </View>
      <View style={styles.slide}>
        <Image source={require("./images/img4.png")} style={styles.img} />
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.text}>
          When I was 5 years old, my mother always told me that happiness was
          the key to life. When I went to school, they asked me what I wanted to
          be when I grew up.
        </Text>
      </View>
    </Swiper>
  );
};

export default App;
