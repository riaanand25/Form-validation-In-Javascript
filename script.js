const btn = document.querySelector("#btn");
const fullname = document.querySelector("#name");
const age = document.querySelector("#age");
const phone = document.querySelector("#phone");
const email = document.querySelector("#email");
const homeTown = document.querySelector("#hometown");
const male = document.querySelector("#male")
const female = document.querySelector("#female")
const other = document.querySelector("#other")


let maleClicked = false;
let femaleClicked = false;
let otherClicked = false;


btn.addEventListener("click", (e) => {
    const errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach(message => message.remove());
    const fullname = document.querySelector("#name").value;
    const alpha = /^[a-z A-Z]{3,30}$/;


    if (!alpha.test(fullname)) {
        e.preventDefault()
        const error = document.querySelector("#error")
        const p = document.createElement("p");
        p.textContent = "Enter only alphabets.Length 3-30";
        p.classList.add("error-message");
        p.style.color = "red";
        error.append(p)
    }

    const age = document.querySelector("#age").value;
    const agenumber = /^(1[0-9]|[2-9][0-9])$/;

    if(!agenumber.test(age)){
        e.preventDefault()
        const ageError = document.querySelector("#ageError")
        const para = document.createElement("p");
        para.textContent = "Enter only numbers.Allowed Values 10-99"
        para.classList.add("error-message");
        para.style.color = "red";
        ageError.append(para)
    }


    const phone = document.querySelector("#phone").value;
    const phoneNumber = /^[0-9]{10}$/; 
    if (!phoneNumber.test(phone)) {
    e.preventDefault();
    const numberMessage = document.querySelector("#numberMessage");
    const numberError = document.createElement("p");
    numberError.textContent = "Enter only numbers. Exactly 10 digits.";
    numberError.classList.add("error-message");
    numberError.style.color = "red";
    numberMessage.append(numberError);
}


    const email = document.querySelector("#email").value;
    const emailExp = /^[a-zA-Z0-9.]+@[a-zA-Z0-9]+.[a-zA-Z]{2,5}$/

    if(!emailExp.test(email)){
        const emailValue = document.querySelector("#emailValue")
        const emailError = document.createElement("p")
        emailError.textContent = "Enter Valid Email Address"
        emailError.classList.add("error-message");
        emailError.style.color = "red";
        emailValue.append(emailError);

    }

    if (male.checked) {
        maleClicked = true;
    }
    if (female.checked) {
        femaleClicked = true;
    }
    if (other.checked) {
        otherClicked = true;
    }
   
    if (!maleClicked && !femaleClicked && !otherClicked) {
        const gender = document.querySelector("#gender")
        const options = document.createElement("p")
        options.textContent = "Please select any option"
        options.classList.add("error-message");
        options.style.color = "red";
        gender.append(options)

    }
    if (!homeTown.selected) {
        e.preventDefault()
        const town = document.querySelector("#town");
        const home = document.createElement("p");
        home.textContent = "Please select any option";
        home.classList.add("error-message");
        home.style.color = "red";
        town.parentElement.append(home);
    }

})



