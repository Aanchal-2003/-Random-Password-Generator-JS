
        let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let lowercase = 'abcdefghijklmnopqrstuvwxyz';
        let numbers = '0123456789';
        let symbols = '!@#$%^&*()_+[]{}|;:,.<>?';

        let lengthRange = document.querySelector("#length");
        let lengthValue = document.querySelector("#lengthValue");
        let uppercaseInp = document.querySelector("#uppercase");
        let lowercaseInp = document.querySelector("#lowercase");
        let numberInp = document.querySelector("#numbers");
        let symbolInp = document.querySelector("#symbols");
        let passDisplay = document.querySelector("#password");
        let copyBtn = document.querySelector("#copyBtn");
        let msgBox = document.querySelector("#msg");

        copyBtn.addEventListener(
            "click", 
            function() {
                navigator.clipboard.writeText(passDisplay.innerText);
                msgBox.innerText = "Copied!";
            }
        )


        lengthRange.addEventListener(
            "input", 
            function(e) {
                lengthValue.innerText = e.target.value;
                generatePassword();
            }
        )


        function generatePassword() {
            let combined = "";
            if(uppercaseInp.checked) combined+=uppercase;
            if(lowercaseInp.checked) combined+=lowercase;
            if(numberInp.checked) combined+=numbers;
            if(symbolInp.checked) combined+=symbols;
            if(combined.length != 0) {
                let passlength = lengthRange.value;
                let password = "";
                for(var i =0;i<=passlength;i++) {
                    let index = Math.floor(Math.random()*combined.length);
                    password += combined[index];
                }
                passDisplay.innerHTML = password;
            }


        }

        // let combined = lowercase + symbols + numbers + uppercase;
        // let length = 10;
        // let password = "";
        // for (var i = 0; i <= length; i++) {
        //     let index = Math.floor(Math.random() * combined.length);
        //     console.log(index, combined[index])
        //     password += combined[index];
        // }
        // console.log(password);

   