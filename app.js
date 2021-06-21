// tao form dang ki dang nhap ;
//b1 cho ng dung dang ki 
// lay ra nhung elemnt cua user passwork thong tin 
// khi click vao submid se thong bao thanh cong va dong thoi
// push obj vao 1 mang 
// xu li dang nhap
let inputUsername = document.getElementById("username");
let inputPassword = document.getElementById("password");
let rePassword = document.getElementById("re-password");

let form = document.getElementById("form-regis");

let btn = document.getElementById("btn-submit");
let url = "https://sheetdb.io/api/v1/nzd7ctie6ie8u";
let user = []
form.addEventListener("submit", function(e) {
    e.preventDefault()


    let dataUser = {
        name: inputUsername.value,
        password: inputPassword.value
    }
    if (inputUsername.value === "" || inputPassword.value === "" || rePassword.value === "") {
        alert("vui long dang ki lai ")
    } else if (inputPassword.value != rePassword.value) {
        alert("mat khau k khop !")
    } else(
            user.push(dataUser)
        )
        // console.log(user);
    axios.get(url).then((response) => console.log(response.data));
    axios.post(url, { username: inputUsername.value, password: inputPassword.value }).then((response) => console.log(response));
    location.replace("/signin.html");

})