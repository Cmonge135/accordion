const btns = document.querySelectorAll(".title");
const body = document.querySelectorAll(".text");

btns.forEach(btn => {
    btn.addEventListener("click", (e) => {

        body.forEach(body =>{
            if (e.target.nextElementSibling !== body && body.classList.contains("active")){
                body.classList.remove("active");
                btns.forEach((btn) => btn.classList.remove("active"));
            }
        });
        const panel = btn.nextElementSibling;
        panel.classList.toggle("active");
        btn.classList.toggle("active");
    });
});

window.onclick = (e) => {
    if (!e.target.matches(".title")){
        btns.forEach((btn) => btn.classList.remove("active"));
        body.forEach((body) => body.classList.remove("active"));
    }
}
