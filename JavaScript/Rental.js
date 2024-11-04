document.addEventListener("DOMContentLoaded", function () {

    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    const apiEndpoint = `https://script.google.com/macros/s/AKfycbwG-Lk0nMTkzimaMmB_BeGxntGzuSW05J7ydEcLNcuQ9KLKRlOM_PKAHpTgKRWYzN5diQ/exec`;

    fetch(apiEndpoint)
        .then(response => {
            if (!response.ok) {
                throw new Error("Product not found or API error");
            }
            return response.json();
        })
        .then(data => {

            console.log("API Response:", data);


            const product = data.data.find(item => item.id == productId);

            if (product) {

                document.getElementById("product-location").innerHTML = `<b>Location: </b> ${product.location}`;
                document.getElementById("product-price").innerHTML = `<b>Rent: </b> ${product.rent}`;
                document.getElementById("product-details").innerHTML = `<b>Details: </b> ${product.details}`;
                document.getElementById("product-number").innerHTML = `<b>Contect: </b> ${product.number}`;
                document.querySelector("#call-button").style.display= 'block';
                document.getElementById("call-button").innerHTML = `<a href="tel: +91${product.number}">Call now</a>`;




                if (product.image) {
                    document.getElementById("product-image").src = product.image;
                    document.getElementById("product-image").style.display = 'block';
                    
                    document.querySelector(".product-container").style.display = 'block';
                    document.querySelector(".loader").style.display = 'none';
                }
            }

            else{
                document.getElementById("product-location").innerText = "Product not found";
                document.getElementById("error-message").innerText = error.message;
            };
        })

});
