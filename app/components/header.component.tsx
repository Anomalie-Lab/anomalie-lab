import Image from "next/image";

export function HeaderComponent() {
  return (
    <header className="w-full h-32 flex text-sm justify-between items-center font-semibold uppercase">
      <Image src="/logo.png" width={50} height={190} alt="Logo" />
      <ul className="flex gap-20">
        <li>Projects</li>
        <li>Awards</li>
        <li>Interview</li>
      </ul>
      <h5>EN</h5>
    </header>
  );
}
