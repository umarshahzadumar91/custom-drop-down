const countries = [
    "United States", "Canada", "Brazil", "United Kingdom", "France",
    "Germany", "Italy", "Spain", "Australia", "India",
    "China", "Japan", "South Korea", "Russia", "Mexico",
    "Argentina", "South Africa", "Egypt", "Turkey", "Saudi Arabia",
    "Indonesia", "Thailand", "Malaysia", "Vietnam", "Philippines",
    "New Zealand", "Sweden", "Norway", "Netherlands", "Switzerland", "Pakistan"
];

let container = document.querySelector('.conrainer');
let selectBtn = container.querySelector('.select_options');
let dropdownlist = container.querySelector('.list_search_container');
let search = container.querySelector('#search');
let list = container.querySelector('.list');


selectBtn.addEventListener('click',()=>{
    container.classList.toggle('active');
})

function addcountry(){
    list.innerHTML="";
    countries.forEach((country)=>{
        let listitems = `<li>` + country + `</li>`;
        list.insertAdjacentHTML('beforeend',listitems);
    })
}
addcountry();


list.querySelectorAll('li').forEach((listitem) => {
    listitem.addEventListener('click', () => {
        updateSelectCountry(listitem);
    });
});

function updateSelectCountry(listitem) {
    search.value = "";
    selectBtn.firstChild.textContent = listitem.textContent;
}
