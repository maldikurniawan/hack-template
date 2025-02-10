import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: "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",
});

const completion = openai.chat.completions.create({
    model: "gpt-4o-mini",
    store: true,
    messages: [
        { "role": "user", "content": "write a haiku about ai" },
    ],
});

completion.then((result) => console.log(result.choices[0].message));