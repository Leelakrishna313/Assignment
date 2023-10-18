function validate(){
    valid=true
    if( document.myForm.Firstname.value == "" ) {
        window.alert( "Please Enter your Firstname!" );
        valid=false;
    }
    if( document.myForm.Lastname.value == "" ) {
        window.alert( "Please Enter your Lastname!" );
        valid=false;
    }
    if( document.myForm.dob.value == "" ) {
        window.alert( "Please Enter your date of birth!" );
        valid=false;
    }
    if(document.myForm.country.selectedIndex==0){
        alert("please choose your country");
        valid=false;
    }
    if(document.myForm.gender[0].checked==false||document.myForm.gender[0].checked==false||document.myForm.gender[0].checked==false){
        alert("please choose gender");
        valid=false;
    }
    if( document.myForm.Firstname.value == "" ) {
        window.alert( "Professeion field can't be empty!" );
        valid=false;
    }
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.email.value)){
        return(true)
    }
    alert("You have entered an invalid email address!")
    return (false)
}
    