const text="Some people come into our lives and make everything brighter. ✨ Thank you for always being such a wonderful friend. Wishing you endless happiness, smiles, and success. Happy Friendship Day ❤️";

let i=0;

function typing(){

if(i<text.length){
document.getElementById("message").innerHTML+=text.charAt(i);
i++;
setTimeout(typing,45);
}

}

document.getElementById("title").innerHTML="🌸 Happy Friendship Day 🌸";

typing();

function celebrate(){

confetti({
particleCount:250,
spread:180,
origin:{y:0.6}
});

alert("😊 You are one of the best gifts life has given me.\nHappy Friendship Day ❤️");

}