console.log('js');

$(document).ready(onReady);

function onReady() {
    $('body').append('<ul id="monster-list">Have you seen these monsters? Check the list below:</ul>');

    $.ajax({
        type: 'GET',
        url: '/monsters'
    }).then(function (response) {
        for (let monster of response) $('#monster-list').append(`<li>${monster}</li>`);
    });
}