const app = {};


// app.getNewsArticles = function () {
//   $.ajax({
//     url: "https://spaceflightnewsapi.net/api/v2/articles",
//     method: "GET",
//     feedtype: "JSON",

//   })
//   .then(function(result) {
//     // this is calling the data above and PASSING down to the below function
//     $('.article-container').empty();
//     app.getArticles(result);
//     console.log(result);
//   })
//   .fail(function(error){
//     console.log(error);
//   })
// };

// app.getArticles = function(articleData){
//   articleData.forEach(function(article){
//     // console.log(article.title);
//     const appendToHtml = `
//         <div class=" col-lg-3 article-container">
//           <h3>${article.title}</h3>
//             <div>
//               <img class="article-image" src=${article.imageUrl} />
//             </div>
//           <div class"article-description">${article.summary}</div
//         </div>
//     `;
//     $(".newsData").append(appendToHtml);
//   })
// }






app.getNewsReports = function () {
  $.ajax({
    url: "https://spaceflightnewsapi.net/api/v2/reports",
    method: "GET",
    feedtype: "JSON",
  })
    .then(function (result) {
      // this is calling the data above and PASSING down to the below function
      $(".reports-container").empty();
      app.getreports(result);
      console.log(result);
    })
    .fail(function (error) {
      console.log(error);
    });
};


app.getreports = function (reportsData) {
  reportsData.forEach(function (reports) {
    // console.log(reports.title);
    const appendToHtml = `
        <div class=" col-lg-3 reports-container">
          <h3>${reports.title}</h3>
            <div>
              <img class="reports-image" src=${reports.imageUrl} />
            </div>
          <div class"reports-description">${reports.summary}</div
        </div>
    `;
    $(".newsData").append(appendToHtml);
  });
};









// app.getNewsReports = function () {
//   $.ajax({
//     url: "https://spaceflightnewsapi.net/api/v2/reports",
//     method: "GET",
//     feedtype: "JSON",
//   })
//     .then(function (result) {
//       // console.log(result[0]);
//       // this is calling the data above and PASSING down to the below function
//       // app.getNews(query);
//     })
//     .fail(function (error) {
//       console.log(error);
//     });
// };













app.init = function(){
  // app.getNewsArticles();
  app.getNewsReports();
  // app.getNewsReports();
}

$(document).ready(function(){
  app.init();
});