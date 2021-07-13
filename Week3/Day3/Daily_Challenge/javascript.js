let input = document.getElementById('text');
let validation = document.createAttribute("onkeypress")
validation.value = "return /[a-z]/i.test(event.key)"
input.setAttributeNode(validation)