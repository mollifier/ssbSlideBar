jetpack.future.import("slideBar");

jetpack.slideBar.append({
  html: "<h1>slideBar sample</h1>",
  width: 350,
  onSelect: function(s) {
    s.slide(350, {persist: true});
  }
});

// vim:set ts=2 sw=2:
