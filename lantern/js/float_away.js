
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
    var infoWrap = $("main.bg-skycity .lantern-info");
    infoWrap.find("h3.name").css('box-shadow', 'none');
    html2canvas(infoWrap.get(0)).then(canvas => {
        document.body.appendChild(canvas);
        saveAs(canvas.toDataURL('image/png'), "image.png");
    });
}
