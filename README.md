# Frontend Mentor - Conference ticket generator solution

This is a solution to the [Conference ticket generator challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/conference-ticket-generator-oq5gFIU12w). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)



## Overview

### The challenge

Users should be able to:

- Complete the form with their details
- Receive form validation messages if:
  - Any field is missed
  - The email address is not formatted correctly
  - The avatar upload is too big or the wrong image format
- Complete the form only using their keyboard
- Have inputs, form field hints, and error messages announced on their screen reader
- See the generated conference ticket when they successfully submit the form
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Javascript
- [Styled Components](https://tailwindcss.com/) - For styles


### What I learned

i learn alot in this particular project first in my html markup i learnt how to use an image to ne a tigger for an input file tigger and also how the way to write to recieve an image by setting our form enctype to //enctype="multipart/form-data"//, this is just the tip to the iceberge , moving to tailwind i got more confident using the utlites class there , and also learning how to use the customization , then to tailwind learned a lot , my traversal of the dom becomes clear and my preview image function that allow me to readData as a url and also use url and create a url for an object , learn regex for validation of email and also learn about how to write more structure code , so it was a whole lot 

To see how you can add code snippets, see below:

```html
<form action="/upload" method="post" enctype="multipart/form-data" >
<input type="file" id="imageUpload" name="image" accept="image/*" class=" hidden mt-2 ">
```
```css
 <div class="relative min-h-screen overflow-hidden flex flex-col">
```
```js
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
       previewImg.src = e.target.result;
       previewImg.style.display = 'block'; 
    }
    
    reader.readAsDataURL(input.files[0])

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

    })
 }
```




### Continued development

i want to focus on deepen my understaning of what i learnt already the validating function and the error message function and also also the preview image make it click more and understand it more 



### Useful resources

- [CHATGPT](https://www.openai.com) - Ai is very usefull if you can make it ability to provide information and you use your ability to arrange information is the greatest combo for AI maxmization 

## Author


- Frontend Mentor - [@Henry-pixel-dev](https://www.frontendmentor.io/profile/@Henry-pixel-dev)
- Twitter - [@Histobloq](https://www.twitter.com/@Histobloq)



## Acknowledgments

Ai has being useful in my development as some bug  is just from my own clearanceness and not looking a bit more carefully.


