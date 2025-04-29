"use client"

import LoadingAnimation from "./LoadingAnimation"

export default function Loading({ progress = 0 }) {
  return <LoadingAnimation progress={progress} />
}
