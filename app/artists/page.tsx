"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
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
import { Palette, MapPin, Eye, Quote, BookOpen, Award, Star, Search, Filter, ArrowLeft } from "lucide-react"
import Link from "next/link"

const realArtists = [
  {
    id: 1,
    name: "Jivya Soma Mashe",
    artform: "Warli",
    location: "Maharashtra",
    avatar: "/indian-woman-artist.png",
    bio: "Internationally acclaimed Warli painting artist who popularized the tribal art form globally. Started painting after losing his mother at age seven, communicating through drawings in dust.",
    experience: "60+ Years",
    specialization: "Traditional Warli tribal paintings",
    philosophy: "Art is the language of the soul. When words fail, the brush speaks the truth of our ancestors.",
    quote: "I paint not just pictures, but the heartbeat of my tribe. Every line carries the wisdom of generations.",
    achievements: [
      "National Award (1972)",
      "Shilp Guru Award (2002)",
      "Prince Claus Award (2009)",
      "Padma Shri (2011)",
      "International exhibitions worldwide",
    ],
    works: [
      {
        title: "Village Life",
        description: "Traditional Warli depiction of daily tribal life",
        price: "₹25,000",
        image: "/warli-village.png",
      },
      {
        title: "Sacred Dance",
        description: "Ritual dance ceremony in authentic Warli style",
        price: "₹35,000",
        image: "/warli-geometric-patterns.png",
      },
    ],
  },
  {
    id: 2,
    name: "Baua Devi",
    artform: "Madhubani",
    location: "Jitwarpur, Bihar",
    avatar: "/indian-tribal-woman-artist.png",
    bio: "Master Madhubani artist practicing for almost 60 years. Her paintings depict Lord Krishna, Ram, and Sita, narrating mythological stories from Mahabharata and Ramayana.",
    experience: "60+ Years",
    specialization: "Mythological narratives in Madhubani style",
    philosophy: "Every stroke is a prayer, every color is devotion. Through my brush, the gods speak to the world.",
    quote: "Madhubani is not just art - it is our way of keeping the divine stories alive for future generations.",
    achievements: [
      "National Award (1984)",
      "Padma Shri (2017)",
      "Bihar Ratna Award",
      "Featured in international museums",
      "Trained over 500 women artists",
    ],
    works: [
      {
        title: "Krishna Leela",
        description: "Divine stories of Lord Krishna in traditional Madhubani",
        price: "₹40,000",
        image: "/madhubani-peacock.png",
      },
      {
        title: "Rama Sita Wedding",
        description: "Sacred wedding ceremony in intricate detail",
        price: "₹50,000",
        image: "/madhubani-floral-bihar.png",
      },
    ],
  },
  {
    id: 3,
    name: "Bhuri Bai",
    artform: "Pithora",
    location: "Pitol, Madhya Pradesh",
    avatar: "/elderly-indian-tribal-artist.png",
    bio: "First Bhil artist to paint on paper, moving beyond traditional ritualistic wall paintings. Credited with bringing Pithora art to the contemporary world while preserving its sacred essence.",
    experience: "45+ Years",
    specialization: "Sacred Pithora horses and tribal motifs",
    philosophy:
      "The horses carry our prayers to the gods. Each dot is a blessing, each line a connection to the divine.",
    quote: "When I paint Pithora horses, I am not just creating art - I am keeping our sacred traditions alive.",
    achievements: [
      "Padma Shri recipient",
      "First Bhil artist on paper",
      "National recognition for tribal art",
      "Mentor to tribal artists",
      "Preserved sacred Pithora traditions",
    ],
    works: [
      {
        title: "Sacred Horses",
        description: "Traditional Pithora horses with sacred significance",
        price: "₹30,000",
        image: "/pithora-horse-traditional.png",
      },
      {
        title: "Tribal Celebration",
        description: "Community festival in authentic Pithora style",
        price: "₹35,000",
        image: "/pithora-horses.png",
      },
    ],
  },
  {
    id: 4,
    name: "Jangarh Singh Shyam",
    artform: "Gond",
    location: "Madhya Pradesh",
    avatar: "/placeholder-aoku0.png",
    bio: "Legendary Gond artist who created the 'Jangarh Kalam' school of art. First Adivasi artist to achieve widespread fame, known for paintings featuring leaping tigers, Gondi deities, birds, and peacocks.",
    experience: "40+ Years",
    specialization: "Gond tribal art with nature motifs",
    philosophy: "Nature is our first teacher. Every tree, every animal has a story that must be told through art.",
    quote: "My paintings are the voice of the forest, speaking the ancient language of my people.",
    achievements: [
      "Created 'Jangarh Kalam' art school",
      "First famous Adivasi artist",
      "International exhibitions",
      "Influenced generation of Gond artists",
      "Preserved tribal artistic traditions",
    ],
    works: [
      {
        title: "Forest Spirits",
        description: "Mystical forest creatures in traditional Gond style",
        price: "₹45,000",
        image: "/gond-forest-animals.png",
      },
      {
        title: "Tiger's Dance",
        description: "Powerful tiger motif with intricate patterns",
        price: "₹55,000",
        image: "/gond-tiger.png",
      },
    ],
  },
  {
    id: 5,
    name: "Ganga Devi",
    artform: "Madhubani",
    location: "Mithila, Bihar",
    avatar: "/placeholder.svg",
    bio: "Leading exponent of Madhubani painting specializing in the kachni (line drawing) style. Her notable works include a Ramayana series and paintings inspired by her travels in the USA.",
    experience: "50+ Years",
    specialization: "Kachni style line drawings",
    philosophy:
      "Lines are the soul of Madhubani. Through simple strokes, we capture the complexity of life and divinity.",
    quote: "My art travels the world, but its roots remain deep in the soil of Mithila.",
    achievements: [
      "Leading Madhubani exponent",
      "Kachni style specialist",
      "Ramayana series creator",
      "International recognition",
      "Cultural ambassador",
    ],
    works: [
      {
        title: "Ramayana Series",
        description: "Epic tale told through intricate line work",
        price: "₹60,000",
        image: "/placeholder.svg",
      },
      {
        title: "Life of Mankind",
        description: "Human journey depicted in traditional style",
        price: "₹45,000",
        image: "/placeholder.svg",
      },
    ],
  },
  {
    id: 6,
    name: "Bhajju Shyam",
    artform: "Gond",
    location: "Madhya Pradesh",
    avatar: "/placeholder.svg",
    bio: "Prominent Gond artist and apprentice of Jangarh Singh Shyam. Author and illustrator of several books including 'The London Jungle Book' and 'The Night Life of Trees'.",
    experience: "35+ Years",
    specialization: "Contemporary Gond art and book illustrations",
    philosophy:
      "Art is a bridge between the ancient and modern worlds. Through my work, tribal wisdom speaks to global audiences.",
    quote: "Every dot in Gond art is a star in our cultural sky, guiding future generations home.",
    achievements: [
      "Padma Shri (2018)",
      "International book illustrator",
      "Contemporary Gond pioneer",
      "Cultural bridge-builder",
      "Global exhibitions",
    ],
    works: [
      {
        title: "London Jungle Book",
        description: "Urban jungle through tribal eyes",
        price: "₹40,000",
        image: "/placeholder.svg",
      },
      {
        title: "Night Life of Trees",
        description: "Mystical forest spirits come alive",
        price: "₹50,000",
        image: "/placeholder.svg",
      },
    ],
  },
]

export default function ArtistsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedArtform, setSelectedArtform] = useState("all")

  const filteredArtists = realArtists.filter((artist) => {
    const matchesSearch =
      artist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      artist.artform.toLowerCase().includes(searchTerm.toLowerCase()) ||
      artist.location.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesArtform = selectedArtform === "all" || artist.artform.toLowerCase() === selectedArtform.toLowerCase()
    return matchesSearch && matchesArtform
  })

  const artforms = ["all", "Warli", "Madhubani", "Pithora", "Gond"]

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
                  <p className="text-xs text-gray-600">Master Artists</p>
                </div>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/gallery" className="text-gray-700 hover:text-orange-600 transition-colors">
                Gallery
              </Link>
              <Link href="/artforms" className="text-gray-700 hover:text-orange-600 transition-colors">
                Art Forms
              </Link>
              <Link href="/workshops" className="text-gray-700 hover:text-orange-600 transition-colors">
                Workshops
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-orange-100 to-red-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Master Artists of India</h1>
            <p className="text-xl text-gray-700 mb-8">
              Meet the living legends who carry centuries of tradition in their hands. Each artist has a unique story
              that spans generations of cultural heritage.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search artists, art forms, or locations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-orange-200 focus:border-orange-400"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-gray-600" />
              <div className="flex space-x-2">
                {artforms.map((artform) => (
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
                    {artform === "all" ? "All Artists" : artform}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Artists Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArtists.map((artist) => (
              <Card
                key={artist.id}
                className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white overflow-hidden"
              >
                <CardHeader className="text-center pb-4">
                  <Avatar className="w-32 h-32 mx-auto mb-4 ring-4 ring-orange-200 group-hover:ring-orange-400 transition-all">
                    <AvatarImage src={artist.avatar || "/placeholder.svg"} alt={artist.name} />
                    <AvatarFallback className="text-xl">
                      {artist.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-2xl text-gray-900">{artist.name}</CardTitle>
                  <CardDescription className="text-orange-600 font-medium text-lg">
                    Master {artist.artform} Artist
                  </CardDescription>
                  <div className="flex items-center justify-center text-sm text-gray-600 mt-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    {artist.location}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4 line-clamp-4">{artist.bio}</p>
                  <div className="flex justify-between items-center mb-4">
                    <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                      {artist.experience}
                    </Badge>
                    <Badge variant="outline" className="border-orange-300 text-orange-700">
                      {artist.specialization.split(" ").slice(0, 2).join(" ")}
                    </Badge>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white">
                        <Eye className="w-4 h-4 mr-2" />
                        View Full Profile
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <div className="flex items-center space-x-4 mb-4">
                          <Avatar className="w-20 h-20 ring-4 ring-orange-200">
                            <AvatarImage src={artist.avatar || "/placeholder.svg"} alt={artist.name} />
                            <AvatarFallback>
                              {artist.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <DialogTitle className="text-2xl text-gray-900">{artist.name}</DialogTitle>
                            <DialogDescription className="text-lg text-orange-600 font-medium">
                              Master {artist.artform} Artist
                            </DialogDescription>
                            <div className="flex items-center text-gray-600 mt-1">
                              <MapPin className="w-4 h-4 mr-1" />
                              {artist.location}
                            </div>
                          </div>
                        </div>
                      </DialogHeader>

                      <div className="space-y-6">
                        {/* Artist Philosophy */}
                        <div className="bg-orange-50 p-6 rounded-lg">
                          <div className="flex items-start space-x-3">
                            <Quote className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
                            <div>
                              <h3 className="font-semibold text-gray-900 mb-2">Artist's Philosophy</h3>
                              <p className="text-gray-700 italic">"{artist.philosophy}"</p>
                            </div>
                          </div>
                        </div>

                        {/* Bio and Specialization */}
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                              <BookOpen className="w-5 h-5 mr-2 text-orange-600" />
                              About the Artist
                            </h3>
                            <p className="text-gray-700 mb-4">{artist.bio}</p>
                            <div className="space-y-2">
                              <div className="flex justify-between">
                                <span className="text-gray-600">Experience:</span>
                                <span className="font-medium">{artist.experience}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-600">Specialization:</span>
                                <span className="font-medium">{artist.specialization}</span>
                              </div>
                            </div>
                          </div>

                          <div>
                            <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                              <Award className="w-5 h-5 mr-2 text-orange-600" />
                              Achievements
                            </h3>
                            <ul className="space-y-2">
                              {artist.achievements.map((achievement, index) => (
                                <li key={index} className="flex items-start">
                                  <Star className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                                  <span className="text-gray-700 text-sm">{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Featured Quote */}
                        <div className="bg-gradient-to-r from-orange-100 to-red-100 p-6 rounded-lg">
                          <h3 className="font-semibold text-gray-900 mb-3">Words from the Artist</h3>
                          <p className="text-gray-700 italic text-lg">"{artist.quote}"</p>
                        </div>

                        {/* Featured Works */}
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                            <Palette className="w-5 h-5 mr-2 text-orange-600" />
                            Featured Artworks
                          </h3>
                          <div className="grid md:grid-cols-2 gap-4">
                            {artist.works.map((work, index) => (
                              <Card key={index} className="overflow-hidden">
                                <div className="aspect-square relative">
                                  <img
                                    src={work.image || "/placeholder.svg"}
                                    alt={work.title}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                <CardContent className="p-4">
                                  <h4 className="font-semibold text-gray-900 mb-1">{work.title}</h4>
                                  <p className="text-sm text-gray-600 mb-2">{work.description}</p>
                                  <div className="flex justify-between items-center">
                                    <span className="text-lg font-bold text-orange-600">{work.price}</span>
                                    <Button size="sm" variant="outline">
                                      View Details
                                    </Button>
                                  </div>
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredArtists.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600">No artists found matching your search criteria.</p>
              <Button
                onClick={() => {
                  setSearchTerm("")
                  setSelectedArtform("all")
                }}
                className="mt-4 bg-orange-600 hover:bg-orange-700 text-white"
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
