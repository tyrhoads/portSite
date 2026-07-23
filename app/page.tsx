import Image from "next/image";

export default function Home() {
  return (
    <div className="header">
      <main>
      <Image
        className="mainImage"
        src="/kim-29.JPG"
        alt="Next.js Logo"
        width={2000}
        height={2000}
        priority
      />
      <p>This is the portfolio of the one and only Tyler Rhoads!</p>
      </main>
    </div>
  );
}
    
