document.addEventListener('DOMContentLoaded', async function() {
    async function fetchItems() {
        try {
            const response = await fetch('/items'); // Fetch items from the root endpoint
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json(); // Parse JSON response
        } catch (error) {
            console.error("Could not fetch items:", error);
        }
    }

    
    fetchItems().then(items => {
        console.log(items)

        if (items && items.length) {
            const container = document.getElementById('item-container');

            items.forEach(item => {

                console.log(item)

                const itemDiv = document.createElement('div');
                itemDiv.classList.add('item');

                itemDiv.setAttribute('data-item-id', item.itemID); // so I can use this to buy item
                console.log(`../showItem.html?itemID=${item.itemID}&name=${item.name}`)
                itemDiv.innerHTML = `
                    <a href="../showItem.html?itemID=${item.itemID}&name=${item.name}">
                        <img src="${item.imagePath}" alt="${item.name}">
                        <h3>${item.name}</h3>
                        <p>${item.description}</p>
                        <p>$${item.price}</p>
                    </a>
                `;

                container.appendChild(itemDiv);
            });
        }
    });
});
