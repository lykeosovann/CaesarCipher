function encrypt() {
    const text = document.getElementById("plainText").value;
    const shift = parseInt(document.getElementById("shiftEncrypt").value);
    let encryptedText = "";

    for (let i = 0; i < text.length; i++) {
        let charCode = text.charCodeAt(i);
        
        // Check if the character is a letter
        if (charCode >= 65 && charCode <= 90) { // Uppercase letters
            encryptedText += String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
        } else if (charCode >= 97 && charCode <= 122) { // Lowercase letters
            encryptedText += String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
        } else {
            encryptedText += text[i]; // Non-alphabet characters remain the same
        }
    }

    document.getElementById("encryptedOutput").textContent = encryptedText;
}

function decrypt() {
    const text = document.getElementById("cipherText").value;
    const shift = parseInt(document.getElementById("shiftDecrypt").value);
    let decryptedText = "";

    for (let i = 0; i < text.length; i++) {
        let charCode = text.charCodeAt(i);

        // Check if the character is a letter
        if (charCode >= 65 && charCode <= 90) { // Uppercase letters
            decryptedText += String.fromCharCode(((charCode - 65 - shift + 26) % 26) + 65);
        } else if (charCode >= 97 && charCode <= 122) { // Lowercase letters
            decryptedText += String.fromCharCode(((charCode - 97 - shift + 26) % 26) + 97);
        } else {
            decryptedText += text[i]; // Non-alphabet characters remain the same
        }
    }

    document.getElementById("decryptedOutput").textContent = decryptedText;
}