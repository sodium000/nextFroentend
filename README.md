## ItemSell (Beginner Notes)

Hi! This is my small ItemSell web app built with **Next.js**. I’m still learning, so I wrote down the things that help me run and understand the project.

### What it does
- users can register/login (Firebase Auth)
- add products and manage them
- browse items with some nice UI sections (hero, reviews, etc.)

### Tech I used
- Next.js App Router
- Firebase (auth + client SDK)
- Tailwind + DaisyUI styles

### How I run it locally
1. `npm install`
2. create `.env.local` with my `NEXT_PUBLIC_FIREBASE_*` keys
3. `npm run dev`
4. open http://localhost:3000

### Deploy
I deploy on Vercel. After pushing, I make sure the same Firebase env vars exist on the Vercel dashboard, then run “Deploy”.

### Things I still want to do
- better form validation
- nicer loading states
- add tests (need to learn this!)

Thanks for checking it out. Any tips are welcome! 
