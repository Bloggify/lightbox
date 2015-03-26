MiniLightbox.customClose = function () {
    var self = this;
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

MiniLightbox.customOpen = function () {
    this.box.classList.add("animated", "fadeIn");
    this.img.classList.add("animated", "zoomIn");
};

window.onload = function () {
    MiniLightbox({
        "selector": ".content img"
      , delegation: "html"
    });
};
