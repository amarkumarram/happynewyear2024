function nameSubmit() {
    const nameInput = document.getElementById("name");
    const result = document.getElementById("result");
    const copyBtn = document.getElementById("copyBtn");
    const nameVal = nameInput?.value;
    const generatedLink = "https://amarkumarram.github.io/happynewyear2024?name=" + nameVal;
    result.innerHTML = "Your generated link is <input id='link' class='linkText' disabled value="+generatedLink+">";
    copyBtn.style.display = 'block';
}

function copyUrl() {
  // Get the text field
  var copyText = document.getElementById("link");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  alert("Copied the text: " + copyText.value);
}