const form = document.getElementById ("dataSubmit")

let inputs=document.querySelectorAll("input")

form.addEventListener("submit", (e)=>{
 e.preventdefault()
  console.log("o",inputs)
  
  inputs.map((inp)=>{
    
    let inputs=Array.from(inp)
    console.log("o",Array.from(inp))
              localStorage.setItem("step-1", inputs) 
  }) 
  
})



