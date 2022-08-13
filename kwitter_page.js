var firebaseConfig = {
      apiKey: "AIzaSyDcKqPIOruFu88JjF1t-w1IWexjkhb1AWE",
      authDomain: "kwitter-22c5b.firebaseapp.com",
      databaseURL: "https://kwitter-22c5b-default-rtdb.firebaseio.com",
      projectId: "kwitter-22c5b",
      storageBucket: "kwitter-22c5b.appspot.com",
      messagingSenderId: "867407328362",
      appId: "1:867407328362:web:75674cc639416f7ed3c613"
};

// Initialize Firebase
var app = initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send()
{
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code
                        
                        //End code
                  }
            });
      });
}
getData();
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}