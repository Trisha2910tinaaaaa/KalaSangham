"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
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
  Heart,
  Star,
  MapPin,
  Users,
  Eye,
  Quote,
  BookOpen,
  Award,
  Mail,
  Phone,
  MapIcon,
  ArrowRight,
  Sparkles,
  Globe,
  Brush,
} from "lucide-react"
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
]

export default function KalasanghamApp() {
  const [selectedArtist, setSelectedArtist] = useState(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-orange-50 to-red-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-orange-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center shadow-lg">
                  <Palette className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  कलासंगम
                </h1>
                <p className="text-xs text-gray-600">Where Art Souls Unite</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/artists" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
                Artists
              </Link>
              <Link href="/gallery" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
                Gallery
              </Link>
              <Link href="/artforms" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
                Art Forms
              </Link>
              <Link href="/workshops" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
                Workshops
              </Link>
              <Link href="/ai-analysis" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
                AI Analysis
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="border-orange-300 text-orange-700 hover:bg-orange-50 bg-transparent">
                Sign In
              </Button>
              <Button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white">
                Join Community
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100 via-orange-100 to-red-100"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="mehendi-pattern"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full text-orange-700 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Discover India's Living Art Heritage
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-blue-600 via-orange-600 to-red-600 bg-clip-text text-transparent leading-tight">
              Where Ancient
              <br />
              <span className="text-5xl md:text-7xl">Meets Eternal</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed max-w-3xl mx-auto">
              Connect directly with master folk artists. Discover authentic stories. Own pieces of cultural heritage.
              Every purchase preserves a tradition that has survived thousands of years.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/artists">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-10 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all"
                >
                  <Globe className="w-5 h-5 mr-2" />
                  Explore Artists
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/artforms">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-orange-300 text-orange-700 hover:bg-orange-50 px-10 py-6 text-lg rounded-full bg-white/80 backdrop-blur-sm"
                >
                  <Brush className="w-5 h-5 mr-2" />
                  Discover Art Forms
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Why We Exist Section */}
      <section className="py-16 bg-white border-b border-orange-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Why We Exist</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Traditional Indian artforms are a testament to our rich cultural heritage, yet the artists who keep them
              alive struggle to find an audience. कलासंगम is a direct bridge. We provide artists with a modern platform
              to showcase their work and sustain their craft, while giving you a chance to own and understand a piece of
              history. Every purchase directly supports an artist and helps preserve a dying art.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Artists Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Meet the Living Legends</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              These master artists carry centuries of tradition in their hands. Each has a story that spans generations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {realArtists.map((artist) => (
              <Card
                key={artist.id}
                className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-white to-orange-50 overflow-hidden"
              >
                <CardHeader className="text-center pb-4">
                  <Avatar className="w-28 h-28 mx-auto mb-4 ring-4 ring-orange-200 group-hover:ring-orange-400 transition-all">
                    <AvatarImage src={artist.avatar || "/placeholder.svg"} alt={artist.name} />
                    <AvatarFallback className="text-lg">
                      {artist.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-xl text-gray-900">{artist.name}</CardTitle>
                  <CardDescription className="text-orange-600 font-medium text-base">
                    Master {artist.artform} Artist
                  </CardDescription>
                  <div className="flex items-center justify-center text-sm text-gray-600 mt-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    {artist.location}
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-700 text-sm mb-4 line-clamp-3">{artist.bio}</p>
                  <div className="flex justify-between items-center">
                    <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                      {artist.experience}
                    </Badge>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-orange-300 text-orange-700 hover:bg-orange-50 bg-transparent group-hover:bg-orange-600 group-hover:text-white group-hover:border-orange-600 transition-all"
                        >
                          <Eye className="w-4 h-4 mr-1" />
                          View Story
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
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/artists">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-4 rounded-full"
              >
                Discover All Artists
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Cultural Impact Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold text-gray-900 mb-8">Why This Matters</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-12">
              India's folk art traditions are disappearing. Master artists struggle to find audiences. Ancient
              techniques risk being lost forever. कलासंगम bridges this gap, ensuring these incredible art forms survive
              and thrive in the modern world.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">Direct Support</h3>
                <p className="text-gray-600">100% of artwork sales go directly to the artists and their communities</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-10 h-10 text-orange-600" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">Cultural Preservation</h3>
                <p className="text-gray-600">Every purchase helps preserve ancient techniques for future generations</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-10 h-10 text-red-600" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">Global Reach</h3>
                <p className="text-gray-600">Connecting traditional artists with art lovers worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-orange-600 to-red-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="mandala-pattern"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-8">Begin Your Journey</h2>
            <p className="text-xl mb-12 opacity-90 leading-relaxed">
              Step into a world where every brushstroke carries centuries of wisdom. Discover artists whose hands hold
              the secrets of ancient traditions. Own art that connects you to India's incredible cultural heritage.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/gallery">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-orange-600 hover:bg-gray-100 px-10 py-6 text-lg rounded-full shadow-xl"
                >
                  <Palette className="w-5 h-5 mr-2" />
                  Explore Gallery
                </Button>
              </Link>
              <Link href="/artists">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-10 py-6 text-lg rounded-full bg-transparent"
                >
                  <Heart className="w-5 h-5 mr-2" />
                  Support Artists
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 border-t-4 border-orange-500">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                  <Palette className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-orange-400">कलासंगम</h3>
                  <p className="text-sm text-gray-400">Where Art Souls Unite</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Preserving India's rich folk art heritage by connecting master artists with art lovers worldwide. Every
                purchase supports traditional artists and keeps ancient traditions alive.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-orange-400 mb-6 text-lg">Explore</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/artists" className="text-gray-400 hover:text-orange-400 transition-colors">
                    Featured Artists
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="text-gray-400 hover:text-orange-400 transition-colors">
                    Artwork Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/artforms" className="text-gray-400 hover:text-orange-400 transition-colors">
                    Art Traditions
                  </Link>
                </li>
                <li>
                  <Link href="/workshops" className="text-gray-400 hover:text-orange-400 transition-colors">
                    Workshops
                  </Link>
                </li>
                <li>
                  <Link href="/ai-analysis" className="text-gray-400 hover:text-orange-400 transition-colors">
                    AI Art Analysis
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-orange-400 mb-6 text-lg">Support & Partnership</h4>
              <ul className="space-y-3">
                <li>
                  <a href="/donate" className="text-gray-400 hover:text-orange-400 transition-colors">
                    Donate to Artists
                  </a>
                </li>
                <li>
                  <a href="/partnerships" className="text-gray-400 hover:text-orange-400 transition-colors">
                    Corporate Partnerships
                  </a>
                </li>
                <li>
                  <a href="/sponsor" className="text-gray-400 hover:text-orange-400 transition-colors">
                    Sponsor a Workshop
                  </a>
                </li>
                <li>
                  <a href="/commissions" className="text-gray-400 hover:text-orange-400 transition-colors">
                    Art Commissions
                  </a>
                </li>
                <li>
                  <a href="/volunteer" className="text-gray-400 hover:text-orange-400 transition-colors">
                    Volunteer Program
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-orange-400 mb-6 text-lg">Contact Us</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-orange-400" />
                  <span className="text-gray-400">hello@kalasangham.org</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-orange-400" />
                  <span className="text-gray-400">+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapIcon className="w-5 h-5 text-orange-400" />
                  <span className="text-gray-400">New Delhi, India</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">© 2025 कलासंगम. Made with ❤️ for preserving India's cultural heritage.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
