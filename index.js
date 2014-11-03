module.exports = function (plugin) {
    // Add JS urls
    Bloggify._config.customJS.push("/api/plugin-file/" + plugin.name + "/js/lightbox.js");
    Bloggify._config.customJS.push("/api/plugin-file/" + plugin.name + "/js/lightbox-handlers.js");

    // Add CSS url
    Bloggify._config.customCSS.push("/api/plugin-file/" + plugin.name + "/css/lightbox.css");
};
