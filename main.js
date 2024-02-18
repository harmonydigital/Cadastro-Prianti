const form = document.getElementById ("dataSubmit")

let inputs=document.querySelectorAll("input")

form.addEventListener("submit", ()=>{
  
  console.log("o",inputs)
  
  inputs.map((inp)=>{
    console.log("o",inp)
  }) 
  
})

