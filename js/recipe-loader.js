$(document).ready(function() {
    
    const recipes = {
        'ptitim': {
            title: "פתיתים ונקניקיות (ארוחת ילדים קלאסית)",
            image: "images/ptitim.jpg",
            ingredients: ["1 חבילת פתיתים", "חבילת נקניקיות", "1 בצל קצוץ", "2 כפות רסק עגבניות"],
            instructions: ["מטגנים בצל", "מוסיפים נקניקיות", "מוסיפים פתיתים ומים", "מבשלים 10 דקות"],
            nutrition: { "קלוריות": "210", "חלבונים": "8ג'", "פחמימות": "25ג'" }
        },
        'papaya': {
            title: "סלט פפאיה תאילנדי (סום טאם)",
            image: "images/papaya-salad.jpg",
            ingredients: ["1 פפאיה ירוקה", "עגבניות שרי", "בוטנים", "צ'ילי ולימון"],
            instructions: ["מגרדים את הפפאיה", "כותשים שום וצ'ילי", "מערבבים הכל", "מפזרים בוטנים"],
            nutrition: { "קלוריות": "120", "חלבונים": "2ג'", "ויטמין C": "85מ\"ג" }
        }
    };

    const urlParams = new URLSearchParams(window.location.search);
    const recipeId = urlParams.get('id');

    // 3. הצגת הנתונים בדף
    const data = recipes[recipeId];

    if (data) {
        $('#recipe-title').text(data.title);
        $('#recipe-img').attr('src', data.image).attr('alt', data.title);
        
        // הוספת מרכיבים
        data.ingredients.forEach(item => {
            $('#ingredients-list').append(`<li>${item}</li>`);
        });

        // הוספת הוראות
        data.instructions.forEach(step => {
            $('#instructions-list').append(`<li>${step}</li>`);
        });

        // עדכון טבלה
        for (let key in data.nutrition) {
            $('#nutrition-body').append(`<tr><td>${key}</td><td>${data.nutrition[key]}</td></tr>`);
        }
    } else {
        $('#recipe-title').text("המתכון לא נמצא");
    }
});