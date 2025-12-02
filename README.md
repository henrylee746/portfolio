Modifications:

- dock.tsx classNames caused hydration mismatch (HTML pre-rendered on server differs from React's render on the client, the hydration) by creating a hashed styling scope <style jsx> - removing this and added the dock hover icon effects in globals.css

- particles.tsx by default has

```bash
absolute inset-0
```

which was covering the entire page and blocking mouse interactions. Modified to add "pointer-events-none" so pointer-events are ignored

- MUI Icons use Emotion CSS-in-JS which can cause hydration issues as their icons are rendered using SSR. lucide-react or github react-icons are an easier choice
