//dataBase - default value 
var database = [
	{
	username : "p",
	password : "p"
	}
];

//nav bar functions
  $(document).ready(function() {
    $('#homeLink').click(function() {
        $(".page").css("visibility","hidden");
        $(".homepage").css("visibility","visible");
    });

    $('#registerLink').click(function() {
        $(".page").css("visibility","hidden");
        $(".homepage").css("visibility","hidden");
        $(".b").css("visibility","visible");
        $(".b").css("position","absolute");

    });

    $('#loginLink').click(function() {
        $(".page").css("visibility","hidden");
        $(".homepage").css("visibility","hidden");
        $(".c").css("visibility","visible");
        $(".c").css("position","absolute");

    });

    $('#aboutLink').click(function() {
        $(".page").css("visibility","hidden");
        $(".homepage").css("visibility","hidden");
        $(".d").css("visibility","visible");
        $(".d").css("position","absolute");
    });

    
/* ------------ submit register: check and add ------------ */
    $('#regForm').submit(function(event) {
        event.preventDefault(); // prevent submission of the form’s data

        let isValidForm = true;
        let userName = $('#UserName').val();
        let password = $('#Password').val();
        let fullName = $('#FullName').val();
        let email = $('#Email').val();
        let birthDate = $('#BirthDate').val();
        
        $(".error").remove(); // ensures the form will not have the previous error messages
        
        // user name
        if (userName.length < 1) {
            $('#UserName').after('<span class="error">This field can not be empty</span>');
            isValidForm = false;
        }
        // password
        if (password.length < 6) {
          $('#Password').after('<span class="error">It must be at least 6 chars</span>');
          isValidForm = false;
        }
        else{ 
            let regexNum = /[0-9]/;
            let regexLetter = /[A-Za-z]/;
            if (!regexNum.test(password) || !regexLetter.test(password)) {
                $('#Password').after('<span class="error">Must include letters and numbers together</span>');
                isValidForm = false;
            }
        }
        // full name
        if (fullName.length < 1) {
            $('#FullName').after('<span class="error">This field can not be empty</span>');
            isValidForm = false;
        }
        else{
            let regexNum = /[0-9]/;
            if (regexNum.test(fullName)) {
                $('#FullName').after('<span class="error">Full name can not contain a number</span>');
                isValidForm = false;
            }
        }
        // e-mail
        if (email.length < 1) {
          $('#Email').after('<span class="error">This field can not be empty</span>');
          isValidForm = false;
          isValidForm = false;
        } 
        else {
          let regex = /^.+@.+\..+$/;
          let validEmail = regex.test(email);
          if (!validEmail) {
            $('#Email').after('<span class="error">Enter a valid email</span>');
            isValidForm = false;
          }
        }
        if (birthDate.length < 1) {
          $('#BirthDate').after('<span class="error">This field can not be empty</span>');
          isValidForm = false;
        }

            
        if(isValidForm){
            database.push({
                username: userName,
                password: password
            });

            // redirect to home page
            homePageFunction();
        }  
    });


});

// button functions
function regPageFunction() {
    document.getElementById('registerLink').click();
};

function logPageFunction() {
    document.getElementById('loginLink').click();
};

function homePageFunction() {
    document.getElementById('homeLink').click();
};

function signIn(){
    var userName = document.getElementById("loginForm").elements[0].value;
    var password =  document.getElementById("loginForm").elements[1].value;
	if(userName === database[0].username &&
		password === database[0].password){
		alert("SUCCESS");
	}else{
		alert("ERROR");
	}
}