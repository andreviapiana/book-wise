// === Retorna a Avaliação mais Recente do Usuário (Essa Rota exige estar logado) ===
// /api/ratings/user_latest

import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { buildNextAuthOptions } from '../../auth/[...nextauth].api'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') return res.status(405).end()

  const session = await getServerSession(
    req,
    res,
    buildNextAuthOptions(req, res),
  )

  if (!session)
    return res
      .status(401)
      .end('Por favor, realize o Login para acessar esta rota de API.')

  const userLastRating = await prisma.rating.findFirst({
    where: {
      user_id: String(session?.user?.id),
    },
    orderBy: {
      created_at: 'desc',
    },
    include: {
      book: true,
    },
  })

  return res.json({ rating: userLastRating })
}
