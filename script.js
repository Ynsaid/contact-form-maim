document.addEventListener("DOMContentLoaded", ()=>{

        // set inputs
        const firstNameInput = document.querySelector(".f-inpt");
        const lastNameInput = document.querySelector(".l-inpt");
        const emailInput = document.querySelector(".e-inpt");
        const messageInput = document.querySelector(".m-inpt");
        const radioOne = document.querySelector(".r1");
        const radioTwo  = document.querySelector(".r2");
        const checkBox = document.querySelector(".checkbox");


   
        // set submit button
        const btn = document.querySelector(".btn");

        function handleRadioButtonValue() {
                const radios = document.querySelectorAll('input[type="radio"][name="enquiry"]');
                radios.forEach(radio => {
                    if (radio.checked) {
                        radio.value = "true";
                        radio.closest('.r-cont').classList.add("style-r-cont");
                    } else {
                        radio.value = "false";
                        radio.closest('.r-cont').classList.remove("style-r-cont");
                    }
                });
            }
        
        // function to handle checkbox value
        function handleCheckboxValue(checkBox){
                if (checkBox.checked) {
                        checkBox.value = "true"
                        checkBox.className = "style-r-cont"
                }else {
                        checkBox.value = "false"
                }
        }

       
                btn.addEventListener("click", ()=>{
                        
                


                        // get the vulues of inputs
                        const firstNameValue = firstNameInput.value;
                        const lastNameValue = lastNameInput.value;
                        const emailValue = emailInput.value;
                        const messageValue = messageInput.value;
                        const radioOneValue = radioOne.value;
                        const radioTwoValue = radioTwo.value;
                        const checkBoxValue = checkBox.value;
                        
        
        
                        const arrValues = [
                                firstNameValue,
                                lastNameValue,
                                emailValue, 
                                messageValue,
                                radioOneValue , 
                                radioTwoValue ,
                                checkBoxValue
                        ];
                        
                        const errors = [];
                        
                     
                        for (let i = 0; i < arrValues.length; i++) {
                                switch (i) {
                                  case 0: // Handle first name
                                    if (!arrValues[0]) { // Check for empty first name
                                      const getErrF = document.querySelector(".f-err");
                                      const firstName = document.querySelector(".f-inpt");
                                      firstName.style = "border: 1px solid red"
                                                errors.push("error 1");
                                      getErrF.style.visibility = "visible"; // Show error message
                                    }
                                    break;
                                  case 1: 
                                  if (!arrValues[1]) { // Check for empty first name
                                        const getErrF = document.querySelector(".l-err");
                                        const lastName = document.querySelector(".l-inpt");
                                        lastName.style = "border: 1px solid red"
                                        errors.push("error 2");
                                        getErrF.style.visibility = "visible"; // Show error message
                                      }
                                      break;
                                   
                                 case 2: 
                                 if (!arrValues[2]) { // Check for empty first name
                                        const getErrF = document.querySelector(".e-err");
                                        const emailName = document.querySelector(".e-inpt");
                                        emailName.style = "border: 1px solid red"
                                        errors.push("error 3");
                                        getErrF.style.visibility = "visible"; // Show error message
                                      }
                                      break;
                                case 3:
                                        if (!arrValues[3]) { // Check for empty first name
                                                const getErrF = document.querySelector(".m-err");
                                                const msgInput = document.querySelector(".m-inpt");
                                                msgInput.style = "border: 1px solid red"
                                                errors.push("error 4");
                                                getErrF.style.visibility = "visible"; // Show error message
                                              }   

                                case 4 : 
                                if (arrValues[4] === "false" && !arrValues[5] === "false"  ) { // Check for empty first name
                                        const getErrF = document.querySelector(".q-err");
                                        errors.push("error 5");
                                        getErrF.style.visibility = "visible"; // Show error message
                                      }  
                                case 5 :
                                        if (arrValues[6] === "false" ) { // Check for empty first name
                                                const getErrF = document.querySelector(".ch-err");
                                                errors.push("error 6");
                                                getErrF.style.visibility = "visible"; // Show error message
                                              }  
                                  default:
                                        console.log("no error");
                                 
                                }
                              }
                     
                              
                        function clearErrors() {
                                // Reset error styles on all input fields
                                const inputElements = document.querySelectorAll(".f-inpt, .l-inpt, .e-inpt, .m-inpt");
                                for (const element of inputElements) {
                                  element.style.border = ""; // Remove border style
                                }
                              
                                // Clear error messages
                                const errorElements = document.querySelectorAll(".f-err, .l-err, .e-err, .m-err, .q-err, .ch-err");
                                for (const element of errorElements) {
                                  element.style.visibility = "hidden"; // Hide error message
                                }
                              
                                // Clear the errors array (optional)
                                errors = []; // Assuming you have an array 'errors' to store error messages
                        }
                        if (errors.length > 0) {
                                console.log("Errors found!");
                                // Show errors (already implemented in your code)
                                setTimeout(clearErrors, 3000); // Call clearErrors after 3 seconds
                        } else {
                                const successMsg = document.querySelector(".success-msg");

                                successMsg.classList.add("show"); // Add 'show' class for animation
                                setTimeout(() => {
                                  successMsg.classList.remove("show"); // Remove 'show' class after 3 seconds
                                }, 3000);
                                console.log("No errors!");
                        }      
                        
                        handleRadioButtonValue(radioOne);
                        handleRadioButtonValue(radioTwo);
                        handleCheckboxValue(checkBoxValue); 
                                      
                        
                        console.log(errors);
                        console.log(arrValues);
                        
                
                       
                });
        
        

       
        radioOne.addEventListener("change", () => {
                handleRadioButtonValue(radioOne);
                handleRadioButtonValue(radioTwo);
            });
        
        radioTwo.addEventListener("change", () => {
                handleRadioButtonValue(radioOne);
                handleRadioButtonValue(radioTwo);
        });

        checkBox.addEventListener("change",()=>{
                handleCheckboxValue(checkBox)
        });
        
        const radioContainers = document.querySelectorAll(".r-cont");
        radioContainers.forEach(container => {
                container.addEventListener("click", () => {
                    const radio = container.querySelector('input[type="radio"]');
                    radio.checked = true;
                    handleRadioButtonValue();
                });
        });




});