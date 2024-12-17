const getColor = () => {
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#"+ randomNumber.toString(16);
    document.getElementById("rendomColor").style.backgroundColor = randomCode;
    document.getElementById("ColorCode").innerText = randomCode;
}
const copyCode = () => {
    navigator.clipboard.writeText(randomCode)
}
document.getElementById("button__generate").addEventListener(
    "click", 
    getColor
)
document.getElementById("button__copy").addEventListener(
    "click", 
    copyCode
)
getColor();