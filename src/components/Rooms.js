
import React from 'react'
import Room from './Room'
import { useRooms } from '../hooks/useRooms'

export default function Rooms() {

  const data = useRooms()

  return (
    <section className="rooms">
      {data.map(room => (
        <Room
          key={room.slug}
          room={room}
        />
      ))}
    </section>
  )
}
