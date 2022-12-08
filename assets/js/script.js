// DOM

const toLink = document.querySelectorAll(button)

toLink.addEventListener("onClick", getLink)

function getLink(link) {
    location.href = link.value;
}