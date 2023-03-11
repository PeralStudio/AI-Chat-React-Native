import { View, StyleSheet, TextInput } from "react-native";

const ChatInput = ({ quest, setQuest, getData }) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                value={quest}
                placeholder={"💬 Write a question here..."}
                onChangeText={(text) => setQuest(text)}
                style={styles.input}
                onSubmitEditing={getData}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "flex-end",
        paddingBottom: 0,
        padding: 10
    },
    input: {
        height: 40,
        padding: 10,
        marginTop: 20,
        fontSize: 16,
        color: "white",
        backgroundColor: "#4a4e63",
        textAlign: "center",
        borderRadius: 10,
        marginBottom: 20
    }
});

export default ChatInput;
