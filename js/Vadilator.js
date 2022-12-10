
//doi tuong
function Vadilator(options) {
    
    function Validate(inputElement, rule){
        var errorMessage = rule.test(inputElement.value);
        //ham thuc hien validate
        var errorElement = inputElement.parentElement.querySelector(options.errorSelector)
        if (errorMessage){
            errorElement.innerText = errorMessage
            inputElement.parentElement.classList.add('invalid')

        }else{
            errorElement.innerText = '';
            inputElement.parentElement.classList.remove('invalid')
        }
    }


    //lay element form can validate
    var formElement = document.querySelector(options.form);
    if (formElement){
        // formElement.onsubmit = function(e){
        //     e.preventDefault();
        // }
        options.rules.forEach( function(rule) {
                var inputElement = formElement.querySelector(rule.selector)
                
                if(inputElement){
                    // truong hop blur khoi input
                    inputElement.onblur = function(){
                        Validate(inputElement, rule)       
                        
                    }
                    //truong hop khi nguoi dung nhap vao input
                    inputElement.oninput = function(){
                        var errorElement = inputElement.parentElement.querySelector('.form-message')
                        errorElement.innerText = '';
                        inputElement.parentElement.classList.remove('invalid')
                    }        
                }
        });    
    }
    

}


//dinh nghia rules
//nguyen tac rules
//khi co loi thongg bao messages
//khi ko co loi tra ve undefined
Vadilator.isRequired = function(selector) {
    return {
        selector: selector,
        test: function(value){
            return value.trim() ? undefined : 'Vui lòng nhập trường này'
        }
    }
}

Vadilator.isEmail = function(selector, message) {
    return {
        selector: selector,
        test: function(value){
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            return regex.test(value) ? undefined : message || 'Trường này phải là email'
        }
    }
}



Vadilator.minLength = function(selector, min, message) {
    return {
        selector: selector,
        test: function(value){
            var strongpw = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*[0-9]).{8,}$/g;
            return strongpw.test(value) ? undefined : message || `Vui lòng nhập tối thiểu ${min} kí tự`
        }
    }
}

Vadilator.isConfirmed = function(selector, getConfirmValue, message){
    return{
        selector: selector,
        test: function(value){
            return value === getConfirmValue() ? undefined : message || 'Giá trị nhập vào không chính xác'        
        }
    }
}

// Đăng Nhập

Vadilator.isEmail2 = function(selector, message) {
    return {
        selector: selector,
        test: function(value){
            if (value != obj.NhanVien[0].username) {
                return message
            }
        }
    }
}

Vadilator.isPassword = function(selector, message) {
    return {
        selector: selector,
        test: function(value){
            return value === obj.NhanVien[0].password ? undefined : message
        }
    }
}

//JSON
//dang nhap, dang xuat

var account = '{"NhanVien": [{"username": "Nhom8-10diem", "password": "123@abc"}]}'

var obj = JSON.parse(account)
var SigninElement = document.querySelector('.user-icon')
function validate(){
    localStorage.setItem("User","no")
    var formElement = document.querySelector('#form2')
    var user = document.querySelector('#email')
    var password = document.querySelector('#password')
    if(user.value == obj.NhanVien[0].username && password.value == obj.NhanVien[0].password){
        alert('Đăng nhập thành công')
        localStorage.setItem("User","yes")
        return true
    }
    alert('Đăng nhập thất bại')
    return false
}


if(localStorage.getItem("User")=='yes'){
    var btnElement = document.querySelector('#btn')
    SigninElement.innerHTML = '<i class="user fa-solid fa-user"><a class = "profile" href="profile.html">Profile</a><a href="BDS.html" class = "logout" onclick="logout()">Logout</a></i>'
    btnElement.style.display = 'none'
}

function logout(){
    localStorage.setItem("User","no")
    a.style.display = 'none'
    btnElement.style.display = 'block'

}




// ẩn hiện mật khẩu

const eye_close = document.querySelector('.eye-close')
const eye_open = document.querySelector('.eye-open')
const inputPw = document.querySelector('#password')



eye_open.addEventListener("click", function(){
    eye_open.classList.add("hidden")
    eye_close.classList.remove("hidden")
    inputPw.setAttribute("type", "password")
})

eye_close.addEventListener("click", function(){
    eye_open.classList.remove("hidden")
    eye_close.classList.add("hidden")
    inputPw.setAttribute("type", "text")
})
