const app = {};

// Getting the news articles url
app.getNewsArticles = function () {
  $.ajax({
    url: "https://spaceflightnewsapi.net/api/v2/articles",
    method: "GET",
    feedtype: "JSON",
  })
    .then(function (result) {
      $(".article-button").on("click", function () {
        // Empty out previous data so there is no duplication
        $(".newsData").empty();
        //Adding to a variable
        app.getArticles(result);
        console.log(result);
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
        <h4>${article.title}</h4>
         <time>Published at: ${article.publishedAt}</time>
              <div><img class="news-image" src=${article.imageUrl} /></div>
              <div class"news-description">${article.summary}</div>
              <hr>
              <div><cite><a href="${article.url}">${article.url}</a></cite></div>
    </div>
          `;
    $(".newsData").append(appendToHtml);
  });
};

// Getting the news reports url
app.getNewsReports = function () {
  $.ajax({
    url: "https://spaceflightnewsapi.net/api/v2/reports",
    method: "GET",
    feedtype: "JSON",
  })
    .then(function (result) {
      $(".report-button").on("click", function () {
        // Empty out previous data so there is no duplication
        $(".newsData").empty();

        //Adding to a variable
        app.getReports(result);
        console.log(result);
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
    <div class="col-md-3 news-container">
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

app.init = function () {
  app.getNewsArticles();
  app.getNewsReports();
};

$(document).ready(function () {
  app.init();
});
