/**
 * Robots.txt AI Inspector
 * Run this in the browser console on a robots.txt page.
 */

(() => {
  // --- CONFIGURATION: TOP BOTS (Search & AI) ---
  const expectedBots = [
    // 1. Major Search Engines
    'Googlebot',
    'Bingbot',
    'Yandex',
    'DuckDuckBot',
    'Baiduspider',

    // 2. OpenAI (ChatGPT)
    'GPTBot',            // Main scraper
    'ChatGPT-User',      // Live browsing
    'OAI-SearchBot',     // Search prototype

    // 3. Google AI
    'Google-Extended',   // Gemini/Bard training

    // 4. Anthropic (Claude)
    'anthropic-ai',      // New standard
    'ClaudeBot',         // Legacy

    // 5. Other Major AI Models
    'CCBot',             // Common Crawl (Llama base)
    'PerplexityBot',     // Perplexity AI
    'FacebookBot',       // Meta AI
    'Applebot-Extended', // Apple Intelligence
    'Amazonbot',         // Amazon Q / Alexa
    'Bytespider'         // TikTok/Doubao AI
  ];

  // --- LOGIC ---

  // Extract unique User-agents from the page text
  const foundAgents = [...new Set(
    document.body.innerText
    .split('\n')
    .map(line => line.trim())
    // Find lines starting with 'User-agent:'
    .filter(line => /^user-agent:/i.test(line))
    // Take the part after the colon
    .map(line => line.split(':')[1].trim())
  )];

  console.log('--- ROBOTS.TXT ANALYZER ---');
  console.log('📂 Explicit Agents Found:', foundAgents);
  console.log('-------------------------------------------');

  const missing = [];

  expectedBots.forEach(bot => {
    // Check for exact match (case-insensitive)
    const isPresent = foundAgents.some(a => a.toLowerCase() === bot.toLowerCase());

    if (isPresent) {
        console.log(`✅ ${bot} is explicitly listed.`);
    } else {
        // STRICT MODE: We ignore wildcard (*). If it's not named, it's missing.
        console.warn(`❌ ${bot} is NOT explicitly whitelisted.`);
        missing.push(bot);
    }
  });

  console.log('-------------------------------------------');
  if (missing.length) {
    console.warn(`⚠️ Total Missing/Not Whitelisted: ${missing.length}`);
  } else {
    console.log('🎉 Perfect! All specific bots are explicitly defined.');
  }
})();
