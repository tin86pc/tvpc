function doc(key) {

    // đọc
    const S_obj = localStorage.getItem("tvpc");
    let obj = new Object();
    if (S_obj != null) {
        Object.assign(obj, JSON.parse(S_obj));
    }
    return obj[key];
}

function ghi(o) {
    // đọc
    const S_obj = localStorage.getItem("tvpc");
    let obj = new Object();
    if (S_obj != null) {
        Object.assign(obj, JSON.parse(S_obj));
    }

    // ghi 
    Object.assign(obj, o);
    localStorage.setItem("tvpc", JSON.stringify(obj));
    // console.log("Ghi localStorage");
    // console.log(obj);
}
function TextToHtml(id, text) {
    // console.log(id);
    // console.log(text);
    if (text == null || id == null)
        return;


    let g = document.getElementById(id);

    // Thêm giao diện
    g.innerHTML = text

    // Thêm code
    var scripts = g.getElementsByTagName("script");
    for (var i = 0; i < scripts.length; i++) {
        eval(scripts[i].innerText);
    }
}

function pl1(ket_qua) {
    ket_qua.innerHTML += "<p>- Công trình thuộc diện quản lý về phòng cháy và chữa cháy</p>"
}

function pl2(ket_qua) {
    ket_qua.innerHTML += "<p>- Công trình thuộc diện có nguy hiểm về cháy nổ</p>"
}


function pl3(ket_qua) {
    ket_qua.innerHTML += "<p>- Do cơ quan công an quản lý</p>"
}

function pl4(ket_qua) {
    ket_qua.innerHTML += "<p>- Do ủy ban nhân dân cấp xã quản lý</p>"
}

function pl5(ket_qua) {
    ket_qua.innerHTML += "<p>- Công trình thuộc diện phải thẩm duyệt nghiệm thu</p>"
}


export { doc, ghi, TextToHtml, pl1, pl2, pl3, pl4, pl5 }