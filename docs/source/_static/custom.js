$(document).ready(function() {
  $("#rtd-search-form").find("[name='q']").attr("placeholder","Поиск..."); // translate placeholder
  $(".wy-breadcrumbs li:first-of-type > a").html("API Контур.ОФД") // fix breadcrubs strart
});
