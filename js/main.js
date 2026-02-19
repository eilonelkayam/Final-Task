$(document).ready(function() {
    
    $('#apply-filters-btn').click(function() {
        
    
        let selectedCuisines = [];
        $('input[name="cuisine"]:checked').each(function() {
            selectedCuisines.push($(this).val());
        });

        
        let maxTime = $('#time-filter').val();
        let difficulty = $('#difficulty-filter').val();
        
        
        let feedbackMsg = "מעדכן תוצאות...";
        if (selectedCuisines.length > 0) {
            feedbackMsg = "מסנן לפי מטבח: " + selectedCuisines.join(", ");
        }
        $('#feedback-message').text(feedbackMsg).css("color", "#e67e22");

        
        $('.recipe-card').fadeOut(300, function() {
            
            let foundCount = 0;

        
            if (selectedCuisines.length === 0) {
                $('.recipe-card').fadeIn(300);
                foundCount = 6;
            } else {
        
                $('.recipe-card').each(function() {
                    let cardCuisine = $(this).data('cuisine');
                    
                   
                    if (selectedCuisines.includes(cardCuisine)) {
                        $(this).fadeIn(300);
                        foundCount++;
                    }
                });
            }

         
            setTimeout(function() {
                if (foundCount > 0) {
                    $('#feedback-message').text("נמצאו " + foundCount + " מתכונים תואמים").css("color", "green");
                } else {
                    $('#feedback-message').text("לא נמצאו מתכונים מתאימים לחיפוש שלך").css("color", "red");
                }
            }, 400);
        });
    });
});