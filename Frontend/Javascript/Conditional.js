/*
let age = /*Number(prompt("Enter your age"));
age = Number.parseInt(age);
if (age>0 && age<=15) {
  alert("You are a kid");
}
else if(age>15 && age<=19){
  alert("You are a teenager");
}

else if(age>19 && age<30){
  alert("You are a young");
}

else if(age>=30){
  alert("You are an old");
}

else{
  alert("Invalid age");
}

console.log(typeof (age));
*/

// Switch case statement

console.log("1. Pizza\n 2. Burger \n 3. Cream Rolls \n 4. Paties\n 5. Momos \n");
let item  = String(prompt("Enter an item you want to purchse"));


let quantity;
let totalPrice;

switch(item){
  case "pizza":
  case "Pizza":
  case "1":
    quantity = Number(prompt("Enter the quantity"));
    totalPrice = quantity*149;
    
      if (quantity == 1){ 
        console.log(`You have purchased ${quantity} pizza which
        cost total ₹ ${totalPrice}`);
      }
        
      else if (quantity>1){
       console.log(`You have purchased ${quantity} pizzas which
        cost total ₹ ${totalPrice}`);
      }
    else
    {
        console.log("Qunatity must be greater than or equal to 1");
      }

    
    break;

  case "Burger":
  case "burger":
  case "2":
    quantity = Number(prompt("Enter the quantity"));
    totalPrice = quantity*60;

    if (quantity == 1){ 
        console.log(`You have purchased ${quantity} Burger which
        cost total ₹ ${totalPrice}`);
      }
        
      else if (quantity>1){
       console.log(`You have purchased ${quantity} Burgers which
        cost total ₹ ${totalPrice}`);
      }
    else
    {
        console.log("Qunatity must be greater than or equal to 1");
    }

      break;
    
  case "Cream Rolls":
  case "cream rolls":
  case "Cream rolls":
  case "3":
    quantity = Number(prompt("Enter the quantity"));
    totalPrice = quantity*45;

    if (quantity == 1){ 
        console.log(`You have purchased ${quantity} Cream roll which
        cost total ₹ ${totalPrice}`);
      }
        
      else if (quantity>1){
       console.log(`You have purchased ${quantity} Cream rolls which
        cost total ₹ ${totalPrice}`);
      }
    else
    {
        console.log("Qunatity must be greater than or equal to 1");
    }

      break;
    
case "Paties":
case "paties":
  case "4":
    quantity = Number(prompt("Enter the quantity"));
    totalPrice = quantity*25;
    if(quantity==1){
      console.log(`You have purchased ${quantity} Paties which
        cost total ₹ ${totalPrice}`);
    }

    else if(quantity>1){
      console.log(`You have purchased ${quantity} paties which
        cost total ₹ ${totalPrice}`);
    }

    else{
      console.log("quantity must be greater than or equal to 1")
    }

    break;

  case "Momos":
  case "momos":
  case "5":
    quantity = Number(prompt("Enter the quantity in plates"));
    totalPrice = quantity*20;
    if(quantity==1){
      console.log(`You have purchased ${quantity}  plate of Momos
      which cost total ₹ ${totalPrice}`);
    }

    else if(quantity>1){
      console.log(`you have purchased ${quantity} plates of Momos
      which costs ₹ ${totalPrice}`);
    }

    else{
      console.log(`quantity must be greater than or equal to 1`);
    }
}