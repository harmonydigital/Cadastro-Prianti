const form = document.getElementById ("dataSubmit")

let inputs=document.querySelectorAll("input")
let msg=document.getElementById ("msg")
let arrInputs=Array.from(inputs)
let jsonArr=[]
let step=document.querySelector('form').getAttribute('step')

document.querySelector('form').addEventListener('submit', (e)=>{
 e.preventDefault()
    
  arrInputs.map((mapInp)=>{ 
        var name=mapInp.getAttribute('name')
        jsonArr.push({
        [mapInp.getAttribute('name')]:mapInp.value, 
    }); 
  })
  
 console.log(jsonArr)
  alert('data')
  
  localStorage.setItem(step, jsonArr);
  console.log( localStorage.getItem(step)) 
  
})

// arrInputs.map((mapInp)=>{
//   console.log(mapInp.getAttribute('name'))
// })
