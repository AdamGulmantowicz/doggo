import renderFavs from "./renderFavs.js";

export default function clearLiked(){
const clearBtn = document.getElementById('clearBtn');

    clearBtn.addEventListener('click', (e) => {
        localStorage.clear();
        Array.from(favouritesSet).forEach(el => {
            favouritesSet.delete(`${el}`)
        })
        like.forEach(el => {
            if (!el.classList.contains('btn--secondary')) {
                el.classList.toggle('btn--secondary');
            }
        })
        renderFavs();
    })
}