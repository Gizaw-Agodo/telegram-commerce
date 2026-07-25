import Image from "next/image";

interface Props {
  image: string;
  alt: string;
}

export function ProductGallery({ image, alt }: Props) {
  return (
    <section className="relative aspect-square bg-muted">
      <Image
        src={image}
        alt={alt}
        fill
        priority
        className="object-cover"
      />
    </section>
  );
}