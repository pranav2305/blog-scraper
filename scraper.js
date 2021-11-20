const axios = require("axios");
const cheerio = require("cheerio");

async function scrapeData(url) {
  try {
    const scraped = {success: false, data: []}
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const blogPosts = $(".photography-section-inner .row .col-sm-12 .table-responsive .blog-table tbody .photography-wrapper")
    blogPosts.each((i, blog)=>{
        let newBlog = {};
        newBlog.image = $(blog).find(".blog-thumbnail img").attr("src");
        newBlog.title = $(blog).find(".blog-content h3").text();
        newBlog.url = $(blog).find(".blog-content p .blog-url a").text();
        newBlog.desc = $(blog).find(".blog-content p .blog-description").text();
        newBlog.rankChange = $(blog).find(".blog-counter .bd-left div .rank span").text().replace(/\s/g, "");
        newBlog.rank = Number($(blog).find(".blog-counter .bd-left div .rank").text().replace(newBlog.rankChange, "").replace(/[ ,]/, ""));
        newBlog.mentions = Number($(blog).find(".blog-counter .bd-left div .mention").text().replace(/[ ,]/, ""));
        scraped.data.push(newBlog);
    })
    if (scraped.data.length){
        scraped.success = true;
    }
    return scraped;
  } catch (err) {
    console.error(err);
    return null;
  }
}

module.exports = scrapeData;