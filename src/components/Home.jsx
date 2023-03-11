import {
    View,
    Text,
    Button,
    TextInput,
    StyleSheet,
    FlatList,
    ScrollView,
    KeyboardAvoidingView
} from "react-native";
import React, { useState, useRef } from "react";
import { Configuration, OpenAIApi } from "openai";
import { FontAwesome5 } from "@expo/vector-icons";
import Spinner from "react-native-loading-spinner-overlay";
import { OPENAI_API_KEY } from "@env";

const Home = () => {
    const [quest, setQuest] = useState("");
    const [data, setData] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const scrollViewRef = useRef(null);

    const getData = async () => {
        setLoaded(true);
        const configuration = new Configuration({
            apiKey: OPENAI_API_KEY
        });
        const openai = new OpenAIApi(configuration);

        const completion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: quest }]
        });

        const text = completion.data.choices[0].message.content;
        setData([...data, { type: "user", text: quest }, { type: "bot", text }]);
        setLoaded(false);
        setQuest("");
    };

    return (
        <KeyboardAvoidingView style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: "#333541" }}>
                <Spinner
                    visible={loaded}
                    textContent={"Loading..."}
                    textStyle={styles.spinnerTextStyle}
                    overlayColor="rgba(0,0,0,0.8)"
                    animation="fade"
                    color="#c2c2c6"
                />
                <View>
                    <Text
                        style={{
                            color: "#ECECF1",
                            fontSize: 30,
                            fontWeight: "bold",
                            textAlign: "center",
                            paddingTop: 30
                        }}
                    >
                        AI CHAT BOT
                    </Text>
                </View>
                <View
                    style={{
                        marginTop: 10,
                        padding: 10,
                        height: "80%"
                    }}
                >
                    <ScrollView
                        ref={scrollViewRef}
                        onContentSizeChange={() => {
                            scrollViewRef.current?.scrollToEnd({ animated: true });
                        }}
                    >
                        {data.length <= 0 && (
                            <Text
                                style={{
                                    fontSize: 20,
                                    color: "#c2c2c6",
                                    textAlign: "center",
                                    fontWeight: "bold",
                                    flex: 1,
                                    paddingTop: 120
                                }}
                            >
                                Write a question to get started.
                            </Text>
                        )}
                        <FlatList
                            keyExtractor={(item, index) => index.toString()}
                            data={data}
                            renderItem={({ item }) => (
                                <Text
                                    style={{
                                        padding: 10,
                                        paddingBottom: 15,
                                        fontSize: 14,
                                        color: item.type === "user" ? "gray" : "white",
                                        backgroundColor:
                                            item.type === "user" ? "#333541" : "#3F414F",
                                        borderRadius: 5
                                    }}
                                >
                                    {item.type === "user" ? (
                                        <FontAwesome5 name="user-circle" size={22} color={"gray"} />
                                    ) : (
                                        <FontAwesome5 name="robot" size={18} color={"white"} />
                                    )}
                                    {/* {item.type === "user" ? "You: " : "ChatGPT: "} */}{" "}
                                    {item.text}
                                </Text>
                            )}
                        />
                    </ScrollView>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        value={quest}
                        placeholder={"💬 Write a question here..."}
                        onChangeText={(text) => setQuest(text)}
                        style={styles.input}
                        onSubmitEditing={getData}
                    />
                </View>
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    spinnerTextStyle: {
        color: "#c2c2c6"
    },
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

export default Home;
