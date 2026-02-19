$(document).ready(function() {
    $('#recipe-form').on('submit', function(e) {
        e.preventDefault(); 
        
        let isValid = true;

        // 1. בדיקת שם המתכון (id="recipe-name")
        const name = $('#recipe-name').val().trim();
        if (name.length < 3) {
            $('#name-error').text("שם המתכון חייב להכיל לפחות 3 תווים");
            isValid = false;
        } else {
            $('#name-error').text("");
        }

        // 2. בדיקת סוג מטבח (id="cuisine")
        if ($('#cuisine').val() === "") {
            $('#cuisine-error').text("חובה לבחור סוג מטבח");
            isValid = false;
        } else {
            $('#cuisine-error').text("");
        }

        // 3. בדיקת מרכיבים (id="ingredients")
        if ($('#ingredients').val().trim().length < 10) {
            $('#ingredients-error').text("נא להזין רשימת מרכיבים מפורטת (לפחות 10 תווים)");
            isValid = false;
        } else {
            $('#ingredients-error').text("");
        }

        // 4. בדיקת הוראות (id="instructions")
        if ($('#instructions').val().trim().length < 10) {
            $('#instructions-error').text("נא להזין הוראות הכנה מפורטות");
            isValid = false;
        } else {
            $('#instructions-error').text("");
        }

        // 5. בדיקת אימייל השף (id="chef-email")
        const email = $('#chef-email').val();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            $('#email-error').text("כתובת האימייל אינה תקינה");
            isValid = false;
        } else {
            $('#email-error').text("");
        }

        // פידבק סופי ושליחה ל-PHP
        if (isValid) {
            $('#form-feedback').text("שומר בבסיס הנתונים...").css("color", "blue");

            $.ajax({
                type: "POST",
                url: "save_recipe.php", // וודא שזה השם של הקובץ בשרת
                data: $('#recipe-form').serialize(),
                success: function(response) {
                    // ה-PHP אמור להחזיר את המילה success
                    if(response.trim() === "success") {
                        $('#form-feedback').text("המתכון נשמר בבסיס הנתונים!").css("color", "green");
                        $('#recipe-form')[0].reset(); // איפוס הטופס לאחר הצלחה
                    } else {
                        $('#form-feedback').text("שגיאת שרת: " + response).css("color", "red");
                    }
                },
                error: function() {
                    $('#form-feedback').text("שגיאה בתקשורת עם השרת").css("color", "red");
                }
            });
        } else {
            $('#form-feedback').text("נא לתקן את השגיאות בטופס").css("color", "red");
        }
    });
});
