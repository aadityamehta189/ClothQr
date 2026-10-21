console.log("Hello")
passkey = "lbs"

function enter(){

    var x = document.getElementById("pass").value
    if(passkey == x){
        console.log("Welcome Dear User")
    } else {
        alert("Wrong password")
    }
    console.log(x)
}


