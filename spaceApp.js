const app = {};

app.getNewsReports = function () {
  $.ajax({
    url: "https://spaceflightnewsapi.net/api/v2/reports",
    method: "GET",
    feedtype: "JSON",
    // data: {
    //   //request parameters. Generally provived my api source
    //   api_key: app.key,
    //   q: query,
    //   feedtype: "JSON",
    // },
  }).then(function (result) {
    console.log(result[1]);
    // this is calling the data above and PASSING down to the below function
    // app.getNews(query);
  });
};

app.getNewsReports();