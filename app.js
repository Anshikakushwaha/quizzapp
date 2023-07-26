const questions=[{
    
    
        'que':'which of the following is a markup language',
        'a':'html',
        'b':'css',
        'c':'php',                   
        'd':'java',
        'correct':'a'

},
{
    'que':'what year was javascript launced',
    'a':'1590',
    'b':'1995',
    'c':'1994',
    'd':'1809',
    'correct':'b',

},
{
    'que':'what does css stands for ?',
    'a':'cascading style',
    'b':'jason object',
    'c':'hypertext markup language',
    'd':'none of them',
    'correct':'a'
},
{
    'que':'Which is the correct Java code to display the phrase "Java!"?',
     'a':'System.Out.Print("Java!")',
     'b':'System.Out.print("Java!")',
     'c':'System.out.Print("Java!")',
     'd':'System.out.print("Java!")',
     'correct':'d'
},
{
    'que':'which primitive type is for integer ?',
    'a':'boolean',
    'b':'char',
    'c':'double',
    'd':'long',
    'correct':'d'
}

]
let index=0;
let total=questions.length;
let right=0,wrong=0;
const quesBox=document.getElementById("quesBox");
const optionInputs=document.querySelectorAll('.option')
const loadQuestion=()=>{
    if(index==total){
        return endQuiz();
    }
    reset();
const data=questions[index]
quesBox.innerText=` ${index+1} )${data.que}`;
optionInputs[0].nextElementSibling.innerText=data.a;
optionInputs[1].nextElementSibling.innerText=data.b;
optionInputs[2].nextElementSibling.innerText=data.c;
optionInputs[3].nextElementSibling.innerText=data.d;

}
const submitQuiz=()=>{
    const data=questions[index];
    const ans=getAnswer()
    if(ans==data.correct){
     right++;
     }
    else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer=()=>{
    let answer;
    optionInputs.forEach(
            (input)=>{
            if(input.checked){
               answer=input.value;

            }
            
        }
    )
    return answer;
}

const reset=()=>{
    optionInputs.forEach(
        (input)=>{
            input.checked=false;
       
        })
    }
    const endQuiz=()=>{
{/* <div style="text-align :center"></div> */}
        document.getElementById("box").innerHTML=`
        <div style=" text-align:center;font-size:20px; justify-content:center;">
        <h3 style="align-items: center;color:rgb(204, 0, 255);margin:54px "> Thank you for playing the quiz </h3>
       <h2 style="color:rgb(204, 0, 255)"> ${right} / ${total} are correct<h2>
       </div> `
    }
loadQuestion();