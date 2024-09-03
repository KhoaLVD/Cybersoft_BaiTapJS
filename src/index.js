//Quản lý tuyển sinh
const quanLyKhuVuc = (heSoKhuVuc) =>{
    let diemCongKhuVuc;
    diemCongKhuVuc = Number(diemCongKhuVuc);
    switch (heSoKhuVuc) {
        case "A":{
            diemCongKhuVuc = 2;
            break;
        }
        case "B": {
            diemCongKhuVuc = 1;
            break;
        }
        case "C": {
            diemCongKhuVuc = 0.5;
            break;
        }
        case "X": {
            diemCongKhuVuc = 0;
            break;
        }
    }
    return diemCongKhuVuc;
    // if (heSoKhuVuc === 'A'){
    //     diemCongKhuVuc = 2;
    //     return diemCongKhuVuc;
    // } else if(heSoKhuVuc ==='B'){
    //     diemCongKhuVuc = 1;
    //     return diemCongKhuVuc;
    // } else if(heSoKhuVuc ==='C'){
    //     diemCongKhuVuc = 0.5;
    //     return diemCongKhuVuc;
    // } else if(heSoKhuVuc ==='X'){
    //     diemCongKhuVuc = 0;
    //     return diemCongKhuVuc;
    // }
}
const quanLyDoiTuong = (heSoDoiTuong) =>{
    let diemCongDoiTuong;
    diemCongDoiTuong = Number(diemCongDoiTuong);
    switch (heSoDoiTuong) {
        case 1:{
            diemCongDoiTuong = 2.5;
            break;
        }
        case 2: {
            diemCongDoiTuong = 1.5;
            break;
        }
        case 3: {
            diemCongDoiTuong = 1;
            break;
        }   
        case 0: {
            diemCongDoiTuong = 0;
            break;
        }
    }
    return diemCongDoiTuong;
    // if (heSoDoiTuong === 1){
    //     diemCongDoiTuong = 2.5;
    //     return diemCongDoiTuong;
    // } else if(heSoDoiTuong === 2){
    //     diemCongDoiTuong = 1.5;
    //     return diemCongDoiTuong;
    // } else if(heSoDoiTuong ===3){
    //     diemCongDoiTuong = 0.5;
    //     return diemCongDoiTuong;
    // } else if(heSoDoiTuong ===0){
    //     diemCongDoiTuong = 0;
    //     return diemCongDoiTuong;
    // }
}
const tong3Mon = (a,b,c) =>{
    let result = a+b+c;
    return result;
}
const isKhongMonNaoDuoiKo = (a,b,c) =>{
    if(a>0 &&b>0 &&c>0){
        return true;
    }
    else{
        return false;
    }
}
const quanLyTuyenSinh = () =>{
    let txtDiemChuan = document.getElementById("diemChuan").value *1;
    let txtToan = document.getElementById("diemToan").value*1;
    let txtLy = document.getElementById("diemLy").value*1;
    let txtHoa = document.getElementById("diemHoa").value*1;
    let txtKhuVuc = document.getElementById("khuVuc").value;
    let txtDoiTuong = document.getElementById("doiTuong").value*1;
    let txtKetQua = document.getElementById("ketQuaTuyenSinh");
    txtKetQua = "";

    let txtDiem3Mon = tong3Mon(txtToan, txtLy, txtHoa);
    let isDuyet = isKhongMonNaoDuoiKo(txtToan, txtLy, txtHoa);
    let diemTong = txtDiem3Mon + quanLyKhuVuc(txtKhuVuc) + quanLyDoiTuong (txtDoiTuong); 
    if(diemTong>= txtDiemChuan && isDuyet === true){
        txtKetQua+=`<div style='background-color: green; color:white; text-align:center'> Chúc mừng thí sinh đã đậu với số điểm ${diemTong} </div>` ;
        ketQuaTuyenSinh.innerHTML = txtKetQua;
    }
    else if(diemTong>= txtDiemChuan && isDuyet === false){
        txtKetQua+=`<div style='background-color: orange; color:white; text-align:center'> Thí sinh rớt với số điểm ${diemTong}: đủ điệm đậu nhưng có môn 0 điểm </div>` ;
        ketQuaTuyenSinh.innerHTML = txtKetQua;
    }
    else{
        txtKetQua+=`<div style='background-color: black; color:white; text-align:center'> Thí sinh rớt với số điểm ${diemTong} </div>` ;
        ketQuaTuyenSinh.innerHTML = txtKetQua;
    }

}

//Tính tiền điện
const tinhSoKW = () =>{
    let txtTenNguoiDung = document.getElementById("userName").value;
    let txtSoKW = document.getElementById("soKw").value*1;
    let txtKetQua = document.getElementById("ketQuaTienDien");
    txtKetQua = "";

    if (txtSoKW <=50){
        txtKetQua+=`<div style='background-color: orange; color:white; text-align:center'> Tiền điện khách hàng ${txtTenNguoiDung} là ${txtSoKW *500}đ </div>` ;
        ketQuaTienDien.innerHTML = txtKetQua;
    } else if(txtSoKW>50 && txtSoKW<=100){
        txtKetQua+=`<div style='background-color: orange; color:white; text-align:center'> Tiền điện khách hàng ${txtTenNguoiDung} là ${txtSoKW *650}đ </div>` ;
        ketQuaTienDien.innerHTML = txtKetQua;
    } else if(txtSoKW>100 && txtSoKW<=200){
        txtKetQua+=`<div style='background-color: orange; color:white; text-align:center'> Tiền điện khách hàng ${txtTenNguoiDung} là ${txtSoKW *850}đ </div>` ;
        ketQuaTienDien.innerHTML = txtKetQua;
    } else if(txtSoKW>200 && txtSoKW<=350){
        txtKetQua+=`<div style='background-color: orange; color:white; text-align:center'> Tiền điện khách hàng ${txtTenNguoiDung} là ${txtSoKW *1100}đ </div>` ;
        ketQuaTienDien.innerHTML = txtKetQua;
    } else {
        txtKetQua+=`<div style='background-color: orange; color:white; text-align:center'> Tiền điện khách hàng ${txtTenNguoiDung} là ${txtSoKW *1300}đ </div>` ;
        ketQuaTienDien.innerHTML = txtKetQua;
    }
}

//Thuế thu nhập cá nhân
const thuNhapChiuThue = (a,b) =>{
    const result = a - 4 - b*1.6;
    return result;
}

const thueThuNhapCaNhan = () =>{
    let txtTenNguoiDung = document.getElementById("userNameTax").value;
    let txtSalary = document.getElementById("salary").value*1;
    let txtPeople = document.getElementById("people").value*1;
    let txtKetQua = document.getElementById("ketQuaThue");
    txtKetQua = "";
    let thuNhap = thuNhapChiuThue(txtSalary, txtPeople);

    if(thuNhap <= 60){
        txtKetQua+=`<div style='background-color: orange; color:white; text-align:center'> Số thuế ${txtTenNguoiDung} phải chịu là ${(thuNhap*5)/100} triệu </div>` ;
        ketQuaThue.innerHTML = txtKetQua;
    }else if(thuNhap>60 && thuNhap<=120){
        txtKetQua+=`<div style='background-color: orange; color:white; text-align:center'> Số thuế ${txtTenNguoiDung} phải chịu là ${(thuNhap*10)/100} triệu </div>` ;
        ketQuaThue.innerHTML = txtKetQua;
    }else if(thuNhap>120 && thuNhap<=210){
        txtKetQua+=`<div style='background-color: orange; color:white; text-align:center'> Số thuế ${txtTenNguoiDung} phải chịu là ${(thuNhap*15)/100} triệu </div>` ;
        ketQuaThue.innerHTML = txtKetQua;
    }else if(thuNhap>210 && thuNhap<=384){
        txtKetQua+=`<div style='background-color: orange; color:white; text-align:center'> Số thuế ${txtTenNguoiDung} phải chịu là ${(thuNhap*20)/100} triệu </div>` ;
        ketQuaThue.innerHTML = txtKetQua;
    }else if(thuNhap>384 && thuNhap<=624){
        txtKetQua+=`<div style='background-color: orange; color:white; text-align:center'> Số thuế ${txtTenNguoiDung} phải chịu là ${(thuNhap*25)/100} triệu </div>` ;
        ketQuaThue.innerHTML = txtKetQua;
    }else if(thuNhap>624 && thuNhap<=960){
        txtKetQua+=`<div style='background-color: orange; color:white; text-align:center'> Số thuế ${txtTenNguoiDung} phải chịu là ${(thuNhap*30)/100} triệu </div>` ;
        ketQuaThue.innerHTML = txtKetQua;
    }else if(thuNhap>960){
        txtKetQua+=`<div style='background-color: orange; color:white; text-align:center'> Số thuế ${txtTenNguoiDung} phải chịu là ${(thuNhap*35)/100} triệu </div>` ;
        ketQuaThue.innerHTML = txtKetQua;
    }
}

//Tính tiền cáp

let isNhaDanStatus =false;
let isDoanhNghiepStatus = false;
const isNhaDan = () =>{
    let connect = document.getElementById("connectNumb");
    let status = document.getElementById("doanhNghiepOrNhaDan");
    status+= `<div style='background-color: green; color:white; text-align:center'> Bạn đang chọn người dùng là nhà dân </div>` ;
    doanhNghiepOrNhaDan.innerHTML = status;
    connect.disabled = true;
    isNhaDanStatus = true;
    isDoanhNghiepStatus = false;
}
const isDoanhNghiep = () =>{
    let connect = document.getElementById("connectNumb");
    let status = document.getElementById("doanhNghiepOrNhaDan");
    status+= `<div style='background-color: red; color:white; text-align:center'> Bạn đang chọn người dùng là doanh nghiệp </div>` ;
    doanhNghiepOrNhaDan.innerHTML = status;
    connect.disabled = false;
    isNhaDanStatus = false;
    isDoanhNghiepStatus = true;
}
const tienCap = () =>{
    let txtUserCode = document.getElementById("userCode").value;
    let txtVipChanel = document.getElementById("vipChanel").value *1;
    let txtKetQua = document.getElementById("tongTienCap");
    let connect = document.getElementById("connectNumb").value*1;
    txtKetQua = "";
    
    if(isNhaDanStatus === false && connect<=10){
        txtKetQua+=`<div style='background-color: orange; color:white; text-align:center'> Tiền cáp của quý khách với mã khách hàng ${txtUserCode} là: $${txtVipChanel*50 +15 +75}  </div>` ;
        tongTienCap.innerHTML = txtKetQua;
    }else if(isNhaDanStatus === false && connect>10){
        txtKetQua+=`<div style='background-color: orange; color:white; text-align:center'> Tiền cáp của quý khách với mã khách hàng ${txtUserCode} là: $${txtVipChanel*50+15+(connect-10)*5+75}  </div>` ;
        tongTienCap.innerHTML = txtKetQua;
    }else{
        txtKetQua+=`<div style='background-color: orange; color:white; text-align:center'> Tiền cáp của quý khách với mã khách hàng ${txtUserCode} là: $${txtVipChanel*7.5+4.5+20.5}  </div>` ;
        tongTienCap.innerHTML = txtKetQua;
    }
}
// const isWhatStatus