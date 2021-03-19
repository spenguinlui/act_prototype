$("#input_1_1").bind("input propertychange", function() {
  const value = $(this).val();
  if (value > 2) {
    $("#th_1").addClass("table-warning");
  } else {
    $("#th_1").removeClass("table-warning");
  };
});

$("#input_1_2").bind("input propertychange", function() {
  const value = $(this).val();
  const pre_value = $("#input_1_1").val();
  if (value.length > 0 && value > pre_value) {
    $("#th_1").addClass("table-danger");
  } else {
    $("#th_1").removeClass("table-danger");
  };
});