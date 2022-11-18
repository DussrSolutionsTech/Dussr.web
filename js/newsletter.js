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
            confirmButtonText: 'اغلاق',
            confirmButtonColor: '#0D134B',
            icon: "success",
            title: "شكرا لك لاشتراكك معنا", 
            text: "سوف يتم تزويدكم بكل ما يتعلق بخدماتنا ومنتجاتنا"
          })
          document.getElementById("newsLetter").reset(); //Clear form after submit
        },
        error:function(data){
          console.log(data);
  
          //Error Message == 'Title', 'Message body', Last one leave as it is
          Swal.fire({
            confirmButtonText: 'اغلاق',
            confirmButtonColor: '#0D134B',
            icon: "error",
            title: " ", 
            text: "حدث خطأ، الرجاء المحاولة مرة اخرى لاحقا"
          })
          document.getElementById("newsLetter").reset(); //Clear form after submit
        }
      });
    });
  });