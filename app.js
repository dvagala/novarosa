
// window.onblur = function() {window.onfocus= function () {location.reload(true)}};

summaryTabs = document.querySelectorAll(".summary-tab");
detailTabs = document.querySelectorAll(".details-tab");

detailTabsHeights = new Array();

console.log(summaryTabs);

for (let index = 0; index < summaryTabs.length; index++) {
    detailTabs[index].style.height = "100%";

    console.log(detailTabs[index].offsetHeight);
    detailTabsHeights.push(detailTabs[index].offsetHeight);

    detailTabs[index].style.height = "0px";

    summaryTabs[index].addEventListener("click", onSummaryTabClick, false);
    summaryTabs[index].param = index;
}


function onSummaryTabClick(evt)
{
    console.log(evt.currentTarget.param);

    index = evt.currentTarget.param;

    summaryTabs[index].querySelector(".black-triangle").classList.toggle("displayed-none");
    summaryTabs[index].querySelector(".green-triangle").classList.toggle("displayed-none");

    console.log("index: " + index);

    if(detailTabs[index].style.transition == ""){
        console.log("transition was:" + detailTabs[index].style.transition);
        detailTabs[index].style.transition = "height 0.5s";
        console.log("setting transition");
    }

    if(detailTabs[index].style.height == "0px"){
        console.log("setting height to " + detailTabsHeights[index].toString() + "px");
        detailTabs[index].style.height = detailTabsHeights[index].toString() + "px";
    } else{
        console.log("setting height to 0px");
        detailTabs[index].style.height = "0px";
    }
}

