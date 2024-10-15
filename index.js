document.getElementById("count-el").innerText = 0

// change title
document.title = "students entered counter"

let studentCount = 0
function increment() {
    studentCount ++;
    document.getElementById("count-el").innerText = studentCount;
}
