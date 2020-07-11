
function boldNav( textOfNav ) {

    // For each navObject:
    $(".navObjects").each( function() {

        // If the text for the nav item is equal to the one we want to make bold:
        if ( textOfNav === $(this).text() ) {

            // Make the text bold.
            $(this).css("font-weight", "bold");
        }

        // Otherwise:
        else {

            // Make the text normal weight.
            $(this).css("font-weight", "normal");
        }
    });
}

// On load:
$(window).on("load",function() {

    // Get top and bottom location of about me section.
    var aboutMeTop = $("#aboutMeSection").offset().top;
    var aboutMeBottom = $("#aboutMeSection").offset().top + $("#aboutMeSection").innerHeight();

    // Get top and bottom location of work section.
    var workTop = $("#workSection").offset().top;
    var workBottom = $("#workSection").offset().top + $("#workSection").innerHeight();

    // Get top and bottom location of project section.
    var projectTop = $("#projectsSection").offset().top;
    var projectBottom = $("#projectsSection").offset().top + $("#projectsSection").innerHeight();

    // Get top and bottom location of education section.
    var educationTop = $("#educationSection").offset().top;
    var educationBottom = $("#educationSection").offset().top + $("#educationSection").innerHeight();

    // Get top and bottom location of skills section.
    var skillsTop = $("#skillsSection").offset().top;
    var skillsBottom = $("#skillsSection").offset().top + $("#skillsSection").innerHeight();

    $(window).scroll(function() {

        var windowBottom = $(this).scrollTop() + $(this).innerHeight();
        var windowTop = $(this).scrollTop();
        var trueWindowTop = $(this).scrollTop() + $(".navigationBar").innerHeight();

        // Changing the opacity of the title as one scrolls down.
        $(".holdItPartner").css("opacity", 1 - windowTop/230);

        if ((0 <= trueWindowTop) && (aboutMeBottom >= trueWindowTop)) {
            boldNav("ABOUT ME");
        }

        else if ((workTop <= trueWindowTop) && (workBottom >= trueWindowTop)) {
            boldNav("WORK");
        }

        else if ((projectTop <= trueWindowTop) && (projectBottom >= trueWindowTop)) {
            boldNav("PROJECTS");
        }

        else if ((educationTop <= trueWindowTop) && (educationBottom >= trueWindowTop)) {
            boldNav("EDUCATION");
        }

        else {
            boldNav("SKILLS")
        }

        $(".bottomBarFade").each( function() {

            if ( windowBottom >= $(this).offset().top + 20 ) {
                $(this).animate({
                    width: "100%",      // The width of the bar.
                }, 1000);        // The time the animation takes.
            }
        });

        $(".infoBorder").each( function() {
            if ( windowBottom >= $(this).offset().top + 100 ) {
                $(this).animate({
                    opacity: "1",       // The opacity of the text and image.
                }, 500);        // The time the animation takes.
            }
        })

    }).scroll();
});