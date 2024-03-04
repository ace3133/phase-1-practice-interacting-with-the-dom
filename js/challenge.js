"use strict";

const counter = document.getElementById("counter");
let counterValue = parseInt(counter.innerText);
let playing = true;

function updateCounter(value) {
    counter.innerText = value;
}

function timer() {
    return setInterval(function () {
        counterValue++;
        updateCounter(counterValue);
    }, 1000);
}

let interval = timer();

document.getElementById("minus").addEventListener("click", function () {
    counterValue--;
    updateCounter(counterValue);
});

document.getElementById("plus").addEventListener("click", function () {
    counterValue++;
    updateCounter(counterValue);
});

document.getElementById("heart").addEventListener("click", function () {
    const likes = document.querySelector(".likes");
    const existingLike = likes.querySelector(`[data-num="${counterValue}"]`);

    if (existingLike) {
        const likeCount = existingLike.querySelector("span");
        likeCount.innerText = parseInt(likeCount.innerText) + 1;
    } else {
        const newLike = document.createElement("li");
        newLike.setAttribute("data-num", counterValue);
        newLike.innerHTML = `${counterValue} has been liked <span>1</span> time`;
        likes.appendChild(newLike);
    }
});

document.getElementById("pause").addEventListener("click", function () {
    if (playing) {
        playing = false;
        clearInterval(interval);
        this.innerText = "resume";
    } else {
        playing = true;
        interval = timer();
        this.innerText = "pause";
    }

    document.querySelectorAll("button").forEach(button => {
        if (button.id !== "pause") {
            button.disabled = !playing;
        }
    });
});

document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    const commentInput = this.children[0];
    const commentText = commentInput.value;
    commentInput.value = "";

    const comments = document.querySelector(".comments");
    const newComment = document.createElement("p");
    newComment.innerText = commentText;
    comments.appendChild(newComment);
});
