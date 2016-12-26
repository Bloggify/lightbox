const MiniLightbox = require("mini-lightbox");

MiniLightbox.customClose = function (self) {
    self.img.classList.add("animated", "zoomOut");
    setTimeout(function () {
        self.box.classList.add("animated", "fadeOut");
        setTimeout(function () {
            self.box.classList.remove("animated", "fadeOut");
            self.img.classList.remove("animated", "zoomOut");
            self.box.style.display = "none";
        }, 500);
    }, 500);
    return false;
};

MiniLightbox.customOpen = function (self) {
    if (self.el.parentElement.tagName === "A" || self.el.classList.contains("emoji-img")) {
        return false;
    }
    self.box.classList.add("animated", "fadeIn");
    self.img.classList.add("animated", "zoomIn");
};

window.onload = function () {
    new MiniLightbox({
        selector: ".content img"
      , delegation: "html"
    });
};
