const arr = ["The Virupaksha Temple", "Victoria Memorial", "Tajmahal"];
const mp = {}; // Mapping of article-less names to original names

// Regular expression to remove articles (case-insensitive)
const reg = /\b(the|an|a)\b/gi;

const articlelessarray = [];

// Remove articles and store in a map
for (let i in arr) {
  const articlelessitem = arr[i].replace(reg, "").trim();
  articlelessarray.push(articlelessitem);
  mp[articlelessitem] = arr[i]; // Map article-less to original
}

// Sort the article-less array
articlelessarray.sort();

// Map back to original names and store in `ans`
const ans = articlelessarray.map(item => mp[item]);

// Display the sorted items in the <ul>
const ul = document.getElementById("band");
ans.forEach(band => {
  const li = document.createElement("li");
  li.textContent = band;
  ul.appendChild(li);
});
