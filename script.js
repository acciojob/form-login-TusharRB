function getFormvalue() {
    //Write your code here
	const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;

  alert(`First Name: ${firstName}\nLast Name: ${lastName}`);

}


document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();
  getFormValue();
});
