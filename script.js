console.log("★.｡.:*☆:**:. ⓦ𝕖𝓑s𝕚𝓉𝐄 Ｂʸ MAYA 𝐌𝕒𝓝 .:**:.☆*.:｡.★ ♡ www.mayaontheinter.net ♡ 萬美亞");
let messages;
let allMessages = "";
let currentMessage;
let currentMessageIndex = 0;
let wipe = false;
let myInterval = 11; // 200

fetch('./assets/texts.json')
    .then((response) => response.json())
    .then((json) => {
        messages = json;
        console.log("this work features", messages.length, "text messages");
        currentMessage = messages[Math.floor(Math.random() * messages.length)].toLowerCase().split(" "); // .split(" ")
        ready();
    });

// setTimeout(() => {

// }, 11);


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

    console.log("message: ", currentMessage.join(" "));

    console.log("character difference: ", Math.abs(preMaya.join(" ").length - postMaya.join(" ").length));
    
    // if (mayaIndex > (currentMessage.length - (mayaIndex + 1))) {
    if (preMaya.join(" ").length > postMaya.join(" ").length) {
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
    const randomDuration = Math.floor(Math.random() * 9) + 2; 
    centerSpan.style.animation = `fadeIn ${randomDuration}s infinite`;

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

document.addEventListener("keypress", (e) => {
    // if (e.key == 'm' || e.key == 'a' || e.key == 'y') {
    //     createNewMessage();
    // }
    createNewMessage();
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