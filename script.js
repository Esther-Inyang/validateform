function register(e){
    e.preventDefault();

    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let password2 = document.getElementById('confPassword').value;
    let msg = document.getElementById('msg')

    if(firstName == '' || lastName == '' || email == '' || password == '' || password2 == ''){
        //empty fields
        msg.className="alert alert-danger";
        msg.innerHTML = "please fill out all fields"
    } else {
        if(firstName.length < 3 || lastName.length < 3){
            //name too short
            msg.className="alert alert-danger";
            msg.innerHTML = "Name must be at least 3 characters"
        } else {
            let atEmail = email.indexOf("@");
            let dotEmail = email.lastIndexOf(".");
            if(atEmail < 1 || dotEmail < atEmail + 2 || dotEmail + 2 >= email.length){
            //invalid email
            msg.className = "alert alert-danger";
            msg.innerHTML = "Please use a valid email address";
            } else {
                //password incorrect
                if(password != password2){
                    msg.className = "alert alert-danger";
                    msg.innerHTML = "Passwords do not match";
                }else{
                    //success
                    msg.className="alert alert-success";
                    msg.innerHTML = firstName + " is registered with email " + email;

                    firstName == '' 
                    lastName == '' 
                    email == '' 
                    password == ''
                    password2 == ''
                }
            }
        }
    }
}

document.getElementById('regForm').addEventListener("submit", register, false);