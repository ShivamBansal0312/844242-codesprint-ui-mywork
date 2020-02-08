const PRODUCTS_KEY = "products";

getProductsFromLocalStorage = () =>{
    let products=[];
    
    if(localStorage.getItem(PRODUCTS_KEY)){
        products=JSON.parse(localStorage.getItem(PRODUCTS_KEY));
    }

    return products;
}

addItemFormSubmit = () =>{
    let products = getProductsFromLocalStorage();

    let itemNameTextBox = document.querySelector("#fname");
    let itemAddressTextBox = document.querySelector("#address");
    let itemCityTextBox = document.querySelector("#city");
	let itemPackageTextBox = document.querySelector("#any");
    let itemTrainerTextBox = document.querySelector("#anyOne");
    let itemPhoneTextBox = document.querySelector("#codeBox");

    let product = {
        Name:itemNameTextBox.value,
        Address:itemAddressTextBox.value,
        City:itemCityTextBox.value,
		Package:itemPackageTextBox.value,
        Trainer:itemTrainerTextBox.value,
        Phone:parseInt(itemPhoneTextBox.value)
    };

    products.push(product);
    localStorage.setItem(PRODUCTS_KEY,JSON.stringify(products));
}

loadItems = () =>{
    let products = getProductsFromLocalStorage();

    let tableBody = document.querySelector("#prdData");

/*    products.forEach(product => {
        let prdRow = createProductRow(product);
        tableBody.append(prdRow);
    }); */

    for(let product of products){
        let prdRow = createProductRow(product);
        tableBody.append(prdRow);
    }
}

createProductRow = (product) =>{

    let nameCol = document.createElement("td");
    nameCol.textContent=product.Name;
    
    let addressCol = document.createElement("td");
    addressCol.textContent=product.Address;

    let cityCol = document.createElement("td");
    cityCol.textContent=product.City;
	
	 let packageCol = document.createElement("td");
    packageCol.textContent=product.Package;
    
    let trainerCol = document.createElement("td");
    trainerCol.textContent=product.Trainer;

    let phoneCol = document.createElement("td");
    phoneCol.textContent=product.Phone;

    let prdRow = document.createElement("tr");
    prdRow.append(nameCol);
    prdRow.append(addressCol);
    prdRow.append(cityCol);
	prdRow.append(packageCol);
    prdRow.append(trainerCol);
    prdRow.append(phoneCol);


    return prdRow;
}