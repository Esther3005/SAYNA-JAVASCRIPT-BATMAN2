
 AGGRANDIR = document.querySelector('H1');

function presentation(){

    AGGRANDIR.classlist.add('taille-txt')
}
var pop1=document.getElementById('POPUP1');
var pop2=document.getElementById('POPUP2');
var pop3=document.getElementById('POPUP3');
var pop4=document.getElementById('POPUP4');

var w= 0;
function displayQuestion(){
    question.innerText= data[w].question;
    button.innerText= "Question Suivant";
    numero.innerText= 
    if (data[w].options.length=== 3){
        pop1.innerHTML = data[w].POPUP[0];
        pop2.innerHTML = data[w].POPUP[1];
        pop3.innerHTML = data[w].POPUP[2];
} 
else{
        pop1.innerHTML = data[w].POPUP[0];
        pop2.innerHTML = data[w].POPUP[1];
        pop3.innerHTML = data[w].POPUP[2];
        pop4.innerHTML = data[w].POPUP[3];
    }
}


displayQuestion()


var pop1=document.getElementById('POPUP1');
var pop2=document.getElementById('POPUP2');
var pop3=document.getElementById('POPUP3');
var pop4=document.getElementById('POPUP4');

var w= 0;
function displayQuestion(){
    question.innerText= data[w].question;
    button.innerText= "Question Suivant";
    numero.innerText= 
    if (data[w].options.length=== 3){
        pop1.innerHTML = data[w].POPUP[0];
        pop2.innerHTML = data[w].POPUP[1];
        pop3.innerHTML = data[w].POPUP[2];
} 
else{
    pop1.innerHTML = data[w].POPUP[0];
    pop2.innerHTML = data[w].POPUP[1];
    pop3.innerHTML = data[w].POPUP[2];
    pop4.innerHTML = data[w].POPUP[3];
    }
}
displayQuestion()
