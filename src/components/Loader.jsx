import { View, Text, StyleSheet } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
import { WaveIndicator } from "react-native-indicators";

const Loader = ({ visible }) => {
    console.log(visible);
    return (
        <Spinner
            visible={visible}
            textContent={"Loading..."}
            textStyle={styles.spinnerTextStyle}
            overlayColor="rgba(0,0,0,0.8)"
            animation="fade"
            customIndicator={
                <WaveIndicator color="#c2c2c6" size={90} waveMode="fill" waveFactor={0.6} />
            }
            color="#c2c2c6"
        />
    );
};

const styles = StyleSheet.create({
    spinnerTextStyle: {
        color: "#c2c2c6",
        fontSize: 16
    }
});

export default Loader;
