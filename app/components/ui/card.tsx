"use client"

import React from "react"

interface CardProps {
  children: React.ReactNode
  className?: string
  variant?: "primary" | "secondary"
}

export default function Card({
  children,
  className = "",
  variant = "primary",
}: CardProps) {
  const variantStyles =
    variant === "primary"
      ? `
        border-primary
        hover:shadow-[0_0_12px_4px_var(--tw-shadow-color)] hover:shadow-primary/50 hover:scale-105
      `
      : `
        border
        hover:border-primary hover:shadow-[0_0_12px_4px_var(--tw-shadow-color)] hover:shadow-primary/50 hover:scale-105
      `

  return (
    <div
      className={`
        relative block w-full max-w-sm
        rounded-2xl border-2
        bg-card/50 backdrop-blur-sm
        p-8 transition-all duration-300 cursor-pointer
    
        hover:scale-105
        ${variantStyles}
        ${className}
      `}
    >
      {children}
    </div>
  )
}
