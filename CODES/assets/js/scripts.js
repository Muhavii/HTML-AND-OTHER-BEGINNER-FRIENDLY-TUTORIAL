const colorButton = document.getElementById("colorButton")
colorButton.addEventListener('click', ()=>{
    colorButton.style.backgroundColor=colorButton.style.backgroundColor==='blue' ? 'green': 'blue'
})

function myFunction() {
    document.getElementById("paragraphClick").innerHTML = "Button has already been clicked."
  }