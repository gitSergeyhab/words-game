import { wordsFromWords } from "@/data/words-from-words";
import { NextResponse } from "next/server";

export const GET = async ({
  searchParams,
}: {
  searchParams: { level: string };
}) => {
  console.log({ searchParams });
  return NextResponse.json(wordsFromWords[+searchParams.level]);
};
