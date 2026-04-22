import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface AvatarItem {
  name: string;
  avatar?: string;
}

interface AvatarGroupProps {
  avatars: AvatarItem[];
  max?: number;
  size?: "sm" | "md";
  className?: string;
}

export function AvatarGroup({
  avatars,
  max = 4,
  size = "sm",
  className,
}: AvatarGroupProps) {
  const visible = avatars.slice(0, max);
  const overflow = avatars.length - max;

  const sizeClass = size === "sm" ? "w-7 h-7" : "w-9 h-9";
  const textClass = size === "sm" ? "text-[10px]" : "text-xs";

  return (
    <div className={cn("flex items-center", className)}>
      {visible.map((av) => {
        const initials = av.name
          .split(" ")
          .map((n) => n[0])
          .join("")
          .slice(0, 2)
          .toUpperCase();
        return (
          <Avatar
            key={av.name}
            className={cn(
              sizeClass,
              "border-2 border-background",
              "-ml-2 first:ml-0",
            )}
            title={av.name}
          >
            {av.avatar && <AvatarImage src={av.avatar} alt={av.name} />}
            <AvatarFallback
              className={cn(
                textClass,
                "font-semibold bg-primary/10 text-primary",
              )}
            >
              {initials}
            </AvatarFallback>
          </Avatar>
        );
      })}
      {overflow > 0 && (
        <div
          className={cn(
            sizeClass,
            textClass,
            "flex items-center justify-center rounded-full bg-muted border-2 border-background -ml-2 font-semibold text-muted-foreground",
          )}
        >
          +{overflow}
        </div>
      )}
    </div>
  );
}
