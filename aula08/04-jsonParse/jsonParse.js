document.querySelector("#button").addEventListener("click", getText);

function getText() {
    const textarea = document.querySelector("#textarea").value;
    const message = document.querySelector("#message");

    try { 
        const textareaStr = JSON.stringify(textarea);
        console.log(textareaStr)
        message.textContent = "Parsable JSON string!";

        if (textareaStr !== "") {
            throw new Error("Campo vazio!");
        }

    } catch(error) {
        message.textContent = error.message;
    };
}