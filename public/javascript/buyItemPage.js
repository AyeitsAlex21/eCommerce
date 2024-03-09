

// This is your test publishable API key.
const stripe = Stripe("pk_test_51OsAEeAw4cwCoIgTbEiMCEozfDmiaUiBf8kN8VyAd8v0JdtoEVHCTEqcUtQtNzdGZNQTCv4aViB9psKKF1TcCP4e00F8BhQEz4");

//initialize();

// Create a Checkout Session as soon as the page loads
async function initialize() {
    const response = await fetch("/itemInfo/create-checkout-session", {
        method: "POST",
    });

    const { clientSecret } = await response.json();

    const checkout = await stripe.initEmbeddedCheckout({
        clientSecret,
    });

    // Mount Checkout
    checkout.mount('#checkout');
}

document.addEventListener('DOMContentLoaded', async function() { 

    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    const itemID = Number(urlParams.get('itemID'));

    console.log(itemID);

    async function fetch_item(itemID) {
        try {
            const data = {itemID : itemID};

            const res = await fetch(`/itemInfo/getItem/${data.itemID}`);
            
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
            <button id="buy" onclick=purchase_item(${itemID}) >BUY
            </button>
            `;
        }
    });

    
});


async function purchase_item(itemID) {
    try {

        const res = await fetch(`/itemInfo/create-checkout-session`, 
        {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json', // Specify the content type
             
            },
            body: JSON.stringify({
              data: itemID, // Your data here
            }),
        });

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status} instead of 200`);
        }

        const sessionData = await res.json();
        window.location.href = sessionData.url;
        
    }
    catch (error) {
        console.error("Could not fetch the item requested", error);
    }
}