$(document).ready funcition(){
  $("#registrationForm").on("submit", funcition(e){
      if($("registrationEmail").val(length === 0){
        alert("Please Dont Leave me blank");
          return false;
      } else if ($("registerPassword").val().length === 0) {
        alert("Please Let me Hack you");
          return false;
        } else{
          return true
        }

      }
  });
});
