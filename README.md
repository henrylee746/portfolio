Modifications:

- dock.tsx classNames caused hydration mismatch (HTML pre-rendered on server differs from React's render on the client, the hydration) by creating a hashed styling scope <style jsx> - removing this and added the dock hover icon effects in globals.css

- particles.tsx by default has

```bash
absolute inset-0
```

which was covering the entire page and blocking mouse interactions. Modified to add "pointer-events-none" so pointer-events are ignored

- MUI Icons use Emotion CSS-in-JS which can cause hydration issues as their icons are rendered using SSR. lucide-react or github react-icons are an easier choice

- MagicUI's Icon-Cloud uses a fixed radius (can adjust this as needed), but more importantly uses a fixed width and height for the canvas. This is fine, but adding h-full and w-full rules allow the canvas to actually stretch to fit its container

- MagicUI's BentoBox Grid Card Backgrounds take up 100% of the space, which can push down the text associated with it. Adjusted the background by setting max-h-[70%] and content container to min-h-[30%]

- In MagicUI's animated list, you can adjust the spring animation by changing the stiffness/damping:
  Stiffness changes the speed/snappiness of the next card that pops in. Higher = faster/snappier
  Damping slows down the animation the higher it goes
