// import particlesJS from './particles.js'
const app = {};

// Converting date into the required format YYYY-MM-DD
let day = new Date();
let convertedDay = new Date(day.getTime() - day.getTimezoneOffset() * 60000)
  .toISOString()
  .split("T")[0];
// console.log(convertedDay);

// Nasa AOTP API request for background picture
app.aotpPics = function () {
  $.ajax({
    url: "https://api.nasa.gov/planetary/apod",
    method: "GET",
    feedtype: "JSON",
    data: {
      api_key: "DerugExsQ2khB2caqqvN5EWipy0sTLjtNUc0ElBV",
      date: `${convertedDay}`,
    },
  })
    .then(function (result) {
      console.log(result);
      const appendToHtml = `
        <div class="news-container col-lg-5">
          <div><h4>${result.title}<h4></div>
          <time>${result.date}</time>
          <div><img class="aotp-image" src='${result.url}'/></div>
        </div>
      `;
      $('.newsData').append(appendToHtml);
    })
    .fail(function (error) {
      console.log(error);
    });
};



// Getting the news articles url
app.getNewsArticles = function () {
  $.ajax({
    
    url: "https://api.spaceflightnewsapi.net/v3/articles",
    method: "GET",
    feedtype: "JSON",
  })
    .then(function (result) {
      $(".article-button").on("click", function () {
        // Empty out previous data so there is no duplication
        $(".newsData").empty();
        //Adding to a variable
        app.getArticles(result);
        // console.log(result);
      });
    })
    .fail(function (error) {
      console.log(error);
    });
};

//Appending to the page
app.getArticles = function (articleData) {
  articleData.forEach(function (article) {
    // console.log(article.title);
    const appendToHtml = `
    <div class="news-container col-lg-3">
        <h3>${article.title}</h3>
         <time>Published at: ${article.publishedAt}</time>
              <div><img class="news-image" src=${article.imageUrl} /></div>
              <div class"news-description">${article.summary}</div>
              <div><cite><a href="${article.url}">${article.url}</a></cite></div>
    </div>
          `;
    $(".newsData").append(appendToHtml);
  });
};

// Getting the iss reports url
app.getNewsReports = function () {
  $.ajax({
    url: "https://api.spaceflightnewsapi.net/v3/reports",
    method: "GET",
    feedtype: "JSON",
  })
    .then(function (result) {
      $(".report-button").on("click", function () {
        // Empty out previous data so there is no duplication
        $(".newsData").empty();

        //Adding to a variable
        app.getReports(result);
        // console.log(result);
      });
    })
    .fail(function (error) {
      console.log(error);
    });
};

//Appending to the page
app.getReports = function (reportData) {
  reportData.forEach(function (report) {
    // console.log(article.title);
    const appendToHtml = `
    <div class="col-lg-3 news-container">
         <h4>${report.title}</h4>
         <time>Published at: ${report.publishedAt}</time>
              <div><img class="news-image" src=${report.imageUrl} /></div>
              <div class"news-description">${report.summary}</div>
              <hr>
              <div><cite><a href="${report.url}">${report.url}</a></cite></div>
    </div>
          `;
    $(".newsData").append(appendToHtml);
  });
};


app.particles = () => {
  /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
  particlesJS.load('particles-js', './particlesjs-config.json', function() {
    console.log('callback - particles.js config loaded');
  });
}



app.init = function () {
  app.getNewsArticles();
  app.getNewsReports();
  app.aotpPics();
  app.particles();

};

$(document).ready(function () {
  app.init();
});
