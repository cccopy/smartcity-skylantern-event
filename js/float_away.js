
$(document).ready(() => {
    var infoWrap = $(".lantern-info");
    
    // assign name
    infoWrap.find("h3.name").text(localStorage.getItem('name'));

    // assign image
    infoWrap.find(".lantern-img").append('<img class="baloon" src="images/lantern_' + localStorage.getItem('lantern') + '.png">');

    // assign text
    var strings = JSON.parse( localStorage.getItem('lanternText') );
    infoWrap.find(".lantern-text h4").text(strings[0]);
    infoWrap.find(".lantern-text p").text(strings[1]);
});