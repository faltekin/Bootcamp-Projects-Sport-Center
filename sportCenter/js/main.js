

document.addEventListener('DOMContentLoaded', function() {


    // Değerlendirme formu 8 - BMI Calculator

    const height = document.querySelector("#heightInput");
    const weight = document.querySelector("#weightInput");
    const trng = document.querySelector("#triangle");

    function calculateBMI(weightValue, heightValue) {
        let bmi = weightValue / ((heightValue / 100) * (heightValue / 100));
        if (heightValue <= 0 || weightValue <= 0) {
            bmi = 0;
        }
        return bmi;
    }

    function updateBMI() {
        let bmi = calculateBMI(weight.value, height.value);
        if (bmi > 0 && bmi < 18.5) {
            trng.style.left = "15%";
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            trng.style.left = "28%";
        } else if (bmi >= 25 && bmi <= 29.9) {
            trng.style.left = "50%";
        } else if (bmi >= 30 && bmi <= 34.9) {
            trng.style.left = "65%";
        } else if (bmi >= 35) {
            trng.style.left = "80%";
        } else {
            trng.style.left = "7%";
        }
    }

    height.addEventListener("input", updateBMI);
    weight.addEventListener("input", updateBMI);


    // Değerlendirme formu 9 - Navigation Bar safya hareketlerine reaksiyon verir

    const header = document.getElementById('header');
    window.addEventListener('scroll', function() {
        header.classList.toggle('navbar-scrolled', window.scrollY > 100);
    });
    

    // Değerlendirme formu 11 - Our Classes alanında bulunan butonlar

    const yogaButton = document.getElementById('yoga');
    const groupButton = document.getElementById('group');
    const soloButton = document.getElementById('solo');
    const stretchingButton = document.getElementById('stretching');

    yogaButton.addEventListener('click', function() { changeContent('yoga') });
    groupButton.addEventListener('click', function() { changeContent('group') });
    soloButton.addEventListener('click', function() { changeContent('solo') });
    stretchingButton.addEventListener('click', function() { changeContent('stretching') });

    const classImage = document.querySelector('#classes-image img');
    const classText1 = document.getElementById('classes-text-1');
    const classText2 = document.getElementById('classes-text-2');
    const classP1 = document.getElementById('classes-p-1');
    const classP2 = document.getElementById('classes-p-2');

    function changeContent(type) {

        switch(type) {
            case 'yoga':
                yoga();
                break;
            case 'group':
                group();
                break;
            case 'solo':
                solo();
                break;
            case 'stretching':
                stretching();
                break;
        }
    }

    function yoga(){
        classImage.src = 'images/yoga.jpg';
        classText1.innerHTML = 'Why are your Yoga?';
        classText2.innerHTML = 'Evet';
        classP1.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
        classP2.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

    }
    function group(){
        classImage.src = 'images/group.webp';
        classText1.innerHTML = 'Why are your Group Classes?';
        classText2.innerHTML = 'Evet';
        classP1.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula diam a odio lobortis, nec aliquam odio aliquet.";
        classP2.innerText = "Sed vehicula diam a odio lobortis, nec aliquam. ";
    }
    function solo(){
        classImage.src = 'images/solo.jpg'; 
        classText1.innerHTML = 'Why are your Solo Classes?';
        classText2.innerHTML = 'Evet';
        classP1.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies nisl vel erat ultrices, id ultricies odio condimentum";
        classP2.innerText = "Phasellus ultricies nisl vel erat ultrices, id ultricies.";
    }
    function stretching(){
        classImage.src = 'images/stret.webp'; 
        classText1.innerHTML = 'Why are your Stretching?';
        classText2.innerHTML = 'Evet';
        classP1.innerText = "Suspendisse potenti. Nulla facilisi. Cras molestie sagittis metus ac porttitor.";
        classP2.innerText = "Cras molestie sagittis metus ac .";
    }

});