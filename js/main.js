// document.addEventListener(
//         "contextmenu",
//         function(e) {
//             e.preventDefault();
//         }, !1
//     ),
//     (document.onkeydown = function(e) {
//         return 123 != (e = e || window.event).keyCode && (!e.ctrlKey || !e.shiftKey || 73 != e.keyCode) && void 0;
//     }),
(document.getElementById("btnTomorrow").onclick = function() {
    var ngay = parseInt(document.getElementById("inputDay").value),
        thang = parseInt(document.getElementById("inputMonth").value),
        nam = parseInt(document.getElementById("inputYear").value),
        ngayMai = "";
    switch (thang) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
            if ((0 < ngay) && (ngay < 31)) {
                ngayMai = (ngay + 1) + '/' + thang + '/' + nam;
            } else if (ngay == 31) {
                ngayMai = '1/' + (thang + 1) + '/' + nam;
            } else {
                ngayMai = 'Ngày không xác định !'
            }
            break;
        case 2:
            if ((0 < ngay) && (ngay < 28)) {
                ngayMai = (ngay + 1) + '/' + thang + '/' + nam;
            } else if (ngay == 28) {
                ngayMai = '1/' + (thang + 1) + '/' + nam;
            } else {
                ngayMai = 'Ngày không xác định !'
            }
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            if ((0 < ngay) && (ngay < 30)) {
                ngayMai = (ngay + 1) + '/' + thang + '/' + nam;
            } else if (ngay == 30) {
                ngayMai = '1/' + (thang + 1) + '/' + nam;
            } else {
                ngayMai = 'Ngày không xác định !'
            }
            break;
        case 12:
            if ((0 < ngay) && (ngay < 31)) {
                ngayMai = (ngay + 1) + '/' + thang + '/' + nam;
            } else if (ngay == 31) {
                ngayMai = '1/1/' + (nam + 1);
            } else {
                ngayMai = 'Ngày không xác định !'
            }
            break;
        default:
            ngayMai = "Tháng không xác định";
    }
    document.getElementById("txtDate").innerHTML = ngayMai;
}),
(document.getElementById("btnYesterday").onclick = function() {
    var ngay = parseInt(document.getElementById("inputDay").value),
        thang = parseInt(document.getElementById("inputMonth").value),
        nam = parseInt(document.getElementById("inputYear").value),
        ngayHomQua = "";
    switch (thang) {
        case 1:
            if ((1 < ngay) && (ngay < 32)) {
                ngayHomQua = (ngay - 1) + '/' + thang + '/' + nam;
            } else if (ngay == 1) {
                ngayHomQua = '31/12/' + (nam - 1);
            } else {
                ngayHomQua = 'Ngày không xác định !'
            }
            break;
        case 2:
            if ((1 < ngay) && (ngay < 29)) {
                ngayHomQua = (ngay - 1) + '/' + thang + '/' + nam;
            } else if (ngay === 1) {
                ngayHomQua = '31/1/' + nam
            } else {
                ngayHomQua = 'Ngày không xác định !'
            }
            break;
        case 3:
            if ((1 < ngay) && (ngay < 32)) {
                ngayHomQua = (ngay - 1) + '/' + thang + '/' + nam;
            } else if (ngay == 1) {
                ngayHomQua = '28/2/' + nam;
            } else {
                ngayHomQua = 'Ngày không xác định !'
            }
            break;
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            if ((1 < ngay) && (ngay < 32)) {
                ngayHomQua = (ngay - 1) + '/' + thang + '/' + nam;
            } else if (ngay == 1) {
                ngayHomQua = '30/' + (thang - 1) + '/' + nam;
            } else {
                ngayHomQua = 'Ngày không xác định !'
            }
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            if ((1 < ngay) && (ngay < 31)) {
                ngayHomQua = (ngay - 1) + '/' + thang + '/' + nam;
            } else if (ngay == 1) {
                ngayHomQua = '31/' + (thang - 1) + '/' + nam;
            } else {
                ngayHomQua = 'Ngày không xác định !'
            }
            break;
    }
    document.getElementById("txtDate").innerHTML = ngayHomQua;
}),
(document.getElementById("btnCalcDay").onclick = function() {
    var thang = parseInt(document.getElementById("inputMonth2").value),
        nam = parseInt(document.getElementById("inputYear2").value),
        soNgayCuaThang = 0;
    if ((thang == 1) || (thang == 3) || (thang == 5) || (thang == 7) || (thang == 8) || (thang == 10) || (thang == 12)) {
        soNgayCuaThang = 31;
    } else if ((thang == 4) || (thang == 6) || (thang == 9) || (thang == 11)) {
        soNgayCuaThang = 30;
    } else if (thang == 2) {
        if (nam % 4 == 0) {
            soNgayCuaThang = 29;
        } else {
            soNgayCuaThang = 28;
        }
    }
    document.getElementById("txtCalcDay").innerHTML = "Tháng " + thang + " năm " + nam + " có " + soNgayCuaThang + " ngày";
}),

document.getElementById("btnReadInt").addEventListener("click", function() {
        var number = document.getElementById("inputReadInt").value,
            htmlString = '';
        if (number == 5) {
            htmlString = 'năm';
        } else if (number == -5) {
            htmlString = 'âm năm';
        } else if (number < 0) {
            htmlString += 'âm ' + docSo(Math.abs(number));
        } else if (number == 0) {
            htmlString = 'không';
        } else if (number > 0) {
            htmlString = docSo(number);
        }

        document.getElementById("txtReadInt").innerHTML = htmlString;
    }),


    document.getElementById("btnSearch").addEventListener("click", function() {
        var ten1 = document.getElementById('inputName1').value,
            ten2 = document.getElementById('inputName2').value,
            ten3 = document.getElementById('inputName3').value,
            x1 = +document.getElementById('inputX1').value,
            y1 = +document.getElementById('inputY1').value,
            x2 = +document.getElementById('inputX2').value,
            y2 = +document.getElementById('inputY2').value,
            x3 = +document.getElementById('inputX3').value,
            y3 = +document.getElementById('inputY3').value,
            x = +document.getElementById('inputX4').value,
            y = +document.getElementById('inputY4').value,
            htmlString = 'Sinh viên xa trường nhất là : ',
            xx1 = Math.sqrt(Math.pow(x - x1, 2) + Math.pow(y - y1, 2)),
            xx2 = Math.sqrt(Math.pow(x - x2, 2) + Math.pow(y - y2, 2)),
            xx3 = Math.sqrt(Math.pow(x - x3, 2) + Math.pow(y - y3, 2));
        var max = xx1;
        if (xx2 > max) { max = xx2; }
        if (xx3 > max) { max = xx3; }
        if (max = xx1) {
            htmlString += ten1;
        } else if (max = xx2) {
            htmlString += ten2;
        } else {
            htmlString += ten3;
        }
        document.getElementById('txtSearch').innerHTML = htmlString;
    });


function docSo(number) {
    var a = '',
        hangTram = Math.floor(number / 100),
        hangChuc = Math.floor((number % 100) / 10),
        hangDonVi = Math.floor((number % 100) % 10);
    switch (hangTram) {
        case 1:
            a += "một trăm ";
            break;
        case 2:
            a += "hai trăm ";
            break;
        case 3:
            a += "ba trăm ";
            break;
        case 4:
            a += "bốn trăm ";
            break;
        case 5:
            a += "năm trăm ";
            break;
        case 6:
            a += "sáu trăm ";
            break;
        case 7:
            a += "bảy trăm ";
            break;
        case 8:
            a += "tám trăm ";
            break;
        case 9:
            a += "chín trăm ";
            break;
        default:
            alert("số hàng trăm không xác định được");
    }
    switch (hangChuc) {
        case 1:
            a += "mười ";
            break;
        case 2:
            a += "hai mươi ";
            break;
        case 3:
            a += "ba mươi ";
            break;
        case 4:
            a += "bốn mươi ";
            break;
        case 5:
            a += "năm mươi ";
            break;
        case 6:
            a += "sáu mươi ";
            break;
        case 7:
            a += "bảy mươi ";
            break;
        case 8:
            a += "tám mươi ";
            break;
        case 9:
            a += "chín mươi ";
            break;
        default:
            alert("Số hàng chục không xác định được");
    }
    switch (hangDonVi) {
        case 1:
            a += "một";
            break;
        case 2:
            a += "hai";
            break;
        case 3:
            a += "ba";
            break;
        case 4:
            a += "bốn";
            break;
        case 5:
            a += "lăm";
            break;
        case 6:
            a += "sáu";
            break;
        case 7:
            a += "bảy";
            break;
        case 8:
            a += "tám";
            break;
        case 9:
            a += "chín";
            break;
        default:
            alert("Số hàng đơn vị không xác định được.");
    }
    return a;
}