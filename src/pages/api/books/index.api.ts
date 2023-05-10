// /api/books

import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse,
) {
  const book = await prisma.book.findMany()

  return res.json({ book })
}
