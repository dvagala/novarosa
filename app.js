
// window.onblur = function() {window.onfocus= function () {location.reload(true)}};

services_section = document.getElementById("services-section-column2");

summaryTabs = document.querySelectorAll(".summary-tab");
detailsContentsP = document.querySelectorAll("#services-section-column2 > p");

// console.log(summaryTabs);
// console.log(detailsContentsP);

summaryTabs.forEach((summaryTab, index) => {



    console.dir(summaryTab);
    // console.dir(blackTriangleIcon);

    summaryTab.addEventListener("click", function(){
        blackTriangleIcon = summaryTab.querySelector(".black-triangle");
        greenTriangleIcon = summaryTab.querySelector(".green-triangle");
        if (blackTriangleIcon.style.display == "none") {
            blackTriangleIcon.style.display = "block";
            greenTriangleIcon.style.display = "none";
        }
        else{
            blackTriangleIcon.style.display = "none";
            greenTriangleIcon.style.display = "block";
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

