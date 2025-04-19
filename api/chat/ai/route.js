export async function POST(req) {
  const { prompt } = await req.json();

  const response = await fetch("https://api.deepseek.com/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.DEEPSEEK_API_KEY}`,
    },
    body: JSON.stringify({
      model: "deepseek-chat", // or "deepseek-coder" if you're doing code tasks
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    }),
  });

  const data = await response.json();

  return new Response(
    JSON.stringify({ response: data.choices?.[0]?.message?.content || "No response." }),
    { status: 200 }
  );
}
