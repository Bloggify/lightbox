exports.init = function () {
    var self = this;
    Config.options = Object(Config.options);

    var customCSS = Config.options.customCSS = Config.options.customCSS || []
      , customJS = Config.options.customJS  = Config.options.customJS  || []
      ;

    // Add JS urls
    customJS.push("/api/plugin-file/" + self.name + "/js/lightbox.js");
    customJS.push("/api/plugin-file/" + self.name + "/js/lightbox-handlers.js");

    // Add CSS urls
    customCSS.push("/api/plugin-file/" + self.name + "/css/lightbox.css");
};
