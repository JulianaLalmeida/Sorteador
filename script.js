function generateNumber(){

    const min = Math.ceil(document.querySelector(".inputMin").value)
    const max = Math.floor(document.querySelector(".inputMax").value)

        if(min < max){
            const result = Math.floor(Math.random()*(max-min+1))+min;
            document.getElementById("result").textContent= result
        }
        else{
            alert("O valor mínimo tem que ser MENOR que o valor máximo!")
        }

}