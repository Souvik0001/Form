function validateForm(event) {
    event.preventDefault();
      var name = document.getElementById("name").value.trim();
      var email = document.getElementById("email").value.trim();
      var country = document.getElementById("country").value;
      var program = document.getElementById("program").value;
      var phone = document.getElementById("phone").value.trim();
      var transcripts = document.getElementById("transcripts").value;
      var proficiencyTest = document.querySelector('input[name="proficiencyTest"]:checked');
      var termsChecked = document.getElementById("terms").checked;
  
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Country :", country);
      console.log("Program :", program);
      console.log("Phone :", phone);
      console.log("Transcripts:", transcripts);
      console.log("Proficiency Test:", proficiencyTest ? proficiencyTest.value : "Not selected");
  
      if (name === "") {
        alert("Please enter your name.");
        
      }
  
      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        
      }
    
      if (country === "" || program === "") {
        alert("Please select a country and program.");
        
      }
    
      if (!validatePhoneNumber(phone, country)) {
        alert("Please enter a valid phone number for the selected country.");
        
      }
  
      if (transcripts === "") {
        alert("Please upload your academic transcripts.");
        
      }
      
      if (proficiencyTest && proficiencyTest.value === "TOEFL") {
        var toeflScore = document.getElementById("toeflScore").value.trim();
        if (toeflScore === "") {
          alert("Please enter your TOEFL score.");
          
        }
      } else if (proficiencyTest && proficiencyTest.value === "IELTS") {
        var ieltsScore = document.getElementById("ieltsScore").value.trim();
        if (ieltsScore === "") {
          alert("Please enter your IELTS score.");
         
        }
      }
  
      if (!termsChecked) {
          alert("Please accept the terms and conditions.");
         
      }
  
      if (country === "India") {
          var indianPhonePattern = /^[6-9]\d{9}$/;
          if (!indianPhonePattern.test(phone)) {
              alert("Please enter a valid phone number for India.");
             
          }
      }
    
    
    
  }