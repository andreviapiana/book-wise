// /api/categories

import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse,
) {
  const categories = await prisma.category.findMany()

  return res.json({ categories })
}
