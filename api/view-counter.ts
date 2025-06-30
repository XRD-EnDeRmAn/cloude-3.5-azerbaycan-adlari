import type { VercelRequest, VercelResponse } from '@vercel/node';
import { promises as fs } from "fs";
const COUNTER_FILE = "/tmp/view-counter.json"; // temp file, or use Redis/DB for prod

export default async (req: VercelRequest, res: VercelResponse) => {
  let count = 0;
  try {
    const data = await fs.readFile(COUNTER_FILE, "utf-8");
    count = JSON.parse(data).count || 0;
  } catch { /* file not found */ }
  count++;
  await fs.writeFile(COUNTER_FILE, JSON.stringify({ count }));
  res.json({ count });
};