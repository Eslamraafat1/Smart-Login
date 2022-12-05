






// var loginList = []

//    console.log("user added");

function signup(e) {
 event.preventDefault();
 var username    = document.getElementById("username").value
 var email = document.getElementById("email").value
 var Pass = document.getElementById("Password").value

 var user = {
    email : email,
    username : username ,
    Password : Pass ,
   }
   var json = JSON.stringify(user)
   localStorage.setItem(username , json)
   alert("Success");

    console.log("user added");
    
}   















function loginFunc(e) {

    event.preventDefault();
    var username = document.getElementById("username").value
    var result = document.getElementById("result").value
    var Pass = document.getElementById("Password").value
    
    var user = localStorage.getItem(username)
    var data = JSON.parse(user)
    console.log(data);

    if(user == null ) {
        alert("wrong username");
        result.innerHTML = 'wrong username'
        }
        else if (username == data.username && Pass == data.Password){
        
        // result.innerHTML = "logged in"
        var temp = ""
            window.location.href="index2.html"
                temp +=`<div class="helloo"> 
               
                <p> <a href="index2.html">welcome `+data.username+`</a></p> 
                
            </div>`
          
            document.getElementById("result").innerHTML = temp 
        }
     
        else {
            alert("wrong password");
        result.innerHTML = 'wrong password'
        }

}


function logOut() {
    if (true){
        var temps = ""
        window.location.href="index.html"
            temps +=`<div class="helloo"> 
           
            <p> welcome `+data.username+`</p> 
            
        </div>`
      
    }



}










// function displayData () {
    //     var temp = ""
    //     for (var i = 0 ; i > loginList.length ; i++){
    //         temp +=`<div class="helloo"> 
    //         <h2>Welcome`+loginList[i].name+`</h2>
    //         <p>Lorem ipsum dolor sit, amet consectetur adipisicing </p>
    //     </div>`
    //     }
    //     document.getElementById("tableBody").innerHTML = temp 
    // }