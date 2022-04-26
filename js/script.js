const countContainer = document.querySelector(".counter");
const countButton = document.querySelector("button");
const inputContainer = document.querySelector(".inputs");

function startCounter() {
    let count = 0;
    countContainer.innerHTML = count;

    inputContainer.innerHTML = "";

    const countIntervalId = setInterval(increment, 1000);

    function increment() {
        count++;
        countContainer.innerHTML = count;
    }

    countButton.onmouseup = function() {
        clearInterval(countIntervalId);

        for (let i = 0; i < count; i++){
            inputContainer.innerHTML += `<input value= "input ${i+1}"></input>`;
        }
    }
    
}

// countButton.onmousedown = startCounter;
countButton.addEventListener("mousedown", startCounter);
