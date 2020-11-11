$(document).ready(function(){
	 $('#naruto').hide();
$('#jojo').hide();
$('#onepiece').hide();
$('#dragonball').hide();
$('form').hide();

$('#N').on("click",function(){
$('.container').hide();
$('#naruto').show();

})

$('#D').on("click",function(){
$('.container').hide();
$('#dragonball').show();

})

$('#J').on("click",function(){
$('.container').hide();
$('#jojo').show();

})

$('#O').on("click",function(){
$('.container').hide();
$('#onepiece').show();

})
$('.center').on("click",function(){
$('.container').hide();
$('#naruto').hide();
$('#jojo').hide();
$('#onepiece').hide();
$('#dragonball').hide();
$('form').show();

})	

var customers = [];

$('#submit').on("click",function(){
var fname =document.getElementById("fname").value;
var lname =document.getElementById("lname").value;
var aadresse =document.getElementById("aadresse").value;
var pnum = document.getElementById("pnum").value;
var methode = document.getElementById("methode").value;

	
var customer={};
	  
		customer.fname=fname,
		customer.lname=lname,
		customer.aadresse=aadresse,
		customer.pnum=pnum,
		customer.methode=methode,
	
	customers.push(customer);
	
	

})

$('#home').on("click",function(){

$('#naruto').hide();
$('#jojo').hide();
$('#onepiece').hide();
$('#dragonball').hide();
$('form').hide();
$('.container').show();
})




})



