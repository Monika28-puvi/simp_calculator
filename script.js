const display1=document.getElementById("display")

function appendToDisplay(input){//5+
    display1.value+=input;//5

}

function Clear(){
display1.value="";
}

function calculate(){

    try{
    display1.value=eval(display1.value);
    }
  
    catch{
    display1.value="Error"
    }
  
}

   
