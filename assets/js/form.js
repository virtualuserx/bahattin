// Listen for a submit
document.querySelector(".email-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //   Get input Values
  let name = document.querySelector(".name").value;
  let subject = document.querySelector(".subject").value;
  let message = document.querySelector(".message").value;
  let email = document.querySelector("#email").value;


 
 

  console.log(
    name,
    email,
    subject,
    message
  );

  //   saveContactInfo(name, email, message);

  //   document.querySelector(".contact-form").reset();

  sendEmail(
    name,
    email,
    subject,
    message
  );
}

// function sendEmail(
//    name,
//    email,
//    subject,
//    message
// ){
//   Email.send({
//     Host : "smtp.gmail.com",
//     Username : "controlza2021@gmail.com",
//     Password : "ezwzakrcquzwobhr",
//     // SecureToken : "3def6893-8292-4b1b-9594-1b5226b8d044",
//     // To: "virtualuserx@gmail.com",
//     To: "abdoulkowiyy2020@gmail.com",
//     From: "controlza2021@gmail.com",
//     Subject: `${subject} sent you Email`,
//     Body: `Name: ${name} <br/>
//            Email: ${email} <br/> 
//            Message: ${message}`,

//   }).then((message) => alert("Mail sent Successfully"));
// }


function sendEmail(
  name,
    email,
    subject,
    message,
){
  Email.send({
    Host : "smtp.gmail.com",
    Username : "controlza2021@gmail.com",
    Password : "ymbgsspuwuybvalh",
    To: "virtualuserx@gmail.com",
    From: `${email}`,
    Subject: `${subject} sent you Email`,
    Body:  `Name: ${name} <br/>
           Email: ${email} <br/> 
            Message: ${message}`,

  }).then((message) => alert("Mail sent Successfully"));
}

