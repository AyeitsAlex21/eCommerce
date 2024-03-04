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

                itemDiv.innerHTML = `
                    <img src="${item.imagePath}" alt="${item.name}">
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                    <p>$${item.price}</p>
                `;

                container.appendChild(itemDiv);
            });
        }
    });
});
