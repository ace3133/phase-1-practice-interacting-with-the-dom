
let count = document.getElementById("counter");
let dec = document.getElementById("minus");
let plus = document.getElementById("plus");
let heart = document.getElementById('heart');
let pause = document.getElementById("pause");
let submit = document.getElementById("submit");
let form = document.getElementById("comment-form");
let timer;

function startTimer() {
    timer = setInterval(() => count.innerText++, 1000);
}

function stopTimer() {
    clearInterval(timer);
}

function add() {
    plus.addEventListener("click", () => count.innerText++)
}

function minus() {
    dec.addEventListener("click", () => count.innerHTML--)
}

function addheart() {
    heart.addEventListener('click', () => {
        const like = document.createElement("li");
        like.innerText = `${count.innerText} ❤️`;
       document.querySelector(".likes").appendChild(like)

    })
}

function onSubmit(){
    submit.addEventListener("click",(e)=>{
        e.preventDefault();
        let text = document.getElementById("comment-input");
        let p = document.createElement("p");
        const list = document.getElementById("list");
        p.innerText = text.value
        list.appendChild(p)
        text.value = ""
    })
}




function pauseAndReset() {
    pause.addEventListener('click', () => {
        if (pause.innerText == "pause") {
            stopTimer();
            plus.disabled = true;
            dec.disabled = true;
            heart.disabled = true;
            pause.innerText = "resume";
        }
        else if (pause.innerText == "resume") {
            plus.disabled = false;
            dec.disabled = false;
            heart.disabled = false;
            pause.innerText = "pause";
            startTimer();
        }   
    })
}

add();
minus();
addheart();
pauseAndReset();
onSubmit();
startTimer();