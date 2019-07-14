

// little workaround to do transition when expanding custom details/summary tabs
// from 0px to 100% height
function detailsTabTransitionWorkarond() {
    function onSummaryTabClick(evt)
    {
        var summaryTab = this;
        var DetailTabHeightInPx = evt.currentTarget.DetailTabHeightInPx;
        var detailTab = evt.currentTarget.detailTab;

        summaryTab.querySelector(".black-triangle").classList.toggle("displayed-none");
        summaryTab.querySelector(".green-triangle").classList.toggle("displayed-none");

        if(detailTab.style.transition == ""){
            detailTab.style.transition = "height 0.5s";
        }

        if(detailTab.style.height == "0px"){
            detailTab.style.height = DetailTabHeightInPx.toString() + "px";
        } else{
            detailTab.style.height = "0px";
        }
    }

    var summaryTabs = document.querySelectorAll(".summary-tab");
    var detailTabs = document.querySelectorAll(".details-tab");

    for (let index = 0; index < summaryTabs.length; index++) {

        var summaryTab = summaryTabs[index];
        var detailTab = detailTabs[index];

        detailTab.style.height = "100%";
        var DetailTabHeightInPx = detailTab.offsetHeight;
        detailTab.style.height = "0px";

        summaryTab.addEventListener("click", onSummaryTabClick, false);
        summaryTab.detailTab = detailTab;
        summaryTab.DetailTabHeightInPx = DetailTabHeightInPx;
    }
}


detailsTabTransitionWorkarond();

// For smooth scroll to element
$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});


// For mobile menu

function hideOrShowMobileMenu(){
    menuButton.classList.toggle("main-nav-mobile-opened");
    mainNav.classList.toggle("main-nav-mobile-opened");

    if(mainNav.classList.contains("main-nav-mobile-opened")){
        document.documentElement.style.overflowY = 'hidden';
        document.body.scroll = "no";
    }else{
        document.documentElement.style.overflowY = 'scroll';
        document.body.scroll = "yes";
    }
}

mainNav = document.querySelector("#main-nav");

menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", function(){
    hideOrShowMobileMenu();
});

mainNav.addEventListener("click", function(){
    hideOrShowMobileMenu();
});

navLinks = document.querySelectorAll("#main-nav a");

for (let index = 0; index < navLinks.length; index++) {
    navLinks[index].addEventListener("click", function(){
        hideOrShowMobileMenu();
    });
}



