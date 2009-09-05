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
  }
});

// vim:set ts=2 sw=2:
