import { NextApiRequest, NextApiResponse } from "next";
import { addLetter } from "../firestoreService"; // 실제 서비스에 맞게 import
import { HookFormTypes } from "../components/writePage/WritingForm";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { nickname, title, reason } = req.body;
      const currentTime = new Date().toISOString();
      const docId = await addLetter({
        nickname,
        title,
        reason,
        createdAt: currentTime,
      } as HookFormTypes);
      res.status(200).json({ success: true, docId });
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      res.status(500).json({ success: false, error: errorMessage });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
