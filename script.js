const students = [
    {
        name: "Ayesha Khan",
        id: "061",
        class: "10th Grade",
        subjects: [
            { subjectName: "Math", marks: 95 },
            { subjectName: "Urdu", marks: 85 },
            { subjectName: "English", marks: 80 }
        ]
    },
    {
        name: "Naddiya",
        id: "071",
        class: "10th Grade",
        subjects: [
            { subjectName: "Math", marks: 90 },
            { subjectName: "Urdu", marks: 80 },
            { subjectName: "English", marks: 70 }
        ]
    },
    {
        name: "Izma",
        id: "081",
        class: "10th Grade",
        subjects: [
            { subjectName: "Math", marks: 89 },
            { subjectName: "Urdu", marks: 69 },
            { subjectName: "English", marks: 82 }
        ]
    },
    {
        name: "Hunza",
        id: "021",
        class: "10th Grade",
        subjects: [
            { subjectName: "Math", marks: 67 },
            { subjectName: "Urdu", marks: 79 },
            { subjectName: "English", marks: 93 }
        ]
    }
];

function totalMarks(subjects) {
    let total = 0;
    for (let i = 0; i < subjects.length; i++) {
        total += subjects[i].marks;
    }
    return total;
}

function percentage(subjects) {
    return (totalMarks(subjects) / (subjects.length * 100)) * 100;
}

function grade(percentage) {
    if (percentage >= 80) return "A+";
    else if (percentage >= 70) return "A";
    else if (percentage >= 60) return "B";
    else if (percentage >= 50) return "C";
    else return "Fail";
}

const inputName = prompt("Please input your name:");
const inputId = prompt("Please input your ID:");

let student = null;
for (let i = 0; i < students.length; i++) {
    if (students[i].name === inputName && students[i].id === inputId) {
        student = students[i];
        break;
    }
}

if (student) {
    const studentPercentage = percentage(student.subjects);
    
    Swal.fire({
        title: 'Student Report Card',
        html: `
            <p><strong>Name:</strong> ${student.name}</p>
            <p><strong>ID:</strong> ${student.id}</p>
            <p><strong>Class:</strong> ${student.class || 'N/A'}</p>
            <p><strong>Total Marks:</strong> ${totalMarks(student.subjects)}</p>
            <p><strong>Percentage:</strong> ${studentPercentage.toFixed(2)}%</p>
            <p><strong>Grade:</strong> ${grade(studentPercentage)}</p>
        `,
        icon: 'info',
        confirmButtonText: 'Okay'
    });
} else {
    Swal.fire({
        title: 'Error',
        text: 'Student not found. Please check the name and ID.',
        icon: 'error',
        confirmButtonText: 'Okay'
    });
}