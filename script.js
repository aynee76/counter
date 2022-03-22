const countEl = document.getElementById("count")
const lowerCountEl = document.getElementById("lowerCount")
const addCountEl = document.getElementById("addCount")
const resetEl= document.getElementById("reset")
// console.log("lowerCountEl")
let count=7
countEl.innerText=count

lowerCountEl.addEventListener("click", () => {
    count = count -1
    countEl.innerText=count
})

addCountEl.addEventListener("click", () => {
    count = count + 1
    countEl.innerText=count
})

resetEl.addEventListener('click', ()=>{
    count=0
    countEl.innerText=count

})