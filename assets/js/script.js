let display = document.getElementById('display');
let memory = 0;

function appendValue(value){
    if(value === "%" && display.value !== " "){
        display.value=(parseFloat(display.value)*100).toString();
    } else{
        display.value += value;
    }
}

function appendSqrt(){
    if(display.value !== " "){
        try{
            display.value = Math.sqrt(eval(display.value));

        }catch{
            display.value= Error;
        }
    }
}

function clearDisplay(){
    display.value = " ";
}

function calculate(){
    try{
        let result = eval(display.value);
        if(result === Infinity || result === -Infinity){
            throw 'Cannot divide by 0 !!';
        }
        display.value = result ;
        
    } catch(err){
        display.value = "Error"  ;
    }

}

function backspace(){
    display.value = display.value.slice(0, -1);
}


function MemoryAdd(){
    if(display.value !== " "){
        memory += (parseFloat(display.value));
    }
}

function MemorySub(){
    if(display.value !== " "){
        memory -= (parseFloat(display.value));
    }
}
function MemoryRecall(){
    display.value += memory;
    
}
function MemoryClear(){
    memory = 0;
}

document.addEventListener("keydown",function(e){
    const allowedkeys = "123456789/*-+=EnterBackspace";
    if(!allowedkeys.includes(e.key)) return;

    if(e.key === "Enter" || e.key === "="){
        calculate();
    }
    else if(e.key === "Backspace"){
        backspace();
    }
    else{
        appendValue(e.key);
    }
});

const themeSwitch = document.getElementById("themeswitch");
const knob = document.getElementById("toggleKnob");

themeSwitch.addEventListener("change", function () {
  document.body.classList.toggle("dark", this.checked);
  knob.textContent = this.checked ? "🌙" : "🌞";
});
