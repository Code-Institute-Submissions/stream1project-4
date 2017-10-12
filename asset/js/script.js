function subscriptionClick() {
    alert("Success, you have been added with using the following details" + document.getElementById('subfname').value + " " + document.getElementById('subsname').value + " " + document.getElementById('subemail').value)
};

function subbookingClick() {
    alert("Your message has been received and we will reply within the next day" + document.getElementById('bookfname').value + " " + document.getElementById('booksname').value + " " + document.getElementById('bookemail').value)
};

// $('#contact_name').on('input', function() {
// 	var input=$(this);
// 	var is_name=input.val();
// 	if(is_name){input.removeClass("invalid").addClass("valid");}
// 	else{input.removeClass("valid").addClass("invalid");}
// });
// $('#contact_email').on('input', function() {
// 	var input=$(this);
// 	var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
// 	var is_email=re.test(input.val());
// 	if(is_email){input.removeClass("invalid").addClass("valid");}
// 	else{input.removeClass("valid").addClass("invalid");}
// });
// $("#contact_submit button").click(function(event){
// 	var form_data=$("#contact").serializeArray();
// 	var error_free=true;
// 	for (var input in form_data){
// 		var element=$("#contact_"+form_data[input]['name']);
// 		var valid=element.hasClass("valid");
// 		var error_element=$("span", element.parent());
// 		if (!valid){error_element.removeClass("error").addClass("error_show"); error_free=false;}
// 		else{error_element.removeClass("error_show").addClass("error");}
// 	}
// 	if (!error_free){
// 		event.preventDefault(); 
// 	}
// 	else{
// 		alert('No errors: Form will be submitted');
// 	}
// });




// $(document).ready(function () {
//     $('#subform').validate({
//         rules: {
//             field1: {
//                 required: true,
//                 email: true
//             },
//             field2: {
//                 required: true,
//                 minlength: 5
//             }
//         }
//     });

// });