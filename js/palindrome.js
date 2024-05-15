document.getElementById("check-btn").addEventListener("click", function() {
    var text = document.getElementById("text-input").value.trim();
    const textView = text;
    
    
    var resultElement = document.getElementById("result");
    if (text === "") {
        alert("Please input a value");
        return;
    }
    // eliminar caracteres que no son letras
    text = text.replace(/[^a-zA-Z0-9!?]/g, '').toLowerCase();




console.log(text)
console.log(textView)
    var reversedText = text.split("").reverse().join("");
    if (text === reversedText) {
        resultElement.innerHTML = `<span style='font-weight: 900;'>${textView}</span> <span style='margin-left:5px;'>is a palindrome</span>`;
    } else {
        resultElement.innerHTML = `<span style='font-weight: 900;'>${textView}</span><span style='margin-left:5px;'>is not a palindrome</span>`;
        
    }
});