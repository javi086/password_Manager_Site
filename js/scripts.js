document.addEventListener('DOMContentLoaded', function(){
 getProductInformation();
});


async function getProductInformation(){
    try{
        const response = await fetch('http://localhost:3000/api/products');
        const products = await response.json();

        if(!response.ok){
            console.log("Response from server, status: ", products.Status + " Error: ", products.error);
        }else{
            products.forEach(product =>
                console.log(product)
            )
        }

    }catch (error){

    }

}

// TO-DO Indentify fields in form and then remove the hardcode to get information from server



// Function to show the modal with the correct data
function selectPlan(id, name, price) {
    document.getElementById('checkout-modal').classList.remove('hidden');
    
    // Fill in the Transaction info
    document.getElementById('modal-plan-name').innerText = name;
    document.getElementById('modal-plan-price').innerText = `$${price} / month`;
    document.getElementById('form-product-id').value = id;
}

function closeModal() {
    document.getElementById('checkout-modal').classList.add('hidden');
}

// Inside your products.forEach loop, update the button to:
// <button onclick="selectPlan('${product.id}', '${product.name}', '3.99')" ...>