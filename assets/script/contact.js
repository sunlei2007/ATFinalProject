'use strict';

const form = document.querySelector(".form");
const btn = document.querySelector(".btn button");
const emailRegex = /^(?=^.{8,}$)[-_A-Za-z0-9]+([_.-][a-zA-Z0-9]+)*@[A-Za-z0-9]+([.-][a-zA-Z0-9]+)*\.[A-Za-z]{2,}$/;
const postalRegex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
   
    function validate() {
        let allName = document.querySelector(".name .name-1").value.trim();
        let email = document.querySelector(".mail .mail-1").value.trim();
        let phone = document.querySelector(".phone .phone-1").value.trim();
        let text = document.querySelector(".text .message").value.trim();
        let message = "";
        let valid = true;
        let count = 0;

        if(allName.length === 0) {
            message += "Name is required\n";
            valid = false;
            count++;
        }
        if (email.length === 0) {
            message += "Email is  required\n";
            valid = false;
            count++;
        } else if (!emailRegex.test(email)) {
            message += "A valid email is  required\n";
            valid = false; 
        }
        if(text.length === 0) {
            message += "Message is required\n";
            valid = false;
            count++;
        }
        if (count === 3) {
            alert("Fields with * are required");
        }
        else if (!valid) {
            alert(message);
        } else {
            alert("Form submitted");
        }
    }

    btn.onclick = function () {
        validate();
    }


   