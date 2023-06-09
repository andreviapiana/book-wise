// === Retorna o Perfil do Usuário em questão ===
// /api/profile/4383f783-6ce1-4f92-b1dd-7a7a693c4aef

import { prisma } from '@/lib/prisma'
import { getMostFrequentString } from '@/utils/getMostFrequentString'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') return res.status(405).end()

  const userId = String(req.query.userId)
  const profile = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    include: {
      ratings: {
        include: {
          book: {
            include: {
              categories: {
                include: {
                  category: true,
                },
              },
            },
          },
        },
        orderBy: {
          created_at: 'desc',
        },
      },
    },
  })

  if (!profile) {
    return res.status(404).json({ message: 'User does not exist.' })
  }

  if (profile) {
    const readPages = profile.ratings.reduce(
      (acc, rating) => acc + rating.book.total_pages,
      0,
    )
    const ratedBooks = profile.ratings.length
    const readAuthors = profile.ratings.reduce((acc, rating) => {
      if (!acc.includes(rating.book.author)) {
        acc.push(rating.book.author)
      }
      return acc
    }, [] as string[])

    const categories = profile.ratings?.flatMap((rating) =>
      rating?.book?.categories?.flatMap((category) => category?.category?.name),
    )

    const mostReadCategory = categories
      ? getMostFrequentString(categories)
      : null

    const profileData = {
      user: {
        avatar_url: profile.avatar_url,
        name: profile.name,
        createdAt: profile.created_at,
      },
      ratings: profile.ratings,
      readPages,
      ratedBooks,
      readAuthors: readAuthors?.length,
      mostReadCategory,
    }
    return res.json({ profile: profileData })
  }
}
