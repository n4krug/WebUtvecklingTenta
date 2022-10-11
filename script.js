$(function() {
    var navOpen = false
    $('#open-nav-btn').on('click', function() {
        // console.log('nav')
        if (navOpen) {
            navOpen = false
            $('#mobile-nav-page').animate({ left: "-100%"}, 200)
            $('#open-nav-btn').removeClass('open')
        } else {
            navOpen = true
            $('#mobile-nav-page').animate({ left: "0%"}, 200)
            $('#open-nav-btn').addClass('open')
        }
    })

    $('.navigation-page a').on('click', function() {
        navOpen = false
        $('#mobile-nav-page').animate({ left: "-100%"}, 200)
        $('#open-nav-btn').removeClass('open')
    })
})