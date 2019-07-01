
// window.onblur = function() {window.onfocus= function () {location.reload(true)}};

services_section = document.getElementById("services-section-column2");

summaryTabs = document.querySelectorAll(".summary-tab");
detailTabs = document.querySelectorAll(".details-tab");

// console.log(summaryTabs);
console.log(detailTabs);

summaryTabs.forEach((summaryTab, index) => {

    console.dir(summaryTab);
    // console.dir(blackTriangleIcon);
    summaryTab.addEventListener("click", function(){

        blackTriangleIcon = summaryTab.querySelector(".black-triangle");
        greenTriangleIcon = summaryTab.querySelector(".green-triangle");
        // Collapse details                 
        if (blackTriangleIcon.style.display == "none") {
            blackTriangleIcon.style.display = "block";
            greenTriangleIcon.style.display = "none";
        }
        else{
            // Expand details                 
            blackTriangleIcon.style.display = "none";
            greenTriangleIcon.style.display = "block";
        }

        // summaryTab.classList.toggle("summary-tab-collapsed");
        // summaryTab.classList.toggle("summary-tab-expanded");
        
        detailTabs[index].classList.toggle("details-tab-collapsed");
        detailTabs[index].classList.toggle("details-tab-expanded");
    });
});




// summary_1 = document.getElementById("summary-1");
// details_content_1 = document.getElementById("details-content-1");

// summary_1.addEventListener("click", function(){
//     console.log("hooo");
//     details_content_1.innerHTML = "heee";
//     details_content_1.style.display = "none";
// });

