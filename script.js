function createSubjects() {

    // Get student name
    let studentName =
        document.getElementById("studentName").value.trim();


    // Get number of subjects
    let subjectCount =
        Number(document.getElementById("subjectCount").value);


    let subjectsDiv =
        document.getElementById("subjects");


    let calculateButton =
        document.getElementById("calculateButton");


    let resetButton =
        document.getElementById("resetButton");


    // Clear old subjects
    subjectsDiv.innerHTML = "";

    document.getElementById("result").innerHTML = "";


    // Check student name
    if (studentName === "") {

        subjectsDiv.innerHTML =
            '<p class="error">Please enter your name.</p>';

        calculateButton.style.display = "none";

        resetButton.style.display = "block";

        return;
    }


    // Check number of subjects
    if (subjectCount < 1 || subjectCount > 20) {

        subjectsDiv.innerHTML =
            '<p class="error">Please enter between 1 and 20 subjects.</p>';

        calculateButton.style.display = "none";

        resetButton.style.display = "block";

        return;
    }


    // Create subject inputs
    for (let i = 1; i <= subjectCount; i++) {

        let subjectDiv =
            document.createElement("div");


        subjectDiv.className = "subject";


        subjectDiv.innerHTML = `

            <h3>Subject ${i}</h3>

            <label>
                Subject Name
            </label>

            <input
                type="text"
                id="subjectName${i}"
                placeholder="Enter subject name"
            >


            <label>
                Marks
            </label>

            <input
                type="number"
                id="marks${i}"
                placeholder="Enter marks (0-100)"
                min="0"
                max="100"
            >

        `;


        subjectsDiv.appendChild(subjectDiv);
    }


    // Show buttons
    calculateButton.style.display = "block";

    resetButton.style.display = "block";
}



function calculateGrade() {

    let subjectCount =
        Number(document.getElementById("subjectCount").value);


    let total = 0;

    let subjects = [];


    // Get subjects and marks
    for (let i = 1; i <= subjectCount; i++) {

        let subjectName =
            document.getElementById(`subjectName${i}`).value.trim();


        let marks =
            Number(
                document.getElementById(`marks${i}`).value
            );


        // Check subject name
        if (subjectName === "") {

            document.getElementById("result").innerHTML =
                '<p class="error">Please enter all subject names.</p>';

            return;
        }


        // Check marks
        if (marks < 0 || marks > 100) {

            document.getElementById("result").innerHTML =
                '<p class="error">Marks must be between 0 and 100.</p>';

            return;
        }


        // Add marks to total
        total += marks;


        // Store subject
        subjects.push({
            name: subjectName,
            marks: marks
        });
    }


    // Calculate percentage
    let percentage =
        total / subjectCount;


    // Calculate grade
    let grade;


    if (percentage >= 90) {

        grade = "A+";

    } else if (percentage >= 80) {

        grade = "A";

    } else if (percentage >= 70) {

        grade = "B";

    } else if (percentage >= 60) {

        grade = "C";

    } else if (percentage >= 50) {

        grade = "D";

    } else {

        grade = "F";
    }


    // Calculate pass/fail
    let status;


    if (percentage >= 40) {

        status = "Pass";

    } else {

        status = "Fail";
    }


    // Get student name
    let studentName =
        document.getElementById("studentName").value.trim();


    // Create subject list
    let subjectList = "";


    for (let subject of subjects) {

        subjectList += `

            <p>
                <strong>
                    ${subject.name}:
                </strong>

                ${subject.marks}
            </p>

        `;
    }


    // Display result
    document.getElementById("result").innerHTML = `

        <h2>Result</h2>

        <p>
            <strong>Student:</strong>
            ${studentName}
        </p>

        <hr>

        ${subjectList}

        <hr>

        <p>
            <strong>Total:</strong>
            ${total}/${subjectCount * 100}
        </p>

        <p>
            <strong>Percentage:</strong>
            ${percentage.toFixed(2)}%
        </p>

        <p>
            <strong>Grade:</strong>
            ${grade}
        </p>

        <p>
            <strong>Status:</strong>
            ${status}
        </p>

    `;
}



function resetForm() {

    // Clear student name
    document.getElementById("studentName").value = "";


    // Clear subject count
    document.getElementById("subjectCount").value = "";


    // Remove subjects
    document.getElementById("subjects").innerHTML = "";


    // Remove result
    document.getElementById("result").innerHTML = "";


    // Hide calculate button
    document.getElementById("calculateButton").style.display = "none";


    // Hide reset button
    document.getElementById("resetButton").style.display = "none";
}