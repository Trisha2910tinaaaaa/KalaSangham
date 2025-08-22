"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Palette,
  ArrowLeft,
  Calendar,
  MapPin,
  Users,
  Clock,
  Star,
  Search,
  Filter,
  BookOpen,
  Award,
  Heart,
} from "lucide-react"
import Link from "next/link"

const workshops = [
  {
    id: 1,
    title: "Madhubani Painting Masterclass",
    instructor: "Baua Devi",
    artform: "Madhubani",
    description:
      "Learn traditional Madhubani techniques from the Padma Shri awardee. Master the art of mythological storytelling through intricate patterns and vibrant colors.",
    image: "/madhubani-peacock.png",
    duration: "3 Days",
    level: "Beginner to Intermediate",
    price: "₹2,500",
    originalPrice: "₹3,500",
    date: "March 15-17, 2024",
    time: "10:00 AM - 4:00 PM",
    location: "Online & Madhubani, Bihar",
    maxParticipants: 20,
    currentParticipants: 15,
    rating: 4.9,
    reviews: 127,
    highlights: [
      "Learn from Padma Shri awardee Baua Devi",
      "Traditional pigment preparation techniques",
      "Mythological storytelling through art",
      "Certificate of completion",
      "Take home art supplies kit",
    ],
    curriculum: [
      "Day 1: History and significance of Madhubani art",
      "Day 2: Traditional techniques and pigment preparation",
      "Day 3: Creating your own Madhubani masterpiece",
    ],
    isPopular: true,
    isFeatured: true,
  },
  {
    id: 2,
    title: "Warli Art Immersion Experience",
    instructor: "Ramesh Hengadi",
    artform: "Warli",
    description:
      "Experience authentic tribal art in its birthplace. Learn geometric patterns and storytelling techniques passed down through generations.",
    image: "/warli-village.png",
    duration: "3 Days",
    level: "All Levels",
    price: "₹3,000",
    originalPrice: "₹4,000",
    date: "March 22-24, 2024",
    time: "9:00 AM - 5:00 PM",
    location: "Dahanu, Maharashtra",
    maxParticipants: 15,
    currentParticipants: 12,
    rating: 4.8,
    reviews: 89,
    highlights: [
      "Visit to authentic Warli village",
      "Learn from tribal master artists",
      "Traditional rice paste preparation",
      "Cultural immersion experience",
      "Authentic tribal lunch included",
    ],
    curriculum: [
      "Day 1: Warli culture and traditional techniques",
      "Day 2: Geometric patterns and storytelling",
      "Day 3: Creating large-scale Warli paintings",
    ],
    isPopular: false,
    isFeatured: true,
  },
  {
    id: 3,
    title: "Sacred Pithora Horse Painting",
    instructor: "Bhuri Bai",
    artform: "Pithora",
    description:
      "Create sacred Pithora horses with the first Bhil artist to paint on paper. Learn the spiritual significance behind every dot and line.",
    image: "/pithora-horse-traditional.png",
    duration: "2 Days",
    level: "Intermediate",
    price: "₹4,000",
    originalPrice: "₹5,000",
    date: "April 5-6, 2024",
    time: "10:00 AM - 3:00 PM",
    location: "Jhabua, Madhya Pradesh",
    maxParticipants: 12,
    currentParticipants: 8,
    rating: 5.0,
    reviews: 45,
    highlights: [
      "Learn from Padma Shri recipient Bhuri Bai",
      "Sacred ritual painting techniques",
      "Understanding spiritual significance",
      "Traditional dot painting methods",
      "Blessing ceremony included",
    ],
    curriculum: ["Day 1: Pithora traditions and sacred symbolism", "Day 2: Creating your own sacred horse painting"],
    isPopular: true,
    isFeatured: false,
  },
  {
    id: 4,
    title: "Gond Art Nature Stories",
    instructor: "Bhajju Shyam",
    artform: "Gond",
    description:
      "Discover the mystical world of Gond art with Padma Shri awardee Bhajju Shyam. Learn to tell stories through intricate patterns and nature motifs.",
    image: "/gond-forest-animals.png",
    duration: "4 Days",
    level: "All Levels",
    price: "₹3,500",
    originalPrice: "₹4,500",
    date: "April 12-15, 2024",
    time: "11:00 AM - 4:00 PM",
    location: "Online & Bhopal, Madhya Pradesh",
    maxParticipants: 25,
    currentParticipants: 18,
    rating: 4.9,
    reviews: 156,
    highlights: [
      "Learn from internationally acclaimed artist",
      "Nature-inspired storytelling techniques",
      "Traditional Gond mythology",
      "Contemporary applications",
      "Published artist techniques",
    ],
    curriculum: [
      "Day 1: Gond culture and artistic traditions",
      "Day 2: Basic patterns and nature motifs",
      "Day 3: Advanced storytelling techniques",
      "Day 4: Creating your Gond masterpiece",
    ],
    isPopular: true,
    isFeatured: true,
  },
  {
    id: 5,
    title: "Kalamkari Textile Art Workshop",
    instructor: "Niranjan Master",
    artform: "Kalamkari",
    description:
      "Master the ancient art of Kalamkari textile painting. Learn natural dye preparation and traditional pen-work techniques on fabric.",
    image: "/kalamkari-krishna.png",
    duration: "5 Days",
    level: "Advanced",
    price: "₹5,500",
    originalPrice: "₹7,000",
    date: "April 20-24, 2024",
    time: "9:00 AM - 5:00 PM",
    location: "Srikalahasti, Andhra Pradesh",
    maxParticipants: 10,
    currentParticipants: 7,
    rating: 4.7,
    reviews: 34,
    highlights: [
      "23-step traditional process",
      "Natural dye preparation",
      "Hand-painting and block printing",
      "Temple art traditions",
      "Take home finished textile",
    ],
    curriculum: [
      "Day 1-2: Fabric preparation and natural dyes",
      "Day 3-4: Hand-painting techniques",
      "Day 5: Block printing and finishing",
    ],
    isPopular: false,
    isFeatured: false,
  },
  {
    id: 6,
    title: "Tanjore Painting Gold Leaf Art",
    instructor: "Ravi Kumar",
    artform: "Tanjore",
    description:
      "Create stunning Tanjore paintings with gold leaf and precious stones. Learn the classical South Indian painting techniques.",
    image: "/tanjore-ganesha-gold.png",
    duration: "3 Days",
    level: "Intermediate to Advanced",
    price: "₹6,000",
    originalPrice: "₹8,000",
    date: "May 3-5, 2024",
    time: "10:00 AM - 4:00 PM",
    location: "Thanjavur, Tamil Nadu",
    maxParticipants: 8,
    currentParticipants: 5,
    rating: 4.8,
    reviews: 67,
    highlights: [
      "Gold leaf application techniques",
      "Precious stone embedding",
      "Classical composition methods",
      "Temple art traditions",
      "Museum-quality materials",
    ],
    curriculum: [
      "Day 1: Tanjore painting history and base preparation",
      "Day 2: Painting and gold leaf application",
      "Day 3: Stone work and finishing touches",
    ],
    isPopular: false,
    isFeatured: true,
  },
]

export default function WorkshopsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedArtform, setSelectedArtform] = useState("all")
  const [selectedLevel, setSelectedLevel] = useState("all")
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false)

  const filteredWorkshops = workshops.filter((workshop) => {
    const matchesSearch =
      workshop.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      workshop.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      workshop.artform.toLowerCase().includes(searchTerm.toLowerCase()) ||
      workshop.location.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesArtform = selectedArtform === "all" || workshop.artform.toLowerCase() === selectedArtform.toLowerCase()
    const matchesLevel = selectedLevel === "all" || workshop.level.toLowerCase().includes(selectedLevel.toLowerCase())
    const matchesFeatured = !showFeaturedOnly || workshop.isFeatured
    return matchesSearch && matchesArtform && matchesLevel && matchesFeatured
  })

  const artforms = ["all", "Madhubani", "Warli", "Pithora", "Gond", "Kalamkari", "Tanjore"]
  const levels = ["all", "beginner", "intermediate", "advanced"]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-orange-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="ghost" size="sm" className="text-gray-600 hover:text-orange-600">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                  <Palette className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                    कलासंगम
                  </h1>
                  <p className="text-xs text-gray-600">Workshops</p>
                </div>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/artists" className="text-gray-700 hover:text-orange-600 transition-colors">
                Artists
              </Link>
              <Link href="/gallery" className="text-gray-700 hover:text-orange-600 transition-colors">
                Gallery
              </Link>
              <Link href="/artforms" className="text-gray-700 hover:text-orange-600 transition-colors">
                Art Forms
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-orange-100 to-red-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Learn from Master Artists</h1>
            <p className="text-xl text-gray-700 mb-8">
              Join hands-on workshops with legendary folk artists. Learn authentic techniques passed down through
              generations in immersive cultural experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search workshops, instructors, or locations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-orange-200 focus:border-orange-400"
              />
            </div>
            <div className="flex items-center space-x-4">
              <Button
                variant={showFeaturedOnly ? "default" : "outline"}
                size="sm"
                onClick={() => setShowFeaturedOnly(!showFeaturedOnly)}
                className={
                  showFeaturedOnly
                    ? "bg-orange-600 hover:bg-orange-700"
                    : "border-orange-300 text-orange-700 hover:bg-orange-50"
                }
              >
                <Star className="w-4 h-4 mr-2" />
                {showFeaturedOnly ? "Show All" : "Featured"}
              </Button>
              <div className="flex items-center space-x-2">
                <Filter className="w-4 h-4 text-gray-600" />
                <div className="flex space-x-2">
                  {artforms.slice(0, 4).map((artform) => (
                    <Button
                      key={artform}
                      variant={selectedArtform === artform ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedArtform(artform)}
                      className={
                        selectedArtform === artform
                          ? "bg-orange-600 hover:bg-orange-700"
                          : "border-orange-300 text-orange-700 hover:bg-orange-50"
                      }
                    >
                      {artform === "all" ? "All" : artform}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshops Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWorkshops.map((workshop) => (
              <Card
                key={workshop.id}
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-white"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={workshop.image || "/placeholder.svg"}
                    alt={workshop.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 flex space-x-2">
                    {workshop.isPopular && <Badge className="bg-red-500 hover:bg-red-600 text-white">Popular</Badge>}
                    {workshop.isFeatured && (
                      <Badge className="bg-orange-500 hover:bg-orange-600 text-white">Featured</Badge>
                    )}
                  </div>
                  <div className="absolute top-3 right-3">
                    <Badge variant="secondary" className="bg-white/90 text-gray-800">
                      {workshop.artform}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl line-clamp-2">{workshop.title}</CardTitle>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-orange-600">{workshop.price}</div>
                      {workshop.originalPrice && (
                        <div className="text-sm text-gray-500 line-through">{workshop.originalPrice}</div>
                      )}
                    </div>
                  </div>
                  <CardDescription className="text-orange-600 font-medium">by {workshop.instructor}</CardDescription>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 mr-1" />
                      {workshop.rating} ({workshop.reviews})
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {workshop.duration}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm mb-4 line-clamp-3">{workshop.description}</p>
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {workshop.date}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {workshop.location}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      {workshop.currentParticipants}/{workshop.maxParticipants} participants
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <Badge variant="outline" className="border-orange-300 text-orange-700">
                      {workshop.level}
                    </Badge>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="bg-orange-600 hover:bg-orange-700 text-white">View Details</Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                          <div className="aspect-video relative overflow-hidden rounded-lg mb-4">
                            <img
                              src={workshop.image || "/placeholder.svg"}
                              alt={workshop.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <DialogTitle className="text-2xl text-gray-900">{workshop.title}</DialogTitle>
                          <DialogDescription className="text-lg text-orange-600 font-medium">
                            with {workshop.instructor} • {workshop.artform} Art
                          </DialogDescription>
                        </DialogHeader>

                        <div className="space-y-6">
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">About This Workshop</h3>
                            <p className="text-gray-700 leading-relaxed">{workshop.description}</p>
                          </div>

                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                                <BookOpen className="w-5 h-5 mr-2 text-orange-600" />
                                Workshop Details
                              </h3>
                              <div className="space-y-3 text-sm">
                                <div className="flex justify-between">
                                  <span className="text-gray-600">Duration:</span>
                                  <span className="font-medium">{workshop.duration}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-600">Level:</span>
                                  <span className="font-medium">{workshop.level}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-600">Date:</span>
                                  <span className="font-medium">{workshop.date}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-600">Time:</span>
                                  <span className="font-medium">{workshop.time}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-600">Location:</span>
                                  <span className="font-medium">{workshop.location}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-600">Participants:</span>
                                  <span className="font-medium">
                                    {workshop.currentParticipants}/{workshop.maxParticipants}
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div>
                              <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                                <Award className="w-5 h-5 mr-2 text-orange-600" />
                                Workshop Highlights
                              </h3>
                              <ul className="space-y-2">
                                {workshop.highlights.map((highlight, index) => (
                                  <li key={index} className="flex items-start">
                                    <Star className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-700 text-sm">{highlight}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Curriculum</h3>
                            <div className="space-y-2">
                              {workshop.curriculum.map((item, index) => (
                                <div key={index} className="flex items-start">
                                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                                    <span className="text-orange-600 text-xs font-bold">{index + 1}</span>
                                  </div>
                                  <span className="text-gray-700">{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="flex items-center justify-between pt-4 border-t">
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center">
                                <Star className="w-5 h-5 text-yellow-500 mr-1" />
                                <span className="font-semibold">{workshop.rating}</span>
                                <span className="text-gray-600 ml-1">({workshop.reviews} reviews)</span>
                              </div>
                              <Badge variant="outline" className="border-orange-300 text-orange-700">
                                {workshop.level}
                              </Badge>
                            </div>
                            <div className="text-right">
                              <div className="flex items-center space-x-2 mb-2">
                                <span className="text-2xl font-bold text-orange-600">{workshop.price}</span>
                                {workshop.originalPrice && (
                                  <span className="text-lg text-gray-500 line-through">{workshop.originalPrice}</span>
                                )}
                              </div>
                              <Button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white">
                                <Heart className="w-4 h-4 mr-2" />
                                Register Now
                              </Button>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredWorkshops.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600 mb-4">No workshops found matching your criteria.</p>
              <Button
                onClick={() => {
                  setSearchTerm("")
                  setSelectedArtform("all")
                  setSelectedLevel("all")
                  setShowFeaturedOnly(false)
                }}
                className="bg-orange-600 hover:bg-orange-700 text-white"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
