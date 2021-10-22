// const htmlCode = CodeMirror(document.querySelector("#html"), {
//     lineNumbers:true,
//     theme:"darcula",
//     tabSize:4,
//     mode:"xml",
//     lineWrapping:true
// })
// const cssCode = CodeMirror(document.querySelector("#css"), {
//     lineNumbers: true,
//     theme:"darcula",
//     tabSize: 4,
//     lineWrapping:true,
//     mode: "css"
// })

// const jsCode = CodeMirror(document.querySelector("#js"), {
//     lineWrapping:true,
//     lineNumbers: true,
//     tabSize: 4,
//     mode: "javascript",
//     theme:"darcula"
// })



function run() {
    const htmlcode = document.querySelector("#html").value;
    const csscode = "<style>" + document.querySelector("#css").value + "</style>";
    const jscode = document.querySelector("#js").value;

    const result = document.querySelector("#result");

    result.contentDocument.body.innerHTML = htmlcode + csscode;
    result.contentWindow.eval(jscode);
}

const width = window.innerWidth;
const main_container = document.querySelector(".main_editor");


if (width < 768) {
    setTimeout(() => { alert("edit and touch on resuts it will run") }, 1000);
    const header = `<div class="header">HTML<button id="html_tab">HTML</button><button id="css_tab">CSS</button><button id="js_tab">JAVASCRIPT</button></div>`
    main_container.insertAdjacentHTML("afterbegin", header);
    remove(document.querySelector(".html_code"), document.querySelector(".html_header"));
    remove(document.querySelector(".css_code"), document.querySelector(".css_header"));
    remove(document.querySelector(".javascript_code"), document.querySelector(".js_header"));
    const html_tab = document.querySelector("#html_tab");
    const css_tab = document.querySelector("#css_tab");
    const js_tab = document.querySelector("#js_tab");
    html_tab.addEventListener("click", () => {
        openPage(0);
    })
    css_tab.addEventListener("click", () => {
        openPage(-33.3333333);
    })
    js_tab.addEventListener("click", () => {
        openPage(-66.6666666);
    })
}
else if (width < 480) {

}

function remove(root, root2) {
    root.removeChild(root2);
}

function openPage(rate) {
    document.querySelector(".main_container").style.transform = `translateX(${rate}%)`;
}