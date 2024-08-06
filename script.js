
const messages = [
    "Without you, even the stars seem dull.",
    "Your smile is the sunshine I crave.",
    "You are the missing piece in my life's puzzle.",
    "Your love is the melody my heart beats for.",
    "You are the reason my heart races.",
    "Without you, love is just a word.",
    "You are the light in my darkness.",
    "My heart only knows how to love you.",
    "You are the dream I never want to wake up from.",
    "You make my heart skip a beat.",
    "Your 'Yes' is the only answer my heart desires.",
    "In your eyes, I find my home.",
    "Your touch is the warmth my soul needs.",
    "You complete me in every way.",
    "With you, every moment is magical.",
    "Every day with you is a dream come true.",
    "Your love is my greatest treasure.",
    "You are the reason behind my smile.",
    "You make my world a better place."
  ];

var count = 0;
var limit = messages.length;
var message_element = document.getElementById('message');
var yesbtn = document.getElementById('yes');
var nobtn = document.getElementById('no');
let yesButtonWidth = 100; 
let yesButtonHeight = 50; 
let yesButtonfontsize = 15;
document.addEventListener('click',(e)=>{
    // console.log(e);
    if(e.target.tagName==='BUTTON'){
        if(e.target.id=='yes'){
            Yesdone();
        }
        if(e.target.id=='no'){
            noclicked();
        }
    }
})
function Yesdone(){
    message_element.style.fontSize="100px";
    message_element.textContent="I Love You Pokki";
    disablebtns();
    // console.log("YES");
}
function noclicked(){
    if(count<limit)
    {   
        yesButtonWidth += 30; 
        yesButtonHeight += 15; 
        yesButtonfontsize += 3;
        yesbtn.style.width = `${yesButtonWidth}px`;
        yesbtn.style.height = `${yesButtonHeight}px`;
        yesbtn.style.fontSize = `${yesButtonfontsize}px`;
        message_element.textContent = messages[count];
        count++;
        // console.log(yesButtonHeight,yesButtonWidth);
    }
    else{
        message_element.style.fontSize="100px";
        message_element.textContent="I will Always Love you";
        disablebtns();

    }
}
function disablebtns(){
    yesbtn.style.display='none';
    nobtn.style.display ='none';
}