"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
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
import { Palette, Heart, Search, Filter, ArrowLeft, Bookmark, Share2, Eye, User } from "lucide-react"
import Link from "next/link"

const artworks = [
  {
    id: 1,
    title: "Village Celebration",
    artist: "Jivya Soma Mashe",
    artform: "Warli",
    description: "Traditional Warli depiction of tribal festival with dancing figures and ceremonial elements",
    price: "₹25,000",
    image: "/warli-village.png",
    likes: 234,
    isLiked: false,
    isSaved: false,
    tags: ["traditional", "festival", "tribal", "dance"],
  },
  {
    id: 2,
    title: "Krishna's Divine Play",
    artist: "Baua Devi",
    artform: "Madhubani",
    description:
      "Intricate Madhubani painting depicting Lord Krishna's leela with vibrant colors and mythological motifs",
    price: "₹40,000",
    image: "/madhubani-peacock.png",
    likes: 456,
    isLiked: true,
    isSaved: true,
    tags: ["krishna", "mythology", "divine", "colorful"],
  },
  {
    id: 3,
    title: "Sacred Horses",
    artist: "Bhuri Bai",
    artform: "Pithora",
    description: "Sacred Pithora horses painted with traditional dots and patterns, carrying prayers to the gods",
    price: "₹30,000",
    image: "/pithora-horse-traditional.png",
    likes: 189,
    isLiked: false,
    isSaved: false,
    tags: ["sacred", "horses", "prayers", "dots"],
  },
  {
    id: 4,
    title: "Forest Spirits",
    artist: "Jangarh Singh Shyam",
    artform: "Gond",
    description:
      "Mystical forest creatures depicted in traditional Gond style with intricate patterns and nature motifs",
    price: "₹45,000",
    image: "/gond-forest-animals.png",
    likes: 312,
    isLiked: false,
    isSaved: true,
    tags: ["forest", "spirits", "nature", "mystical"],
  },
  {
    id: 5,
    title: "Geometric Harmony",
    artist: "Ramesh Hengadi",
    artform: "Warli",
    description: "Pure geometric patterns showcasing the mathematical beauty of Warli art traditions",
    price: "₹20,000",
    image: "/warli-geometric-patterns.png",
    likes: 167,
    isLiked: true,
    isSaved: false,
    tags: ["geometric", "patterns", "harmony", "mathematical"],
  },
  {
    id: 6,
    title: "Floral Paradise",
    artist: "Laxmi Devi",
    artform: "Madhubani",
    description: "Elaborate floral patterns in traditional Madhubani style representing nature's abundance",
    price: "₹35,000",
    image: "/madhubani-floral-bihar.png",
    likes: 278,
    isLiked: false,
    isSaved: true,
    tags: ["floral", "nature", "abundance", "elaborate"],
  },
  {
    id: 7,
    title: "Tribal Festival",
    artist: "Subhash Bheel",
    artform: "Pithora",
    description: "Community celebration depicted in authentic Pithora style with traditional motifs",
    price: "₹28,000",
    image: "/pithora-horses.png",
    likes: 145,
    isLiked: false,
    isSaved: false,
    tags: ["tribal", "festival", "community", "celebration"],
  },
  {
    id: 8,
    title: "Tiger's Power",
    artist: "Bhajju Shyam",
    artform: "Gond",
    description: "Powerful tiger motif with intricate Gond patterns symbolizing strength and wilderness",
    price: "₹55,000",
    image: "/gond-tiger.png",
    likes: 389,
    isLiked: true,
    isSaved: true,
    tags: ["tiger", "power", "strength", "wilderness"],
  },
]

export default function GalleryPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedArtform, setSelectedArtform] = useState("all")
  const [showSavedOnly, setShowSavedOnly] = useState(false)
  const [artworkList, setArtworkList] = useState(artworks)

  const toggleLike = (id: number) => {
    setArtworkList((prev) =>
      prev.map((artwork) =>
        artwork.id === id
          ? { ...artwork, isLiked: !artwork.isLiked, likes: artwork.isLiked ? artwork.likes - 1 : artwork.likes + 1 }
          : artwork,
      ),
    )
  }

  const toggleSave = (id: number) => {
    setArtworkList((prev) =>
      prev.map((artwork) => (artwork.id === id ? { ...artwork, isSaved: !artwork.isSaved } : artwork)),
    )
  }

  const filteredArtworks = artworkList.filter((artwork) => {
    const matchesSearch =
      artwork.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      artwork.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
      artwork.artform.toLowerCase().includes(searchTerm.toLowerCase()) ||
      artwork.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesArtform = selectedArtform === "all" || artwork.artform.toLowerCase() === selectedArtform.toLowerCase()
    const matchesSaved = !showSavedOnly || artwork.isSaved
    return matchesSearch && matchesArtform && matchesSaved
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
                  <p className="text-xs text-gray-600">Art Gallery</p>
                </div>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/artists" className="text-gray-700 hover:text-orange-600 transition-colors">
                Artists
              </Link>
              <Link href="/artforms" className="text-gray-700 hover:text-orange-600 transition-colors">
                Art Forms
              </Link>
              <Link href="/workshops" className="text-gray-700 hover:text-orange-600 transition-colors">
                Workshops
              </Link>
              <Link href="/export-ready" className="text-gray-700 hover:text-orange-600 transition-colors">
                Export Guide
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-orange-100 to-red-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Discover & Save Artworks</h1>
            <p className="text-xl text-gray-700 mb-8">
              Explore authentic folk art pieces, save your favorites, and build your personal collection of cultural
              treasures.
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
                placeholder="Search artworks, artists, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-orange-200 focus:border-orange-400"
              />
            </div>
            <div className="flex items-center space-x-4">
              <Button
                variant={showSavedOnly ? "default" : "outline"}
                size="sm"
                onClick={() => setShowSavedOnly(!showSavedOnly)}
                className={
                  showSavedOnly
                    ? "bg-orange-600 hover:bg-orange-700"
                    : "border-orange-300 text-orange-700 hover:bg-orange-50"
                }
              >
                <Bookmark className="w-4 h-4 mr-2" />
                {showSavedOnly ? "Show All" : "Saved Only"}
              </Button>
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
                      {artform === "all" ? "All" : artform}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredArtworks.map((artwork) => (
              <Card
                key={artwork.id}
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-white"
              >
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={artwork.image || "/placeholder.svg"}
                    alt={artwork.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 flex space-x-2">
                    <Button
                      size="sm"
                      variant="secondary"
                      className="bg-white/90 hover:bg-white p-2"
                      onClick={() => toggleSave(artwork.id)}
                    >
                      <Bookmark
                        className={`w-4 h-4 ${artwork.isSaved ? "fill-orange-500 text-orange-500" : "text-gray-600"}`}
                      />
                    </Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      className="bg-white/90 hover:bg-white p-2"
                      onClick={() => toggleLike(artwork.id)}
                    >
                      <Heart className={`w-4 h-4 ${artwork.isLiked ? "fill-red-500 text-red-500" : "text-gray-600"}`} />
                    </Button>
                  </div>
                  <div className="absolute bottom-3 left-3">
                    <Badge variant="secondary" className="bg-white/90 text-gray-800">
                      {artwork.artform}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">{artwork.title}</h3>
                    <span className="text-lg font-bold text-orange-600">{artwork.price}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <User className="w-4 h-4 mr-1" />
                    {artwork.artist}
                  </div>
                  <p className="text-gray-700 text-sm mb-3 line-clamp-2">{artwork.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 text-sm text-gray-600">
                      <span className="flex items-center">
                        <Heart className="w-4 h-4 mr-1" />
                        {artwork.likes}
                      </span>
                      <span className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        View
                      </span>
                    </div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button size="sm" className="bg-orange-600 hover:bg-orange-700 text-white">
                          Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                          <div className="aspect-video relative overflow-hidden rounded-lg mb-4">
                            <img
                              src={artwork.image || "/placeholder.svg"}
                              alt={artwork.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <DialogTitle className="text-2xl text-gray-900">{artwork.title}</DialogTitle>
                          <DialogDescription className="text-lg text-orange-600 font-medium">
                            by {artwork.artist} • {artwork.artform} Art
                          </DialogDescription>
                        </DialogHeader>

                        <div className="space-y-6">
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">About This Artwork</h3>
                            <p className="text-gray-700 leading-relaxed">{artwork.description}</p>
                          </div>

                          <div className="flex flex-wrap gap-2">
                            {artwork.tags.map((tag, index) => (
                              <Badge key={index} variant="outline" className="border-orange-300 text-orange-700">
                                #{tag}
                              </Badge>
                            ))}
                          </div>

                          <div className="flex items-center justify-between pt-4 border-t">
                            <div className="flex items-center space-x-4">
                              <Button
                                variant="outline"
                                onClick={() => toggleLike(artwork.id)}
                                className="border-red-300 text-red-700 hover:bg-red-50"
                              >
                                <Heart className={`w-4 h-4 mr-2 ${artwork.isLiked ? "fill-red-500" : ""}`} />
                                {artwork.likes} Likes
                              </Button>
                              <Button
                                variant="outline"
                                onClick={() => toggleSave(artwork.id)}
                                className="border-orange-300 text-orange-700 hover:bg-orange-50"
                              >
                                <Bookmark className={`w-4 h-4 mr-2 ${artwork.isSaved ? "fill-orange-500" : ""}`} />
                                {artwork.isSaved ? "Saved" : "Save"}
                              </Button>
                              <Button
                                variant="outline"
                                className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
                              >
                                <Share2 className="w-4 h-4 mr-2" />
                                Share
                              </Button>
                            </div>
                            <div className="text-right">
                              <p className="text-2xl font-bold text-orange-600 mb-2">{artwork.price}</p>
                              <Button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white">
                                Purchase Artwork
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

          {filteredArtworks.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600 mb-4">
                {showSavedOnly ? "No saved artworks found." : "No artworks found matching your search criteria."}
              </p>
              <Button
                onClick={() => {
                  setSearchTerm("")
                  setSelectedArtform("all")
                  setShowSavedOnly(false)
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
