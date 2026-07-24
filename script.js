// ===============================
// Loading Screen
// ===============================

window.onload = () => {

    setTimeout(() => {

        document.getElementById("loadingScreen").style.opacity = "0";

        setTimeout(() => {

            document.getElementById("loadingScreen").style.display = "none";

        },1000);

    },2500);

};

// ===============================
// Swipe to Unlock
// ===============================

const lockScreen = document.getElementById("lockScreen");

lockScreen.addEventListener("click",()=>{

    lockScreen.style.display="none";

    document.getElementById("passcodePage").style.display="flex";

    const music = document.getElementById("bgMusic");

music.volume = 0.5;

music.play().catch((error)=>{
    console.log("Music blocked:", error);
});
});

// ===============================
// Passcode
// ===============================

let enteredCode="";

const correctCode="1310";

const dots=document.querySelectorAll(".dots span");

const buttons=document.querySelectorAll(".keypad button");

buttons.forEach(button=>{

button.addEventListener("click",()=>{

let value=button.innerText;

if(value==="⌫"){

enteredCode=enteredCode.slice(0,-1);

updateDots();

return;

}

if(value==="❤️"){

return;

}

if(enteredCode.length<4){

enteredCode+=value;

updateDots();

}

if(enteredCode.length===4){

checkPasscode();

}

});

});

function updateDots(){

dots.forEach((dot,index)=>{

dot.style.background=index<enteredCode.length ? "white":"transparent";

});

}

function checkPasscode(){

if(enteredCode===correctCode){

setTimeout(()=>{

document.getElementById("passcodePage").style.display="none";

document.getElementById("letterPage").style.display="flex";

startLetter();

},500);

}
else{

enteredCode="";

updateDots();

alert("Wrong Passcode ❤️");

}

}

// ===============================
// Typewriter Letter
// ===============================

const message=`Hiii Vignesh ❤️

If you're reading this, then whatever I tried to do actually worked.

I mean... I didn't technically make all of this myself, but it's still a little something I wanted to make for you so that maybe we can work things out between us.

I'm sorry for disappointing you again and again.

I love you so much.

I'm literally making a whole website just for you.

Can you imagine what that means? ❤️

I hope this brings a smile to your face.

I hope you can forgive me.

I love you.

I miss you.

You'll always be...

MY FIRST EVERYTHING ❤️`;

function startLetter(){

const paragraph=document.querySelector(".letter p");

paragraph.innerHTML="";

let index=0;

const typing=setInterval(()=>{

paragraph.innerHTML+=message.charAt(index);

index++;

if(index>=message.length){

clearInterval(typing);

}

},30);

const continueBtn = document.getElementById("continueBtn");

continueBtn.addEventListener("click", () => {
    document.getElementById("letterPage").style.display = "none";
    document.getElementById("scrapbook").style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});



}