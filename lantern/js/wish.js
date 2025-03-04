
function setCursor(elem, pos) {
    if (elem.setSelectionRange) {
        elem.setSelectionRange(pos, pos);
    } else if (elem.createTextRange) {
        var range = elem.createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
    }
}

function onSubmitClick() {
    var nameEl = $("#name");
    var name = nameEl.val();
    if (!name.trim()) {
        $("p.note").show();
        nameEl.focus();
        setCursor(nameEl.get(0), 1);
    } else {
        $("p.note").hide();
        var checkedInput = $(".option input:checked");
        var lanternTextAry = checkedInput.siblings("label").text().split('\n').map(s => s.trim());
        localStorage.setItem('name', name);
        localStorage.setItem('lantern', checkedInput.data("lantern"));
        localStorage.setItem('lanternText', JSON.stringify(lanternTextAry) );
        location.href='float_away.html';
    }
}
