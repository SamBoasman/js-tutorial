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
    const myHeading = document.querySelector("h1:nth-child(2)");
    if (myHeading.textContent === "Mozilla is cool") {
        myHeading.textContent = "or is it?";
    } else {
        myHeading.textContent = "Mozilla is cool";
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        console.log("empty name");
        myHeading.textContent = "Welcome!";
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Welcome, ${myName}`;
    }
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
