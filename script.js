window.onload = () => {
    target1.style.display = 'none'
    target2.style.display = 'none'
    target3.style.display = 'none'
    target4.style.display = 'none'
   
}
const target1= document.getElementById("dia")
let dialogue = 0
function toggle1(){
    if (dialogue == 0) {
        target1.style.display = 'block';
        dialogue = 1;
    }
   else{
    if (dialogue == 1) {
            target2.style.display = 'block'
            target1.style.display = 'none'
            dialogue = 2
        }
     else{
        if (dialogue == 2) {
            target3.style.display = 'block'
            target2.style.display = 'none'
            dialogue = 3
           
        }
        else{
            if (dialogue==3){
            target4.style.display = 'block'
            target3.style.display = 'none'
            }
        }
     }
   }
}
const target2= document.getElementById("dia2")

const target3= document.getElementById("dia3")
const target4= document.getElementById("dia4")




