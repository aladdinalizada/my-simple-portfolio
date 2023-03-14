window.onscroll = function () {
  scrollFunction();
  scrollFunction2();
  // typeWriter();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.fontSize = "30px";
  } else {
    document.getElementById("header").style.fontSize = "90px";
  }
}

// scroll to top
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// back to top
var mybutton = document.getElementById("backtotop");
function scrollFunction2() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// collect ip address and send to server
var ip = "https://api.ipify.org?format=json";

fetch(ip)
  .then((res) => res.json())
  .then((data) => {
    console.log(data.ip);
  });

// data to send to server
var data = {
  ip: data.ip,
  url: window.location.href,
};

// send data to server
fetch("http://localhost:3000/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });
