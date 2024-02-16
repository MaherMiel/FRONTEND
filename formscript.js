document.addEventListener("DOMContentLoaded", function() {
    const forms = document.querySelectorAll("form");

    forms.forEach((form, index) =>(".nextBtn"));
        const backBtn = form.querySelector(".backBtn");
        const submitBtn = form.querySelector(".submitBtn");
        const allInput = form.querySelectorAll("input");

        nextBtn.addEventListener("click", function() {
            let hasValue = false;
            allInput.forEach(input => {
                if (input.value.trim() !== "") {
                    hasValue = true;
                }
            });

            if (hasValue) {
                form.classList.add('secActive');

                // Check if it's the last form before enabling submit button
                if (index === forms.length - 1) {
                    submitBtn.disabled = false;
                }
            } else {
                form.classList.remove('secActive');
                
                // Check if it's the last form before disabling submit button
                if (index === forms.length - 1) {
                    submitBtn.disabled = true;
                }
            }
        });

        backBtn.addEventListener("click", function() {
            form.classList.remove('secActive');
            
            // If it's the last form, disable submit button
            if (index === forms.length - 1) {
                submitBtn.disabled = true;
            }
        });

        submitBtn.addEventListener("click", function() {
            // Add your submit logic here
            // For example: form.submit();
        });
    });
// Checkbox part
    document.addEventListener("DOMContentLoaded", function() {
        // Select all checkboxes
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    
        // Add event listener to each checkbox
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener("change", function() {
                // Toggle a class when the checkbox is checked or unchecked
                if (checkbox.checked) {
                    checkbox.parentNode.classList.add("checked");
                } else {
                    checkbox.parentNode.classList.remove("checked");
                }
    
                // Add your additional logic here for handling checkbox changes
                console.log("Checkbox with id:", checkbox.id, "changed");
            });
        });
    });
 function convertToUppercase() {
        var inputElement = document.getElementById('firstName');
        inputElement.value = inputElement.value.toUpperCase();
    }