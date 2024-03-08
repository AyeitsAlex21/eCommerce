


document.addEventListener('DOMContentLoaded', async function() { 
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    const itemID = Number(urlParams.get('itemID'));

    console.log(itemID);

    async function fetch_item(itemID) {
        try {
            const data = {itemID : itemID};

            const res = await fetch(`/itemInfo/getItem/${data.itemID}`, 
            {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json', // Important for JSON payloads
                },
            });
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${response.status} instead of 200`);
            }

            console.log(res);

            return await res.json();
        }
        catch (error) {
            console.error("Could not fetch the item requested", error);
        }
    }

    fetch_item(itemID).then(item => {
        console.log(item.name);

        if(item) {
            
            const itemDiv = document.getElementById("item-container");

            itemDiv.innerHTML = `
            <h1>${item.name}</h1>
            <img src="${item.imagePath}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <p>$${item.price}</p>
            <button>BUY</button>
            `;
        }
    });

    
});