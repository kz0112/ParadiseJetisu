"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Camera, CameraOff, Hand, Mountain, Bird, CloudRain, Rabbit, TreePine, Info, X } from "lucide-react"

// Gesture effects configuration
const gestureEffects = [
  {
    fingers: 5,
    name: "Ашық алақан",
    description: "Көлсай көлдерінің табиғаты",
    icon: TreePine,
    effect: "nature",
  },
  {
    fingers: 0,
    name: "Жұдырық",
    description: "Күшті жаңбыр",
    icon: CloudRain,
    effect: "rain",
  },
  {
    fingers: 2,
    name: "2 саусақ",
    description: "Жануарлар пайда болады",
    icon: Rabbit,
    effect: "animals",
  },
  {
    fingers: 3,
    name: "3 саусақ",
    description: "Құстар ұшып жүреді",
    icon: Bird,
    effect: "birds",
  },
  {
    fingers: 4,
    name: "4 саусақ",
    description: "Таулар пайда болады",
    icon: Mountain,
    effect: "mountains",
  },
]

// Animal SVG components
function DeerSVG({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 100 100" fill="currentColor">
      <path d="M70 25 L75 15 L78 20 L80 10 L83 18 L85 25 L75 30 Z" />
      <ellipse cx="65" cy="45" rx="20" ry="15" />
      <ellipse cx="50" cy="50" rx="8" ry="6" />
      <circle cx="55" cy="42" r="3" />
      <line x1="55" y1="60" x2="55" y2="80" stroke="currentColor" strokeWidth="4" />
      <line x1="65" y1="60" x2="68" y2="80" stroke="currentColor" strokeWidth="4" />
      <line x1="75" y1="58" x2="78" y2="78" stroke="currentColor" strokeWidth="4" />
      <line x1="80" y1="55" x2="85" y2="75" stroke="currentColor" strokeWidth="4" />
    </svg>
  )
}

function RabbitSVG({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 100 100" fill="currentColor">
      <ellipse cx="50" cy="60" rx="25" ry="20" />
      <circle cx="45" cy="40" r="12" />
      <ellipse cx="38" cy="20" rx="4" ry="15" />
      <ellipse cx="52" cy="20" rx="4" ry="15" />
      <circle cx="42" cy="38" r="2" fill="white" />
      <ellipse cx="48" cy="43" rx="3" ry="2" fill="#ffcccc" />
      <circle cx="70" cy="65" r="8" />
    </svg>
  )
}

function FoxSVG({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 100 100" fill="currentColor">
      <ellipse cx="50" cy="55" rx="25" ry="18" />
      <path d="M35 45 L25 25 L40 40 Z" />
      <path d="M65 45 L75 25 L60 40 Z" />
      <ellipse cx="50" cy="42" rx="15" ry="12" />
      <circle cx="43" cy="40" r="2" fill="white" />
      <circle cx="57" cy="40" r="2" fill="white" />
      <path d="M50 45 L47 48 L53 48 Z" fill="#333" />
      <ellipse cx="30" cy="70" rx="5" ry="15" transform="rotate(-20 30 70)" />
    </svg>
  )
}

// Bird SVG component
function BirdSVG({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 100 100" fill="currentColor">
      <ellipse cx="50" cy="50" rx="20" ry="12" />
      <circle cx="70" cy="45" r="8" />
      <polygon points="78,45 90,43 78,47" />
      <path d="M30 50 Q15 35 25 55" strokeWidth="2" stroke="currentColor" fill="none" />
      <path d="M35 55 Q20 70 30 60" strokeWidth="2" stroke="currentColor" fill="none" />
      <circle cx="72" cy="44" r="1.5" fill="white" />
    </svg>
  )
}

// Eagle SVG component
function EagleSVG({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 100 100" fill="currentColor">
      <ellipse cx="50" cy="50" rx="15" ry="8" />
      <circle cx="65" cy="48" r="6" />
      <polygon points="71,48 85,46 71,50" fill="#f59e0b" />
      <path d="M35 50 Q5 30 20 55" strokeWidth="3" stroke="currentColor" fill="currentColor" />
      <path d="M35 50 Q5 70 20 55" strokeWidth="3" stroke="currentColor" fill="currentColor" />
      <path d="M45 55 Q50 75 55 55" fill="currentColor" />
      <circle cx="67" cy="47" r="1" fill="white" />
    </svg>
  )
}

// Raindrop component
function Raindrop({ delay, left, duration }: { delay: number; left: number; duration: number }) {
  return (
    <div
      className="absolute w-0.5 h-4 bg-gradient-to-b from-transparent via-blue-400 to-blue-500 rounded-full opacity-70 animate-rain"
      style={{
        left: `${left}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      }}
    />
  )
}

// Mountain component
function MountainShape({ 
  left, 
  height, 
  color, 
  delay,
  zIndex 
}: { 
  left: number
  height: number
  color: string
  delay: number
  zIndex: number
}) {
  return (
    <div
      className="absolute bottom-0 transition-all duration-1000 animate-mountain-rise"
      style={{
        left: `${left}%`,
        width: `${height * 1.5}%`,
        height: `${height}%`,
        animationDelay: `${delay}s`,
        zIndex,
      }}
    >
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
        <polygon points="50,0 100,100 0,100" fill={color} />
        <polygon points="50,0 70,40 50,35 30,40" fill="white" opacity="0.9" />
      </svg>
    </div>
  )
}

export function GestureCameraSection() {
  const [isCameraOn, setIsCameraOn] = useState(false)
  const [currentEffect, setCurrentEffect] = useState<string | null>(null)
  const [fingerCount, setFingerCount] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [showInstructions, setShowInstructions] = useState(true)
  const [error, setError] = useState<string | null>(null)
  
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const streamRef = useRef<MediaStream | null>(null)
  const handsRef = useRef<any>(null)
  const animationRef = useRef<number | null>(null)

  // Generate random positions for effects
  const [raindrops] = useState(() => 
    Array.from({ length: 100 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 0.5 + Math.random() * 0.5,
    }))
  )

  const [animals] = useState(() => [
    { id: 1, Component: DeerSVG, left: 15, bottom: 10, size: 80, delay: 0 },
    { id: 2, Component: RabbitSVG, left: 75, bottom: 5, size: 50, delay: 0.3 },
    { id: 3, Component: FoxSVG, left: 45, bottom: 8, size: 60, delay: 0.6 },
    { id: 4, Component: RabbitSVG, left: 85, bottom: 12, size: 45, delay: 0.9 },
    { id: 5, Component: DeerSVG, left: 5, bottom: 15, size: 70, delay: 1.2 },
  ])

  const [birds] = useState(() => [
    { id: 1, Component: BirdSVG, startX: -10, startY: 20, delay: 0 },
    { id: 2, Component: EagleSVG, startX: -15, startY: 35, delay: 0.5 },
    { id: 3, Component: BirdSVG, startX: -5, startY: 50, delay: 1 },
    { id: 4, Component: BirdSVG, startX: -20, startY: 25, delay: 1.5 },
    { id: 5, Component: EagleSVG, startX: -8, startY: 45, delay: 2 },
    { id: 6, Component: BirdSVG, startX: -12, startY: 60, delay: 0.8 },
  ])

  const [mountains] = useState(() => [
    { id: 1, left: -5, height: 60, color: "#1e3a5f", delay: 0, zIndex: 1 },
    { id: 2, left: 20, height: 80, color: "#2d4a6f", delay: 0.2, zIndex: 2 },
    { id: 3, left: 45, height: 70, color: "#1e3a5f", delay: 0.4, zIndex: 1 },
    { id: 4, left: 65, height: 90, color: "#3d5a7f", delay: 0.6, zIndex: 3 },
    { id: 5, left: 85, height: 55, color: "#2d4a6f", delay: 0.8, zIndex: 2 },
  ])

  // Count raised fingers from hand landmarks
  const countFingers = useCallback((landmarks: any[]) => {
    if (!landmarks || landmarks.length < 21) return 0

    const fingerTips = [4, 8, 12, 16, 20] // Thumb, Index, Middle, Ring, Pinky tips
    const fingerPips = [2, 6, 10, 14, 18] // Corresponding PIP joints
    
    let count = 0

    // Check thumb (different logic - horizontal comparison)
    const thumbTip = landmarks[4]
    const thumbIp = landmarks[3]
    const thumbMcp = landmarks[2]
    
    // For thumb, check if tip is further from palm than IP joint
    const thumbExtended = Math.abs(thumbTip.x - thumbMcp.x) > Math.abs(thumbIp.x - thumbMcp.x)
    if (thumbExtended) count++

    // Check other fingers (vertical comparison - tip should be above PIP)
    for (let i = 1; i < 5; i++) {
      const tip = landmarks[fingerTips[i]]
      const pip = landmarks[fingerPips[i]]
      
      // Finger is raised if tip is above PIP (smaller y value = higher position)
      if (tip.y < pip.y) {
        count++
      }
    }

    return count
  }, [])

  // Process video frame for hand detection
  const processFrame = useCallback(async () => {
    if (!videoRef.current || !canvasRef.current || !handsRef.current) return

    const video = videoRef.current
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")

    if (!ctx || video.readyState !== 4) {
      animationRef.current = requestAnimationFrame(processFrame)
      return
    }

    canvas.width = video.videoWidth
    canvas.height = video.videoHeight

    // Send frame to MediaPipe
    await handsRef.current.send({ image: video })

    animationRef.current = requestAnimationFrame(processFrame)
  }, [])

  // Initialize MediaPipe Hands
  const initializeMediaPipe = useCallback(async () => {
    try {
      // Dynamically import MediaPipe
      const { Hands } = await import("@mediapipe/hands")
      const { Camera: MPCamera } = await import("@mediapipe/camera_utils")

      const hands = new Hands({
        locateFile: (file: string) => {
          return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`
        },
      })

      hands.setOptions({
        maxNumHands: 1,
        modelComplexity: 1,
        minDetectionConfidence: 0.7,
        minTrackingConfidence: 0.5,
      })

      hands.onResults((results: any) => {
        const canvas = canvasRef.current
        const ctx = canvas?.getContext("2d")
        
        if (!canvas || !ctx) return

        // Draw video frame
        ctx.save()
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.drawImage(results.image, 0, 0, canvas.width, canvas.height)

        if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
          const landmarks = results.multiHandLandmarks[0]
          
          // Draw hand landmarks
          ctx.fillStyle = "#22c55e"
          ctx.strokeStyle = "#16a34a"
          ctx.lineWidth = 2

          // Draw connections
          const connections = [
            [0, 1], [1, 2], [2, 3], [3, 4], // Thumb
            [0, 5], [5, 6], [6, 7], [7, 8], // Index
            [0, 9], [9, 10], [10, 11], [11, 12], // Middle
            [0, 13], [13, 14], [14, 15], [15, 16], // Ring
            [0, 17], [17, 18], [18, 19], [19, 20], // Pinky
            [5, 9], [9, 13], [13, 17], // Palm
          ]

          connections.forEach(([start, end]) => {
            ctx.beginPath()
            ctx.moveTo(landmarks[start].x * canvas.width, landmarks[start].y * canvas.height)
            ctx.lineTo(landmarks[end].x * canvas.width, landmarks[end].y * canvas.height)
            ctx.stroke()
          })

          // Draw points
          landmarks.forEach((landmark: any) => {
            ctx.beginPath()
            ctx.arc(landmark.x * canvas.width, landmark.y * canvas.height, 5, 0, 2 * Math.PI)
            ctx.fill()
          })

          // Count fingers and update effect
          const count = countFingers(landmarks)
          setFingerCount(count)

          // Map finger count to effect
          const effect = gestureEffects.find(e => e.fingers === count)
          if (effect) {
            setCurrentEffect(effect.effect)
          }
        } else {
          setFingerCount(null)
          setCurrentEffect(null)
        }

        ctx.restore()
      })

      handsRef.current = hands

      // Start camera
      if (videoRef.current) {
        const camera = new MPCamera(videoRef.current, {
          onFrame: async () => {
            if (handsRef.current && videoRef.current) {
              await handsRef.current.send({ image: videoRef.current })
            }
          },
          width: 640,
          height: 480,
        })
        await camera.start()
      }
    } catch (err) {
      console.error("[v0] MediaPipe initialization error:", err)
      setError("Қолды тану жүйесін жүктеу мүмкін болмады")
    }
  }, [countFingers])

  // Start camera
  const startCamera = async () => {
    setIsLoading(true)
    setError(null)
    
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { 
          facingMode: "user",
          width: { ideal: 640 },
          height: { ideal: 480 }
        }
      })
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream
        streamRef.current = stream
        await videoRef.current.play()
      }
      
      setIsCameraOn(true)
      await initializeMediaPipe()
    } catch (err) {
      console.error("[v0] Camera error:", err)
      setError("Камераға қол жеткізу мүмкін болмады. Браузер рұқсатын тексеріңіз.")
    } finally {
      setIsLoading(false)
    }
  }

  // Stop camera
  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop())
      streamRef.current = null
    }
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current)
      animationRef.current = null
    }
    if (handsRef.current) {
      handsRef.current.close()
      handsRef.current = null
    }
    setIsCameraOn(false)
    setCurrentEffect(null)
    setFingerCount(null)
  }

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopCamera()
    }
  }, [])

  const currentGesture = gestureEffects.find(e => e.effect === currentEffect)

  return (
    <section id="gesture-camera" className="py-24 bg-gradient-to-b from-[#0d1f3c] to-[#0a1628]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-400 mb-6">
            <Hand className="w-4 h-4" />
            <span className="text-sm font-medium">Интерактивті камера</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-4 text-balance">
            Қол қимылымен табиғатты басқарыңыз
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto text-pretty">
            Камераны қосып, қолыңызбен әртүрлі қимылдар көрсетіңіз - табиғат құбылыстары пайда болады
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Camera view */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden border-0 bg-slate-800/50 backdrop-blur-sm relative">
              <div className="relative w-full aspect-video bg-slate-900 overflow-hidden">
                {/* Video element (hidden, used for processing) */}
                <video
                  ref={videoRef}
                  className="hidden"
                  playsInline
                  muted
                />
                
                {/* Canvas for displaying processed video */}
                <canvas
                  ref={canvasRef}
                  className={`absolute inset-0 w-full h-full object-cover ${isCameraOn ? "block" : "hidden"}`}
                  style={{ transform: "scaleX(-1)" }}
                />

                {/* Placeholder when camera is off */}
                {!isCameraOn && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900">
                    <div className="p-6 rounded-full bg-slate-700/50 mb-6">
                      <Camera className="w-16 h-16 text-slate-400" />
                    </div>
                    <p className="text-slate-400 text-lg mb-2">Камера өшірулі</p>
                    <p className="text-slate-500 text-sm">Бастау үшін камераны қосыңыз</p>
                  </div>
                )}

                {/* Nature background effect (5 fingers) */}
                {currentEffect === "nature" && (
                  <div className="absolute inset-0 pointer-events-none">
                    <div 
                      className="absolute inset-0 bg-cover bg-center animate-fade-in"
                      style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80')",
                        opacity: 0.4,
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/30 via-transparent to-sky-900/30" />
                  </div>
                )}

                {/* Rain effect (fist) */}
                {currentEffect === "rain" && (
                  <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute inset-0 bg-slate-900/40" />
                    {raindrops.map(drop => (
                      <Raindrop key={drop.id} {...drop} />
                    ))}
                    {/* Lightning flash */}
                    <div className="absolute inset-0 animate-lightning bg-white/10" />
                  </div>
                )}

                {/* Animals effect (2 fingers) */}
                {currentEffect === "animals" && (
                  <div className="absolute inset-0 pointer-events-none">
                    {animals.map(animal => (
                      <animal.Component
                        key={animal.id}
                        className="absolute text-amber-800 animate-animal-appear"
                        style={{
                          left: `${animal.left}%`,
                          bottom: `${animal.bottom}%`,
                          width: animal.size,
                          height: animal.size,
                          animationDelay: `${animal.delay}s`,
                        }}
                      />
                    ))}
                  </div>
                )}

                {/* Birds effect (3 fingers) */}
                {currentEffect === "birds" && (
                  <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {birds.map(bird => (
                      <bird.Component
                        key={bird.id}
                        className="absolute text-slate-700 animate-bird-fly"
                        style={{
                          left: `${bird.startX}%`,
                          top: `${bird.startY}%`,
                          width: 60,
                          height: 60,
                          animationDelay: `${bird.delay}s`,
                        }}
                      />
                    ))}
                  </div>
                )}

                {/* Mountains effect (4 fingers) */}
                {currentEffect === "mountains" && (
                  <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {mountains.map(mountain => (
                      <MountainShape key={mountain.id} {...mountain} />
                    ))}
                    {/* Snow caps shimmer */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent" />
                  </div>
                )}

                {/* Current gesture indicator */}
                {isCameraOn && currentGesture && (
                  <div className="absolute top-4 left-4 z-20 flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-900/80 backdrop-blur-sm border border-slate-700">
                    <div className="p-2 rounded-lg bg-emerald-500/20">
                      <currentGesture.icon className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                      <div className="text-white font-medium">{currentGesture.name}</div>
                      <div className="text-slate-400 text-sm">{currentGesture.description}</div>
                    </div>
                  </div>
                )}

                {/* Finger count display */}
                {isCameraOn && fingerCount !== null && (
                  <div className="absolute top-4 right-4 z-20 px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-xl">
                    {fingerCount} саусақ
                  </div>
                )}

                {/* Error display */}
                {error && (
                  <div className="absolute bottom-4 left-4 right-4 z-20 px-4 py-3 rounded-xl bg-red-500/20 border border-red-500/30 text-red-400 text-sm">
                    {error}
                  </div>
                )}

                {/* Camera controls */}
                <div className="absolute bottom-4 right-4 z-20 flex gap-2">
                  {!isCameraOn ? (
                    <Button
                      onClick={startCamera}
                      disabled={isLoading}
                      className="gap-2 bg-emerald-600 hover:bg-emerald-700 text-white"
                    >
                      <Camera className="w-4 h-4" />
                      {isLoading ? "Жүктелуде..." : "Камераны қосу"}
                    </Button>
                  ) : (
                    <Button
                      onClick={stopCamera}
                      variant="outline"
                      className="gap-2 bg-slate-900/80 border-slate-700 text-white hover:bg-red-900/50 hover:border-red-700"
                    >
                      <CameraOff className="w-4 h-4" />
                      Өшіру
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          </div>

          {/* Instructions panel */}
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-semibold flex items-center gap-2">
                <Hand className="w-5 h-5 text-emerald-400" />
                Қимылдар нұсқаулығы
              </h3>
              {showInstructions && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowInstructions(false)}
                  className="text-slate-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </Button>
              )}
            </div>

            {showInstructions && (
              <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700 mb-4">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Камераға қолыңызды көрсетіп, саусақтарыңызды санау арқылы әртүрлі табиғат құбылыстарын көре аласыз.
                  </p>
                </div>
              </div>
            )}

            {gestureEffects.map((gesture) => {
              const Icon = gesture.icon
              const isActive = currentEffect === gesture.effect
              return (
                <div
                  key={gesture.effect}
                  className={`p-4 rounded-xl transition-all duration-300 ${
                    isActive
                      ? "bg-emerald-500/20 ring-2 ring-emerald-500 shadow-lg shadow-emerald-500/20"
                      : "bg-slate-800/50 hover:bg-slate-800"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${isActive ? "bg-emerald-500" : "bg-slate-700"}`}>
                      <Icon className={`w-5 h-5 ${isActive ? "text-white" : "text-slate-300"}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className={`font-medium ${isActive ? "text-white" : "text-slate-200"}`}>
                          {gesture.name}
                        </span>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          isActive ? "bg-emerald-500/30 text-emerald-300" : "bg-slate-700 text-slate-400"
                        }`}>
                          {gesture.fingers === 0 ? "жұдырық" : `${gesture.fingers} саусақ`}
                        </span>
                      </div>
                      <p className={`text-sm mt-1 ${isActive ? "text-emerald-200" : "text-slate-500"}`}>
                        {gesture.description}
                      </p>
                    </div>
                    {isActive && (
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    )}
                  </div>
                </div>
              )
            })}

            <div className="pt-4 border-t border-slate-700">
              <p className="text-slate-500 text-sm leading-relaxed">
                Қолды жақсы көру үшін жарық жерде тұрыңыз және қолыңызды камераға жақын ұстаңыз.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CSS animations */}
      <style jsx global>{`
        @keyframes rain {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          10% {
            opacity: 0.7;
          }
          90% {
            opacity: 0.7;
          }
          100% {
            transform: translateY(100vh);
            opacity: 0;
          }
        }
        
        @keyframes lightning {
          0%, 100% {
            opacity: 0;
          }
          50% {
            opacity: 0.3;
          }
        }
        
        @keyframes animal-appear {
          0% {
            transform: translateY(100%) scale(0);
            opacity: 0;
          }
          50% {
            transform: translateY(0) scale(1.1);
          }
          100% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
        }
        
        @keyframes bird-fly {
          0% {
            transform: translate(0, 0) rotate(-5deg);
          }
          25% {
            transform: translate(30vw, -10vh) rotate(5deg);
          }
          50% {
            transform: translate(60vw, 5vh) rotate(-5deg);
          }
          75% {
            transform: translate(90vw, -5vh) rotate(5deg);
          }
          100% {
            transform: translate(120vw, 0) rotate(-5deg);
          }
        }
        
        @keyframes mountain-rise {
          0% {
            transform: translateY(100%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes fade-in {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 0.4;
          }
        }
        
        .animate-rain {
          animation: rain linear infinite;
        }
        
        .animate-lightning {
          animation: lightning 3s ease-in-out infinite;
        }
        
        .animate-animal-appear {
          animation: animal-appear 0.8s ease-out forwards;
        }
        
        .animate-bird-fly {
          animation: bird-fly 4s ease-in-out infinite;
        }
        
        .animate-mountain-rise {
          animation: mountain-rise 1s ease-out forwards;
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  )
}
