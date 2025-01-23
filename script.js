//your code here
// Get the reference to the <ul> with ID "band"
const bandList = document.getElementById("band");
document.body.appendChild(bandList);

// Loop through the array and create list items
ans.forEach(band => {
  const listItem = document.createElement("li"); // Create an <li> element
  listItem.textContent = band; // Set the text content to the band name
  bandList.appendChild(listItem); // Append the <li> to the <ul>
});

let arr = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
let mp ={};
let reg = //bthe/b|/ban/b|/ba/b/gi;
	let articlelessarray = [];
for(let i in arr){
	let articlelessitem = arr[i].replace(reg, "").trim();
	articlelessarray.push(articlelessitem);
	mp[articlelessitem]=arr[i]
}
articlelessarray.sort();
let ans=[];
for(let i of articlelessarray){
	ans.push(mp[i])
}
console.log(ans);