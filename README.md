# 🤖 Robots.txt AI Inspector

A lightweight JavaScript tool designed to run in the browser console. It audits a `robots.txt` file to verify if specific AI, LLM, and Search Engine bots are **explicitly whitelisted**.

## 🚀 How to Use

1. Navigate to any website's robots file (e.g., `https://example.com/robots.txt`).
2. Open the **Developer Console**:
   - **Windows/Linux:** `F12` or `Ctrl + Shift + J`
   - **Mac:** `Cmd + Option + J`
3. Copy the code from `robots-inspector.js`.
4. Paste it into the console and hit **Enter**.

## 🔍 What it Checks

It checks for the presence of **15+ critical bots**, including:
- **Search:** Googlebot, Bingbot, Yandex, DuckDuckBot, Baidu.
- **AI & LLM:** GPTBot (OpenAI), Google-Extended (Gemini), Anthropic-AI (Claude), FacebookBot (Meta), Applebot-Extended.
- **Data Scrapers:** CCBot (Common Crawl), Bytespider (TikTok).

## ⚠️ Logic

This script uses **Strict Mode**:
- It does **not** assume that `User-agent: *` covers missing bots.
- If a specific bot (e.g., `GPTBot`) is not named explicitly in the file, it will be flagged as **MISSING**.
