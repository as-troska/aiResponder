
const openaiKey = ""

class AI {
    constructor(key, systemPrompt, model = "gpt-4o-mini" ) {        
        this.apiKey = key;
        this.systemPrompt = systemPrompt;
        this.model = model;
    }
    
    async respond(userPrompt) {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + this.apiKey
            },
            body: JSON.stringify({
                model: this.model,
                messages: [
                    {
                        role: "system",
                        content: this.systemPrompt
                    },
                    {
                        role: "user",
                        content: userPrompt
                    }
                ]
            })
        });
        const data = await response.json();

        console.log(data.choices[0].message.content)
        return data.choices[0].text
    }
}


const ai = new AI(openaiKey, "Du er ein hyggelig person. Svar fint på nynorsk, og ikkje noko snikksnakk!");


ai.respond("Hei, korleis går det?")

