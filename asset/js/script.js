function subscriptionClick() {
    alert("Success, you have been added with using the following details" + document.getElementById('subfname').value + " " + document.getElementById('subsname').value + " " + document.getElementById('subemail').value)
};

function subbookingClick() {
    alert("Your message has been received and we will reply within the next day" + document.getElementById('bookfname').value + " " + document.getElementById('booksname').value + " " + document.getElementById('bookemail').value)
};

// Audio hover only works with the separate navbar file.
// var beepOne = $("#woosh")[0];
// $("#myCollapsingList li a")
// 	.mouseenter(function() {
// 		beepOne.play();
// 		beepThree.play();
// 	});