import { cn } from "../../utils/cn.js";

export function Container({ as: Tag = "div", className, children }) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full max-w-[1360px] px-5 lg:px-[30px]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
