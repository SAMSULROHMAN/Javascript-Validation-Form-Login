const form = document.getElementById('form')
const username = document.getElementById('username')
const password = document.getElementById('password')

form.addEventListener('submit', (e) => {
	e.preventDefault()
	checkInputs()
})

function checkInputs() {
	//ambil nilai dari inputan form
	const usernameValue = username.value.trim()
	const passwordValue = password.value.trim()

	// validasi username
	if (usernameValue === '') {
		// show error
		// add class error
		setErrorFor(username,'Nama tidak boleh kosong')
	} else {
		// add class success
		setSuccessFor(username)
	}

	// validasi password
	if (passwordValue === '') {
		setErrorFor(password,'Password tidak boleh kosong')
	} else {
		setSuccessFor(password)
	}
	// show success message
	if (usernameValue != '' && passwordValue != '') {
		alert("Anda berhasil login")
	}
}

function setErrorFor(input, message){
	const formControl = input.parentElement // .form-controll
	const small = formControl.querySelector('small')
	small.innerText = message
	// add err class
	formControl.className = 'form-control error'
}

function setSuccessFor(input) {
	const formControl = input.parentElement // .form-controll
	formControl.className = 'form-control success'
}

