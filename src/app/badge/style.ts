import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        // justifyContent: "center",
        paddingHorizontal: 32,
        zIndex: -1,

    },
    badge: {
        width: "100%",
        alignItems: "center",

    },
    band: {
        zIndex: 1,
        marginBottom: -24,
    },
    header: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 24,
        paddingTop: 54,
    },
    company: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    image: {
        width: 160,
        height: 160,
        borderRadius: 32,
    },
    background: {
        width: "100%",
        height: 500,
        backgroundColor: "#161618",
        borderRadius: 18,
        overflow: "hidden",
    },
    id: {
        color: "#fff",
        fontSize: 14,
    },
    content: {
        flex: 1,
        padding: 24,
        alignItems: "center",
        justifyContent: "center",
    },
    name: {
        color: "#fff",
        fontSize: 22,
        fontWeight: "bold",
        marginTop: 24,
    },
    email: {
        color: "#CECECE",
        fontSize: 16,
    },
    motiView: {
        marginTop: -32
    }
})