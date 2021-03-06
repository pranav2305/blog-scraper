# Task ID: Web Scraper

## Website Link : https://blog-scraper.herokuapp.com/

<br>

## Setup

1. Open a terminal

2. Navigate to the directory where you want to install the project <br>
`Example : cd wec-recs`

3. Clone the repository <br>
`git clone https://github.com/pranav2305/blog-scraper.git`

4. Navigate to the project directory<br>
`cd blog-scraper`

5. Install the node packages <br>
`npm i`

6. Run the server <br>
`node index.js`

7. Open the [website](http://localhost:3000/) on your browser <br>
`http://localhost:3000/`

<br>

## How to Use

1. Open the [website](https://blog-scraper.herokuapp.com/) or use the [localhost](http://localhost:3000/) if you cloned the repo.

2. Select any one URL from the [list of compatible URLs](#compatible-urls).

3. Click on the **Scrape** button to scrape data from that URL.

4. The scraped blogs will be displayed.

<br>

## Tech Used

- An express server was made using **[Node.js](https://nodejs.org/dist/latest-v16.x/docs/api/)**.
- A node package called **[Axios](https://axios-http.com/docs/api_intro)** was used to request data from a URL.
- **[Cheerio](https://cheerio.js.org/)** was used to scrape the data.
- **[EJS](https://ejs.co/#docs)** was used to create templates to render the website with dynamic data.
- **[Bootsrap](https://getbootstrap.com/docs/4.1/getting-started/introduction/)** was used to make the website responsive by using their **[Grid system](https://getbootstrap.com/docs/4.1/layout/grid/)**
- **[Heroku](https://www.heroku.com)** to deploy the website.

<br>

## About

A simple web scraper made to scrape blogs. This website take an URL as an input and displays the extracted data from that URL. Currently the scraper is limited to a few URLs only as listed [below](#compatible-urls). As of now, the scraper only scrapes blogs from [Detailed](https://detailed.com/) which updates the top 50 blogs in various categories, every 24 hours. The main aim of the scraper is to search the meaningful data from a website and ignore the unnecessary data to make it more understandable.

<br>

## Samples

1. Home Page <br>
![home-page](./images/1.png)
<br>
<br>

2. Tech Blogs (Desktop view)<br>
![tech-blogs](./images/2.png)
<br>
<br>

3. Art Blogs (Mobile view)<br>
![art-blogs](./images/3.png)

4. For other valid URLs (incompatible URLs) <br>
![no-data](./images/4.png)
<br>
<br>

5. For invalid URLs <br>
![invalid-url](./images/5.png)
<br>


<br>

## Demo Video

Link: https://youtu.be/SAH5qdraBnA

<br>

## References

1. [Cheerio docs](https://cheerio.js.org/)

2. [Bootstrap grid system](https://getbootstrap.com/docs/4.1/layout/grid/)

<br>

## Compatible URLs
- [Art Blogs](https://detailed.com/art-blogs/)
- [Beauty Blogs](https://detailed.com/beauty-blogs/)
- [Book Blogs](https://detailed.com/book-blogs/)
- [Business Blogs](https://detailed.com/business-blogs/
)
- [Car Blogs](https://detailed.com/car-blogs/)
- [Career Blogs](https://detailed.com/career-blogs/)
- [Christian Blogs](https://detailed.com/christian-blogs/)
- [Coffee Blogs](https://detailed.com/coffee-blogs/)
- [Cryptocurrency Blogs](https://detailed.com/cryptocurrency-blogs/)
- [Design Blogs](https://detailed.com/design-blogs/)
- [Education Blogs](https://detailed.com/education-blogs/)
- [Entertainment Blogs](https://detailed.com/entertainment-blogs/)
- [Esports Blogs](https://detailed.com/esports-blogs/)
- [Fashion Blogs](https://detailed.com/fashion-blogs/)
- [Finance Blogs](https://detailed.com/finance-blogs/)
- [Fitness Blogs](https://detailed.com/fitness-blogs/)
- [Food Blogs](https://detailed.com/food-blogs/)
- [Men Blogs](https://detailed.com/men-blogs/)
- [Women Blogs](https://detailed.com/women-blogs/)
- [Health Blogs](https://detailed.com/health-blogs/)
- [Interior Design Blogs](https://detailed.com/interior-design-blogs/)
- [Lifestyle Blogs](https://detailed.com/lifestyle-blogs/)
- [Marketing Blogs](https://detailed.com/marketing-blogs/)
- [Music Blogs](https://detailed.com/music-blogs/)
- [Outdoor Blogs](https://detailed.com/outdoor-blogs/)
- [Parenting Blogs](https://detailed.com/parenting-blogs/)
- [Photography Blogs](https://detailed.com/photography-blogs/)
- [Pregnancy Blogs](https://detailed.com/pregnancy-blogs/)
- [Real Estate Blogs](https://detailed.com/real-estate-blogs/)
- [Running Blogs](https://detailed.com/running-blogs/)
- [Sleep Blogs](https://detailed.com/sleep-blogs/)
- [Sports Blogs](https://detailed.com/sports-blogs/)
- [Stock Market Blogs](https://detailed.com/stock-market-blogs/)
- [Survival Blogs](https://detailed.com/survival-blogs/)
- [Tech Blogs](https://detailed.com/tech-blogs/)
- [Travel Blogs](https://detailed.com/travel-blogs/)
- [Vegan Blogs](https://detailed.com/vegan-blogs/)
- [Wedding Blogs](https://detailed.com/wedding-blogs/)
- [Web development Blogs](https://detailed.com/web-development-blogs/)
- [Wellness Blogs](https://detailed.com/wellness-blogs/)