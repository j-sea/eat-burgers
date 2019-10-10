// Performing a PUT form submission here because W3C are either lazy and/or narcissistic and haven't added PUT and DELETE methods to form elements since the creation of the method attribute on forms in 1995.
// We can thank Ian Hickson for closing the issue as "Won't Fix" because, in his words, "PUT as a form method makes no sense, you wouldn't want to PUT a form payload. DELETE only makes sense if there is no payload, so it doesn't make much sense with forms either.": https://softwareengineering.stackexchange.com/a/211790/119232
// Except, here I am wanting to PUT a form payload. Wow. Amazing. I guess wanting to avoid splitting routing responsibilities between backend and frontend is something we DON'T want? Let's make all developers' lives across the world more difficult because that's what Ian wants! Yeah!
// He apparently can be reached at ian@hixie.ch which was found on his website with the quip: "I enjoy debating [...], should you be interested in trying to convince me that you are right and I am not."
// This leads me to believe his decision to close the issue as "Won't Fix" was very much a close-minded narcissistic decision and not one based in research and analytics (or in other words, not a decision made with any real thought, effort, or merit). Thanks, Ian. You're the best at W3C! (That was sarcasm, Ian. Don't let it go to your head.)
$('.eat-button').on('click', function (jqueryEvent) {
    $.ajax({
        url: `/api/burgers/${ $(this).attr('data-burger-id') }`,
        method: 'PUT',
        data: { devoured: true },
    })
    .done(function (data) {
        // Refresh the page
        window.location.reload();
    });
});