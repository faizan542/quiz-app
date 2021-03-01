var questionsArray = [
    {
        question: "Full Form of RAM is?",
        answer: "random access memory",
        options: [
            "random access memory",
            "random actual memory",
            "right access memory",
            "none of the above",
        ]
    },
    {
        question: "Full Form of CPU is?",
        answer: "central processing unit",
        options: [
            "central program unit",
            "central processing unit",
            "control panel unit",
            "none of the above",
        ]
    },
    {
        question: "Full Form of E-MAIL is?",
        answer: "electronic mail",
        options: [
            "electric mail",
            "easy mail",
            "electronic mail",
            "none of the above",
        ]
    },
    {
        question: "Full Form of LCD is?",
        answer: "liquid crystal display",
        options: [
            "liquid crystal display",
            "light crystal display",
            "liquid cold display",
            "none of the above",
        ]
    },
    {
        question: "Full Form of SEO is?",
        answer: "none of the above",
        options: [
            "safe engine optimization",
            "secure engine optimization",
            "secret engine optimization",
            "none of the above",
        ]
    },
];

function showQuestion(e){
    //show question
    var questionElement = document.getElementById('questionElement');
    questionElement.innerHTML = questionsArray[e].question;

    //show option
    var optionElement = document.getElementsByClassName('optionElement');
    for(var i = 0; i < optionElement.length; i++){
        optionElement[i].innerHTML = questionsArray[e].options[i]
    }
}

var questionCount = 0;
var score = 0;
function nextQuestion(){
    // var nextBtn = document.getElementById('btn-next');  
    questionCount++;
    validate(questionCount)
    showQuestion(questionCount)
    removeActiveClass()
}

function putActiveClass(e){
    removeActiveClass()
    e.classList.add("active")
}

function removeActiveClass(){
    var active = document.getElementsByClassName('active')
    for(var i = 0; i < active.length; i++){
        active[i].classList.remove("active")
    }
}

function validate(e){
    var active = document.getElementsByClassName("active")
     if(active[0].innerHTML == questionsArray[e].answer){
         score += 10 
         console.log(score)
     }
}