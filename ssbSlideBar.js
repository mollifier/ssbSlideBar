jetpack.future.import("slideBar");

jetpack.slideBar.append({
  html: "<h1>stack stock books slideBar</h1>" +
        "<div>" +
          "<input type='button' value='unread' />" +
          "<input type='button' value='reading' />" +
          "<input type='button' value='read' />" +
          "<input type='button' value='wish' />" +
        "</div>",

  width: 350,
  onSelect: function(s) {
    s.slide(350, {persist: true});
  },

  onReady: function(s) {
    var slidebarDoc = s.contentDocument;
    $(slidebarDoc).find("input").click(function() {
      jetpack.notifications.show("Hello Jetpack!");
    });
  }

});

// vim:set ts=2 sw=2:
