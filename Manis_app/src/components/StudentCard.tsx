import { View, Text, Image, StyleSheet, Pressable,} from "react-native";

type Props = {
    id: string;
    name: string;
    year: string;
    photoUrl: string;
    flagged: boolean;
    onToggleFlag: (id: string) => void;
};

export default function StudentCard({
    id,
    name,
    year,
    photoUrl,
    flagged,
    onToggleFlag,
}: Props) {

    return (
        <View style={styles.card}>
            <Image 
                source={{ uri: photoUrl }}
                style={styles.photo}
            />
            <View style={styles.studentInfo} >
                <Text>{name}</Text>
                <Text>{year}</Text>

                <Pressable
                    onPress={() => onToggleFlag(id)}
                    style={({ pressed }) => [
                        styles.flagButton,
                        flagged ? styles.flagged : styles.notFlagged,
                        pressed && styles.pressed,
                    ]}>

                    <Text style={styles.buttonText}>
                        {flagged ? "Flagged for Advising" : "Flag for Advising"}
                    </Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles  = StyleSheet.create({
    card: {
        flexDirection: "row",
        alignItems: "center",
        padding: 12,
    },
    photo: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    studentInfo: {
        marginLeft: 12,
    },
    flagButton: {
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 6,
        marginTop: 8,
    },
    notFlagged: {
        backgroundColor: "#2563eb",
    },
    flagged: {
        backgroundColor: "#16a34a",
    },
    pressed: {
        opacity: 0.7,
    },
    buttonText: {
        color: "#ffffff",
    },
});