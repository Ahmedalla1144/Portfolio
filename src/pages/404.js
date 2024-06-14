import {
  SecondaryBtn,
  SectionText,
  SectionTitle,
} from "@/styles/GlobalComponents";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <SectionTitle>Not Found</SectionTitle>
      <SectionText>Could not find requested resource</SectionText>
      <SecondaryBtn className="max-w-md">
        <Link href="/">Return Home</Link>
      </SecondaryBtn>
    </div>
  );
}
