const getColor = () => {
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#"+ randomNumber.toString(16);
    document.getElementById("rendomColor").style.backgroundColor = randomCode;
    colorCode = document.getElementById("ColorCode").innerText = randomCode;
}
document.getElementById("button__generate").addEventListener(
    "click", 
    getColor
)
getColor();

document.getElementById("button__copy").addEventListener("click", function () {
    navigator.clipboard.writeText(colorCode) 
      .then(alert("Copied to clipboard: " + colorCode))
      .catch(console.error("Failed to copy"))
  });
