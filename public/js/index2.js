/**
 * Created by Miguel on 3/11/2016.
 */
$(document).ready(function () {
    parpadear();
});

function parpadear() { $('.first').fadeIn(250).delay(250).fadeOut(250, parpadear) }