function generateNumber(){

    const min = Math.ceil(document.querySelector(".inputMin").value)
    const max = Math.floor(document.querySelector(".inputMax").value)

    const result = Math.floor(Math.random()*(max-min+1))+min;

    document.getElementById("result").textContent= result
}