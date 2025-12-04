const main = document.querySelector('#main');
const form = document.querySelector('form')
const imageInput = document.querySelector('#imageUpload');
const imgError = document.querySelector('.imgError');
const imgInputContainer = document.querySelector('.imgInputContainer');
const previewImg = document.querySelector('#Preview');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const gitInput = document.querySelector('#gitname');
const btn = document.querySelector('#btn');
const textName = document.querySelector('.fullName');
const textEmail = document.querySelector('.email')
const ticket = document.querySelector('#ticket');
const triggerImg = document.querySelector('#triggerImg');
const paraInfo = document.querySelector('.info')
const btncontainer = document.querySelector('#btncontainer')
const inputContainer = document.querySelector('#inputContainer');
const ticketImg = document.querySelector('#ticketImg');
const errorShow = document.querySelectorAll('.errorShow')


let formData = {
    imageFile: null,
    name: "",
    email: "",
    github: ""
}

 function previewImage(event) {

    btncontainer.innerHTML = "";

    const input = event.target;

    if (!input.files || !input.files[0]) return;
    
    const file = input.files[0];
    formData.imageFile = file;
    
    if (!file.type.startsWith("image/")) {
        alert("Only image files are allowed");
        return;
    }

    if (file.size > 2 * 1024 * 1024) {
        
        return;
    }

    const reader = new FileReader();

    reader.onload = (e) => {

        const base64 = e.target.result;
        formData.imageFile = base64;

        previewImg.src = base64
        previewImg.style.display = 'block'
    }
    
    reader.readAsDataURL(file)

    triggerImg.style.display = "none";
    paraInfo.style.display = "none";


    const deletebtn = document.createElement('button');
    deletebtn.textContent = 'Remove image';
    deletebtn.classList.add('btn');
    deletebtn.type = 'button'
    deletebtn.style.textDecoration = "underline"; 

    const changebtn = document.createElement('button');
    changebtn.type = 'button'
    changebtn.textContent = 'Change image';
    changebtn.classList.add('btn')

    btncontainer.append(deletebtn, changebtn)

    changebtn.addEventListener('click', () => {
        imageInput.click();
    })

    deletebtn.addEventListener('click', () => {
        previewImg.src = "";
        previewImg.style.display = 'none';
        triggerImg.style.display = "block";
        paraInfo.style.display = "block";
        imageInput.value = "";
        formData.imageFile = null;
        btncontainer.innerHTML = "";

    })
 }


nameInput.addEventListener('input', (e) => {
    formData.name = e.target.value.trim();
})

emailInput.addEventListener('input', (e) => {
    formData.email = e.target.value.trim();
})

gitInput.addEventListener('input', (e) => {
    formData.github = e.target.value.trim();
})


function validateImage() {
    const file = formData.imageFile

    if (!file) return false ;
    if (!file.type.startsWith("image/")) return false;

    const maxSize = 2 * 1024 * 1024
    if (file.size > maxSize) return false

    return true;
}


function showImageErrors() {

    imgError.textContent = 'File too large. Please upload a photo under 500KB';
    imgError.style.color = 'red';
    previewImg.src = ''; 
}

 
function clearImageErrors() {
    imgInputContainer.classList.remove('errorDesign2')
    imgError.textContent = 'Upload your photo (JPG or PNG, max size: 500KB).'
    imgError.style.color = 'white'
}

imageInput.addEventListener('change', (e) => {

    previewImage(e);  


    if(!validateImage()){
        showImageErrors()
        return;
    }

    clearImageErrors()
    
})




function validateName(name){
    if(!name) return false;

    const trimmed = name.trim();
    if(trimmed.length < 2) return false;

    const allowed = /^[A-Za-z\s'-]+$/;
    if (!allowed.test(name)) return false;

    return true;

}

function validateEmail(email){
    if(!email) return false;
    const allowed = /^\S+@\S+\.\S+$/
    if (!allowed.test(email)) return false ;
    return true 
}

function validateGit(github) {
    if (!github) return false;

    git = github.trim()

    if (git.length < 1 || git.length >= 39) return false;

    const allowed = /^@[a-z0-9-]+$/;
    if (!allowed.test(git)) return false;

    if (git.startsWith("-")) return false;
    if (git.endsWith("-")) return false;   
    if (git.includes("--")) return false;

    return true;
}


function validateForm() {
    if (!validateName(formData.name)) return false;
    if (!validateEmail(formData.email)) return false;
    if (!validateGit(formData.github)) return false;

    return true;
}



function showError(input, message) {
    const wrapper = input.parentElement;
    const errorDiv = wrapper.querySelector(".errorShow");
    const errorMessage = errorDiv.querySelector("p");

    errorMessage.textContent = message;

    errorDiv.classList.remove("hidden")
    errorDiv.style.display = "flex"

    input.classList.add("errorDesign")
}

function clearError(input){
    const wrapper = input.parentElement;
    const errorDiv = wrapper.querySelector(".errorShow");

    errorDiv.classList.add("hidden");
    errorDiv.style.display = "none";

    input.classList.remove("errorDesign")
}


nameInput.addEventListener("blur", () => {
  if (!validateName(nameInput.value)) {
    showError(nameInput, "Please enter your name.");
  } else {
    clearError(nameInput);
  }
});

emailInput.addEventListener("blur", () => {
  if (!validateEmail(emailInput.value)) {
    showError(emailInput, "Please enter a valid email address.");
  } else {
    clearError(emailInput);
  }
});

gitInput.addEventListener("blur", () => {
  if (!validateGit(gitInput.value)) {
    showError(gitInput, "Please enter a valid GitHub UserName.")
    return;;
  } 

  clearError(gitInput);
  
});

function generateTicket(){
    const mainForm = main.children[0];
    mainForm.style.display = "none";

    const card = main.children[1]
    card.classList.remove("hidden");
    card.style.display = "block"

    const newName = nameInput.value
    const newEmail = emailInput.value

    textName.append(newName);
    textEmail.append(newEmail)

    const name = inputContainer.querySelector('.fullName')
    const email = inputContainer.querySelector('.email')

    name.append(newName);
    email.append(newEmail)


    const base64 = formData.imageFile;
    ticketImg.src = base64;
    ticketImg.style.display = 'block';
}

form.addEventListener("submit", function(e){
    e.preventDefault();
    
    if (!validateForm()){
        alert('fill in the empty field')
        return;
    }
    generateTicket();
    
    
});