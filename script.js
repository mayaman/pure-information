console.log("hello world baby");
let chars = ["♡", "!", "ꔫ", "♩", "♬", "•", "༶", "・", "゜", "・", ".", "*", "✿", "✼", ":*ﾟ", "☆", "𐐪𐑂", "o", "✧"];
let fonts = ["Arial", "Times New Roman", "Verdana", "cursive"];
let messages;
let allMessages = "";
let currentMessage;
let currentMessageIndex = 0;
let scrollPosition = 0;
let wipe = false;
const sparkle = '';

// $.getJSON("test.json", function (json) {
//     console.log(json); // this will show the info it in firebug console
//     myJSON = json;
// });

fetch('./texts.json')
    .then((response) => response.json())
    .then((json) => {
        messages = json;
        currentMessage = messages[Math.floor(Math.random() * messages.length)].toLowerCase().split(" "); // .split(" ")
    });

setTimeout(() => {
    ready();
}, 1111);

const altMayas = ["@maya", "maya!", "maya.", "maya\n"];

function createNewMessage() {
    currentMessage = messages[Math.floor(Math.random() * messages.length)].split(" ");
    // TODO: for loop to find the one string that contains "maya" of any kind and use that as the index ref
    // let mayaIndex = currentMessage.indexOf("maya");
    let mayaIndex;
    let originalMaya;

    for (let i = 0; i < currentMessage.length; i++) {
        if (currentMessage[i].toLowerCase().includes("maya")) {
            mayaIndex = i;
            originalMaya = currentMessage[i]; // TODO: wanna retain original capitalization of my name?
        }
    }

    let preMaya = currentMessage.slice(0, mayaIndex);
    let postMaya = currentMessage.slice(mayaIndex + 1, currentMessage.length);
    const newDiv = document.createElement("div");
    newDiv.classList.add("current-message");

    if (preMaya.length > postMaya.length) {
        // Left is longer
        newDiv.style.alignItems = "flex-end";
    } else {
        newDiv.style.alignItems = "flex-start";
    }

    // LEFT
    const leftSpan = document.createElement("span");
    leftSpan.classList.add("flex-item");
    leftSpan.classList.add("left");
    leftSpan.innerText = preMaya.join(" ");
    newDiv.appendChild(leftSpan);

    // CENTER
    const centerSpan = document.createElement("span");
    centerSpan.classList.add("flex-item");
    centerSpan.classList.add("center");
    centerSpan.innerText = originalMaya;
    newDiv.appendChild(centerSpan);

    // RIGHT
    const rightSpan = document.createElement("span");
    rightSpan.classList.add("flex-item");
    rightSpan.classList.add("right");
    rightSpan.innerText = postMaya.join(" ");
    newDiv.appendChild(rightSpan);

    // and give it some content
    // const newContent = document.createTextNode(newText);
    // newDiv.style.fontFamily = fonts[Math.floor(Math.random() * fonts.length)];
    // add the text node to the newly created div
    // newDiv.appendChild(newContent);

    // add the newly created element and its content into the DOM
    // newDiv.style.fontSize = (12 + Math.random() * 100) + 'px';
    // newDiv.style.fontSize = 26 + 'px';

    document.getElementById("message-container").appendChild(newDiv); //☆

}


function ready() {
    createNewMessage();

    myInterval = Math.random() * 2222;
    setTimeout(ready, myInterval);
}







let myInterval = 11; // 200

// setInterval(() => {
//     // let newMessage = messages[Math.floor(Math.random() * messages.length)].toLowerCase().replace("maya", "𝓂𝒶𝓎𝒶");
//     // addElement();

//     update();

// }, myInterval);


document.addEventListener("keypress", (e) => {
    // update();
    if (e.key == 'm' || e.key == 'a' || e.key == 'y') {
        createNewMessage();
    }
});


function addElement() {
    // create a new div element
    let newText = messages[Math.floor(Math.random() * messages.length)].toLowerCase().replace("maya", "𝓂𝒶𝓎𝒶");
    const newDiv = document.createElement("div");

    // and give it some content
    const newContent = document.createTextNode(newText);
    newDiv.classList.add("message");
    newDiv.style.top = Math.random() * 100 + '%';
    newDiv.style.left = Math.random() * 100 + '%';
    newDiv.style.maxWidth = 25 + Math.random() * 100 + '%';
    // newDiv.style.fontFamily = fonts[Math.floor(Math.random() * fonts.length)];
    // add the text node to the newly created div
    newDiv.appendChild(newContent);

    // add the newly created element and its content into the DOM
    document.body.appendChild(newDiv);
}

function update() {
    if (currentMessageIndex >= currentMessage.length) {
        currentMessage = messages[Math.floor(Math.random() * messages.length)].toLowerCase().split(" ");
        allMessages = allMessages + " ";
        currentMessageIndex = 0;
        myInterval = 10 + Math.random() * 1000;
        // allMessages = "";
        if (wipe) {
            allMessages = "";
            wipe = false;
        }
    } else {
        // addElement(newMessage.toLowerCase());
        allMessages = allMessages + " " + currentMessage[currentMessageIndex].toLowerCase().replace("maya", "𝓂𝒶𝓎𝒶");
        currentMessageIndex++;

    }

    document.getElementById("current-message").innerHTML = allMessages; // .replace("maya", "𝓂𝒶𝓎𝒶")
    if (document.getElementById("current-message").offsetHeight >= window.innerHeight - 100) {
        wipe = true;
    }

}


function randomNumber() {
    return Math.random() * 100;
}