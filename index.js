module.exports = function () {
    // Add JS urls
    Bloggify._config.customJS.push("/api/plugin-file/" + self.name + "/js/lightbox.js");
    Bloggify._config.customJS.push("/api/plugin-file/" + self.name + "/js/lightbox-handlers.js");

    // Add CSS url
    Bloggify._config.customCSS.push("/api/plugin-file/" + self.name + "/css/lightbox.css");
};
