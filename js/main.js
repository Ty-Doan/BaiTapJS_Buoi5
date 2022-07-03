function manageAdmission() {
    var diemChuan = Number(document.getElementById('inputScore1').value),
        diemKhuVuc = Number(document.getElementById('selLocation').value),
        diemDoiTuong = Number(document.getElementById('selUser').value),
        diem1 = Number(document.getElementById('inputScore2').value),
        diem2 = Number(document.getElementById('inputScore3').value),
        diem3 = Number(document.getElementById('inputScore4').value),
        diemTongKet = diem1 + diem2 + diem3 + diemKhuVuc + diemDoiTuong;
    ketQua = '';
    if ((diem1 == 0) || (diem2 == 0) || (diem3 == 0)) {
        ketQua = 'Bạn đã rớt do có cột điểm bằng 0 !. Điểm Tổng Kết là ' + diemTongKet;
    } else if (diemTongKet < diemChuan) {
        ketQua = 'Bạn đã rớt do điểm Tổng kết < Điểm chuẩn. Điểm Tổng kết là ' + diemTongKet;
    } else {
        ketQua = 'Chúc mừng bạn đã đậu !. Điểm Tổng kết là : ' + diemTongKet;
    }
    document.getElementById('txtResult').innerHTML = ketQua;
}
(document.getElementById("btnResult").onclick = manageAdmission);

function calcElecBill() {
    var e = document.getElementById("inputName").value,
        n = Number(document.getElementById("inputKW").value),
        t = 0;
    0 < n && n <= 50 ?
        (t = n * kw_1) :
        n > 50 && n <= 100 ?
        (t = 50 * kw_1 + (n - 50) * kw_2) :
        n > 100 && n <= 200 ?
        (t = 50 * kw_1 + 50 * kw_2 + (n - 100) * kw_3) :
        n > 200 && n <= 350 ?
        (t = 50 * kw_1 + 50 * kw_2 + 100 * kw_3 + (n - 200) * kw_4) :
        n > 350 ?
        (t = 50 * kw_1 + 50 * kw_2 + 100 * kw_3 + 150 * kw_4 + (n - 350) * kw_5) :
        alert("Số kw không hợp lệ! Vui lòng nhập lại"),
        (t = new Intl.NumberFormat("vn-VN").format(t)),
        (document.getElementById("txtElecBill").innerHTML = "Họ tên: " + e + "; Tiền điện: " + t);
}
const kw_1 = 500,
    kw_2 = 650,
    kw_3 = 850,
    kw_4 = 1100,
    kw_5 = 1300;
(document.getElementById("btnElecBill").onclick = calcElecBill)

// function disableInput() {
//     var e = document.getElementById("selCustomer").value;
//     document.getElementById("inputConnect").style.display = "company" == e ? "block" : "none";
// }


// document.addEventListener(
//         "contextmenu",
//         function(e) {
//             e.preventDefault();
//         }, !1
//     ),
//     (document.onkeydown = function(e) {
//         return 123 != (e = e || window.event).keyCode && (!e.ctrlKey || !e.shiftKey || 73 != e.keyCode) && void 0;
//     }),