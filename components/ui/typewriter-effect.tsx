"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

export interface TypewriterEffectProps {
  words: {
    text: string
    className?: string
  }[]
  className?: string
  cursorClassName?: string
  loop?: boolean
  cursor?: boolean
  cursorBlinkSpeed?: number
  typeSpeed?: number
  deleteSpeed?: number
  delayBetweenWords?: number
}

export const TypewriterEffect: React.FC<TypewriterEffectProps> = ({
  words,
  className,
  cursorClassName,
  cursor = true,
  cursorBlinkSpeed = 500,
  typeSpeed = 100,
  deleteSpeed = 50,
  delayBetweenWords = 1500,
  loop = false,
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [isBlinking, setIsBlinking] = useState(true)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    // Function to handle the blinking cursor
    const blinkCursor = () => {
      setIsBlinking((prev) => !prev)
    }

    // Set up cursor blinking
    const cursorInterval = setInterval(blinkCursor, cursorBlinkSpeed)

    // Function to handle typing and deleting
    const handleTyping = () => {
      const currentWord = words[currentWordIndex].text

      if (!isDeleting) {
        // Typing
        if (currentText.length < currentWord.length) {
          setCurrentText(currentWord.substring(0, currentText.length + 1))
          timeout = setTimeout(handleTyping, typeSpeed)
        } else {
          // Finished typing, wait before deleting
          timeout = setTimeout(() => {
            setIsDeleting(true)
            handleTyping()
          }, delayBetweenWords)
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentText.substring(0, currentText.length - 1))
          timeout = setTimeout(handleTyping, deleteSpeed)
        } else {
          // Finished deleting, move to next word
          setIsDeleting(false)
          setCurrentWordIndex((prev) => {
            if (prev === words.length - 1) {
              return loop ? 0 : prev
            }
            return prev + 1
          })

          // If we've reached the end and not looping, stop
          if (currentWordIndex === words.length - 1 && !loop) {
            clearInterval(cursorInterval)
            return
          }

          timeout = setTimeout(handleTyping, typeSpeed)
        }
      }
    }

    // Start the typing effect
    timeout = setTimeout(handleTyping, typeSpeed)

    // Clean up
    return () => {
      clearTimeout(timeout)
      clearInterval(cursorInterval)
    }
  }, [
    currentText,
    currentWordIndex,
    isDeleting,
    words,
    typeSpeed,
    deleteSpeed,
    delayBetweenWords,
    loop,
    cursorBlinkSpeed,
  ])

  return (
    <div className={cn("inline-block", className)}>
      <span>{currentText}</span>
      {cursor && (
        <span
          className={cn(
            "inline-block w-[2px] h-5 ml-1",
            isBlinking ? "opacity-100" : "opacity-0",
            "transition-opacity",
            cursorClassName,
          )}
        />
      )}
    </div>
  )
}

