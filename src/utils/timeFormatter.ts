import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export function getDateFormattedAndRelative(date: string | Date) {
  const dateObj = new Date(date)

  const dateFormatted = format(dateObj, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  })
  const dateRelativeToNow = formatDistanceToNow(dateObj, {
    locale: ptBR,
    addSuffix: true,
  })

  const dateString = new Date(dateObj).toISOString()

  return {
    dateFormatted,
    dateRelativeToNow,
    dateString,
  }
}
