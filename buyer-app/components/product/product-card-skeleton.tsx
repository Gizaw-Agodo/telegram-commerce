import { LoadingScreen } from "../ui/loading-screen";

export function ProductCardSkeleton() {
  return (
    <article className="overflow-hidden rounded-2xl flex items-center justify-center pt-20 ">
     <LoadingScreen text = {"Loading items..."}></LoadingScreen>
    </article>
  );
}