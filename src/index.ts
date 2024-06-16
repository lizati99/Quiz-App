document.addEventListener('DOMContentLoaded', () => {
    const questionDiv : HTMLElement= document.getElementById('questions') as HTMLElement;
    const answerContainer : HTMLElement = document.getElementById('answers') as HTMLElement;
    const nextBtn : HTMLElement= document.getElementById("next") as HTMLElement;
    const prevBtn : HTMLElement= document.getElementById("previous") as HTMLElement;
    const progress : HTMLElement= document.getElementById("progress") as HTMLElement;
    const progressBarSpan : HTMLElement= progress.lastElementChild?.firstElementChild as HTMLElement;
    const currentScore : HTMLElement= document.getElementById("current-score") as HTMLElement;

    const submit : HTMLElement = document.getElementById('submit') as HTMLElement;
  

    interface Ansawer{
        a: string;
        b: string;
        c: string;
    }
    interface Question{
        numero: number;
        question: string;
        answers: Ansawer;
        correctAnswer: string;
    }
    const allQuestions : Array<Question> = [
      {
        numero:1,
        question: "What is the capital of France?",
        answers: {
          a: "Berlin",
          b: "Madrid",
          c: "Paris",
        },
        correctAnswer: "c"
      },
      {
        numero:2,
        question: "Who is CEO of Tesla?",
        answers: {
          a: "Jeff Bezos",
          b: "Elon Musk",
          c: "Bill Gates",
        },
        correctAnswer: "b"
      },
      {
        numero:3,
        question: "What is the largest ocean?",
        answers: {
            a: "Atlantic",
            b: "Indian",
            c: "Pacific",
        },
        correctAnswer: "c"
    }];
    
    function getQuestion(index:number=0):void{
        if(index>=allQuestions.length || index<0)
            return;
        
        progress.querySelector("#current-question")!.innerHTML=allQuestions[index].numero.toString();
        questionDiv.innerHTML = `<span class="numero">${allQuestions[index].numero}</span>. ${allQuestions[index].question}`;
        hidePreviousAnswer(allQuestions[index].numero);
        displayNextAnswer(allQuestions[index].answers, allQuestions[index].numero);
    }
    getQuestion();
    
    function hidePreviousAnswer(numeroQuestion:number) : void{
        const answerLists : NodeListOf<HTMLElement> = answerContainer.querySelectorAll(`[data-question]`) as NodeListOf<HTMLElement>;
        answerLists.forEach( answer => {
            if( answer.dataset.question && numeroQuestion != parseInt(answer.dataset.question))
                answer.classList.add("hide");
        });
    }
    function displayNextAnswer(nextAnswer : Ansawer, numeroQuestion : number){
        if(checkAnswerListExist(numeroQuestion))
            return;

        const answerList:HTMLElement=document.createElement("div") as HTMLElement;
        
        for (const key in nextAnswer) {

            answerList.setAttribute("data-question", numeroQuestion.toString());
            
            const answer : HTMLElement= document.createElement("div") as HTMLElement;
            answer.classList.add("answer");
            
            const answerKey : HTMLElement= document.createElement("span") as HTMLElement;
            answerKey.classList.add("key");
            answerKey.innerHTML= key.toUpperCase();
            answer.append(answerKey);
            
            const answerValue : HTMLElement= document.createElement("div") as HTMLElement;
            answerValue.classList.add("answerValue");
            answerValue.innerHTML = `${nextAnswer[key as keyof Ansawer]}`;
            answer.append(answerValue);
            
            answerList.append(answer);
        }
        
        answerContainer.appendChild(answerList);
    }

    function checkAnswerListExist(numero : number): boolean {
        const answerList : HTMLElement | null = answerContainer.querySelector(`[data-question="${numero}"]`) as HTMLElement | null;
        if(answerList!= null){
            answerList.classList.remove("hide");
            return true;
        }
        return false;
    }
    
    function formatPercentage(value: number): string {
        return `${(value * 100).toFixed(2)}%`;
    }
    
    let cpt : number=0;
    progress.querySelector("#total-questions")!.innerHTML=allQuestions.length.toString();
    
    let answersBox : NodeListOf<HTMLElement>= document.querySelectorAll(".answer") as NodeListOf<HTMLElement>;
    nextBtn.addEventListener('click', () => {
        if(cpt>=allQuestions.length-1)
            return;
        cpt++;
        getQuestion(cpt);
        answersBox=document.querySelectorAll(".answer");
        chooseAnswer(answersBox);
    });

    prevBtn.addEventListener('click', () => {
        if(cpt<=0)
            return;
        cpt--;
        getQuestion(cpt);
        answersBox=document.querySelectorAll(".answer");
        chooseAnswer(answersBox);
    });

    let newScore: number=0;
    function chooseAnswer(boxes: NodeListOf<HTMLElement>){
        boxes.forEach(box => {
            const numQuestion : number = parseInt(box.parentElement?.dataset.question as string) - 1;
            const yourAnswer = box.firstElementChild?.innerHTML;
            box.addEventListener("click", item => {
                const target : HTMLElement= item.target as HTMLElement;
                if(yourAnswer == allQuestions[numQuestion].correctAnswer.toUpperCase()){
                    newScore++;
                    target.classList.add("success");
                    currentScore.classList.add("hidden");
                    setTimeout(() => {
                        currentScore.innerHTML= formatPercentage(newScore / allQuestions.length);
                        currentScore.classList.remove("hidden");
                    }, 500);
                }else
                target.classList.add("wrong");
                
                progressBarSpan.dataset.progress= formatPercentage(parseInt(progress.querySelector("#current-question")?.innerHTML as string) / allQuestions.length);
                progressBarSpan.style.width= progressBarSpan.dataset.progress;
                boxes.forEach(box => box.classList.add("disabled"));
            });
        });
    }
    chooseAnswer(answersBox);
  
    function showResults() {
      // code to show the results
    }
  
    // buildQuiz();
  
    // On submit, show results
    submit.addEventListener('click', showResults);
  });