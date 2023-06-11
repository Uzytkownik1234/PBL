const submitButton = document.querySelector("#submitSearch")
const outputElement = document.querySelector("#output")
const inputElement = document.querySelector("input")
async function getMessage() {
    console.log("clicked")
    const options = {
        method: "POST",
        headers: {
            "Authorization": "Bearer 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",
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            "model": "gpt-3.5-turbo",
            "messages": [{"role": "user", "content": "Podaj przepis na" + inputElement.value}]
        })
    }
    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", options)
        const data = await response.json()
        console.log(data)
        outputElement.textContent = data.choices[0].message.content
    }   catch (error){
        console.error(error)
    }

}

submitButton.addEventListener("click", getMessage)

function clearInput() {
    inputElement.value = ""
}

submitButton.addEventListener("click", clearInput)