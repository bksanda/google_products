var data = require("./products.json")

// Write your solutions below

// 1.) The kind of results you're are dealing are 
// shopping#products. 
// Go through the items and find all 
// results that have kind of shopping#product. 
// How many are there? 
// Where else is this count information stored in the search results?
//================================
// count = 0;

// for (var i=0; i < data["items"].length; i++) {
//     if (data["items"][i].kind === "shopping#product") {
    	
//    		console.log((i+1) + " " + data["items"][i].kind);
//     	count ++;

//     }

//     //console.log(data["items"].kind)
// }    

// for (var key in data) {
// 	if (data[key] === count){
// 		console.log(key);
// 	}
// } 

// console.log(count);


// //==================================

// 2.) Find all items with a backorder 
// availability in inventories.

count = 0;

for (var i=0; i < data["items"].length; i++) {
    if (data["items"][i].kind === "shopping#product") {
    	
   		console.log((i+1) + " " + data["items"][i].kind);
    	count ++;

    }
}    


for (var key in data) 
	{
	if (data[key] === count){
		console.log(key);
	}
} 

console.log("\n" + "ITEMS IN BACKORDER:" + "\n")
for (var i=0; i < data["items"].length; i++) {
    if (data["items"][i]["product"]["inventories"][0]["availability"] === "backorder") {
    	//console.log((i+1) + " " + data["items"]["product"]["inventories"]);
    	console.log(data["items"][i]["product"]["title"] + "\n");
    }

}    

// 3.) Find all items with 
// more than one image link.
console.log("\n" + "ITEMS WITH MORE THAN ONE IMAGE LINK:" + "\n");
for (var i=0; i < data["items"].length; i++) {
    if (data["items"][i]["product"]["images"].length > 1) {
    	//console.log((i+1) + " " + data["items"]["product"]["inventories"]);
    	console.log("Item category # "+ i + " " + data["items"][i]["product"]["title"]);
    }
}
// 4.) Find all canon products 
// in the items (careful with case sensitivity).
console.log("\n" + "THESE ARE THE CANON PRODUCTS WE CARRY:" + "\n");
for (var i=0; i < data["items"].length; i++) {
    if (data["items"][i]["product"]["brand"] === "Canon") {
    	//console.log((i+1) + " " + data["items"]["product"]["inventories"]);
    	console.log("Item category # "+ i + ":" + " " + data["items"][i]["product"]["title"]);
    }
}

// 5.) Find all items that have 
// product author name of "eBay" and are brand "Canon".

console.log("\n" + "THESE CANON PRODUCTS ARE SOLD BY EBAY:");
for (var i=0; i < data ["items"].length; i++) {
	if (data["items"][i]["product"]["brand"] === "Canon" && data["items"][i]["product"]["author"]["name"] === "eBay") {
		console.log("Item cat # "+ i + ":" + " " + data["items"][i]["product"]["title"]);
	}
}

// 6.) Print all the products with their brand, 
// price, and a image link

console.log("\n" + "PRODUCTS: ")
for (var i = 0; i < data["items"].length; i++ ) {
	console.log("Products: " + data["items"][i]["product"]["title"]);
	console.log("Brand: " + data["items"][i]["product"]["brand"]);
	console.log("Price: " + data["items"][i]["product"]["inventories"][0]["price"]);
	console.log("Image Link: " + data["items"][i]["product"]["images"][0]["link"]);
	console.log("\n");
}
