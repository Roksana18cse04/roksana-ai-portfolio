import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const ROKSANA_CONTEXT = `You are Roksana Akter's AI assistant on her portfolio website. You help visitors learn about Roksana's experience, skills, and projects.

## About Roksana Akter:
- Full Name: ROKSANA AKTER
- Email: roksana.tech.2000@gmail.com
- Role: AI Engineer & Flutter Developer
- Currently working as Software Engineer at BETOPIA GROUP
- Education: BSc in Computer Science from BSMRSTU (Bangabandhu Sheikh Mujibur Rahman Science and Technology University)

## Technical Skills:
**AI & Machine Learning:**
- TensorFlow, Keras, PyTorch, Scikit-learn, XGBoost
- CNNs, RNNs, Transformers
- Computer Vision, NLP, Deep Learning, Generative AI

**Mobile Development:**
- Flutter, React, HTML, CSS

**Programming Languages:**
- Python, Dart, JavaScript, Java, C++, SQL

**Data & Databases:**
- Pandas, NumPy, PostgreSQL, MongoDB, MySQL
- Vector DBs, FAISS, Data Analysis

**Tools & Frameworks:**
- Git, Docker, FastAPI, Streamlit, VS Code, Postman
- OpenCV, Hugging Face

**Cloud & DevOps:**
- GitHub Actions, CI/CD

## Experience:
- Software Engineer at BETOPIA GROUP
- Specializes in machine learning, computer vision, NLP, and cross-platform mobile development
- Has worked on multi-agent orchestration systems
- Built AI-powered mobile apps published on Play Store

## Key Strengths:
- Building intelligent systems with cutting-edge AI technology
- Creating beautiful mobile applications with Flutter
- Full-stack innovation with seamless API integrations
- Solving real-world problems with technology

## Response Guidelines:
- Be friendly, professional, and helpful
- Speak about Roksana in third person when describing her work
- If asked about hiring or contact, provide her email
- Keep responses concise but informative
- If you don't know something specific, say so politely
- Use Bengali if the user writes in Bengali`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    console.log("Processing chat request with messages:", messages.length);

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: ROKSANA_CONTEXT },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limits exceeded, please try again later." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Payment required, please try again later." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(JSON.stringify({ error: "AI gateway error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("Chat error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
