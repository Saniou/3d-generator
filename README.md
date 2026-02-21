# 🧠 3D Model Generator

AI-powered **Text & Image → 3D Model Generator**  
Built with **Next.js 16, React 19, TypeScript, React Three Fiber & Hyper3D Rodin API**

---

## 🚀 Overview

3D Model Generator — це сучасний веб-застосунок, який дозволяє створювати 3D-моделі з:

- 📝 Текстового опису  
- 🖼 Одного або кількох зображень  
- 🔀 Комбінації тексту та зображень  

Модель генерується через **Hyper3D Rodin API** та відображається прямо в браузері за допомогою **Three.js / React Three Fiber**.

---

## ✨ Features

- 🎨 Text → 3D
- 🖼 Image → 3D
- 🔄 Multi-image conditioning
- ⚙ Advanced generation settings
- 📦 Automatic GLB download
- 🧠 Real-time job status polling
- 🌑 Minimal dark UI
- ⚡ Turbopack powered
- 📱 Responsive design

---

## 🧱 Tech Stack

### Frontend
- Next.js 16
- React 19
- TypeScript
- TailwindCSS
- React Hook Form
- Zod validation
- Lucide Icons

### 3D Rendering
- three
- @react-three/fiber
- @react-three/drei

### Backend (API Routes)
- Next.js Route Handlers
- Hyper3D Rodin API Proxy
- Secure GLB download proxy

---

## 🏗 Project Structure
app/
├── api/
│ ├── rodin/ # Submit generation job
│ ├── status/ # Check generation status
│ └── proxy-download/ # Secure model streaming
├── globals.css
├── layout.tsx
└── page.tsx

components/
├── form.tsx
├── model-viewer.tsx
├── loading-spinner.tsx
└── options-dialog.tsx

lib/
├── api-service.ts
├── form-schema.ts
└── utils.ts


---

## ⚙ Installation

### Install dependencies

```bash
pnpm install
```

### Run development server

```bash
pnpm run dev
```

### Production build

```bash
pnpm run build
pnpm run start
```

---

## 📚 License

MIT License

# 🧠 How It Works
- User submits prompt and/or images
- `/api/rodin` forwards request to Hyper3D
- Server returns subscription_key and uuid
- App polls job status
- When complete:
- Fetch GLB file
- Load into 3D viewer
- Enable download

### 🖼 3D Viewer
- Animated wireframe loading spinner
- Live GLB rendering
- Orbit controls
- Minimal black UI
- Smooth animation loop

### 📦 Supported Output Formats
- GLB
- FBX
- OBJ
- STL
- USDZ

### 🌌 Why This Project Is Interesting
- Combines AI + 3D + WebGL
- Real-time async job orchestration
- Secure server-side API proxying
- Production-ready architecture
- Modern React + App Router + Turbopack

