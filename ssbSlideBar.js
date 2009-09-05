jetpack.future.import("slideBar");

jetpack.slideBar.append({
  html: "<h1>stack stock books slideBar</h1>" +
        "<div>" +
          "<input type='button' value='unread' />" +
          "<input type='button' value='reading' />" +
          "<input type='button' value='read' />" +
          "<input type='button' value='wish' />" +
        "</div>",

  width: 320,
  onSelect: function(s) {
    s.slide(320, {persist: true});
  },

  onReady: function(s) {
    var getAsin = function(uri) {
      var regex = new RegExp("(ASIN|asin|dp|product|book)/([0-9]{9}[0-9Xx])");
      var match = uri.match(regex);
      return (match === null ? null : match[2]);
    }

    var baseUri = "http://stack.nayutaya.jp/book/";
    var slidebarDoc = s.contentDocument;

    $(slidebarDoc).find("input").click(function() {
      var focusedWindow = jetpack.tabs.focused.contentWindow;
      var asin = getAsin(focusedWindow.location.href);
      if (asin !== null) {
        // load commit page
        focusedWindow.location.href =
          baseUri + asin + "?state=" + $(this).attr("value");
      }
    });

  }

});

// vim:set ts=2 sw=2:
