const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/firefox-icon.png") {
        myImage.setAttribute("src", "images/fire-icon.png");
    } else {
        myImage.setAttribute("src", "images/firefox-icon.png");
    }
};

document.onclick = () => {
    const myHeading = document.querySelector("h1");
    if (myHeading.textContent === "Mozilla is cool") {
        myHeading.textContent = "or is it?";
    } else {
        myHeading.textContent = "Mozilla is cool";
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h2");

function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Welcome, ${myName}`;
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Welcome, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
};
