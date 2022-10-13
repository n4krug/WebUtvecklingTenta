$(function() {
    var navOpen = false

    // Toggle nav on hamburger button press
    $('#open-nav-btn').on('click', function() {
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

    // Close navigation page on link press
    $('.navigation-page a').on('click', function() {
        navOpen = false
        $('#mobile-nav-page').animate({ left: "-100%"}, 200)
        $('#open-nav-btn').removeClass('open')
    })

    $('.dropdown-btn').on('click', function() {
        // Hide other dropdowns when this is pressed
        $(this).siblings().find('.nav-dropdown').css('scale', '0')
        $(this).siblings().find('.nav-dropdown').data('visible', false)

        // Toggle this dropdown
        if ($(this).find('.nav-dropdown').data('visible')) {

            $(this).find('.nav-dropdown').css('scale', '0')
            $(this).find('.nav-dropdown').data('visible', false)
        
        } else {
        
            $(this).find('.nav-dropdown').css('scale', '1')
            $(this).find('.nav-dropdown').data('visible', true)
        
        }
    })

    // Automatically add scroll indicators based on amount of images
    $('.slideshow .img-container').children('img').each(() => {
        $(this).find('.indicator-container').append(`<div class="indicator"></div>`)
    });

    // Reset slideshow scroll to start
    $('.slideshow .img-container').scrollLeft(0)
    $('.indicator-container .indicator:first-child').addClass('active')

    // Update indacator and description on scroll
    $('.slideshow .img-container').on('scroll', function() {
        let slideshow = $(this).parents('.slideshow')
        let scrollElement = Math.round(slideshow.find('.img-container').scrollLeft() / slideshow.find('.img-container').width()) + 1

        // Set correct indicator bar
        slideshow.find(`.indicator`).removeClass('active')
        slideshow.find(`.indicator:nth-child(${scrollElement})`).addClass('active')

        // Show correct description
        slideshow.find(`.img-info`).removeClass('active')
        slideshow.find(`.img-info:nth-child(${scrollElement})`).addClass('active')
    })

    // Go to corresponding image when indicator is pressed
    $('.indicator').on('click', function() {
        let slideshow = $(this).parents('.slideshow')
        slideshow.find('.img-container').scrollLeft($(this).index() * slideshow.find('.img-container').width())
    })

    // Scroll to next image
    $('.slideshow-prev').on('click', function() {
        let slideshow = $(this).parents('.slideshow')
        let imgContainer = slideshow.find('.img-container')
        imgContainer.scrollLeft(imgContainer.scrollLeft() - imgContainer.width())
    })

    // Scroll to previous image
    $('.slideshow-next').on('click', function() {
        let slideshow = $(this).parents('.slideshow')
        let imgContainer = slideshow.find('.img-container')
        imgContainer.scrollLeft(imgContainer.scrollLeft() + imgContainer.width())
    })
})