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

  In addition, there is a condition under this effect:

```bash
useEffect(() => {
    if (index < childrenArray.length - 1) #the cond'n
      const timeout = setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % childrenArray.length);
      }, delay);

      return () => clearTimeout(timeout);
    }, [index, delay, childrenArray.length]);
```

This condition will stop the animation when index reaches the last item. Removed the con'dn to allow infinite looping

- When using Faker (library to generate mock data), you want to use .seed to generate the same data on the server or client, otherwise hydration error

- @dnd-kit generates different aria-describedby IDs on the server vs client also causing a hydration error, fixed by adding a isMounted state that starts false then runs true after the useEffect sets it to true. Finally, a loading placeholder runs during SSR, ensuring the IDs are rendered only on the client

- The meteors animation component uses window.innerWidth to calculate the window where the animation should happen. However, when the window was resized, meteor positions weren't recalculated. Added a resize event listener to allow for re-calculation during resizing and a cleanup function for unmount
