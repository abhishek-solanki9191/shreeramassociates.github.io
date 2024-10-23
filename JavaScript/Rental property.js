async function fetchData() {
    try {
        const url = "https://script.google.com/macros/s/AKfycbwG-Lk0nMTkzimaMmB_BeGxntGzuSW05J7ydEcLNcuQ9KLKRlOM_PKAHpTgKRWYzN5diQ/exec";
        const response = await fetch(url); 
        const result = await response.json(); 
        console.log(result);

        let output = '';
        result.data.forEach(item => {
            output += `
        <div class = "card">
        <a target="_blank" href="Rental.html?id=${item.id}">
            <div>
                <img class="image" src="${item.image}" alt="">
            </div>
            <div class="content">
                    <span class="title">
                       <h6>Location: <span class="location-name">${item.location}</span></h6> 
                    </span>
    
                <p class="desc">
                   Rs.${item.rent} <br>
                   ${item.details}
                </p>
    
                <a class="action" href="tel: +91${item.number}">
                <button><i class="fa fa-phone"></i> Call Now </button>
                </a>
            </div>
         </a>
       </div>`;
        });

        document.getElementById('property').innerHTML = output;  
    } 
    catch (error) {
        console.error('Error fetching data:', error);
        document.getElementById('property').innerText = 'Error loading properties';
    }
}

window.onload = fetchData;