const grade = "grade 2";

switch (grade) {
    case "Distinction":
        console.log("marks are greater than 85");
        break;
    case "grade 1":
        console.log("marks are between 75 and 85");
        break;
    case "grade 2":
        console.log("marks are between 65 and 75");
        break;
    default:
        console.log("Failed in the examination");
}
