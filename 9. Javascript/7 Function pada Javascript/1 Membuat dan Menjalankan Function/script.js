// Contoh Kasus

    // function jumlahVolumeDuaKubus(a, b) {   // 1. Ketahui sisi masing2 kubus
    //     var total;  //4.1 Kembalikan nilai jawabannya

    //     volumeA = a * a * a;    //2.1 Hitung volume masing2 kubus
    //     volumeB = b * b * b;    //2.2 Hitung volume masing2 kubus
    //     total = volumeA + volumeB;  //3. Jumlahkan hasilnya

    //     return total; //4.2 Kembalikan nilai jawabannya
    // }
    
    function jumlahVolumeDuaKubus(a, b) {  //1.1 Membuat Function
        var volumeA;
        var volumeB;  
        var total; 

        volumeA = a * a * a;    
        volumeB = b * b * b;

        total = volumeA + volumeB;  

        return total; 
    }                                       //1.2 Membuat function

    alert(jumlahVolumeDuaKubus(8, 3)); //2, Menjalankan function
    alert(jumlahVolumeDuaKubus(10, 15));