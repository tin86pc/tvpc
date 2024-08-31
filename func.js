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


export { doc, ghi, TextToHtml }