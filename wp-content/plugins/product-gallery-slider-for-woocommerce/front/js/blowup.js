$(document).ready(function(){

});


$(function ($) {
  $.fn.blowup = function (attributes) {

    var $element = this;

    // If the target element is not an image
    if (!$element.is("img")) {
      console.log("%c Blowup.js Error: " + "%cTarget element is not an image.", 
        "background: #FCEBB6; color: #F07818; font-size: 17px; font-weight: bold;",
        "background: #FCEBB6; color: #F07818; font-size: 17px;");
      return;
    }

    // Constants
    var $IMAGE_URL    = $element.attr("src");
    var NATIVE_IMG    = new Image();
    NATIVE_IMG.src    = $element.attr("src");
    var zoomBoxRadius = fme_zoombox.fme_pgisfw_zoombox_radius;






    // Default attributes
    var defaults = {
      round         : true,
      width         : 200,
      height        : 200,
      background    : "#FFF",
      shadow        : "0 8px 17px 0 rgba(0, 0, 0, 0.2)",
      border        : "1px solid #FFF",
      cursor        : true,
      zIndex        : 999999999999,
      scale         : 1,
      customClasses : ""
    }

    // Update defaults with custom attributes
    var $options = $.extend(defaults, attributes);

    // Modify target image
    $element.on('dragstart', function (e) { e.preventDefault(); });
    $element.css("cursor", $options.cursor ? "crosshair" : "none");
    // Create magnification lens element
    var lens = document.createElement("div");
    lens.id = "BlowupLens";

    // Attack the element to the body
    $("body").append(lens);

    // Updates styles
    $blowupLens = $("#BlowupLens");

    $blowupLens.css({
      "position"          : "absolute",
      "display"           : $options.display,
      "pointer-events"    : "none",
      "zIndex"            : $options.zIndex,
      "width"             : $options.width,
      "height"            : $options.height,
      "border"            : $options.border,
      "background"        : $options.background,
      "border-radius"     : zoomBoxRadius+"%",
      "box-shadow"        : $options.shadow,
      "background-repeat" : "no-repeat",
    });

    // Add custom CSS classes
    $blowupLens.addClass($options.customClasses);

    // Show magnification lens
    $element.mouseenter(function () {
      $blowupLens.css("display", "block");
    })

    // Mouse motion on image
    $element.mousemove(function (e) {

      // Lens position coordinates
      var lensX = e.pageX - $options.width / 2;
      var lensY = e.pageY - $options.height / 2;

      // Relative coordinates of image
      var relX = e.pageX - $(this).offset().left;
      var relY = e.pageY - $(this).offset().top;
     
      // Zoomed image coordinates 
      var zoomX = -Math.floor(relX / $element.width() * (NATIVE_IMG.width * $options.scale) - $options.width / 2);
      var zoomY = -Math.floor(relY / $element.height() * (NATIVE_IMG.height * $options.scale) - $options.height / 2);

      var backPos = zoomX + "px " + zoomY + "px";
      var backgroundSize = NATIVE_IMG.width * $options.scale + "px " + NATIVE_IMG.height * $options.scale + "px";

      // Apply styles to lens
      $blowupLens.css({
        left                  : lensX,
        top                   : lensY,
        "background-image"    : "url(" + encodeURI($IMAGE_URL) + ")",
        "background-size"     : backgroundSize,
        "background-position" : backPos
      });
    })

    // Hide magnification lens
    $element.mouseleave(function () {
      $blowupLens.css("display", "none");
    });
  }
})
