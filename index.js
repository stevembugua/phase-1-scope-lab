// Write your solution in this file!
var customerName = "bob"
function upperCaseCustomerName(){
    return(window.customerName=customerName.toUpperCase())
}
function setBestCustomer(){
    return (window.bestCustomer='not '+ customerName.toLowerCase())
}
function overwriteBestCustomer(){
    return (window.bestCustomer='maybe '+customerName.toLowerCase())
}
const leastFavoriteCustomer = "mary";
function changeLeastFavoriteCustomer(){
    
    return leastFavoriteCustomer ="john"
}

