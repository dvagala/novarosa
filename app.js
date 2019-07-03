

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