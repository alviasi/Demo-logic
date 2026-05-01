function submitData() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  fetch("https://script.google.com/macros/s/AKfycbzVA6I3S-3-7ZLnG-ojTfN2T6oDjA_GZ2x-l6vj4Mtg8fX7Eh9LuDSa2PaHw1y-iPfY/exec", {
    method: "POST",
    body: new URLSearchParams({
      username: username,
      password: password
    })
  })
  .then(res => res.text())
  .then(data => {
    if(data === "success"){
      document.getElementById("loginMsg").innerText = "Login Success ✅";
    } else {
      document.getElementById("loginMsg").innerText = "Wrong Username/Password ❌";
    }
  });
}
