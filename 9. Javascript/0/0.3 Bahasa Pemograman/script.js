var keyword = document.getElementById('keyword'),
    tujuan = document.getElementById('tujuan'),
    tombol = document.getElementById('tombol-cari'),

tombol.style.display = 'none';

keyword.addEventListener('keyup', function() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if( xhr.status === 200 && xhr.readyState === 4 ) {
            tujuan.innerHTML = xhr.responseText;
        }
    }
    xhr.open('GET', 'ajax/cari.php?keyword=' + keyword.value, true);
    xhr.send();
});