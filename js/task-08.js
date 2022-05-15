const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const formEl = event.currentTarget.elements;
    const email = formEl.email.value;
    const password = formEl.password.value;

    const formData = {
        email,
        password,
    };
    if (email === "" || password === "") {
        alert("Заполните все поля")
    }
    console.log(formData);
    event.currentTarget.reset();
    
});
 //-------------------  ВАРИАНТ 2

 // form.addEventListener("submit", (event) => {
//     event.preventDefault();
   
//     const formData = new FormData(event.currentTarget);

//     formData.forEach((value, name) => {
//         console.log("onFormSubmit -> name", name);
//         console.log("onFormSubmit -> value", value);
//     });
//      const formEl = event.currentTarget.elements;
//     if (formEl.email.value === "" || formEl.password.value === "") {
//         alert("Заполните все поля")
//     }
//     event.currentTarget.reset();
// });
