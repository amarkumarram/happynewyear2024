function nameSubmit() {
    const nameInput = document.getElementById("name");
    const result = document.getElementById("result");
    const nameVal = nameInput?.value;
    const generatedLink = "https://amarkumarram.github.io/happynewyear2024?name=" + nameVal;
    result.innerHTML = "Your generated link is " + generatedLink;
}