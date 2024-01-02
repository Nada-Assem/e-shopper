var catFilter=[];
var pro="";
function getValue(e)
{
    if (e.checked) {
        catFilter.push(e.value);
        as()        
    }
    else
    {
        var deleted = catFilter.filter(elem => elem !== e.value);
        catFilter = deleted
        // catFilter.indexOf(e.value)
        pro=""
        as()
    }
    console.log(catFilter)
}

// document.addEventListener('DOMContentLoaded', function() {
    let products = document.querySelector('.productss');
    function as() {
        console.log('c')
        async function fetchProducts(url) {
            try {
                pro=''
        console.log('d')
                let data = await fetch(url);
                let response = await data.json();
                if(catFilter.length){
                    console.log('a')
                    for (let i = 0; i < response.length; i++) {
                        // console.log( response[i].category)
                        // console.log("res of "+i+" value = "+ response[i].category);
                        for (let index = 0; index < catFilter.length; index++) {
                            // console.log("cat of "+index+" value = "+ catFilter[index]);
                            
                            if (catFilter[index]==response[i].category) {
                                console.log("in if");
                                let description = response[i].description;
                        let title = response[i].title;
                        pro += `
        
                        <div class="shop  col-5 product-card">
                            <div class="shop  badge">Hot</div>
                            <div class="shop  product-tumb">
                                <img class="shop"src="${response[i].image}" alt="${response[i].category}">
                            </div>
                            <div class="shop  product-details">
                                <span class="shop  product-catagory">${response[i].category}</span>
                                <h4><a class="shop" href="#product?id=${response[i].id}">${title.length > 18 ? title.substring(0, 18).concat(' ...') : title
                            }</a></h4>
                                <div class="shop  product-bottom-details">
                                    <div  class="shop  product-price">${response[i].price}</div>
                                    <div class="shop  product-links" onclick="addToCart(${response[i].id})">
                                        <buttom ><i class="shop  fa fa-shopping-cart"></i></buttom>
                                    </div>
                                </div>
                            </div>
                        </div>
            
                   
                   `;
        
                            }    
                            
                        }
                        
                                    }
                }else{
                    console.log('b')
                    for (let i = 0; i < response.length; i++) {
                        let description = response[i].description;
                        let title = response[i].title;
                        pro += `
            
                            <div class="shop  col-5 product-card">
                            <div class="shop  badge">Hot</div>
                            <div class="shop  product-tumb">
                                <img class="shop"src="${response[i].image}" alt="${response[i].category}">
                            </div>
                            <div class="shop  product-details">
                                <span class="shop  product-catagory">${response[i].category}</span>
                                <h4><a class="shop" href="#product?id=${response[i].id}">${title.length > 18 ? title.substring(0, 18).concat(' ...') : title
                            }</a></h4>
                                <div class="shop  product-bottom-details">
                                    <div  class="shop  product-price">${response[i].price}</div>
                                    <div class="shop  product-links" onclick="addToCart(${response[i].id})">
                                        <buttom ><i class="shop  fa fa-shopping-cart"></i></buttom>
                                    </div>
                                </div>
                            </div>
                        </div>
            
                   
                   `;
                    }
                }
                                // console.log(pro);
                                products.innerHTML=pro;
            } catch (err) {
                console.log(err);
            }
        }
        fetchProducts('https://fakestoreapi.com/products');    
    }
    as()