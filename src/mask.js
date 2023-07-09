import IMask from 'imask';

const input_text = document.querySelector('#input_text');
const input_text_pattern = {
  regex: /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/
}

IMask(input_text, input_text_pattern)

for(const item of input_text) {
  new IMask(item, input_text_pattern.value);
}
