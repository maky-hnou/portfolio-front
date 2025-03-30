# Portfolio Project Documentation
## Project Overview
A Next.js-based personal portfolio showcasing:  
* Professional experience & education
* Skills & areas of expertise
* Interactive chatbot for user inquiries
* Responsive design with animations

## Key Features  
1. Chatbot Integration: AI-powered Q&A about your background
2. Animated UI: Typewriter effects, hover animations, and smooth transitions
3. Responsive Design: Tailwind-powered layouts for all devices
4. Content Sections: Skills, experience timeline, and personal details
---
## Technology Stack

| Category   | Technologies                          |
|------------|---------------------------------------|
| Framework  | Next.js 13 (App Router)               |
| Styling    | Tailwind CSS + Custom Animations      |
| Animation  | Framer Motion                         |
| Markdown   | ReactMarkdown (for chatbot responses) |
| API Client | Axios                                 |
| Fonts      | Google Fonts (Poppins, Montserrat)    |

---
## Component Documentation
### 1. Core Components
`ChatBot (src/components/ChatBot.js)`  
**Purpose:** Interactive AI chat interface  
**Features:**
* Toggleable chat window with spring animations
* Markdown-formatted responses
* Error handling with user-friendly messages
* Conversation persistence via chat_id

**Props:** None (Manages internal state)  

**API Endpoints:**  
`POST /chat` - Initiates new conversation  
`POST /message` - Sends/receives messages

**Usage:**  
```
<ChatBot /> // Automatically appears in bottom-right corner
```

`Experience (src/components/Experience.js)`  
**Purpose:** Animated timeline of work/education  
**Features:**
* Alternating left/right placement on desktop
* Mobile-optimized single-column layout
* Smooth scroll-triggered animations

**Props:** None (Hardcoded timeline data)  

`SkillSet (src/components/SkillSet.js)`  
**Purpose:** Interactive skills visualization
**Features:**
* Hover-to-highlight effect
* Dynamic scaling animation

**Props:**  

| **Prop**      | **Type** | **Description**             |
|---------------|----------|-----------------------------|
| `skillsList`  | Array    | Array of skill strings      |
| `classNameUL` | String   | Tailwind classes for `<ul>` |
| `classNameLI` | String   | Tailwind classes for `<li>` |

---
### 2. Page Components
`Home (src/pages/index.js)`  
**Sections:**  
1. Hero with animated name/text
2. Personal details bio
3. "Areas of Interest" icon grid
4. Skills visualization

`About (src/pages/about.js)`  
**Sections:**
1. Extended biography
2. Full experience timeline
3. Responsive profile image
---
## Project Structure
```
src/
├── components/       # Reusable UI components
├── pages/            # Next.js route components
│   ├── index.js      # Homepage
│   └── about.js      # Detailed bio page
├── styles/           # Global CSS/Tailwind config
public/               # Static assets
```
---
## Styling System
**Approach:** Utility-first with Tailwind + custom animations  
**Key Customizations:**  
```
// tailwind.config.js
theme: {
  colors: {
    light_purple: "#8490ff", // Primary accent
    text_color: "#777777"    // Secondary text
  },
  fontFamily: {
    poppins: ["var(--font-poppins)"],
    montserrat: ["var(--font-montserrat)"]
  }
}
```
---
## Animation System
**Libraries:** Framer Motion  
**Key Implementations:**  

1. **Typewriter Effect (`TypeWriterAnimation.js`):**  
   * Character-by-character reveal
   * Sentence-based line breaks

2. **Hover Interactions (`SkillSet.js`):**  
   * Dim non-hovered items
   * Smooth scale transitions
3. **Chatbot Transitions:**
   * Spring-based entrance/exit
   * Message scroll anchoring
---
## Setup & Deployment
1. **Install Dependencies:**  
    ```
    npm install
    ```
2. **Environment Variables:**
    ```
    NEXT_PUBLIC_API_URL=your_backend_url
    ```
3. **Run Locally:**
    ```
    npm run dev
    ```
4. **Build for Production:**
    ```
    npm run build && npm start
    ```
---

## CI/CD Pipeline
The project includes GitHub Actions for automated builds and deployments:  
**Workflow File:** `.github/workflows/node.js.yml`  
---

## Customization Guide
To update content:

1. **Experience:** Modify `Experience.js` timeline items
2. **Skills:** Update `text.js` skills array
3. **Bio:** Edit text in `index.js`/`about.js`
4. **Icons:** Replace SVG files in `media/`
---
