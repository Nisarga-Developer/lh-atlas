<html>
    <script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Raleway:400,500,700,900" rel="stylesheet">
    
    <head>
    
    </head>
    
    <body>
        <div class="main">
            <p>Login to add an entry</p>
            <p>Username</p><input type="text" id="user">
            <br>
            <p>Password</p><input type="text" id="pass">
            <br>
            <br>
            <button onclick="login()">LOGIN</button>
        </div>
        <script src="https://www.gstatic.com/firebasejs/4.8.2/firebase.js"></script>

        <script>
            // Initialize Firebase
            var config = {
                apiKey: "AIzaSyDRxNTvFO62jOQTxG5Th8-AN81xmUc7pAo",
                authDomain: "extensions-3caad.firebaseapp.com",
                databaseURL: "https://extensions-3caad.firebaseio.com",
                projectId: "extensions-3caad",
                storageBucket: "extensions-3caad.appspot.com",
                messagingSenderId: "492740598517"
            };
  firebase.initializeApp(config);
            
            function login(){
                firebase.auth().signInWithEmailAndPassword(document.getElementById("user").value, document.getElementById("pass").value).catch(function(error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    
                    console.log(errorCode);
                    console.log(errorMessage);
                    // ...
                }).then(function(){
                    document.getElementById("")        
                });
            }
</script>
    </body>
</html>

