//function to validate credit card
function validate(){

    //var cardNumber;

    var inputFromUser = document.getElementById('cardDigits').value; //the numbers on the card entered by the user
    //var input = document.myform.cardNumber.value;
    if(inputFromUser ==""){
        alert("Enter the 16 digits number of your card");
        return false
    }
    var digits = inputFromUser.replace(/\D/g, "");
    alert(digits);
    
    
    
        cardNumber = digits; //1231231321231312"   //"4556737586899855";       // 4323123456789123
        //alert(cardNum);
          //5399237055866681  5370100318514352
        
        var result = cardNumber.split("",16);
       // alert(result);
      
        var lastNumber = result.pop(); //remove the last number
        
        var cardnewNum = result.reverse(); //reverse the array
        
   
        



    
    var figure = cardnewNum[0]*2;
    var figure1 = cardnewNum[1];
    var figure2 = cardnewNum[2]*2;
    var figure3 = cardnewNum[3];
    var figure4 = cardnewNum[4]*2;
    var figure5 = cardnewNum[5];
    var figure6 = cardnewNum[6]*2;
    var figure7 = cardnewNum[7];
    var figure8 = cardnewNum[8]*2;
    var figure9 = cardnewNum[9];
    var figure10 = cardnewNum[10]*2;
    var figure11 = cardnewNum[11];
    var figure12 = cardnewNum[12]*2;
    var figure13 = cardnewNum[13];
    var figure14 = cardnewNum[14]*2;
  



     figure = minus9(figure);

     figure1 =  minus9(figure1);
     figure2 = minus9(figure2 );
    figure3 = minus9(figure3 );
    figure4 = minus9(figure4);
     figure5 = minus9(figure5);
     figure6 = minus9(figure6);
    figure7 = minus9(figure7);
     figure8 = minus9(figure8);
     figure9 = minus9(figure9);
     figure10 = minus9(figure10);
     figure11 = minus9(figure11);
     figure12 = minus9(figure12);
    figure13 = minus9(figure13);
    figure14 = minus9(figure14);
     
   
  /*
    var wer = figure+figure1+figure2+figure3+figure4+figure5+figure6 +figure7
   +figure8+figure9+figure10+figure11+figure12+figure13+figure14;
   document.getElementById("mosas").innerHTML = wer;*/

  //add all the numbers together
   var sum = parseInt(figure)+parseInt(figure1)+parseInt(figure2)+parseInt(figure3)+parseInt(figure4)+parseInt(figure5)+parseInt(figure6) +parseInt(figure7)
   +parseInt(figure8)+parseInt(figure9)+parseInt(figure10)+parseInt(figure11)+parseInt(figure12)+parseInt(figure13)+parseInt(figure14);




   //var strg = result; "   //"4556737586899855";       // 4323123456789123
  
   //5399237055866681  5370100318514352
  
  
   


    var answer = sum % 10;
    //console.log(answer);

    //var input = document.getElementById('input').value;
    //var input = document.myform.cardNumber.value;
    
    /*
    var digits = input.replace(/\D/g, "");
    document.getElementById("show").innerText = digits;
    
    
        var cardNum = digits; 
        
        result = cardNum.split("",16);
    
   */
    
      var check = result[15];
      //alert(check);
    
    /*
    
      if(answer == check){
        cardNumber = digits; 
          
     document.getElementById("show").innerHTML = "This card is valid"; //alert("The Card is valid");

      }else{
       document.getElementById("show").innerHTML = "This card is invalid"; //alert("The Card is not valid");
      }

*/

      if(answer == lastNumber){
        
          
     document.getElementById("show").innerHTML = "This card is valid"; //alert("The Card is valid");
     

      }else{
       document.getElementById("show").innerHTML = "This card is invalid"; //alert("The Card is not valid");
      }




  }

//function to subtract 9 from number greater than 9
function minus9(x){
    var x;
    if(x<9){
        
        
    }else  if(x == 9) {
        return x;
    } else {
      // x -9
      x -= 9;
    }
    return x;
}

/*
var input = document.myform.cardNumber.value;
    
    var digits = input.replace(/\D/g, "");
    //alert(digits);
    
    
        var cardNum = digits; 

        

var list = {
    firstCard: 'input'
    
}
document.getElementById("dt1").innerText = list.firstCard;
*/
var newPara  = document.createElement('p');
newPara.innerHTML = 'this is a new paragraph';
     document.getElementById("show").appendChild(newPara);