import { Button } from "@/components/ui/button";
import { ComponentProps, ReactNode } from "react";
import Link from "next/link";

interface Props extends ComponentProps<typeof Button> {
  info?: ReactNode;
  className?: string;
  children?: ReactNode;
  href?: string; 
}

export function ButtonAction({ info, className, children, href, ...rest }: Props) {
  const content = (
    <Button className={className} {...rest}>
      {children ?? info}
    </Button>
  );

  return href ? <Link href={href}>{content}</Link> : content;
}
