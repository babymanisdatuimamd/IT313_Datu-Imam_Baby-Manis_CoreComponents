import { useState } from "react";
import { ScrollView, TextInput, View  } from "react-native";
import StudentCard from "./StudentCard";

type Student = {
    id: string;
    name: string;
    year: string;
    photoUrl: string;
    flagged: boolean;
};

const initialStudents: Student[] = [
    { id: "s1", name: "Ana Cruz", year: "3rd Year", photoUrl: "https://i.pravatar.cc/100?img=1", flagged: false},
    { id: "s2", name: "Bea Santos", year: "2nd Year", photoUrl: "https://i.pravatar.cc/100?img=2", flagged: false},
    { id: "s3", name: "Cid Ramos", year: "4th Year", photoUrl: "https://i.pravatar.cc/100?img=3", flagged: false},
    { id: "s4", name: "Dex Alonzo", year: "1st Year", photoUrl: "https://i.pravatar.cc/100?img=4", flagged: false},
    { id: "s5", name: "Eli Tan", year: "3rd Year", photoUrl: "https://i.pravatar.cc/100?img=5", flagged: false},
]; 

export default function StudentDirectory() {
    const [students, setStudents] = useState<Student[]>(initialStudents);
    const [query, setQuery] = useState("");

    const filteredStudents = students.filter((student) =>
        student.name.toLowerCase().includes(query.toLowerCase())
    );

    const handleToggleFlag = (id: string) => {
        setStudents((currentStudents) =>
            currentStudents.map((student) =>
                student.id === id
                    ? { ...student, flagged: !student.flagged }
                    : student
            )
        );
    };

    return (
        <View style={{ flex: 1 }}>
            <TextInput
                placeholder="Search students..."
                value={query}
                onChangeText={setQuery}
                style={{ marginTop: 20 }}
            />
            <ScrollView >
                {filteredStudents.map((student) => (
                    <StudentCard
                        key={student.id}
                        id={student.id}
                        name={student.name}
                        year={student.year}
                        photoUrl={student.photoUrl}
                        flagged={student.flagged}
                        onToggleFlag={handleToggleFlag}
                    />
                ))}
            </ScrollView>
        </View>
    );
}