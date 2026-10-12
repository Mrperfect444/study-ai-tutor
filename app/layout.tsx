:root {
  --background: 222 47% 11%;
  --foreground: 210 40% 98%;
  --card: 222 47% 14%;
  --card-foreground: 210 40% 98%;
  --primary: 199 89% 57%;
  --primary-foreground: 0 0% 100%;
  --secondary: 220 20% 18%;
  --secondary-foreground: 210 40% 98%;
  --muted: 220 20% 18%;
  --muted-foreground: 210 20% 70%;
  --accent: 210 40% 98%;
  --accent-foreground: 222 47% 11%;
  --destructive: 0 84% 60%;
  --destructive-foreground: 210 40% 98%;
  --border: 216 17% 25%;
  --input: 216 17% 25%;
  --ring: 199 89% 57%;
  --radius: 1rem;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-height: 100vh;
  background:
    radial-gradient(circle at top, rgba(59, 130, 246, 0.18), transparent 30%),
    hsl(var(--background));
  color: hsl(var(--foreground));
  font-family: Arial, Helvetica, sans-serif;
}

button, input, textarea {
  font: inherit;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-thumb {
  background: rgba(148, 163, 184, 0.3);
  border-radius: 9999px;
}
