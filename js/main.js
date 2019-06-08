$(document).ready(function () {
    $('#autocomplete').autocomplete({
        lookup: songs,
        onSelect: function (obj) {
            var i = obj.data;
            var display = obj.value;
            $('#autocomplete').attr('placeholder', display);

            //***Vocals***
            display = '<strong>Vocal Path:</strong> ' + vocalPaths[i].path;
            if (vocalPaths[i].notes !== "") {
                display += '<br/>&emsp;<strong>Notes:</strong> ' + vocalPaths[i].notes;
            }
            $('#outputV').html(display);

            //***Drums***
            display = '<strong>Drum Path:</strong> ' + drumPaths[i].path;
            if (drumPaths[i].notes !== "") {
                display += '<br/>&emsp;<strong>Notes:</strong> ' + drumPaths[i].notes;
            }
            $('#outputD').html(display);

            //***Guitar***
            var guitarString = guitarPaths[i].path.replace(/,/g, "<br>");
            display = '<strong>Guitar Path</strong><br>' + guitarString;
            if (guitarPaths[i].notes !== "") {
                display += '<br/>&emsp;<strong>Notes:</strong> ' + guitarPaths[i].notes;
            }
            $('#outputG').html(display);

            //***Bass***
            var bassString = bassPaths[i].path.replace(/,/g, "<br>");
            display = '<strong>Bass Path</strong><br>' + bassString;
            if (bassPaths[i].notes !== "") {
                display += '<br/>&emsp;<strong>Notes:</strong> ' + bassPaths[i].notes;
            }
            $('#outputB').html(display);
        }
    });
});

function SelectAll(id) {
    document.getElementById(id).focus();
    document.getElementById(id).select();
}

function OnLoad() {
    document.getElementById('tDisplay').innerHTML = songs.length;
    document.getElementById('vDisplay').innerHTML = "VOX PATHS: " + vLength;
    document.getElementById('dDisplay').innerHTML = "DRUM PATHS: " + dLength;
    document.getElementById('gDisplay').innerHTML = "GUITAR PATHS: " + gLength;
    document.getElementById('bDisplay').innerHTML = "BASS PATHS: " + bLength;
    document.getElementById('Updated').innerHTML = updated;
}