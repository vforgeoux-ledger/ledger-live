import { cn } from "@/utils/cn";

type Props = React.InputHTMLAttributes<HTMLParagraphElement>;

const H1 = ({ children, className }: Props) => (
  <h1 className={cn("text-5xl tracking-tight", className)}>{children}</h1>
);

const H2 = ({ children, className }: Props) => (
  <h2 className={cn("text-4xl tracking-tight", className)}>{children}</h2>
);

const H3 = ({ children, className }: Props) => (
  <h3 className={cn("text-3xl tracking-tight", className)}>{children}</h3>
);

const H4 = ({ children, className }: Props) => (
  <h4 className={cn("text-2xl tracking-tight", className)}>{children}</h4>
);

const H5 = ({ children, className }: Props) => (
  <h5 className={cn("text-xl tracking-tight", className)}>{children}</h5>
);

const H6 = ({ children, className }: Props) => (
  <h6 className={cn("text-lg tracking-tight", className)}>{children}</h6>
);

const P = ({ children, className }: Props) => (
  <p className={cn("text-base", className)}>{children}</p>
);

const S = ({ children, className }: Props) => (
  <p className={cn("text-sm", className)}>{children}</p>
);

const X = ({ children, className }: Props) => (
  <p className={cn("text-xs", className)}>{children}</p>
);

const Subtitle = ({ children, className }: Props) => (
  <p className={cn("text-muted-foreground", className)}>{children}</p>
);

export { H1, H2, H3, H4, H5, H6, P, S, X, Subtitle };
