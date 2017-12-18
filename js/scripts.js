function Phone(brand, price, color, internet, owner) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.internet = internet;
	this.owner = owner;
}
Phone.prototype.printInfo = function() {
		console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
}
Phone.prototype.internetConnection = function() {
	console.log("Type of internet connection: " + this.internet + ".");
}
Phone.prototype.whoIsOwner = function() {
	console.log( this.owner + "  is  owner of " + this.color + " " + this.brand);
}
var iPhone6S = new Phone("Apple", 2250, "silver", "lte", "Bartek");
var galaxyS6 = new Phone("Samsung", 1250, "black", "3G", "Aga");
var onePlus = new Phone("One", 920, "white", "none", "Tomek");

iPhone6S.printInfo();
galaxyS6.printInfo();
onePlus.printInfo();