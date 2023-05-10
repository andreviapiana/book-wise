// /api/books

import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse,
) {
  const books = await prisma.book.findMany({
    include: {
      ratings: {
        select: {
          rate: true,
        },
      },
    },
  })

  const booksWithRating = books.map((book) => {
    const avgRate =
      book.ratings.reduce((sum, rateObj) => {
        return sum + rateObj.rate
      }, 0) / book.ratings.length

    return {
      ...book,
      rating: avgRate,
    }
  })

  return res.json({ booksWithRating })
}
