function processData(data) {
    document.querySelector('#buy-usd-price').innerHTML = data.products[1].price / 100;
    document.querySelector('#sell-usd-price').innerHTML = data.products[2].price / 100;
    document.querySelector('#buy-eur-price').innerHTML = data.products[3].price / 100;
    document.querySelector('#sell-eur-price').innerHTML = data.products[4].price / 100;
    document.querySelector('#buy-chf-price').innerHTML = data.products[5].price / 100;
    document.querySelector('#sell-chf-price').innerHTML = data.products[6].price / 100;
}
function processError(error)
{
    console.error(error);
}
async function getData()
{
    const fetchData = fetch('https://dummyjson.com/products?limit=7'); /*https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5*/
    const jsonPromise = fetchData.then(res => res.json());
    return jsonPromise.then(data => {processData(data)}).catch(error => processError(error));
}

getData();

function toUA()
{
    document.querySelector('#body-title').innerHTML = "Виберіть операцію"
    document.querySelector('#chenkout-title').innerHTML = "ЗНЯТИ КОШТИ<br/>До 50 000 UAH"
    document.querySelector('#btn-another-value').innerHTML = "Інша сума"
    document.querySelector('#btn-to-card').innerHTML = "На карту"
    document.querySelector('#btn-to-account').innerHTML = "На рахунок"
    document.querySelector('#pay-cash-in-title').innerHTML = "ВНЕСТИ КОШТИ<br/>До 150 000 UAH"
    document.querySelector('#all-ops-title').innerHTML = "ВСІ ОПЕРАЦІЇ<br/>Погашення кредиту, etc"
    document.querySelector('#btn-open-service-list').innerHTML = "Відкрити список послуг"
    document.querySelector('#conversion-form-title').innerHTML = "ОБМІН ВАЛЮТ<br/>USD, EUR, MLD, CHF"
    document.querySelector('#btn-buy').innerHTML = "Купити"
    document.querySelector('#btn-sell').innerHTML = "Продати"
    document.querySelector('#lang-switch-en').style.fontWeight = "normal"
    document.querySelector('#lang-switch-ua').style.fontWeight = "bold"
    document.querySelector('#infoblock-title').innerHTML = "ІНФОРМАЦІЙНИЙ <br/> БЛОК БАНКУ"
}
function toEN()
{
    document.querySelector('#body-title').innerHTML = "Select operation"
    document.querySelector('#chenkout-title').innerHTML = "WITHDRAW<br/>Up to 50 000 UAH"
    document.querySelector('#btn-another-value').innerHTML = "Another value"
    document.querySelector('#btn-to-card').innerHTML = "To card"
    document.querySelector('#btn-to-account').innerHTML = "To account"
    document.querySelector('#pay-cash-in-title').innerHTML = "PAY IN<br/>Up to 150 000 UAH"
    document.querySelector('#all-ops-title').innerHTML = "ALL OPERATIONS<br/>Debt fulfilling, etc"
    document.querySelector('#btn-open-service-list').innerHTML = "Open service list"
    document.querySelector('#conversion-form-title').innerHTML = "CURRENCY EXCHANGE<br/>USD, EUR, MLD, CHF"
    document.querySelector('#btn-buy').innerHTML = "Buy"
    document.querySelector('#btn-sell').innerHTML = "Sell"
    document.querySelector('#lang-switch-en').style.fontWeight = "bold"
    document.querySelector('#lang-switch-ua').style.fontWeight = "normal"
    document.querySelector('#infoblock-title').innerHTML = "ІНФОРМАЦІЙНИЙ <br/> БЛОК БАНКУ"
}
function requestQuantity()
{
    return prompt('Вкажіть кількість [₴]');
}
function sell()
{
    const quantity = requestQuantity();
    if(typeof(quantity)=='number')
        alert('Ви продали ' + parseFloat(quantity) + "₴!");
    else if(quantity==null)
        alert('Неможливо опрацювати порожнє значення');
    else
        alert('Неможливо опрацювати нечислове значення');
}
function buy()
{
    const quantity = requestQuantity();
    if(typeof(quantity)=='number')
        alert('Ви купили ' + parseFloat(quantity)+ "₴!");
    else if(quantity==null)
        alert('Неможливо опрацювати порожнє значення');
    else
        alert('Неможливо опрацювати нечислове значення');
}
function payIntoAccount()
{
    const quantity = requestQuantity();
    if(typeof(quantity)=='number')
        alert(parseFloat(quantity) + '₴ внесено на рахунок!');
    else if(quantity==null)
        alert('Неможливо опрацювати порожнє значення');
    else
        alert('Неможливо опрацювати нечислове значення');
}
function payIntoCard()
{
    const quantity = requestQuantity();
    if(typeof(quantity)=='number')
        alert(parseFloat(quantity) + '₴ внесено на карту!');
    else if(quantity==null)
        alert('Неможливо опрацювати порожнє значення');
    else
        alert('Неможливо опрацювати нечислове значення');
}
function widthraw(quantity)
{
    alert(parseFloat(quantity) + '₴ знято!');
}
function widthrawCustom()
{
    const quantity = requestQuantity();
    if(typeof(quantity)=='number')
        widthraw(parseFloat(quantity));
    else if(quantity==null)
        alert('Неможливо опрацювати порожнє значення');
    else
        alert('Неможливо опрацювати нечислове значення');
}
function openServiceList()
{
    const currentPath = window.location.pathname;
    const directoryPath = currentPath.substring(0, currentPath.lastIndexOf('/'));
    // window.location.replace( directoryPath + '/service.html'); //It will not leave previous page
    window.location.href = directoryPath + '/service.html';
}

toUA();