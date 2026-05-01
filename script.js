
function submitData() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  fetch("YOUR_WEB_APP_URL", {
    method: "POST",
    body: new URLSearchParams({
      username: username,
      password: password
    })
  })
  .then(res => res.text())
  .then(data => {
    if(data === "success"){
      alert("Login success");
    } else {
      alert("Wrong username/password");
    }
  });
}
