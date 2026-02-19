$(document).ready(function() {
    $('#recipe-form').on('submit', function(e) {
        e.preventDefault(); 
        
        let isValid = true;
        

        const name = $('#recipe-name').val().trim();
        if (name.length < 3) {
            $('#name-error').text("שם המתכון חייב להכיל לפחות 3 תווים");
            isValid = false;
        } else {
            $('#name-error').text("");
        }

  
        const time = $('#prep-time').val();
        if (time <= 0 || time === "") {
            $('#time-error').text("נא להזין זמן הכנה תקין בדקות");
            isValid = false;
        } else {
            $('#time-error').text("");
        }

        if ($('#difficulty').val() === "") {
            $('#difficulty-error').text("חובה לבחור רמת קושי");
            isValid = false;
        } else {
            $('#difficulty-error').text("");
        }

        const email = $('#recipe-email').val();
        const emailReg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (!emailReg.test(email)) {
            $('#email-error').text("כתובת האימייל אינה תקינה");
            isValid = false;
        } else {
            $('#email-error').text("");
        }


        if (isValid) {
            $('#form-feedback').text("המתכון נשלח בהצלחה וממתין לאישור!").css("color", "green");
            $('#recipe-form')[0].reset(); // איפוס הטופס
        } else {
            $('#form-feedback').text("נא לתקן את השגיאות בטופס").css("color", "red");
        }
    });
});