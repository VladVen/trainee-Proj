
export type TicketsResponseType = {
    stop: boolean
    tickets: commonTicketType[]
}

export type commonTicketType = {
    price: number,
    carrier: string,
    segments: commonSegmentType[]
}

export type commonSegmentType = {
    origin: string
    destination: string
    date: string
    stops: string[]
    duration: number
}