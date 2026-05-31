const fs = require("fs");

const keywords = [
  "Namakkal",
  "Tiruchengode",
  "Rasipuram",
  "Kolli Hills",
  "Poultry Namakkal"
];

async function fetchNews() {
  let articles = [];

  // Simulated aggregation (replace with RSS sources)
  keywords.forEach((k, i) => {
    articles.push({
      id: i,
      title: `${k} latest news update`,
      summary: `Auto-generated summary for ${k} news...`,
      source: "RSS Aggregator",
      date: new Date().toISOString().split("T")[0],
      url: "https://example.com",
      category: "Namakkal Town",
      slug: k.toLowerCase().replace(/\s/g, "-")
    });
  });

  fs.writeFileSync("data/articles.json", JSON.stringify({ articles }, null, 2));
}

fetchNews();