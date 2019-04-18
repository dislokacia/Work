  function edit() {
    div.style.display = 'none';
    textarea.value = div.innerHTML;
    textarea.style.display = 'block';
    textarea.focus();
  }

  function save() {
    textarea.style.display = 'none';
    div.innerHTML = textarea.value;
    div.style.display = 'block';
  }

  function cancel() {
    textarea.style.display = 'none';
    div.style.display = 'block';
  }