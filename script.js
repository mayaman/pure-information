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

function alignColumns() {
    const col1 = document.getElementById("col-1");
    const col2 = document.getElementById("col-2");
    const col3 = document.getElementById("col-3");

    // Reset transforms in case this is a rerun (e.g. window resize)
    col1.style.transform = "translateY(0px)";
    col3.style.transform = "translateY(0px)";

    // Measure their rendered heights
    const col1Height = col1.offsetHeight;
    const col2Height = col2.offsetHeight;
    // const col3Height = col3.offsetHeight; // Only needed if you want to do further adjustments

    // The midpoint (vertical center) of column 2
    const col2Mid = col2Height / 2;

    // 1) Shift column 1 so that its bottom is at col2's midpoint
    //    i.e. col1 bottom = col2 midpoint
    //    => translation needed = col2Mid - col1Height
    const shiftCol1 = col2Mid - col1Height;
    col1.style.transform = `translateY(${shiftCol1}px)`;

    // 2) Shift column 3 so that its top is at col2's midpoint
    //    i.e. col3 top = col2 midpoint
    //    => translation needed = col2Mid
    const shiftCol3 = col2Mid;
    col3.style.transform = `translateY(${shiftCol3}px)`;
}

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


// function addElement() {
//     // create a new div element
//     let newText = messages[Math.floor(Math.random() * messages.length)].toLowerCase().replace("maya", "𝓂𝒶𝓎𝒶");
//     const newDiv = document.createElement("div");

//     // and give it some content
//     const newContent = document.createTextNode(newText);
//     newDiv.classList.add("message");
//     newDiv.style.top = Math.random() * 100 + '%';
//     newDiv.style.left = Math.random() * 100 + '%';
//     newDiv.style.maxWidth = 25 + Math.random() * 100 + '%';
//     newDiv.appendChild(newContent);

//     // add the newly created element and its content into the DOM
//     document.body.appendChild(newDiv);
// }

// function update() {
//     if (currentMessageIndex >= currentMessage.length) {
//         currentMessage = messages[Math.floor(Math.random() * messages.length)].toLowerCase().split(" ");
//         allMessages = allMessages + " ";
//         currentMessageIndex = 0;
//         myInterval = 10 + Math.random() * 1000;
//         // allMessages = "";
//         if (wipe) {
//             allMessages = "";
//             wipe = false;
//         }
//     } else {
//         // addElement(newMessage.toLowerCase());
//         allMessages = allMessages + " " + currentMessage[currentMessageIndex].toLowerCase().replace("maya", "𝓂𝒶𝓎𝒶");
//         currentMessageIndex++;

//     }

//     document.getElementById("current-message").innerHTML = allMessages; // .replace("maya", "𝓂𝒶𝓎𝒶")
//     if (document.getElementById("current-message").offsetHeight >= window.innerHeight - 100) {
//         wipe = true;
//     }

// }