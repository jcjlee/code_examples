// COLLAPSIBLE CONTENT
// ===================
$(function() {
  var collapsibleCallback = function ($header) {
    $header.closest('.collapsible-section').toggleClass('collapsed');
  };

  /** Collapsible Click Handler **/
  $('.collapsible-header').on('click', function(e) {
    var $this = $(e.delegateTarget),
        $parent = $this.closest('.collapsible-section'),
        $body = $this.siblings('.collapsible-body');

    if ($parent.data('collapsible-first-collapse') && $parent.hasClass('start-collapsed')) {
    // Kick off the toggle on the right foot
      $body.hide();
      $parent.data('collapsible-first-collapse') = false;
    }
    $body.slideToggle(500, collapsibleCallback($this));
  });
});