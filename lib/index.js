module.exports = function () {
    // Add JS urls
    Bloggify.config.options.customJS.push("/api/plugin-file/" + this.plugin.name + "/js/lightbox.js");
    Bloggify.config.options.customJS.push("/api/plugin-file/" + this.plugin.name + "/js/lightbox-handlers.js");

    // Add CSS url
    Bloggify.config.options.customCSS.push("/api/plugin-file/" + this.plugin.name + "/css/lightbox.css");
};
