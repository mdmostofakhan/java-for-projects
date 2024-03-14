
const buttons = document.querySelectorAll(".button");
const body = document.body;

buttons.forEach(function(button){
    console.log(button)
    button.addEventListener("click", function(e){
        console.log(e)
        console.log(e. target)
        if(e.target.id === "gray"){
            body.style.backgroundColor = e.target.id;
        }
       else if(e.target.id === "white"){
            body.style.backgroundColor = e.target.id;
        }
       else if(e.target.id === "blue"){
            body.style.backgroundColor = e.target.id;
        }
        else  if(e.target.id === "yellow"){
            body.style.backgroundColor = e.target.id;
        }
        else{
            body.style.backgroundColor = "black";
        }
    })
})



// calculators ..............
const form = document.querySelector("form");

form.addEventListener("submit", function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector("#result");

    if(height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Height is not a valid number ${height}`;
    } 
    else if(weight === ' ' || weight < 0 || isNaN(weight)) {
        result.innerHTML = ` Weight is not a valid number ${weight}`;
    }
    else {
       const bmi = weight * height;
        const bmi2 = (bmi / 50).toFixed(2)
       result.innerHTML = `<span> ${bmi2}</span>`;
    }
});



// clock star here .................../

const clock = document.getElementById("clock")

setInterval(function(){
    const date = new Date();
    clock.innerHTML = date.toLocaleTimeString()

}, 1000)