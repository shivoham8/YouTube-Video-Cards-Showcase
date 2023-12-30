function createCard(title, channelName, views, monthsOld, duration, thumbnail) {
    let viewCount;
    if(views<1000000) {
        viewCount = views/1000 + "K";
    }
    else if(views>1000000) {
        viewCount = views / 1000000 + "M";
    }
    else {
        viewCount = views;
    }
    
    
    let html = `<div class="card">
    <div class="img">
            <img src="${thumbnail}" alt="">
            <div class="time-duration">
                ${duration}
            </div>
        </div>
        <div class="description">
            <div class="title">
            ${title}
            </div>
            <div class="channelName">
                ${channelName}
                <div class="views">
                    ${viewCount} views
                </div>
                <div class="monthsOld">
                    ${monthsOld} months ago
                </div>
            </div>
        </div>
        </div>`;

        document.querySelector(".container").innerHTML =
        document.querySelector(".container").innerHTML + html; 
}

createCard(
  "McGregor vs. Khabib | Best Moments",
  "Larone",
  5600000,
  2,
  "40:02",
  "https://i.ytimg.com/vi/Py2PTfO5bQU/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG\u0026rs=AOn4CLCMliZ1bYCMwXbd11xemV82ovlhcg%22"
);

createCard(
  "Discipline.",
  "Rezikan",
  2400000,
  4,
  "9:12",
  "https://i.ytimg.com/vi/LuzOKmcW7BQ/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG\u0026rs=AOn4CLB4s47emaISlI33puAy-7zihcT-dg"
);