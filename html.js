const time = new Date().getHours()
let day = new Date().toDateString();
let greeting;

if (time < 12 && day) {
    greeting = "Good morning! " + "It's " + day;


}

else if (time < 20){
    greeting = "Good day! " + "It's " + day;

}
else{
    greeting = "Good evening! " + "It's " + day;
}
document.getElementById("greet").innerHTML = greeting
document.getElementById("greet").style.fontStyle = "italic"

if (window.location.protocol === 'file:') {
    console.log('Running as local file!');
}
else if (window.location.host.startsWith('localhost')) {
    console.log('Running on a local server');
}
else {
    console.log('Running on a remote web server');
}
