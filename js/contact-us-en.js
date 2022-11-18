$(document).ready(function(){
    $('#contactUsRequest').on('submit', function(e) {  //Don't foget to change the id form
    e.preventDefault(); //This is to Avoid Page Refresh and Fire the Event "Click"
    var data = $(this).serialize();
    console.log("start")
    $.ajax({
        url:'php/contact.php', //===PHP file name====
        data: data,
        type:'POST',
        success:function(data){
          console.log(data);
          //Success Message == 'Title', 'Message body', Last one leave as it is
          Swal.fire({
            confirmButtonText: 'OK',
            confirmButtonColor: '#0D134B',
            icon: "success",
            title: "Thank you for contacting us.",
            text: "We have received your enquiry and will get back to you shortly."
          })
          document.getElementById("contactUsRequest").reset(); //Clear form after submit
        },
        error:function(data){
          console.log(data);
  
          //Error Message == 'Title', 'Message body', Last one leave as it is
          Swal.fire({
            confirmButtonText: 'OK',
            confirmButtonColor: '#0D134B',
            icon: "error",
            title: " ",
            text: "Something went wrong, please try again later.!"
          })
          document.getElementById("contactUsRequest").reset(); //Clear form after submit
        }
      });
    });
  });