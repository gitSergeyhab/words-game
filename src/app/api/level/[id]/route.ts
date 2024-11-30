import { wordsFromWords } from "@/data/words-from-words";
import { NextResponse } from "next/server";

export const GET = async (
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) => {
  const id = parseInt((await params).id);

  return NextResponse.json(wordsFromWords[id || 0]);
};
