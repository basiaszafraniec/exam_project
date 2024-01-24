//functions for creating a header and footer so they 
let header;
function create_header() {
    header = document.createElement("header");
    header.className = "header1";

    let header_div = document.createElement("div");
    header_div.style.display = "flex";

    let home_div = document.createElement("div");
    let button = document.createElement("a");
    button.href = 'index.html';
    button.className = "header_btn";
    button.textContent = "HOME";
    home_div.appendChild(button);

    let button_data = [
        { label: "ABOUT", link: "#what_are_fb" },
        { label: "BARS", link: "#explore" },
        { label: "F&Q", link: "#faq" },
        { label: "MAP", link: "#map" }
    ];

    for (let i = 0; i < button_data.length; i++) {
        let button = document.createElement("a");
        button.href = button_data[i].link;
        button.className = "header_btn";
        button.textContent = button_data[i].label;
        header_div.appendChild(button);
    }
    header.appendChild(home_div);
    header.appendChild(header_div);

    document.body.appendChild(header);
}

// setTimeout(() => { console.log(getComputedStyle(document.getElementById("header1")).height); }, 500);

function create_footer() {
    let footer = document.createElement("footer");
    footer.className = "footer1";

    let footer_img = document.createElement("img");
    footer_img.src = "images/AU_logo.png";
    footer_img.alt = "Aarhus University Logo";
    footer.appendChild(footer_img);

    let footer_div = document.createElement("div");

    let footer_paragraphs = ["feel free to ask any questions :)", "tel: 60606060", "email: fridaybars@au.dk"];
    for (let j = 0; j < footer_paragraphs.length; j++) {
        let paragraph = document.createElement("p");
        paragraph.textContent = footer_paragraphs[j];
        footer_div.appendChild(paragraph);
    }

    footer.appendChild(footer_div);

    document.body.appendChild(footer);
}

create_header();
create_footer();

document.querySelectorAll("section").forEach((e) => {
    // console.log((window.innerHeight.toString()) - parseInt((getComputedStyle(document.querySelector(".header1"))).height) + "px");
    e.style.minHeight = (window.innerHeight.toString()) - parseInt((getComputedStyle(document.querySelector(".header1"))).height) + "px";
});

//function for the f&q accordeon
function accordeon() {
    let acc = document.getElementsByClassName("accordion");
    let i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            let panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
}

accordeon();
