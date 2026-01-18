const bulb = document.getElementById("bulb");

function turnOn() {
  bulb.style.backgroundColor = "yellow";
  bulb.style.boxShadow = "0 0 30px yellow";
}

function turnOff() {
  bulb.style.backgroundColor = "gray";
  bulb.style.boxShadow = "none";
}

function red() {
  bulb.style.backgroundColor = "red";
  bulb.style.boxShadow = "0 0 30px red";
}

function green() {
  bulb.style.backgroundColor = "green";
  bulb.style.boxShadow = "0 0 30px green";
}

function blue() {
  bulb.style.backgroundColor = "blue";
  bulb.style.boxShadow = "0 0 30px blue";
}
