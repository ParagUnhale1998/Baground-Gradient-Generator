const color1 = document.querySelector("#color1");
const color2 = document.querySelector("#color2");
const gradientView = document.querySelector(".gradient-view");
const copyText = document.getElementById("code-text");
const copyCOde = document.getElementById("copy");
const randomColor = document.getElementById("Random");
const direction = document.querySelector("#select-box select");


direction.addEventListener("change", () => {
    gradientView.style.background = `linear-gradient(to ${direction.value}, ${color1.value}, ${color2.value})`;
    copyText.value = `background-image: linear-gradient(to ${direction.value}, ${color1.value}, ${color2.value});`;
});

color1.addEventListener("input", () => {
    gradientView.style.background = `linear-gradient(to ${direction.value}, ${color1.value}, ${color2.value})`;
    copyText.value = `background-image: linear-gradient(to ${direction.value},${color1.value}, ${color2.value});`;
});
color2.addEventListener("input", () => {
    gradientView.style.background = `linear-gradient(to ${direction.value}, ${color1.value}, ${color2.value})`;
});


randomColor.addEventListener("click", () => {
    const red = Math.floor(Math.random() * 256);
    const red2 = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const green2 = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const blue2 = Math.floor(Math.random() * 256);
    var color = "#" + red.toString(16) + green.toString(16) + blue.toString(16);
    var color2 = "#" + red2.toString(16) + green2.toString(16) + blue2.toString(16);
    gradientView.style.background = `linear-gradient(to ${direction.value}, ${color}, ${color2})`;
    copyText.value = `background-image: linear-gradient(to ${direction.value},${color}, ${color2});`;
});

copyCOde.addEventListener("click", () => {
    navigator.clipboard.writeText(copyText.value)
    copyCOde.innerText = "Code Copied";
    setTimeout(() => {
        copyCOde.innerText = "Copy Code";
    }, 1000)
});

// or this code 
/*const  button = document.querySelector('button');
button.addEventListener('click', function (){
let inputValue = document.querySelector('#input');
inputValue.select();
document.execCommand('copy')
})*/