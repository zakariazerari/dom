document.getElementById("form").addEventListener("submit", function(event){
event.preventDefault();

let email = document.getElementById("email").value;
let password =  document.getElementById("password").value;
let message = document.getElementById("message");

if (email == "zakariazerari042@gmail.com" && password == "Raja1949@@"){
    message.style.color = 'green';
    message.textContent = "Valid email✅"
    return
}
else{
    message.style.color = 'red';
    message.textContent = "Invalid email❌"
    return
}

})
// let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// if(!emailPattern.test(email)) {
//     message.style.color = "red";
//     message.textContent = "❌ البريد الإلكتروني غير صالح!";
//     return;
// }
// if(pasword.length < 6) {
//     message.style.color = "red";
//     message.textContent = "❌ البريد الإلكتروني غير صالح!";
//     return;
// }
// message.style.color = "green";
//             message.textContent = "✅ البريد وكلمة المرور صحيحان!";

// })