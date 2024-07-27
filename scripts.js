
let btn = document.getElementById("btn");
let fullName = document.getElementsByClassName("fullName");
let userName = document.getElementsByClassName("userName");
let Img = document.getElementsByClassName("img");
 let Email = document.getElementsByClassName("email");
 let Location = document.getElementsByClassName("location");
let url = 'https://randomuser.me/api';

btn.addEventListener("click", function() {      
   fetch(url)
   .then(function(response){
   return response.json();
})
   .then(function(jsonData) {
       let imgURL = jsonData.results[0].picture.medium;
       Img[0].src = imgURL;

       let fullNameDisplay = jsonData.results[0].name.first + " " + jsonData.results[0].name.last;
       fullName[0].innerText = fullNameDisplay;

       let userNameDisplay = jsonData.results[0].login.username;
       userName[0].innerText = userNameDisplay;

       let emailDisplay = jsonData.results[0].email;
       Email[0].innerText = emailDisplay;

       let locationDisplay = jsonData.results[0].location.city + ", " + jsonData.results[0].location.state;
       Location[0].textContent = locationDisplay;

      
   })
   .catch(function(error) {
       console.log(error);
   })
});

