const items = document.querySelectorAll('.item');

items.forEach(item => {
    item.addEventListener("mouseover", () => {
        removeItems()
        item.classList.add('selected')
    })

    function removeItems() {
items.forEach(item => {
        item.classList.remove('selected')
    })
    }
})