import { cn } from "@/lib/utils"
const Container = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <div
      className={cn("w-full 2xl:max-w-300 mx-auto", className)}>
      {children}
    </div>
  )
}

export default Container
