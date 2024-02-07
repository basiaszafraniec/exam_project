//functions for creating a header and footer
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
        { label: "ABOUT", link: "#about" },
        { label: "BARS", link: "#bars" },
        { label: "FAQ", link: "#faq" },
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

function create_footer() {
    let footer = document.createElement("footer");
    footer.className = "footer1";
    let footer_div_contact = document.createElement("div");

    let footer_paragraphs = ["feel free to ask any questions :)", "tel: 60606060", "email: fridaybars@au.dk"];
    for (let j = 0; j < footer_paragraphs.length; j++) {
        let paragraph = document.createElement("p");
        paragraph.textContent = footer_paragraphs[j];
        footer_div_contact.appendChild(paragraph);
    }
    let footer_div_links = document.createElement("div");

    let button_data = [
        {label: "HOME", link: "index.html"},
        { label: "ABOUT", link: "#about" },
        { label: "BARS", link: "#bars" },
        { label: "FAQ", link: "#faq" },
        { label: "MAP", link: "#map" }
    ];

    for (let i = 0; i < button_data.length; i++) {
        let button = document.createElement("a");
        button.href = button_data[i].link;
        button.textContent = button_data[i].label;
        footer_div_links.appendChild(button);
    }
    footer.appendChild(footer_div_links);    
    footer.appendChild(footer_div_contact);

    document.body.appendChild(footer);
}

create_header();
create_footer();

document.querySelectorAll("section").forEach((e) => {
    e.style.minHeight = (window.innerHeight.toString()) - 
    parseInt((getComputedStyle(document.querySelector(".header1"))).height) + "px";
});

//function for the faq accordeon
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
