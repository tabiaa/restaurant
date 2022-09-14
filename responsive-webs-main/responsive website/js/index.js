function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  
//cart

  let getOldSession=sessionStorage.getItem("cart") ;
  let cart_values= getOldSession.split(",") ;
  function addToCart(item){
      let ifValueAlreadyExists = cart_values.find( value => value ==item );
      if(!ifValueAlreadyExists){
          cart_values.push(item);
          sessionStorage.setItem("cart", cart_values);
         
      } 
      alert(cart_values.join('\n'));
      
  }
  
  function removeFromCart(item){
      let filter = cart_values.filter(value => value != item);
      sessionStorage.removeItem("cart");
      sessionStorage.setItem("cart", filter);
      cart_values = filter;
      alert(cart_values)
  }

//sign up form
const submit =()=>{
  let username=document.querySelector("#form3Example1cg");
  let email=document.querySelector("#form3Example3cg");
  let password=document.querySelector("#form3Example4cg");
  console.log(username.value);
  console.log(email.value);
  console.log(password.value);
}
document.getElementById("btn");
addEventListener("click",submit);