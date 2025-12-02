import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/ui/terminal";

export function TerminalDemo() {
  return (
    <Terminal>
      <TypingAnimation>
        &gt; Thanks for stopping by. Want to reach out? You can find me at:
      </TypingAnimation>
      <AnimatedSpan className="text-green-500">
        ✔ Email: henrylee3@cmail.carleton.ca
      </AnimatedSpan>
      <AnimatedSpan className="text-green-500">
        ✔ LinkedIn: https://www.linkedin.com/in/hlee750/
      </AnimatedSpan>

      <AnimatedSpan className="text-blue-500">
        <span>ℹ This project was created using:</span>
        <span className="pl-2">- Next.js/TypeScript</span>
        <span className="pl-2">- BadtzUI</span>
        <span className="pl-2">- MagicUI</span>
        <span className="pl-2">- React-Icons</span>
        <span className="pl-2">- Simple-Icons</span>
        <span className="pl-2">- TailwindCSS</span>
      </AnimatedSpan>
      <TypingAnimation className="text-muted-foreground">
        Success! You've reached the end.
      </TypingAnimation>
      <TypingAnimation className="text-muted-foreground">
        Have a great day!
      </TypingAnimation>
    </Terminal>
  );
}
