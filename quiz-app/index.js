let questions = [
    {
        question: "In the 2012 movie, The Avengers features Captain America. What is his real name?",
        img: "img/captain.jpeg",
        option1: "Buck Rogers",
        option2: "Steve Rogers",
        option3: "Ted Rogers",
        option4: "Tony Stark",
        answer: "Steve Rogers"
    },
    {
        question: "Vision is a...what?",
        img: "img/vision.png",
        option1: "Android",
        option2: "Ghost",
        option3: "Alien",
        option4: "Famous artist",
        answer: "Android"
    },
    {
        question: "In the comic book series, who were the original Avengers?",
        img: "img/Avengers1.jpeg",
        option1: "Batman,Spider-man,Superman and Wonder Woman",
        option2: "Ant-man,the Hulk,Iron Man,Thor and the Wasp",
        option3: "The Hulk,Howard the Duck,Thor and Black Widow",
        option4: "The Incredibles",
        answer: "Ant-man,the Hulk,Iron Man,Thor and the Wasp"
    },
    {
        question: "How does Black Widow turn the Hulk back into Bruce Banner?",
        img: "img/Black Widow.jpeg",
        option1: "By asking politely",
        option2: "With a text message",
        option3: "With a lullaby",
        option4: "With a special potion",
        answer: "With a lullaby"
    }
]

// Xử lý trang start
$("#start-btn").click(function () {
    $("#start-page").addClass("hidden");
    $("#quiz-content").removeClass("hidden");
    displayQ();    
    checkAnswer();
    checkProgress();
    showScore();
});

// Hiển thị câu hỏi
let currentQIndex = 0;
let lastQIndex = questions.length - 1;
console.log(lastQIndex);

function displayQ() {
    let q = questions[currentQIndex];
    $(".char-pic").attr(`src`, `${q.img}`);
    $("h3").text(`${q.question}`);
    $("#opt-1").text(`${q.option1}`);
    $("#opt-2").text(`${q.option2}`);
    $("#opt-3").text(`${q.option3}`);
    $("#opt-4").text(`${q.option4}`);
    $("#question p").text(`Question ${currentQIndex + 1}/ ${questions.length}`);
}

// check quá trình trả lời câu hỏi của user
let progress = document.getElementById("progress");
function checkProgress() {
    for (let i = 0; i < lastQIndex; i++) {
        progress.innerHTML += `<img id="${i}" class="pro-item" src="" alt="">`
    }
}

function correct() {
    $(".pro-item").attr("src", "img/green-gem.png")
}

function wrong() {
    $(".pro-item").attr("src", "img/red-gem.png")
}

// tính điểm
let score = 0;
function checkAnswer(obj) {
    let result = obj.innerHTML;
    if (questions[currentQIndex].answer == result) {
        correct();
        score++;
    } else {
        wrong();
    }

    if (currentQIndex < lastQIndex) {
        currentQIndex++;
        displayQ();
    } else {
        showScore();
    }
}

// hiển thị bảng kết quả
let scoreBoard = document.getElementById("#score-board");
function showScore() {
    $("#quiz-content").addClass("hidden");
    $("#score-board").removeClass("hidden");
    $("#score-point").text(`Congratulations !! You have ${score}/${questions.length} correct answer(s).`);
}