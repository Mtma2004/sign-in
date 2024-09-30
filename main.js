let nav1 = document.querySelector(".nav1");
let nav2 = document.querySelector(".nav2");
let links = document.querySelector(".links");
let signin = document.querySelector(".sign-in");
let contener = document.querySelector(".contener");
let label = document.querySelector(".inputs label");
let p = document.querySelector("p");
let forget = document.querySelector(".forget a");
let signup2;

let h2 = document.querySelector("h2");
h2.innerHTML = `sign in`;
let newname;
let lastname;
function start() {
  let signup = document.createElement("button");
  signup.className = "sign-up";
  p.after(signup);
  signin.value = "SIGN IN";
  signup.innerHTML = "SIGN UP";
  forget.innerHTML = "forget your password?";
  signup.addEventListener("click", function () {
    nav1.classList.add("clicked");
    nav2.classList.add("clicked");
    h2.innerHTML = `sign up`;
    links.classList.add("dis");
    newname = document.createElement("input");
    newname.name = "inp";
    newname.type = "text";
    newname.id = "name";
    newname.placeholder = "First Name";
    label.after(newname);
    lastname = document.createElement("input");
    lastname.name = "inp";
    lastname.type = "text";
    lastname.id = "lname";
    lastname.placeholder = "Last Name";
    newname.after(lastname);
    forget.innerHTML = "to more information read more...";
    signin.value = "SIGN UP";
    signup.remove();
    end();
  });
}
function end() {
  let signin = document.createElement("button");
  signin.className = "sign-in";
  signin.innerHTML = "SIGN IN";
  p.after(signin);
  signin.onclick = function () {
    nav1.classList.remove("clicked");
    nav2.classList.remove("clicked");
    h2.innerHTML = `sign in`;
    links.classList.remove("dis");
    newname.remove();
    lastname.remove();
    signin.remove();
    forget.classList.remove("dis");

    start();
  };
}
start();
