const validateAndChangeCss = (tagetDOM, gotedValue, maxValue, minValue) => {
  gotedValue = parseFloat(gotedValue);
  maxValue = parseFloat(maxValue);
  minValue = parseFloat(minValue);
  (gotedValue > maxValue || gotedValue < minValue) ?
    $(tagetDOM).addClass("is-invalid") : $(tagetDOM).removeClass("is-invalid")
}

// bind

$(".input_goted").each(function(){
  $(this).bind("input propertychange", function() {
    const gotedValue = $(this).val();
    const maxValue = $(this).parent().prev().data("max");
    const minValue = $(this).parent().prev().data("min");
    validateAndChangeCss(this, gotedValue, maxValue, minValue)
  })
})

$(".input_result").each(function(){
  $(this).bind("input propertychange", function() {
    const gotedValue = $(this).val();
    const maxValue = $(this).parent().prev().prev().data("max");
    const minValue = $(this).parent().prev().prev().data("min");
    validateAndChangeCss(this, gotedValue, maxValue, minValue)
  })
})