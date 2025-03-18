console.log("★.｡.:*☆:**:. ⓦ𝕖𝓑s𝕚𝓉𝐄 Ｂʸ MAYA 𝐌𝕒𝓝 .:**:.☆*.:｡.★ ♡ www.mayaontheinter.net ♡ 萬美亞");
console.log("The meaning of MAYA is the supernatural power wielded by gods and demons to produce illusions. Broadly: illusion.");
console.log("⋆.ೃ࿔.𖥔 ݁ ˖*:･༄");
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

function chooseMessage() {
    currentMessage = messages[Math.floor(Math.random() * messages.length)].split(" ");
    let mayaIndex;
    let originalMaya;
    for (let i = 0; i < currentMessage.length; i++) {
        if (currentMessage[i].toLowerCase().includes("maya")) {
            mayaIndex = i;
            originalMaya = currentMessage[i];
        }
    }

    let preMaya = currentMessage.slice(0, mayaIndex);
    let preMayaNumCharacters = preMaya.join(" ").length;
    let postMaya = currentMessage.slice(mayaIndex + 1, currentMessage.length);
    let postMayaNumCharacters = postMaya.join(" ").length;

    let message = {
        "preMaya": preMaya,
        "preMayaNumCharacters": preMayaNumCharacters,
        "postMaya": postMaya,
        "postMayaNumCharacters": postMayaNumCharacters,
        "originalMaya": originalMaya
    }
    return message;

}

function createNewMessage() {
    let newMessage = chooseMessage();
    while (newMessage.preMayaNumCharacters >= 20 && newMessage.postMayaNumCharacters >= 30) {
        newMessage = chooseMessage();
    }

    const newDiv = document.createElement("div");
    newDiv.classList.add("current-message");

    if (newMessage.preMayaNumCharacters > newMessage.postMayaNumCharacters) {
        // Left is longer
        newDiv.style.alignItems = "flex-end";
    } else {
        newDiv.style.alignItems = "flex-start";
    }

    // LEFT
    const leftSpan = document.createElement("span");
    leftSpan.classList.add("flex-item");
    leftSpan.classList.add("left");
    leftSpan.innerText = newMessage.preMaya.join(" ");
    newDiv.appendChild(leftSpan);
    leftSpan.style.transform = "translateY(0px)";


    // CENTER
    const centerSpan = document.createElement("span");
    centerSpan.classList.add("flex-item");
    centerSpan.classList.add("center");
    centerSpan.innerText = newMessage.originalMaya;
    newDiv.appendChild(centerSpan);
    const randomDuration = Math.floor(Math.random() * 9) + 2;
    centerSpan.style.animation = `fadeIn ${randomDuration}s infinite`;

    // RIGHT
    const rightSpan = document.createElement("span");
    rightSpan.classList.add("flex-item");
    rightSpan.classList.add("right");
    rightSpan.innerText = newMessage.postMaya.join(" ");
    newDiv.appendChild(rightSpan);
    rightSpan.style.transform = "translateY(0px)";

    document.getElementById("message-container").appendChild(newDiv); // ☆
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