li_elements = {
  "First message": "<li> I want you to feel pain,</li>",
  "Second message": "<li> to think about pain,</li>",
  "Third message": "<li> to accept pain,</li>",
  "Fourth message": "<li> to know pain. -- Tsunade</li>"
};
$(document).ready((function() {
  var key, ul;
  ul = $("#ul");
  ul.text("labas Pasauli");
  var _$tmp1_data = _$pyva_iter(li_elements);
  var _$tmp2_len = _$tmp1_data.length;
  for (var _$tmp3_index = 0; _$tmp3_index < _$tmp2_len; _$tmp3_index++) {
    key = _$tmp1_data[_$tmp3_index];

    ul.append(li_elements[key]);
  }

}));
