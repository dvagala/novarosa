

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


//test for touch events support and if not supported, attach .no-touch class to the HTML tag.
if (!("ontouchstart" in document.documentElement)) {
    document.documentElement.className += "no-touch";
}

// // remove fragment as much as it can go without adding an entry in browser history:

// // slice off the remaining '#' in HTML5:    
// if (typeof window.history.replaceState == 'function') {
//   history.replaceState({}, '', window.location.href.slice(0, -1));
// }

// $(function(){
//     // Remove the # from the hash, as different browsers may or may not include it
//     var hash = location.hash.replace('#','');

//     if(hash != ''){
//         // Show the hash if it's set
//         alert(hash);

//         // Clear the hash in the URL
//         location.hash = '';
//     }
// });

