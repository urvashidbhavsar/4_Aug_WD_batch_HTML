// Instantiate EasyZoom instances
var $easyzoom = $(".easyzoom").easyZoom();

// Setup thumbnails example
var api1 = $easyzoom.filter(".easyzoom--with-thumbnails").data("easyZoom");

$(".thumbnails").on("click", "a", function (e) {
  var $this = $(this);

  e.preventDefault();

  // Use EasyZoom's `swap` method
  api1.swap($this.data("standard"), $this.attr("href"));
});

// Setup toggles example
var api2 = $easyzoom.filter(".easyzoom--with-toggle").data("easyZoom");

$(".toggle").on("click", function () {
  var $this = $(this);

  if ($this.data("active") === true) {
    $this.text("Switch on").data("active", false);
    api2.teardown();
  } else {
    $this.text("Switch off").data("active", true);
    api2._init();
  }
});
