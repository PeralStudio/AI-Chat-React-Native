import { Text, FlatList } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const TextList = ({ data }) => {
    return (
        <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
                <Text
                    style={{
                        padding: 10,
                        paddingBottom: 15,
                        fontSize: 14,
                        color: item.type === "user" ? "gray" : "white",
                        backgroundColor: item.type === "user" ? "#333541" : "#3F414F",
                        borderRadius: 5
                    }}
                >
                    {item.type === "user" ? (
                        <FontAwesome5 name="user-circle" size={22} color={"gray"} />
                    ) : (
                        <FontAwesome5 name="robot" size={18} color={"white"} />
                    )}
                    {/* {item.type === "user" ? "You: " : "ChatGPT: "} */}ㅤ{item.text}
                </Text>
            )}
        />
    );
};

export default TextList;
