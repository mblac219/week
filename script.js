$ (document).ready( function( ) {

let currentHour = moment( ).format( "HH");
let date = document.getElementById( "currentDay");
let today = moment().format( "MMMM Do YYYY");
date.innerHTML = today;

});