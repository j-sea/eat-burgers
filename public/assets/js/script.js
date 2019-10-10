$('#burger-form').on('submit', function (jqueryEvent) {
    jqueryEvent.preventDefault();

    $.post(
        '/api/burgers',
        $(this).serialize(),
        function (data) {
            console.log(data);

            $('#burger-form').trigger('reset');
        }
    );
})