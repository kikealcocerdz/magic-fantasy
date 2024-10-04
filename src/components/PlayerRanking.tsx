import React from 'react'
import { Medal } from 'lucide-react'

// Simulating JSON data
import playersData from '../data/players.json'

export default function PlayerRanking() {
  // Sort players by points in descending order
  const sortedPlayers = [...playersData].sort((a, b) => b.points - a.points)

  return (
    <div className="mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2">
        <h1 className="text-2xl font-bold text-white">Clasificación</h1>
      </div>
      <ul className="divide-y divide-gray-200">
        {sortedPlayers.map((player, index) => (
          <li key={player.name} className="flex items-center px-4 py-3">
            <div className="flex items-center justify-center w-8 h-8 mr-3">
              {index < 3 ? (
                <Medal className={`w-6 h-6 ${getMedalColor(index)}`} />
              ) : (
                <span className="text-gray-500 font-semibold">{index + 1}</span>
              )}
            </div>
            <div className="flex-grow">
              <p className="text-sm font-medium text-gray-900">{player.name}</p>
            </div>
            <div className="text-sm font-semibold text-blue-600">{player.points} pts</div>
          </li>
        ))}
      </ul>
    </div>
  )
}

function getMedalColor(index) {
  switch (index) {
    case 0:
      return 'text-yellow-400'
    case 1:
      return 'text-gray-400'
    case 2:
      return 'text-yellow-700'
    default:
      return 'text-gray-500'
  }
}