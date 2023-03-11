import { View, KeyboardAvoidingView } from "react-native";
import React, { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import { OPENAI_API_KEY } from "@env";

import Loader from "./Loader";
import ChatView from "./ChatView";
import ChatInput from "./ChatInput";
import Title from "./Title";

const Home = () => {
    const [quest, setQuest] = useState("");
    const [data, setData] = useState([]);
    const [loaded, setLoaded] = useState(false);

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
                <Loader visible={loaded} />
                <Title />
                <ChatView data={data} />
                <ChatInput quest={quest} setQuest={setQuest} getData={getData} />
            </View>
        </KeyboardAvoidingView>
    );
};

export default Home;
