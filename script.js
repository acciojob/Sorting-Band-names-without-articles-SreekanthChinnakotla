//your code here
ans.map(item=>{
let li=document.createElement('li')
	li.innerText=item;
	
})

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