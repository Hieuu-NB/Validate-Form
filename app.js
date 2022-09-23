var username = document.querySelector('#username')
var email = document.querySelector('#email')
var password = document.querySelector('#password')
var confirmpassword = document.querySelector('#confirm-password')
var form = document.querySelector('form')


function showError(input, message){

	let parent = input.parentElement;
	let small = parent.querySelector('small')

	parent.classList.add('error')
	small.innerText = message; 

}


function showSuccess(input){

	let parent = input.parentElement;
	let small = parent.querySelector('small')

	parent.classList.remove('error')
	small.innerText = ''; 
}

function checkEmptyError(listInput){	// hàm check kh được để trống input
	let isEmptyError = false
	listInput.forEach(input =>{ // vòng lặp lặp qua các phần tử của listInput
		input.value = input.value.trim() // chuẩn hóa dữ liệu , xóa khoảng trắng 2 bên nếu có

		if (!input.value) {  
			isEmptyError = true  
			showError(input,'khong dc de trong')
		}
		else{
			showSuccess(input)
		}
	})
	return isEmptyError
}
function checkEmailError(input){
	const regexEmail =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  input.value = input.value.trim()

  let isEmaiError = !regexEmail.test(input.value)

  if (regexEmail.test(input.value)) {
  	showSuccess(input)
  }
  else{
  	showError(input,'Email Invalid')
  }
  
}
function checkLengthError(input,min,max){
	input.value = input.value.trim()

	if(input.value.length <min){
		showError(input,`phai nhieu hon ${min} ki tu`)
		return true
	}
	if(input.value.length > max){
		showError(input,`phai it hon ${max} ki tu`)
		return true
	}
	showSuccess(input)
}

function checkMatchPasswordError(passwordInput,cfPasswordInput){
	if(passwordInput.value != cfPasswordInput.value){
		showError(cfPasswordInput,'mk khong trung khop')
		return true
	}
	return false
}

form.addEventListener('submit', function(e){
	e.preventDefault()

	 checkEmptyError([username,email,password,confirmpassword])
	 checkEmailError(email)
	 checkLengthError(username,3,10)
	checkLengthError(password,3,10)
	checkMatchPasswordError(password,confirmpassword)

	if(isEmptyError || isEmaiError || isUsernameLengthError || isPasswordLengthError|| isMatchError){
		//do nothing
	}else{
		//logic, call API ,
	}

})

