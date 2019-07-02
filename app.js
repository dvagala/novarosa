
// window.onblur = function() {window.onfocus= function () {location.reload(true)}};

services_section = document.getElementById("services-section-column2");

summaryTabs = document.querySelectorAll(".summary-tab");
detailTabs = document.querySelectorAll(".details-tab");

// console.log(summaryTabs);
console.log(detailTabs);

detailTabsHeights = new Array();

summaryTabs.forEach((summaryTab, index) => {

    detailTabs[index].style.height = "100%";

    console.log(detailTabs[index].offsetHeight);
    detailTabsHeights.push(detailTabs[index].offsetHeight);

    detailTabs[index].style.height = "0px";

    // console.dir(blackTriangleIcon);
    summaryTab.addEventListener("click", function(){

        summaryTab.querySelector(".black-triangle").classList.toggle("displayed-none");
        summaryTab.querySelector(".green-triangle").classList.toggle("displayed-none");

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
    });


});





// summary_1 = document.getElementById("summary-1");
// details_content_1 = document.getElementById("details-content-1");

// summary_1.addEventListener("click", function(){
//     console.log("hooo");
//     details_content_1.innerHTML = "heee";
//     details_content_1.style.display = "none";
// });

