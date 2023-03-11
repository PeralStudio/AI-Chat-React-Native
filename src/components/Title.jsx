import { View, Text, StyleSheet } from "react-native";

const Title = () => {
    return (
        <View>
            <Text style={styles.title}>AI CHAT BOT</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        color: "#ECECF1",
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        paddingTop: 30
    }
});

export default Title;
