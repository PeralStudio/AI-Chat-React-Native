import { Text, ScrollView, StyleSheet, View } from "react-native";
import TextList from "./TextList";
import { useRef } from "react";

const ChatView = ({ data }) => {
    const scrollViewRef = useRef(null);

    return (
        <View style={styles.view}>
            <ScrollView
                ref={scrollViewRef}
                onContentSizeChange={() => {
                    scrollViewRef.current?.scrollToEnd({ animated: true });
                }}
            >
                {data.length <= 0 && (
                    <Text style={styles.text}>Write a question to get started.</Text>
                )}
                <TextList data={data} />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        marginTop: 10,
        padding: 10,
        height: "80%"
    },
    text: {
        fontSize: 20,
        color: "#c2c2c6",
        textAlign: "center",
        fontWeight: "bold",
        flex: 1,
        paddingTop: 120
    }
});

export default ChatView;
