const products = [
    {
        id: 1,
        name: "Floral Summer Shirt",
        src: "f1.jpg",
        desc: "",
        price: 220,
        tags: ["new", "blue", "summer"]
    },
    {
        id: 2,
        name: "Summer Green",
        src: "f2.jpg",
        desc: "",
        price: 260,
        tags: ["new", "green", "beach"]
    },
    {
        id: 3,
        name: "Party Floral Shirt",
        src: "f3.jpg",
        desc: "",
        price: 399,
        tags: ["old", "red", "party"]
    },
    {
        id: 4,
        name: "Floral Summer Shirt",
        src: "f4.jpg",
        desc: "",
        price: 399,
        tags: ["old", "white", "beach"]
    },
    {
        id: 5,
        name: "Beach Shirt",
        src: "f5.jpg",
        desc: "",
        price: 579,
        tags: ["old", "white", "beach"]
    }
    ,
    {
        id: 6,
        name: "Shirt Party Red",
        src: "f6.jpg",
        desc: "",
        price: 579,
        tags: ["old", "red", "party"]
    },
    {
        id: 7,
        name: "Party Floral Shirt",
        src: "f3.jpg",
        desc: "",
        price: 399,
        tags: ["old", "red", "party"]
    },
    {
        id: 8,
        name: "Shirt Party Red",
        src: "f6.jpg",
        desc: "",
        price: 579,
        tags: ["old", "red", "party"]
    },
    {
        id: 9,
        name: "Floral Summer Shirt",
        src: "f1.jpg",
        desc: "",
        price: 220,
        tags: ["new", "blue", "summer"]
    },
]
var offerBar = document.querySelector(".offer-bar")
document.getElementById("offer-close").addEventListener("click",
    function () {
        offerBar.style.display = "none"
    }
)
var sideNavMenu = document.querySelector(".navbar-menu-toggle")
var sidenavbar = document.querySelector(".side-navbar")
sideNavMenu.addEventListener("click", function () {
    sidenavbar.style.marginLeft = "0px"
})
document.getElementById("side-navbar-close").addEventListener("click", () => {
    document.querySelector(".side-navbar").style.marginLeft = "-60%"
})
var container = document.querySelector(".products")
products.forEach((product) => {
    
    var createItem = document.createElement("div")
    createItem.classList.add("product")
    createItem.innerHTML = ` <img style="width: 20vw;" src="img/${product.src}">
    <h1>${product.name}</h1>
    <p>₹${product.price}</p>
    <tags style="visibility:hidden;">${product.tags}</tags>`
    container.append(createItem)
})
var filterList = []
var tags = document.getElementsByName("tags")

tags.forEach((tag) => {
    tag.addEventListener("change", (e) => {
        if (e.target.checked) {
            filterList.push(e.target.value)
            update()
        }
        else {
            filterList = filterList.filter(item => item !== e.target.value);
            update()
        }
    })
})
function update() {
    var productList = document.querySelectorAll(".product")
    for (var i = 0; i < productList.length; i++) {
        var check = false
        var product = productList[i]
        var temp = product.querySelector("tags").innerHTML
        const tempFilterArray = temp.split(',');
        filterList.forEach((j) => {
            tempFilterArray.forEach((i) => {
                if (j == i) {
                    check = true
                }
            })
        })
        if (!check && filterList.length > 0) {
            product.style.display = "none"
        }
        else {
            product.style.display = "block"
        }
    };
}

/*Search functionality*/

let search = document.getElementById('search');
let productContainer = document.getElementById('productContainer');
let productList = productContainer.querySelectorAll('div');

search.addEventListener('keyup', function (event) {
    let enteredValue = event.target.value.toUpperCase();

    for (count = 0; count < productList.length; count = count + 1) {

        let productName = productList[count].querySelector('h1').textContent;

        if (productName.toUpperCase().indexOf(enteredValue) < 0) {
            productList[count].style.display = 'none';
        }
        else {
            productList[count].style.display = 'block';
        }
    }
});