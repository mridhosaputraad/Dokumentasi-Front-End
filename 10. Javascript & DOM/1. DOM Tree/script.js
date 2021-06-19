/* DOM Tree

-> Merupakan representasi dari elemen HTML
-> Yang di dalamnya terdiri dari node:
    > Element
    > Atribut
    > Document

> NodeList vs. HTMLCollection
    > Keduanya merupakan kumpulan kode
    > struktur datanya mirip array
    > nodeList dapat berisi node apapun, sedangkan HTMLCollection harus berisi elemen HTML
    > HTMLCollection bersifat live sedangkan nodeLisst tidak

Struktur Hierarki DOM

-> Root Node
    > node yang menjadi sumber dari semua node lain di dalam DOM
    > yang secara default node tersebut adalah document
-> Parent Node
    > node yang berada 1 tingkat diatas node yang lain
    > body adalah parent dari h1, p, p, div dan a
-> Child Node
    > node yang berada 1 tingkat dibawah node yang lain
    > h1 adalah child dari body

*/ 