// VARIABLE DECLARATION BY ID
const selectedItemContainer = document.getElementById("selected-items");
const totalItemPrice = document.getElementById('total-price');
const discountItemPrice = document.getElementById('discount-price');
const totalItemGrandPrice = document.getElementById('grand-total-price');
const discountFieldInput = document.getElementById('discount-field');
const discountApplyBtn = document.getElementById('discount-apply');
const makePurchase = document.getElementById('make-purchase');
const goHome = document.getElementById('go-home');


function handleCLikBtn(target) {
    const itemName = target.parentNode.childNodes[5].innerText;

    const li = document.createElement("li");
    li.innerHTML = itemName;
    li.classList.add('text-lg')
    li.classList.add('font-medium')
    li.classList.add('mb-2')
    selectedItemContainer.appendChild(li);

    const itemPrice = parseFloat(target.parentNode.childNodes[7].innerText.split(" ")[0]);

    // TOTAL PRICE CALCULATE
    const totalPrice = parseFloat(totalItemPrice.innerText) + itemPrice;
    totalItemPrice.innerText = totalPrice.toFixed(2);

    totalItemGrandPrice.innerText = parseFloat(totalItemGrandPrice.innerText) + itemPrice;

    // DISCOUNT INPUT VALIDATION
    if (totalPrice >= 200) {
        discountFieldInput.removeAttribute('disabled')
    }

    // APPLY DISCOUNT COUPON
    discountApplyBtn.addEventListener('click', function () {
        if (discountFieldInput.value === 'SELL200') {
            const discount = parseFloat(totalPrice * .20);
            discountItemPrice.innerText = discount.toFixed(2);

            const grandTotalPrice = totalPrice - discount;
            totalItemGrandPrice.innerText = grandTotalPrice.toFixed(2);
        }
    })

    // MAKE PUCHASE BUTTON VALIDATION
    if (totalPrice > 0) {
        makePurchase.removeAttribute('disabled');
    }

    // PAGE REFRESH TO RESET VALUES
    goHome.addEventListener('click', function () {
        window.location.href = 'index.html'
    })
}
