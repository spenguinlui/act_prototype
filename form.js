const validateAndChangeCss = (tagetDOM, gotedValue, maxValue, minValue) => {
  gotedValue = parseFloat(gotedValue);
  maxValue = parseFloat(maxValue);
  minValue = parseFloat(minValue);
  (gotedValue > maxValue || gotedValue < minValue) ?
    $(tagetDOM).addClass("is-invalid") : $(tagetDOM).removeClass("is-invalid")
}

// 改變 原子組排序的輸出顯示
const set_list_value = (count, target_input_element = null) => {
  const input_list = $(`input[name^="input_${count}_"]`);
  let value_count = 1;
  let new_input_array = [];
  input_list.each(function() { new_input_array.push(this) });
  let input_start = 0
  if (target_input_element) {
    new_input_array.forEach((input, i) => {
      if (input === target_input_element) input_start = i;
    })
  };
  const input_array_start_at = new_input_array.slice(0, input_start);
  const input_array_close_at = new_input_array.slice(input_start, new_input_array.length);
  // 前後倒過來
  new_input_array = input_array_close_at.concat(input_array_start_at);
  new_input_array.forEach((e) => {
    $(e).val(value_count);
    value_count ++;
  })
}

// 點擊帶入所選的 element
$('#page_03_select_lists_1').on('change', function() {
  const target_input = $(`input[name="${this.value}"]`);
  set_list_value(24, target_input[0]);
})
$('#page_03_select_lists_2').on('change', function() {
  const target_input = $(`input[name="${this.value}"]`);
  set_list_value(20, target_input[0]);
})

// 滾子組接觸紀錄
$('.input_check').each(function(){
  $(this).on('click', function() {
    if ($(this).val() !== 'O') {
      $(this).val('O');
      $(this).addClass("text-primary");
      $(this).removeClass("text-danger");
    }
    else {
      $(this).val('X');
      $(this).removeClass("text-primary");
      $(this).addClass("text-danger");
    }
  })
})


// 初始化
$(function(){
  // 原子組排序(page_03)
  set_list_value(24);
  set_list_value(20);
})

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