document.getElementById('registerBtn').addEventListener('click', function() {
    document.getElementById('dataBase').style.display = 'none';
    document.getElementById('register').style.display = 'block';
});

document.getElementById('dataBaseBtn').addEventListener('click', function() {
    document.getElementById('register').style.display = 'none';
    document.getElementById('dataBase').style.display = 'block';
});
window.onload = function() {
    document.getElementById('dataBase').style.display = 'none'; 
};
