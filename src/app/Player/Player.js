"use client"
import React from "react"
import ReactPlayer from 'react-player'

const Player = ({ params: { id }}) => {
  return (
    <div className="player">
      <iframe src="https://geo.dailymotion.com/player.html?video=k2kagqAVwqB0NGBosIU"
      allowFullscreen
      title="Dailymotion Video Player"
      allow="web-share">
    </iframe>
    </div>
  )
}

export default Player