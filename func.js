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
    console.log("Ghi localStorage");
    console.log(obj);
}

export { doc, ghi }