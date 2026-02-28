"use client";

import {
  Download, Mail, Phone, Linkedin, Github, Youtube, MapPin, X,
} from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { QRCodeComponent } from "@/src/app/components/qr-code";
import { useState } from "react";

export default function CV() {
  const [showQRCode, setShowQRCode] = useState(false);

  return (
    <main className="bg-white min-h-screen p-6 md:p-8 max-w-4xl mx-auto text-sm leading-relaxed">
      <div className="print:hidden mb-6 flex justify-end">
        <Button onClick={() => window.print()} className="bg-emerald-600 hover:bg-emerald-700">
          <Download className="mr-2 h-4 w-4" /> Download PDF
        </Button>
      </div>

      {/* Header */}
      <header className="mb-8 border-b-2 border-emerald-600 pb-6">
        <h1 className="text-4xl font-bold text-gray-800">HUMAIZA NAZ</h1>
        <h2 className="text-xl font-semibold text-emerald-600 mt-1">
          AI-Native Full Stack Developer & Agentic Systems Engineer
        </h2>
 
        <div className="flex flex-wrap gap-4 mt-4 text-gray-600 text-sm">
          <div className="flex items-center gap-1"><MapPin className="h-4 w-4 text-emerald-600" /> Karachi, Pakistan</div>
          <div className="flex items-center gap-1"><Phone className="h-4 w-4 text-emerald-600" /> +92 312-0119537</div>
          <div className="flex items-center gap-1"><Mail className="h-4 w-4 text-emerald-600" /> humaizaasghar@gmail.com</div>
        </div>

        <div className="flex flex-wrap gap-3 mt-3">
          <a
            href="https://linkedin.com/in/humaiza-naz"
            className="text-emerald-600 hover:text-emerald-800 flex items-center"
            title="LinkedIn"
          >
            <Linkedin className="h-4 w-4 mr-1" /> <span className="text-xs">LinkedIn</span>
          </a>
          <a
            href="https://github.com/humaizaasghar"
            className="text-emerald-600 hover:text-emerald-800 flex items-center"
            title="GitHub"
          >
            <Github className="h-4 w-4 mr-1" /> <span className="text-xs">GitHub</span>
          </a>
          <a
            href="https://youtube.com/@knowhowcoding"
            className="text-emerald-600 hover:text-emerald-800 flex items-center print:hidden"
            title="YouTube"
          >
            <Youtube className="h-4 w-4 mr-1" /> <span className="text-xs">YT</span>
          </a>
          <a
            href="https://x.com/HumaizaNaz"
            className="text-emerald-600 hover:text-emerald-800 flex items-center"
            title="Twitter"
          >
            <X className="h-4 w-4 mr-1" /> <span className="text-xs">Twitter</span>
          </a>
        </div>
      </header>

      {/* QR Code */}
      <section className="mb-5 print:hidden">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-bold text-emerald-600">Portfolio QR Code</h3>
          <button onClick={() => setShowQRCode(!showQRCode)} className="text-emerald-600 border border-emerald-600 hover:bg-emerald-50 px-3 py-1 rounded text-sm">
            {showQRCode ? "Hide" : "Show"} QR
          </button>
        </div>
        {showQRCode && <QRCodeComponent value="https://humaiza-portfolio.vercel.app" size={140} />}
      </section>

      {/* Profile */}
      <section className="mb-6">
        <h3 className="text-lg font-bold text-emerald-600 border-b pb-1 mb-3">PROFILE</h3>
        <p className="text-gray-700">
          AI-Native Full Stack Developer building production-grade autonomous agents using Spec-Kit, Gemini CLI, MCP servers, OpenAI SDK, and RAG systems.
          Expert in Next.js, TypeScript, Python, Node.js, Google Gemini, Hugging Face, and cloud-native deployment.
          Licensed Homeopathic Doctor bridging medical expertise with AI-driven health-tech.
          GDG Agentic AI Hackathon Winner (Pregnancy Agent) • Built prototype for Governor Sindh IT Initiative (50K+ users).
          Deployed 25+ projects | 500+ community members | 30+ YouTube tutorials.
        </p>
      </section>

     

      {/* Technical Skills – Tumhari saari skills wapas + AI-Native power */}
      <section className="mb-6">
        <h3 className="text-lg font-bold text-emerald-600 border-b pb-1 mb-3">TECHNICAL SKILLS</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
          <div>
            <p className="font-semibold mb-2">Languages & Frameworks</p>
            <p className="font-medium">Python • TypeScript • JavaScript (ES6+)</p>
            <p>Next.js • Node.js • Tailwind CSS • Sanity CMS</p>

            <p className="font-semibold mt-5 mb-2 text-emerald-600">AI-Native & Agentic Systems (Advanced)</p>
            <p className="font-medium">Spec-Kit Framework • Gemini CLI • MCP Server • Multi-Agent Orchestration • HITL Patterns</p>
            <p>OpenAI SDK (Assistants, Tools, File Search, Code Interpreter)</p>
            <p>Gemini API (1.5 Pro/Flash) • Google Cloud AI Studio</p>
            <p>OpenRouter (Claude 3.5, Grok) • Pydantic • Structured Outputs</p>
            <p className="font-semibold mt-5 mb-2 text-emerald-600">RAG & Vector Databases</p>
            <p className="font-medium">Retrieval-Augmented Generation (RAG) • Vector Embeddings</p>
            <p>Qdrant • pgvector • Cohere • Semantic Search • Document Processing</p>
          </div>
          <div>
            <p className="font-semibold mb-2">Backend & Cloud Technologies</p>
            <p>FastAPI • SQLModel • RESTful APIs • Firebase</p>
            <p>Gmail API • Twilio WhatsApp API • Hugging Face (Model Deployment) • Google Cloud Platform • Serverless Architecture</p>

            <p className="font-semibold mt-5 mb-2">Databases</p>
            <p>PostgreSQL • Neon PostgreSQL • Firebase Firestore • SQLite</p>

            <p className="font-semibold mt-5 mb-2">DevOps / AI Deployment (Learning)</p>
            <p>Docker • Kubernetes (Minikube) • Helm Charts • Kafka • Dapr</p>

            <p className="font-semibold mt-5 mb-2">Auth & Documentation</p>
            <p>Better Auth • JWT • Docusaurus • GitHub Pages</p>

            <p className="font-semibold mt-5 mb-2">Tools & Deployment</p>
            <p>Vercel • Netlify • Git/GitHub • Figma (UI/UX)</p>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="mb-6">
        <h3 className="text-lg font-bold text-emerald-600 border-b pb-1 mb-3">PROFESSIONAL EXPERIENCE</h3>
        <div className="space-y-4 text-gray-700">
          <div>
            <div className="flex justify-between">
              <h4 className="font-bold">AI Developer & Cloud Engineer</h4>
              <span className="text-sm text-gray-600">2024 - Present</span>
            </div>
            <p className="font-medium text-emerald-600">Freelance / Self-Employed</p>
            <ul className="mt-2 space-y-1 list-disc list-inside">
              <li>Developed autonomous agents using Gemini CLI and MCP server implementations</li>
              <li>Integrated Hugging Face models for advanced NLP applications</li>
              <li>Implemented cloud-based solutions using Google Cloud Platform and serverless architecture</li>
              <li>Built production-grade AI systems with Spec-Kit framework and multi-agent orchestration</li>
              <li>Created RAG-based systems with vector databases for intelligent document processing and retrieval</li>
              <li>Founded Neura Nest — AI startup focused on autonomous systems and agentic AI solutions</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Key Projects */}
      <section className="mb-6">
        <h3 className="text-lg font-bold text-emerald-600 border-b pb-1 mb-3">KEY PROJECTS & ACHIEVEMENTS</h3>
        <ul className="space-y-3 text-gray-700">
          <li className="border-l-4 border-emerald-600 pl-4">
            <strong>AI-Native Autonomous Agent Suite</strong> → Spec-Kit + Gemini CLI + MCP Server<br />
            Production multi-agent system with real-time model routing (Gemini ↔ Claude ↔ Grok), persistent memory, file processing.
          </li>
          <li className="border-l-4 border-emerald-600 pl-4">
            <strong>Pregnancy Agent – GDG Hackathon Winner (July 2025)</strong><br />
            AI maternal assistant with memory logging, weekly updates, photo diary using OpenAI SDK + Google AI Studio.
          </li>
          <li className="border-l-4 border-emerald-600 pl-4">
            <strong>Governor Sindh IT Initiative Platform</strong><br />
            Full-stack Next.js + PostgreSQL prototype for 50,000+ student registrations.
          </li>
          <li className="border-l-4 border-emerald-600 pl-4">
            <strong>E-Commerce Autonomous Chatbot & Dashboard</strong><br />
            Gemini-powered agent + real-time analytics using Next.js, Node.js, Sanity CMS.
          </li>
          <li className="border-l-4 border-emerald-600 pl-4">
            <strong>VisionDX AI — Medical Image Analysis Tool</strong> (Neura Nest)<br />
            AI-based vision tool for analyzing medical images, bridging clinical expertise with intelligent diagnostics.
          </li>
          <li className="border-l-4 border-emerald-600 pl-4">
            <strong>Physical AI Textbook with RAG Chatbot</strong><br />
            Spec-Kit generated book with Qdrant-backed RAG chatbot, Better Auth, deployed via Docusaurus on GitHub Pages.
          </li>
        </ul>
      </section>

      {/* Hackathon Participations */}
      <section className="mb-6 text-gray-700">
        <h3 className="text-lg font-bold text-emerald-600 border-b pb-1 mb-3">HACKATHON PARTICIPATIONS</h3>
        <div className="space-y-2 text-sm">
          <div><strong>GDG Agentic AI Hackathon — Winner</strong> (July 2025) — Pregnancy Agent with memory logging, weekly updates & photo diary using OpenAI SDK + Google AI Studio.</div>
          <div><strong>Hackathon I: Physical AI Textbook</strong> (Nov 2025) — Spec-driven AI book with RAG chatbot (Qdrant), Better Auth, Docusaurus + GitHub Pages.</div>
          <div><strong>Hackathon II: Spec-Driven Todo & Microservices</strong> (Jan 2026) — Monolith → microservices: SQLModel + Neon DB + Docker + Kubernetes + Kafka + Dapr + OpenAI Agents SDK + MCP.</div>
          <div><strong>Hackathon 0: Personal AI Employee</strong> (Jan–Feb 2026) — Autonomous FTE using Python Watchers, MCP servers, HITL patterns, and Obsidian automation.</div>
          <div><strong>Hackathon 5: CRM Digital FTE Factory</strong> (Feb 2026) — 24/7 AI Customer Success employee built with Claude Code + OpenAI Agents SDK + FastAPI + PostgreSQL + pgvector + Kafka + Kubernetes + Gmail API + Twilio WhatsApp + MCP Server.</div>
        </div>
      </section>

      {/* Education */}
      <section className="mb-6 text-gray-700">
        <h3 className="text-lg font-bold text-emerald-600 border-b pb-1 mb-3">EDUCATION & CERTIFICATIONS</h3>
        <div className="space-y-2 text-sm">
          <div><strong>Full Stack + Agentic AI</strong> — Governor Sindh IT Initiative (2024–Present)</div>
          <div><strong>Spec-Kit Framework & MCP Server</strong> — Completed + In Progress (PIAIC Cloud, 2025)</div>
          <div><strong>Python for Data Science & Agentic AI</strong> — PIAIC (Completed)</div>
          <div><strong>Cloud Computing & Backend Development</strong> — Google Cloud, Hugging Face (Ongoing)</div>
          <div><strong>Advanced IT & AI Program</strong> — Governor Sindh IT Initiative + PIAIC (2024–Present)</div>
          <div><strong>Diploma in Homeopathic Medical Science (DHMS)</strong> — Central Homeopathic College, Karachi (2015–2019)</div>
        </div>
      </section>

      <div className="text-center text-gray-500 text-xs mt-6">References available upon request</div>

    </main>
  );
}