async function loadNews() {
  const res = await fetch('data/articles.json');
  const data = await res.json();

  const latest = document.getElementById("latest");
  const trending = document.getElementById("trending");

  latest.innerHTML = "";
  trending.innerHTML = "";

  data.articles.forEach((a, i) => {
    const card = `
      <div class="card">
        <h3>${a.title}</h3>
        <p>${a.summary}</p>
        <small>${a.source} | ${a.date}</small>
        <a href="${a.url}" target="_blank">Read More</a>
      </div>
    `;

    latest.innerHTML += card;

    if (i < 3) trending.innerHTML += card;
  });
}

loadNews();