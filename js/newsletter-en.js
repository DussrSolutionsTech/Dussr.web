$(document).ready(function(){
    $('#newsLetter').on('submit', function(e) {  //Don't foget to change the id form
    e.preventDefault(); //This is to Avoid Page Refresh and Fire the Event "Click"
    var data = $(this).serialize();
    console.log("start")
    $.ajax({
        url:'php/newsletter.php', //===PHP file name====
        data: data,
        type:'POST',
        success:function(data){
          console.log(data);
          //Success Message == 'Title', 'Message body', Last one leave as it is
          Swal.fire({
            confirmButtonText: 'Close',
            confirmButtonColor: '#0D134B',
            icon: "success",
            title: "Thanks for subscribing to our newsletter", 
            text: "You will receive everything related to our services and products"
          })
          document.getElementById("newsLetter").reset(); //Clear form after submit
        },
        error:function(data){
          console.log(data);
  
          //Error Message == 'Title', 'Message body', Last one leave as it is
          Swal.fire({
            confirmButtonText: 'Close',
            confirmButtonColor: '#0D134B',
            icon: "error",
            title: " ",
            text: "Something went wrong, please try again later.!"
          })
          document.getElementById("newsLetter").reset(); //Clear form after submit
        }
      });
    });
  });