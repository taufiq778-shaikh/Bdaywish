# Romantic Birthday Surprise Site

Mobile-first cinematic birthday surprise built with React, Vite, Tailwind, and Framer Motion. Sections: welcome hero, greeting, memories gallery with lightbox, handwritten love letter, AI-style chatbot, surprise reveal (playlist + video + QR), and a warm finale with replay.

## Quickstart
1) Install: `npm install`
2) Dev server: `npm run dev` (opens on http://localhost:5173)
3) Production build: `npm run build` then `npm run preview`

## Customize Content
Edit `src/config/content.ts`:
- `recipientName`, `clientName`, `birthday`, `playlistUrl`, `revealVideo`, `qrGiftLink`, `mainSong`, `secretCode` (optional lock).
- `welcomeCopy`, `greetingCopy`, `memories[]` (image/video URLs + captions), `loveLetter` text.
- `chatbotPersona` (tone, prompts, date ideas) and `revealItems` copy.

## Theming
- Colors & fonts configured in `tailwind.config.js` and `src/index.css`. Palette: pastel pink, cream, lavender, white, soft red, gold. Fonts: DM Sans, Playfair Display, Dancing Script.
- Add assets (photos/video/audio) to `public/` or remote URLs, then update the config.

## Features
- Heart/sparkle particles, confetti burst on entering.
- Animated hero with music toggle, countdown, optional passcode lock.
- Memories carousel with lightbox (supports photos & video).
- Handwritten love-letter reveal.
- Local scripted chatbot (sweet, respectful, birthday-focused).
- Surprise reveal with playlist button, embedded video, coupon text, and QR for real gift.
- Finale screen with replay + gift link.

## Deployment
- Vercel/Netlify: connect repo, set build command `npm run build`, output `dist`. No env vars needed unless you wire a real OpenAI key.
- Custom domain: point to hosting provider’s dashboard after deploy.

## Optional Enhancements
- Replace `siteConfig.mainSong` with your own MP3.
- Swap QR link to real gift/digital download.
- Connect an API-backed chatbot: send user messages to your endpoint inside `ChatBot.tsx` where the scripted reply is generated.
- Add more sections by reusing `Section` component for linear flow.
