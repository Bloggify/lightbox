MiniLightbox.customClose = function () {
    var self = this;
    self.img.classList.add("animated", "fadeOutDown");
    setTimeout(function () {
        self.box.classList.add("animated", "fadeOut");
        setTimeout(function () {
            self.box.classList.remove("animated", "fadeOut");
            self.img.classList.remove("animated", "fadeOutDown");
            self.box.style.display = "none";
        }, 500);
    }, 500);
    return false;
};

MiniLightbox.customOpen = function () {
    this.box.classList.add("animated", "fadeIn");
    this.img.classList.add("animated", "fadeInUp");
};

window.onload = function () {
    MiniLightbox({
        "selector": "img"
      , delegation: "body"
    });
};
