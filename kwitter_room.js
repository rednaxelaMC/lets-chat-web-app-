
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
      apiKey: "AIzaSyABzpXP4uqUOevYPsA8sorSwlVhG21Z1_M",
      authDomain: "kwitter-d2039.firebaseapp.com",
      databaseURL: "https://kwitter-d2039-default-rtdb.firebaseio.com",
      projectId: "kwitter-d2039",
      storageBucket: "kwitter-d2039.appspot.com",
      messagingSenderId: "477348782549",
      appId: "1:477348782549:web:6ecb5643e8e7f4ab879d5c",
      measurementId: "G-DJ6D7TTMGJ"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onlick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function add_room()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

  localStorage.setItem("room_name", room_name);
  
  window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html"
}
function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name")
  window.location = "kwitter_room.html";
}