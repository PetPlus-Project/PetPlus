const icon_search = document.querySelector('.icon-search');
const search = document.querySelector('.search-input');

icon_search.onclick = function() {
    search.classList.toggle('active');
}
