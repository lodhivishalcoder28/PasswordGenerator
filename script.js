let inputSlider= document.getElementById("inputSlider");
let sliderValue= document.getElementById('sliderValue');
let passBox= document.getElementById("passBox");
let lowercase= document.getElementById("lowercase");
let uppercase= document.getElementById("uppercase");
let numbers= document.getElementById("numbers");
let genBtn= document.getElementById("genBtn");
let symbols= document.getElementById("symbols");
let copyIcon= document.getElementById('copyicon')


//showing input slider value
sliderValue.textContent = inputSlider.value;
//when we click (basically when we give input)
inputSlider.addEventListener('input',()=>{
    sliderValue.textContent = inputSlider.value;
})

genBtn.addEventListener('click',()=>{
    passBox.value= generatePassword();
})
let upperChars= "ABCDEFGHIJKLMNIOPQRSTUVWXYZ";
let lowerChars= "abcdefghijklmnopqrstuvwxyz";
let allnumbers="0123456789";
let allsymbols="*&^%$#@!~"

//function to generate password
function generatePassword(){
    let genPassword = '';
    let allChars="";
    allChars+=lowercase.checked? lowerChars: "";
    allChars+=uppercase.checked? upperChars: "";
    allChars+=numbers.checked? allnumbers: "";
    allChars+=allsymbols.checked? symbols: "";
    if(allChars=="" || allChars.length==0){
        return genPassword
    }
    
    let i = 1;
    while(i<=inputSlider.value){

    genPassword+=allChars.charAt(Math.floor(Math.random()*allChars.length));
    i++;
    
    }
    
    return genPassword;
}
copyIcon.addEventListener('click',()=>{
    if(passBox.value!='' || passBox.value>=1){
        navigator.clipboard.writeText(passBox.value);
        copyIcon.innerText='Copied';
        copyIcon.title="password copied";
    }
    setTimeout(()=>{
        copyIcon.innerHTML="content_copy";
        copyIcon.title="";

    },3000);
   
    
});