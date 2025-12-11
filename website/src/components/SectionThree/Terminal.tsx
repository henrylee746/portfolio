import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/ui/terminal";

export function ContactTerminal() {
  return (
    <Terminal>
      <TypingAnimation>
        &gt; Thanks for stopping by. Want to reach out? You can find me at:
      </TypingAnimation>
      <AnimatedSpan className="text-red-700 dark:text-green-500">
        ✔ Email: henry.lee746@gmail.com
      </AnimatedSpan>
      <AnimatedSpan className="text-red-700 dark:text-green-500">
        ✔ LinkedIn: https://www.linkedin.com/in/hlee750/
      </AnimatedSpan>

      <AnimatedSpan className="text-purple-700 dark:text-blue-500">
        <span>ℹ This project was created using:</span>
        <span className="pl-2">- Next.js/TypeScript</span>
        <span className="pl-2">- TailwindCSS</span>

        <span className="pl-2">- Framer - Motion UI</span>
        <span className="pl-2">- ShadCN UI</span>
        <span className="pl-2">- Radix UI</span>
        <span className="pl-2">- Tanstack Table</span>

        <span className="pl-2">- React-Icons, Simple-Icons & Lucide-React</span>
      </AnimatedSpan>
      <TypingAnimation className="text-slate-700 dark:text-muted-foreground">
        Success! You've reached the end.
      </TypingAnimation>
      <TypingAnimation className="text-muted-700 dark:text-muted-foreground">
        Have a great day!
      </TypingAnimation>
    </Terminal>
  );
}
