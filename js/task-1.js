const items = document.querySelectorAll(".item");
console.log("Number of categories:", items.length);
items.forEach (item => {
    const title = item.querySelector("h2")
    const categoryLi = item.querySelectorAll("li");

console.log("Category:", title.textContent);
console.log("Elements:", categoryLi.length);
});

const categoriesList = document.querySelector('#categories');
const categoriesItems = categoriesList.querySelectorAll('.item');