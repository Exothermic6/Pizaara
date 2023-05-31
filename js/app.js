const filterButtons=document.querySelectorAll(".select")
const pizzaItems=document.querySelectorAll(".menu__container")

// console.log(pizzaItems)
// console.log(filterButtons)

// pizzaItems.forEach(function(el){
//   console.log(el)
// })
pizzaItems.forEach(function(item){
  if(item.classList.contains("chicken")){
    item.style.display="flex"
  }
  else{
    item.style.display="none"
  }
})
filterButtons.forEach(function(item){
  item.addEventListener("click",function(){
    filterButtons.forEach(function(btn){
      btn.classList.remove("active")
    })
    const filterName=item.innerHTML
    console.log(filterName)
    if(filterName==="Chicken Pizza"){
      item.classList.add("active")
      pizzaItems.forEach(function(item){
        if(item.classList.contains("chicken")){
        // console.log(item)
        item.style.display="flex"
        }
        else{
          // console.log("Am not class chicken")
          item.style.display="none"
        }
     })
    }


    else if(filterName==="Pepperoni"){
      item.classList.add("active")
      pizzaItems.forEach(function(item){
        if(item.classList.contains("pepperoni")){
        // console.log(item)
        item.style.display="flex"
        }
        else{
          // console.log("Am not class chicken")
          item.style.display="none"
        }
     })
    }


    else if(filterName==="Margherita"){
      item.classList.add("active")
      pizzaItems.forEach(function(item){
        if(item.classList.contains("margherita")){
        // console.log(item)
        item.style.display="flex"
        }
        else{
          // console.log("Am not class chicken")
          item.style.display="none"
        }
     })
    }
   

    else if(filterName==="Hawaiian"){
      item.classList.add("active")
      pizzaItems.forEach(function(item){
        if(item.classList.contains("hawaiian")){
        // console.log(item)
        item.style.display="flex"
        }
        else{
          // console.log("Am not class chicken")
          item.style.display="none"
        }
     })
    }


    else if(filterName==="Meat Lover's Pizza"){
      item.classList.add("active")
      pizzaItems.forEach(function(item){
        if(item.classList.contains("meat-lovers")){
        // console.log(item)
        item.style.display="flex"
        }
        else{
          // console.log("Am not class chicken")
          item.style.display="none"
        }
     })
    }

  })
})



















