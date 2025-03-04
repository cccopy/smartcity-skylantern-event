
$(document).ready(() => {
    var mainContent = $("main.bg-skycity");
    var loadingContent = $("main.bg-city");
    var infoWrap = $("main.bg-skycity .lantern-info");
    
    // assign name
    infoWrap.find("h3.name").text(localStorage.getItem('name'));

    // assign image
    infoWrap.find(".lantern-img").append('<img class="baloon" src="images/lantern_' + localStorage.getItem('lantern') + '.png">');

    // assign text
    var strings = JSON.parse( localStorage.getItem('lanternText') );
    infoWrap.find(".lantern-text h4").text(strings[0]);
    infoWrap.find(".lantern-text p").text(strings[1]);

    setTimeout(() => {
        loadingContent.hide();
        mainContent.show();
    }, 3500);
});

function onDownloadClick() {
    var filename = `${localStorage.getItem('name')}-skylantern-wish.png`;

    var mainContent = $("main.bg-skycity");
    var clonedContent = mainContent.clone();

    clonedContent.css({
        'position': 'absolute',
        'left': '-9999px'
    });

    clonedContent.appendTo(document.body);

    var infoWrap = clonedContent.find(".lantern-info");
    infoWrap.find("h3.name").css('box-shadow', 'none');
    html2canvas(infoWrap.get(0), {backgroundColor: "rgba(0,0,0,0)"}).then(canvas => {
        clonedContent.remove();
        saveAs(canvas.toDataURL('image/png'), filename);
    });
}
