document.addEventListener("DOMContentLoaded", function () {

    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    const apiEndpoint = `https://script.google.com/macros/s/AKfycbzTgC3G8HxMoB6T2NTXEm3t-Q-ZCJh-tZTt5NIBg_hZYnNbuRcQ0DiTSx0Y--o35k76/exec`;

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
                document.getElementById("product-dealer").innerHTML = `<b>Dealer: </b> ${product.dealer}`;
                document.getElementById("product-price").innerHTML = `<b>Price: </b> ${product.price}`;
                document.getElementById("product-details").innerHTML = `<b>Details: </b><br> ${product.pera}`;
                document.getElementById("product-number").innerHTML = `<b>Contect: </b> ${product.number}`;
                document.querySelector("#call-button").style.display= 'block';
                document.getElementById("call-button").innerHTML = `<a href="tel: +91${product.number}">Call now</a>`;

                
                
                if (product.image) {
                    document.getElementById("product-image").src = product.image;
                    document.getElementById("product-image").style.display = 'block';

                    document.querySelector(".product-container").style.display = 'block';
                    document.querySelector(".loader").style.display = 'none';

                }

                if (product.video) {
                    const videoId = product.video.match(/\/d\/(.+?)\//)[1]; // Extract the file ID from the video URL
                    const videoUrl = `https://drive.google.com/file/d/${videoId}/preview`;

                    const videoIframe = document.getElementById("product-video");
                    videoIframe.src = videoUrl;
                    videoIframe.style.display = 'block';
                    document.getElementById("product-image").style.display = 'none';
                }


                if (`${product.pera}` == "") {
                    document.getElementById("product-details").innerHTML = '<b>Details: </b> <t style="color: red; font-weight: bolder;">contact for more details</t>';
                }
            }

            else{
                document.getElementById("product-location").innerText = "Product not found";
                document.getElementById("error-message").innerText = error.message;
            };
        })

});
