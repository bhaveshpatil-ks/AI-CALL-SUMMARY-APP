<div align="center">

  <svg viewBox="0 0 64 64" width="80" height="80">
    <defs>
      <linearGradient id="brandGlow" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#d6ff73" />
        <stop offset="100%" stopColor="#8de31a" />
      </linearGradient>
    </defs>
    <rect x="6" y="6" width="52" height="52" rx="18" fill="#111111" />
    <path d="M21 24.5c3.2-5.6 7.8-8.4 14-8.4 4.5 0 8 1.2 10.7 3.5l-3.7 4.3c-1.8-1.4-4-2.1-6.5-2.1-3.7 0-6.7 1.6-8.8 4.7-1.1 1.6-1.8 3.2-2.1 4.8h13.5v5.9H24.7c.4 1.8 1.2 3.5 2.4 5.1 2.2 2.9 5.1 4.4 8.8 4.4 2.8 0 5.2-.8 7.3-2.5l3.6 4.2c-3.1 2.8-6.9 4.2-11.4 4.2-6.3 0-11.2-2.6-14.7-7.9-1.6-2.4-2.7-4.9-3.1-7.6h-4.2v-5.9h3.9c.6-2.6 1.5-5.1 2.8-7.3Z" fill="url(#brandGlow)" />
    <path d="M33 20.5h14.5v5.5H39v5.7h7.8v5.3H39V48h-6V20.5Z" fill="#ffffff" opacity="0.96" />
  </svg>

  # AI Call CRM

  **A modern, high-performance mobile call intelligence & AI CRM platform** — supporting automated phone call recording sync, multi-provider AI transcription & executive summarization (Built-in Smart AI, OpenAI GPT-4o, Local Ollama Llama 3.2), 3-level lead directory drilldowns, universal deep search indexing app settings, real-time analytics metrics, and multi-channel OTP security.

  [Mobile CRM App](#key-features) • [Analytics Dashboard](#key-features) • [Documentation](#project-structure)

  <br />

  [![React](https://img.shields.io/badge/REACT_18-000000?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
  [![Vite](https://img.shields.io/badge/VITE_5-000000?style=for-the-badge&logo=vite&logoColor=646CFF)](https://vitejs.dev/)
  [![Node.js](https://img.shields.io/badge/NODE.JS_EXPRESS-000000?style=for-the-badge&logo=nodedotjs&logoColor=339933)](https://nodejs.org/)
  [![Lenis](https://img.shields.io/badge/LENIS_MOMENTUM_SCROLL-000000?style=for-the-badge&logo=javascript&logoColor=84CC16)](https://lenis.darkroom.engineering/)

</div>

---

## Overview

**AI Call CRM** is a full-stack mobile sales intelligence and call automation platform engineered to eliminate post-call manual entry friction and turn Android/iOS phone call recordings into structured, actionable CRM leads instantly.

Instead of sales representatives manually typing call notes or forgetting follow-up details, **AI Call CRM** automatically detects when phone calls end, extracts raw recording audio, transcribes spoken text, generates executive summaries with action checklists, assigns commercial intent sentiment badges, and updates your lead pipeline in real time.

> [!IMPORTANT]
> **Open Source Mobile SaaS**: The mobile web application, full-stack Express API backend, multi-provider AI engine (Offline Smart AI, OpenAI GPT-4o, Local Ollama Llama 3.2), and universal deep search engine are 100% open source. You can explore the full codebase, run it locally, or contribute directly to the repository.

> [!NOTE]
> **Full Stack Monorepo Architecture**: AI Call CRM operates as a unified platform consisting of a high-performance **React 18 Single-Page Mobile Application** with Lenis momentum smooth scrolling connected to an **Express.js API backend**.

---

## Product Links

| Product Surface | Location / Endpoint | Description |
| :--- | :--- | :--- |
| **Mobile App Shell** | `/frontend` | Mobile-framed React 18 single-page application |
| **Express API Backend** | `/backend` | Node.js Express server handling AI summarization & auth |
| **Live Local Dev App** | `http://localhost:5173/` | Local development preview server |
| **GitHub Repository** | `bhaveshpatil-ks/AI-CALL-SUMMARY-APP` | Public open-source repository |

---

## What Happens During Call Sync & AI Processing

1. **Call Hang-Up Event**: The mobile device triggers an automated call recording sync event when a phone call finishes.
2. **Short Call Filter**: The CRM inspects call duration and automatically filters out missed calls or wrong numbers (`<10s` duration).
3. **Audio Waveform Generation**: Audio file is rendered with visual waveform bars and interactive playback controls (1.0x to 2.0x speeds).
4. **Speech-to-Text Transcription**: Spoken dialogue between Agent and Customer is parsed into timestamped transcripts.
5. **AI Summarization Engine**: Note content is processed using the active AI Provider (**Built-in Smart AI**, **OpenAI GPT-4o**, or **Local Ollama Llama 3.2**).
6. **Commercial Intent Badging**: Sentiment analyzer assigns priority intent tags (`Positive / High Priority`, `Warm / High Intent`, `Urgent / Action Required`).
7. **Lead Profile Creation**: Caller phone number, contact name, company, email, and industry category are formatted into a CRM Lead record.
8. **Action Item Checklist**: Actionable tasks (e.g. *Send formal PDF quote*, *Dispatch field engineer*) are extracted into interactive checkboxes.
9. **Auto-Copy Summary**: Structured call note summary is automatically copied to device clipboard for 1-tap sharing via WhatsApp or SMS.
10. **Pipeline & Search Update**: Universal Deep Search and Analytics metrics update instantly across all views.

---

## Key Features

### Frontend & Mobile Web Application

* **📱 Mobile-First Framed Design**: Framed inside a clean `375px × 720px` responsive phone wrapper with translucent glassmorphism (`backdrop-filter: blur(20px)`).
* **🌀 Lenis Smooth Inertia Scrolling**: Integrated `@studio-freight/lenis` for smooth momentum physics when scrolling through lead lists and analytics.
* **🗂️ 3-Level Lead Directory Drilldown**:
  * **Level 1**: Contacts directory list with instant search filtering.
  * **Level 2**: Contact's associated call recordings, lead history, and intent badges.
  * **Level 3**: Full AI Executive Notes, Action Items, Waveform Audio Player, and Spoken Transcript.
* **🔍 Universal Deep Search**: Multi-index search engine querying Contacts, AI Summaries, Spoken Transcript Words, and **App Settings Menu Options**.
* **📊 Real-Time Analytics Dashboard**: Visual stat widgets tracking call volume, 100% automated AI summary rates, average 0.4s processing speeds, and Call Intent distribution charts.
* **👤 Dedicated Company Profile & OTP Verification**: Read-only profile view with an explicit **`✏️ Edit Details`** mode toggle. Edits require multi-channel verification (**📱 Mobile Number** or **📧 Company Email**) with 4-digit OTP security (`1234`).
* **🚨 Security & Account Purge**: Brute-force protection, Biometric Face ID lock toggle, and permanent **Delete Account & Purge Data** capability.

### Analysis Engine & Backend

* **⚡ Zero-Setup Built-in Smart AI**: Instant offline summarizer requiring zero API keys or external server dependencies.
* **✨ Cloud OpenAI / Gemini Integration**: Optional GPT-4o API integration for deep enterprise commercial intent extraction.
* **💻 Local Ollama (Llama 3.2)**: Native localhost integration for running private open-source LLMs offline.
* **🚀 Express.js Server API**: Light Node.js REST API providing `/api/auth/me` and `/api/ai/summarize-note` endpoints with CORS guards.

---

## Project Structure

| Directory | Description |
| :--- | :--- |
| **`frontend/`** | React 18 single-page mobile web application, glassmorphic styles, Lenis momentum scroll, and mock datasets. |
| **`backend/`** | Node.js Express 4 API server handling AI summary processing endpoints and CORS security. |

---

## Main Files

### Frontend (`frontend/`)

| File | Purpose |
| :--- | :--- |
| `src/App.jsx` | Main application container, router view management, profile read-only/edit toggle, OTP modal & search engine. |
| `src/api.js` | Centralized API client helper supporting Built-in Smart AI, OpenAI GPT-4o, and Local Ollama integrations. |
| `src/sampleData.js` | Industry presets (Manufacturing, Real Estate, B2B Sales, Healthcare, Logistics) and initial mock leads. |
| `src/styles.css` | Glassmorphic design system, CSS variables, mobile aspect-ratio framing, and proportional component styles. |
| `src/main.jsx` | React 18 DOM root rendering entry point. |

### Backend (`backend/`)

| File | Purpose |
| :--- | :--- |
| `server.js` | Express server entry point configuring CORS, JSON parsing, auth status, and AI summarization endpoints. |
| `package.json` | Backend dependencies (`express`, `cors`). |

---

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/bhaveshpatil-ks/AI-CALL-SUMMARY-APP.git
cd AI-CALL-SUMMARY-APP
```

### 2. Run Development App
```bash
# Start Mobile Frontend App
npm run dev

# Start Express Backend API (Optional)
npm run dev:backend
```

---

## License

This project is open-source and available under the [MIT License](LICENSE).