const cards = document.getElementById("cards");
const card = document.getElementById("card");
const question = document.getElementById("question");
const answer = document.getElementById("answer");
const creatBox = document.getElementById("creatBox");

cardArr = [];


function dblclick() {
    addEventListener("dblclick", function () {
        this.document.getElementById("answerHidden").style.display = "block"
    })
}

function addFlashcard() {
    let que = question.value;
    let ans = answer.value;

    var clutter = ""
    clutter += `  <div onclick="dblclick()" class="card cursor-pointer">
    <h2 class="py-2 px-4 font-medium">${que}</h2>
    <p id="answerHidden" class="text-center font-bold text-xl mt-5 text-red-400 h-full hidden ">${ans}</p>
</div>`

    var arrCards = cardArr += clutter
    cards.innerHTML = arrCards;

}

function delFlashcards() {

}

function hideFlashcard() {
    creatBox.style.display = "none";
    answer.value = "";
    question.value = "";
}

function showCreateCardBox() {
    creatBox.style.display = "inline-block";
    creatBox.style.display = "flex"
    creatBox.style.display = "item-center"
    creatBox.style.display = "justify-center"
    answer.value = "";
    question.value = "";
}