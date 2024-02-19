const form = document.getElementById ("dataSubmit")

let inputs=document.querySelectorAll("input")
let msg=document.getElementById ("msg")
let arrInputs=Array.from(inputs)
 


document.querySelector('form').addEventListener('submit', (e)=>{
 e.preventDefault()
   
  alert('teste')
  
})


 
 
arrInputs.map((mapInp)=>{
  console.log(mapInp.getAttribute('name'))
})
