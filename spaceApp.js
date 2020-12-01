const app = {};

// Converting date into the required format YYYY-MM-DD
let day = new Date();
let convertedDay = new Date(day.getTime() - (day.getTimezoneOffset() * 60000))
                      .toISOString()
                      .split("T")[0];
console.log(convertedDay);

// Nasa AOTP API request for background picture
app.aotpPics = function () {
  $.ajax({
    url: "https://api.nasa.gov/planetary/apod",
    method: "GET",
    feedtype: "JSON",
    data: {
      api_key: 'DerugExsQ2khB2caqqvN5EWipy0sTLjtNUc0ElBV',
      date: `${convertedDay}`,
    }

  })
  .then(function(result) {
        console.log(result);
    $('.container-fluid, body').css('background-image', 'url(' + result.url + ')');

  })
  .fail(function(error){
    console.log(error);
  })
};




// Getting the news articles url
app.getNewsArticles = function () {
  $.ajax({
    url: "https://spaceflightnewsapi.net/api/v2/articles",
    method: "GET",
    feedtype: "JSON",

  })
  .then(function(result) {
      $('.article-button').on('click', function(){
        // Empty out previous data so there is no duplication
        $('.newsData').empty();
        //Adding to a variable
        app.getArticles(result);
        console.log(result);
        })

  })
  .fail(function(error){
    console.log(error);
  })
};

//Appending to the page
app.getArticles = function(articleData){
  articleData.forEach(function(article){
    // console.log(article.title);
    const appendToHtml = `
    <div class="col-md-5 article-container">
         <h3>${article.title}</h3>
            <div>
              <img class="article-image" src=${article.imageUrl} />
            </div>
        <div class"article-description">${article.summary}</div>
    </div>
          `;
    $(".newsData").append(appendToHtml);
  })
}


// Getting the news reports url
app.getNewsReports = function () {
  $.ajax({
    url: "https://spaceflightnewsapi.net/api/v2/reports",
    method: "GET",
    feedtype: "JSON",

  })
  .then(function(result) {
      $('.report-button').on('click', function(){
        // Empty out previous data so there is no duplication
        $('.newsData').empty();

        //Adding to a variable
        app.getReports(result);
        console.log(result);
        })

  })
  .fail(function(error){
    console.log(error);
  })
};

//Appending to the page
app.getReports = function(reportData){
  reportData.forEach(function(report){
    // console.log(article.title);
    const appendToHtml = `
    <div class="col-md-3 article-container">
         <h3>${report.title}</h3>
            <div>
              <img class="article-image" src=${report.imageUrl} />
            </div>
        <div class"article-description">${report.summary}</div>
    </div>
          `;
    $(".newsData").append(appendToHtml);
  })
}












app.init = function(){
  app.getNewsArticles();
  app.getNewsReports();
  // app.getNewsReports();
  app.aotpPics();
}

$(document).ready(function(){
  app.init();
});