import { ImageBackground, View, Text, Image, useWindowDimensions } from "react-native";
import { MotiView } from "moti";
import { styles } from "./style";

export const Badge = () => {
  const dimensions = useWindowDimensions()
  return (
    <View style={styles.container}>
      <MotiView
        style={styles.motiView}
        from={{
          opacity: 0,
          translateY: -dimensions.height,
          rotateZ: "50deg",
          rotateY: ["180deg", "360deg"],
        }}
        animate={{
          opacity: 1,
          rotateZ: "0deg",
          rotateY: "0deg",
          translateY: 0,
        }}
        transition={{
          type: "spring",
          damping: 20,
          rotateZ: {
            damping: 15,
            mass: 3,
          },
        }}
      >

        <View style={styles.badge}>
          <Image style={styles.band} source={require("@/assets/band.png")} />
          <ImageBackground
            style={styles.background}
            source={require("@/assets/header.png")}
            resizeMode="cover"
          >
            <View style={styles.header}>
              <Text style={styles.company}>Nome da Empresa</Text>
              <Text style={styles.id}>Id: #000000001</Text>
            </View>

            <View style={styles.content}>
              <Image
                style={styles.image}
                source={require("@/assets/avatar.jpg")}
              />

              <Text style={styles.name}>Pedro Alencar</Text>
              <Text style={styles.email}>pedroalencar.dev@gmail.com</Text>
            </View>
          </ImageBackground>
        </View>
      </MotiView>
    </View>
  );
};
