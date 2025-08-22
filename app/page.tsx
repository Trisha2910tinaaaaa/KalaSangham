"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Upload,
  Filter,
  Calendar,
  User,
  ShoppingCart,
  Palette,
  Heart,
  Star,
  Quote,
  Mail,
  Phone,
  MapPin,
  Handshake,
  DollarSign,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Globe,
  BookOpen,
  Brush,
} from "lucide-react"

export default function KalasanghamApp() {
  const [currentPage, setCurrentPage] = useState("home")
  const [selectedFilter, setSelectedFilter] = useState("All")
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const [aiResponse, setAiResponse] = useState("")
  const [selectedArtist, setSelectedArtist] = useState<number | null>(null)

  const artforms = [
    "All",
    "Warli",
    "Madhubani",
    "Pithora",
    "Gond",
    "Kalamkari",
    "Tanjore",
    "Phad",
    "Miniature",
    "Patachitra",
    "Cheriyal",
    "Pichwai",
  ]

  const artists = [
    {
      id: 1,
      name: "Priya Sharma",
      artform: "Madhubani Artist",
      bio: "Traditional Madhubani artist from Bihar with 15 years of experience. Specializes in vibrant nature motifs and wedding ceremonies.",
      avatar: "/indian-woman-artist.png",
      philosophy:
        "Art is the language of the soul. Through Madhubani, I speak the ancient stories of my ancestors, painting with the colors of nature and the wisdom of generations.",
      quote: "Every stroke carries the blessing of Mother Earth, every color tells a story of our rich heritage.",
      specialization: "Nature motifs, Wedding ceremonies, Festival paintings",
      experience: "15 years",
      location: "Madhubani, Bihar",
      achievements: ["National Award Winner 2019", "Featured in Smithsonian Museum", "UNESCO Cultural Ambassador"],
    },
    {
      id: 2,
      name: "Ravi Patel",
      artform: "Warli Artist",
      bio: "Master Warli artist preserving tribal traditions. Known for intricate storytelling through geometric patterns.",
      avatar: "/placeholder-w0lec.png",
      philosophy:
        "Warli art is not just painting, it's our way of life. Each circle, triangle, and line represents the harmony between humans, nature, and the divine.",
      quote: "In simplicity lies the greatest beauty. Our ancestors knew this truth.",
      specialization: "Tribal ceremonies, Harvest festivals, Daily life scenes",
      experience: "20 years",
      location: "Dahanu, Maharashtra",
      achievements: ["Padma Shri Recipient", "Master Craftsman Award", "International Folk Art Festival Winner"],
    },
    {
      id: 3,
      name: "Meera Bhil",
      artform: "Pithora Artist",
      bio: "Renowned Pithora artist from Gujarat. Creates stunning wall paintings with mythological themes.",
      avatar: "/indian-tribal-woman-artist.png",
      philosophy:
        "Pithora is our prayer painted on walls. When we paint the seven horses, we invite prosperity and protection into our homes.",
      quote: "Colors are the emotions of the gods, and we are their humble messengers.",
      specialization: "Ritual paintings, Mythological themes, Sacred horses",
      experience: "18 years",
      location: "Chhota Udaipur, Gujarat",
      achievements: [
        "State Award for Folk Art",
        "Featured in National Geographic",
        "Cultural Heritage Preservationist",
      ],
    },
    {
      id: 4,
      name: "Jangarh Singh Shyam",
      artform: "Gond Artist",
      bio: "Contemporary Gond artist bringing tribal art to modern canvases. Known for intricate dot patterns and nature themes.",
      avatar: "/placeholder-w0lec.png",
      philosophy:
        "Gond art is the rhythm of the forest. Every dot, every line connects us to the spirits of trees, animals, and ancestors.",
      quote: "We don't just paint animals, we paint their souls and the stories they whisper to us.",
      specialization: "Forest spirits, Animal totems, Dot painting technique",
      experience: "12 years",
      location: "Bhopal, Madhya Pradesh",
      achievements: ["Emerging Artist Award", "Tribal Art Foundation Grant", "International Exhibition Participant"],
    },
    {
      id: 5,
      name: "Lakshmi Devi",
      artform: "Kalamkari Artist",
      bio: "Master of Srikalahasti style Kalamkari. Specializes in temple narratives and mythological stories.",
      avatar: "/indian-woman-artist.png",
      philosophy:
        "Kalamkari is devotion flowing through the pen. Each story I paint is an offering to the divine, a meditation in colors.",
      quote: "The pen is mightier than the sword, and in our hands, it becomes the voice of gods.",
      specialization: "Temple narratives, Mythological epics, Natural dyes",
      experience: "25 years",
      location: "Srikalahasti, Andhra Pradesh",
      achievements: ["Master Craftsperson Award", "Heritage Craft Revivalist", "Temple Art Conservationist"],
    },
    {
      id: 6,
      name: "Mohan Prajapati",
      artform: "Tanjore Artist",
      bio: "Traditional Tanjore painter specializing in gold leaf work and religious themes.",
      avatar: "/placeholder-w0lec.png",
      philosophy:
        "Tanjore painting is meditation in gold. Every gem we place, every stroke of gold leaf is our devotion made visible.",
      quote: "Gold doesn't just decorate our paintings, it illuminates the divine within them.",
      specialization: "Religious iconography, Gold leaf technique, Gem setting",
      experience: "22 years",
      location: "Thanjavur, Tamil Nadu",
      achievements: ["Traditional Arts Fellowship", "Temple Commission Artist", "Gold Leaf Technique Master"],
    },
    {
      id: 7,
      name: "Kailash Joshi",
      artform: "Phad Artist",
      bio: "Hereditary Phad scroll painter from Rajasthan, continuing the 700-year-old tradition of epic storytelling through art.",
      avatar: "/placeholder-w0lec.png",
      philosophy:
        "Phad is not just art, it's our living scripture. Each scroll tells the heroic tales of our folk deities, keeping their stories alive for generations.",
      quote: "We are the keepers of legends, painting the courage of heroes on cloth.",
      specialization: "Epic narratives, Folk deities, Scroll painting",
      experience: "28 years",
      location: "Bhilwara, Rajasthan",
      achievements: [
        "Rajasthan Ratna Award",
        "Folk Art Preservation Society Honor",
        "International Museum Collections",
      ],
    },
    {
      id: 8,
      name: "Mamata Devi",
      artform: "Patachitra Artist",
      bio: "Master Patachitra artist from Odisha, renowned for intricate mythological paintings and palm leaf etchings.",
      avatar: "/indian-woman-artist.png",
      philosophy:
        "Patachitra flows from devotion to Lord Jagannath. Every line is a prayer, every color a blessing from the divine.",
      quote: "Our brushes dance to the rhythm of ancient chants, creating sacred art that connects earth to heaven.",
      specialization: "Jagannath themes, Palm leaf art, Temple murals",
      experience: "20 years",
      location: "Puri, Odisha",
      achievements: ["Odisha State Award", "Temple Art Commission", "Cultural Heritage Ambassador"],
    },
    {
      id: 9,
      name: "Venkat Shyam",
      artform: "Cheriyal Artist",
      bio: "Contemporary Cheriyal scroll painter from Telangana, modernizing ancient storytelling traditions.",
      avatar: "/placeholder-w0lec.png",
      philosophy:
        "Cheriyal scrolls are our cinema of the past. Through vibrant panels, we bring epic tales to life for village audiences.",
      quote: "Every panel is a scene, every scroll a complete story that has entertained generations.",
      specialization: "Narrative scrolls, Folk tales, Performance art",
      experience: "16 years",
      location: "Hyderabad, Telangana",
      achievements: ["Telangana Folk Art Award", "UNESCO Recognition", "Modern Art Gallery Exhibitions"],
    },
    {
      id: 10,
      name: "Sushila Jangid",
      artform: "Pichwai Artist",
      bio: "Traditional Pichwai painter from Nathdwara, specializing in Krishna-themed temple hangings and devotional art.",
      avatar: "/indian-tribal-woman-artist.png",
      philosophy:
        "Pichwai is pure devotion painted on cloth. Each brushstroke is an offering to Shrinathji, each color a hymn of love.",
      quote: "We paint not just images, but emotions of devotion that have flowed for centuries.",
      specialization: "Krishna themes, Temple hangings, Devotional art",
      experience: "24 years",
      location: "Nathdwara, Rajasthan",
      achievements: [
        "Temple Art Master",
        "Devotional Art Excellence Award",
        "International Krishna Art Festival Winner",
      ],
    },
  ]

  const artworks = [
    {
      id: 1,
      title: "Dancing Peacocks",
      artist: "Priya Sharma",
      artform: "Madhubani",
      price: "₹5,000",
      image: "/madhubani-peacock.png",
    },
    {
      id: 2,
      title: "Village Life",
      artist: "Ravi Patel",
      artform: "Warli",
      price: "₹3,500",
      image: "/warli-village.png",
    },
    {
      id: 3,
      title: "Sacred Horse",
      artist: "Meera Bhil",
      artform: "Pithora",
      price: "₹7,000",
      image: "/pithora-horse-traditional.png",
    },
    {
      id: 4,
      title: "Tree of Life",
      artist: "Priya Sharma",
      artform: "Madhubani",
      price: "₹4,200",
      image: "/madhubani-tree-of-life.png",
    },
    {
      id: 5,
      title: "Forest Spirits",
      artist: "Jangarh Singh Shyam",
      artform: "Gond",
      price: "₹6,800",
      image: "/placeholder-t2p7h.png",
    },
    {
      id: 6,
      title: "Krishna Leela",
      artist: "Lakshmi Devi",
      artform: "Kalamkari",
      price: "₹8,500",
      image: "/kalamkari-krishna-stories.png",
    },
    {
      id: 7,
      title: "Divine Ganesha",
      artist: "Mohan Prajapati",
      artform: "Tanjore",
      price: "₹12,000",
      image: "/tanjore-ganesha-gold.png",
    },
    {
      id: 8,
      title: "Harvest Festival",
      artist: "Ravi Patel",
      artform: "Warli",
      price: "₹2,800",
      image: "/placeholder-mqe6l.png",
    },
  ]

  const workshops = [
    {
      id: 1,
      date: "March 15, 2024",
      title: "Introduction to Warli Art",
      artist: "Ravi Patel",
      description: "Learn the basics of Warli art and create your first tribal painting",
    },
    {
      id: 2,
      date: "March 22, 2024",
      title: "Madhubani Masterclass",
      artist: "Priya Sharma",
      description: "Advanced techniques in Madhubani painting with natural pigments",
    },
    {
      id: 3,
      date: "March 29, 2024",
      title: "Gond Art Workshop",
      artist: "Jangarh Singh Shyam",
      description: "Discover the dot painting technique and forest spirit motifs",
    },
    {
      id: 4,
      date: "April 5, 2024",
      title: "Kalamkari Storytelling",
      artist: "Lakshmi Devi",
      description: "Learn to paint mythological stories with natural dyes",
    },
  ]

  const filteredArtworks =
    selectedFilter === "All" ? artworks : artworks.filter((artwork) => artwork.artform === selectedFilter)

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const analyzeWithAI = () => {
    setAiResponse(
      "This appears to be a beautiful example of Madhubani art, characterized by its vibrant colors and intricate geometric patterns. Madhubani painting originated in the Mithila region of Bihar and Nepal. The artwork shows traditional motifs including floral patterns and nature elements, painted with natural pigments. This style dates back over 2,500 years and was traditionally created by women on the walls of their homes during festivals and special occasions. The bold lines and bright colors are hallmarks of this ancient art form, which often depicts Hindu deities, nature, and social events.",
    )
  }

  const Navigation = () => (
    <nav className="bg-card/95 backdrop-blur-md border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="flex items-center space-x-4">
              <div className="artistic-logo relative">
                <div className="w-12 h-12 bg-gradient-to-br from-saffron via-gold to-terracotta rounded-full flex items-center justify-center shadow-lg">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                    <path
                      d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"
                      fill="currentColor"
                      className="animate-pulse"
                    />
                    <path
                      d="M8 12C8 12 10 14 12 12C14 10 16 12 16 12"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      className="animate-artistic-float"
                    />
                  </svg>
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald rounded-full animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-3xl font-serif font-bold bg-gradient-to-r from-saffron via-gold to-terracotta bg-clip-text text-transparent animate-color-shift">
                  Kalasangham
                </h1>
                <p className="text-sm text-muted-foreground font-sans tracking-wide">कलासंगम - Where Art Souls Unite</p>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {[
                { key: "home", label: "Home", icon: Globe },
                { key: "gallery", label: "Gallery", icon: Palette },
                { key: "artforms", label: "Art Forms", icon: Brush },
                { key: "ai-explainer", label: "AI Analyzer", icon: Star },
                { key: "workshops", label: "Workshops", icon: BookOpen },
              ].map(({ key, label, icon: Icon }) => (
                <button
                  key={key}
                  onClick={() => setCurrentPage(key)}
                  className={`group flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                    currentPage === key
                      ? "bg-primary text-primary-foreground shadow-lg transform scale-105"
                      : "text-foreground hover:bg-muted hover:scale-105 hover:text-primary"
                  }`}
                >
                  <Icon className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )

  const HeroSection = () => (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden mehendi-pattern">
      <div className="absolute inset-0">
        {/* Warli-inspired geometric shapes */}
        <div className="absolute top-20 left-10 w-16 h-16 border-2 border-saffron/30 rotate-45 animate-artistic-float"></div>
        <div
          className="absolute top-40 right-20 w-12 h-12 border-2 border-gold/30 rounded-full animate-artistic-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-32 left-20 w-8 h-8 bg-terracotta/20 rotate-12 animate-artistic-float"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Mehendi-inspired flowing lines */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-10" viewBox="0 0 1920 1080">
          <path
            d="M0,300 Q400,200 800,300 T1600,300"
            stroke="url(#gradient1)"
            strokeWidth="2"
            fill="none"
            className="animate-brush-stroke"
          />
          <path
            d="M0,600 Q600,500 1200,600 T1920,600"
            stroke="url(#gradient2)"
            strokeWidth="2"
            fill="none"
            className="animate-brush-stroke"
            style={{ animationDelay: "0.5s" }}
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--saffron)" stopOpacity="0.3" />
              <stop offset="50%" stopColor="var(--gold)" stopOpacity="0.5" />
              <stop offset="100%" stopColor="var(--terracotta)" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--emerald)" stopOpacity="0.3" />
              <stop offset="50%" stopColor="var(--saffron)" stopOpacity="0.5" />
              <stop offset="100%" stopColor="var(--gold)" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        <div className="animate-fade-in-up">
          <div className="mb-8">
            <h1 className="text-7xl md:text-9xl font-serif font-bold mb-4 leading-tight text-foreground">
              <span className="inline-block animate-paint-reveal">Kalasangham</span>
            </h1>
            <div className="text-2xl md:text-3xl font-sans font-light mb-6 opacity-95">
              <span className="text-saffron font-bold">कलासंगम</span> - Where Art Souls Unite
            </div>
            <div className="section-divider w-32 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto mb-12 space-y-6">
            <p className="text-xl md:text-2xl mb-6 leading-relaxed text-foreground">
              India is a living canvas of <span className="text-saffron font-semibold">extraordinary diversity</span> -
              where every state tells its story through colors, patterns, and ancient wisdom passed down through
              generations.
            </p>
            <p className="text-lg md:text-xl opacity-90 leading-relaxed text-muted-foreground">
              From the geometric storytelling of <span className="text-terracotta font-medium">Warli tribes</span> to
              the golden magnificence of <span className="text-gold font-medium">Tanjore paintings</span>, from the
              intricate narratives of <span className="text-emerald font-medium">Kalamkari</span> to the devotional
              beauty of <span className="text-saffron font-medium">Pichwai art</span> - each brushstroke carries the
              soul of our incredible heritage.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
              <span className="text-saffron font-bold">Kalasangham</span> is more than a platform - it's a
              <span className="text-gold font-semibold"> cultural sanctuary</span> where master artists gain the
              recognition they deserve, where ancient traditions find new audiences, and where every creation preserves
              our magnificent legacy for future generations.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              className="text-lg px-10 py-5 bg-saffron hover:bg-saffron/90 text-white transform hover:scale-105 transition-all duration-300 shadow-2xl border-2 border-gold/30"
              onClick={() => setCurrentPage("gallery")}
            >
              <Palette className="w-6 h-6 mr-3" />
              Discover Masterpieces
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-10 py-5 border-2 border-saffron text-saffron hover:bg-saffron hover:text-white transform hover:scale-105 transition-all duration-300 shadow-2xl bg-transparent"
              onClick={() => setCurrentPage("artforms")}
            >
              <Heart className="w-6 h-6 mr-3" />
              Explore Traditions
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 pithora-border opacity-30"></div>
    </section>
  )

  const ArtFormsShowcase = () => (
    <section className="py-20 warli-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif font-bold mb-4 text-foreground">Sacred Art Traditions</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Journey through India's diverse artistic heritage, each form carrying centuries of cultural wisdom
          </p>
          <div className="section-divider w-24 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Warli",
              image: "/warli-geometric-patterns.png",
              description:
                "Ancient tribal art from Maharashtra featuring geometric storytelling and daily life celebrations",
              color: "saffron",
              pattern: "geometric",
            },
            {
              name: "Madhubani",
              image: "/madhubani-floral-bihar.png",
              description:
                "Vibrant Mithila paintings from Bihar depicting Hindu deities, nature, and social celebrations",
              color: "terracotta",
              pattern: "floral",
            },
            {
              name: "Pithora",
              image: "/pithora-horses.png",
              description:
                "Ritualistic wall paintings of Gujarat tribes featuring horses, elephants, and ceremonial themes",
              color: "emerald",
              pattern: "tribal",
            },
          ].map((artform, index) => (
            <Card
              key={artform.name}
              className={`group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 bg-card/80 backdrop-blur-sm border-2 hover:border-${artform.color}/40 animate-scale-in`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={artform.image || "/placeholder.svg"}
                  alt={artform.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-${artform.color}/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                ></div>
                <div
                  className={`absolute top-4 right-4 w-8 h-8 border-2 border-white/80 rotate-45 bg-${artform.color}/20`}
                ></div>
              </div>
              <CardContent className="p-6">
                <h3 className={`font-serif font-bold text-2xl mb-3 text-${artform.color}`}>{artform.name}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{artform.description}</p>
                <Button
                  variant="outline"
                  className={`w-full hover:bg-${artform.color} hover:text-white transition-all duration-300 border-${artform.color}/30`}
                >
                  <Brush className="w-4 h-4 mr-2" />
                  Explore {artform.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )

  const CulturalDiversitySection = () => (
    <section className="py-20 brush-stroke-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl font-serif font-bold mb-6 text-foreground">
                A Tapestry of <span className="text-saffron">Infinite Beauty</span>
              </h2>
              <div className="section-divider w-16"></div>
            </div>

            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                <span className="text-saffron font-semibold">India's artistic heritage</span> spans millennia, with each
                region contributing its unique voice to our collective cultural symphony. From the snow-capped Himalayas
                to the tropical shores of Kerala, every corner of our nation breathes art.
              </p>
              <p>
                The <span className="text-terracotta font-medium">tribal communities</span> of central India paint their
                stories on walls and canvas, while the <span className="text-gold font-medium">royal courts</span>
                of Rajasthan created miniature masterpieces that capture divine beauty in every detail.
              </p>
              <p>
                <span className="text-emerald font-semibold">Kalasangham</span> celebrates this incredible diversity,
                ensuring that no artistic tradition is forgotten, no master artist goes unrecognized, and no cultural
                treasure is lost to time.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-card/50 rounded-lg border border-saffron/20">
                <div className="text-3xl font-bold text-saffron mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Master Artists</div>
              </div>
              <div className="text-center p-4 bg-card/50 rounded-lg border border-gold/20">
                <div className="text-3xl font-bold text-gold mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Art Traditions</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-card/30 rounded-2xl p-8 backdrop-blur-sm border border-border/50">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="/warli-geometric-patterns.png"
                  alt="Warli Art"
                  className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                />
                <img
                  src="/madhubani-floral-bihar.png"
                  alt="Madhubani Art"
                  className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                />
                <img
                  src="/gond-forest-animals.png"
                  alt="Gond Art"
                  className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                />
                <img
                  src="/kalamkari-krishna.png"
                  alt="Kalamkari Art"
                  className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="absolute -top-4 -left-4 w-8 h-8 bg-saffron/20 rounded-full animate-artistic-float"></div>
              <div
                className="absolute -top-2 -right-2 w-6 h-6 bg-gold/20 rotate-45 animate-artistic-float"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute -bottom-4 -right-4 w-10 h-10 border-2 border-terracotta/30 rounded-full animate-artistic-float"
                style={{ animationDelay: "2s" }}
              ></div>
              <div
                className="absolute -bottom-2 -left-2 w-4 h-4 bg-emerald/20 rotate-12 animate-artistic-float"
                style={{ animationDelay: "1.5s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )

  const CallToActionSection = () => (
    <section className="py-20 mandala-pattern">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div>
            <h2 className="text-5xl font-serif font-bold mb-6 text-foreground">
              Join the <span className="text-saffron">Cultural Renaissance</span>
            </h2>
            <div className="section-divider w-24 mx-auto"></div>
          </div>

          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Be part of preserving India's magnificent artistic heritage. Whether you're an artist seeking recognition,
            an art lover discovering traditions, or a patron supporting cultural preservation - your journey starts
            here.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              className="text-lg px-10 py-5 bg-gradient-to-r from-saffron to-gold hover:from-saffron/90 hover:to-gold/90 text-white transform hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              <User className="w-6 h-6 mr-3" />
              Become an Artist
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-10 py-5 border-2 border-emerald text-emerald hover:bg-emerald hover:text-white transform hover:scale-105 transition-all duration-300 shadow-2xl bg-transparent"
            >
              <Heart className="w-6 h-6 mr-3" />
              Support Artists
            </Button>
          </div>
        </div>
      </div>
    </section>
  )

  const FeaturedArtists = () => (
    <section className="py-20 gradient-art-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif font-bold mb-4 text-primary">Meet the Master Artists</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the passionate souls who dedicate their lives to preserving India's rich artistic heritage
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artists.map((artist) => (
            <Card
              key={artist.id}
              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-2 hover:border-primary/20"
            >
              <CardHeader className="text-center">
                <div className="relative">
                  <Avatar className="w-24 h-24 mx-auto mb-4 ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300">
                    <AvatarImage src={artist.avatar || "/placeholder.svg"} alt={artist.name} />
                    <AvatarFallback className="text-lg font-bold bg-primary text-primary-foreground">
                      {artist.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="absolute -top-2 -right-2">
                    <Star className="w-6 h-6 text-accent fill-accent" />
                  </div>
                </div>
                <CardTitle className="font-serif text-xl">{artist.name}</CardTitle>
                <CardDescription className="mb-2">
                  <Badge
                    variant="secondary"
                    className="bg-secondary/20 text-secondary hover:bg-secondary hover:text-secondary-foreground"
                  >
                    {artist.artform}
                  </Badge>
                </CardDescription>
                <p className="text-sm text-muted-foreground">{artist.location}</p>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground mb-6 line-clamp-3">{artist.bio}</p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedArtist(artist.id)}
                  className="group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                >
                  <User className="w-4 h-4 mr-2" />
                  View Profile
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )

  const ArtistProfile = ({ artistId }: { artistId: number }) => {
    const artist = artists.find((a) => a.id === artistId)
    if (!artist) return null

    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-card rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="relative">
            <div className="absolute top-4 right-4 z-10">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedArtist(null)}
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30"
              >
                ✕
              </Button>
            </div>

            <div className="gradient-art-bg p-8 text-center">
              <Avatar className="w-32 h-32 mx-auto mb-6 ring-4 ring-primary/30">
                <AvatarImage src={artist.avatar || "/placeholder.svg"} alt={artist.name} />
                <AvatarFallback className="text-2xl font-bold bg-primary text-primary-foreground">
                  {artist.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <h1 className="text-4xl font-serif font-bold text-primary mb-2">{artist.name}</h1>
              <Badge variant="secondary" className="mb-4 text-lg px-4 py-2">
                {artist.artform}
              </Badge>
              <p className="text-muted-foreground text-lg">{artist.location}</p>
            </div>

            <div className="p-8 space-y-8">
              <div className="bg-muted/50 rounded-xl p-6">
                <h3 className="text-2xl font-serif font-bold mb-4 flex items-center">
                  <Quote className="w-6 h-6 mr-2 text-primary" />
                  Artistic Philosophy
                </h3>
                <p className="text-lg leading-relaxed italic text-muted-foreground mb-4">"{artist.philosophy}"</p>
                <blockquote className="border-l-4 border-primary pl-4 text-primary font-medium">
                  "{artist.quote}"
                </blockquote>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-serif font-bold">Specialization</h3>
                  <p className="text-muted-foreground">{artist.specialization}</p>

                  <h3 className="text-xl font-serif font-bold">Experience</h3>
                  <p className="text-muted-foreground">{artist.experience}</p>
                </div>

                <div>
                  <h3 className="text-xl font-serif font-bold mb-4">Achievements</h3>
                  <ul className="space-y-2">
                    {artist.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-center text-muted-foreground">
                        <Star className="w-4 h-4 mr-2 text-accent fill-accent" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-serif font-bold mb-6">Featured Works</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {artworks
                    .filter((work) => work.artist === artist.name)
                    .map((work) => (
                      <div key={work.id} className="group cursor-pointer">
                        <div className="aspect-[4/5] overflow-hidden rounded-lg">
                          <img
                            src={work.image || "/placeholder.svg"}
                            alt={work.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <h4 className="font-medium mt-2">{work.title}</h4>
                        <p className="text-primary font-bold">{work.price}</p>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const GalleryPage = () => (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-serif font-bold mb-4 text-primary">Artwork Gallery</h1>
          <p className="text-xl text-muted-foreground">Discover masterpieces from India's finest folk artists</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {artforms.map((artform) => (
            <Button
              key={artform}
              variant={selectedFilter === artform ? "default" : "outline"}
              onClick={() => setSelectedFilter(artform)}
              className={`flex items-center gap-2 transition-all duration-300 ${
                selectedFilter === artform ? "transform scale-105 shadow-lg" : "hover:scale-105 hover:shadow-md"
              }`}
            >
              <Filter className="w-4 h-4" />
              {artform}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredArtworks.map((artwork, index) => (
            <Card
              key={artwork.id}
              className={`overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-float`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[4/5] overflow-hidden relative group">
                <img
                  src={artwork.image || "/placeholder.svg"}
                  alt={artwork.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <Badge variant="secondary" className="mb-2">
                      {artwork.artform}
                    </Badge>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-serif font-semibold text-lg mb-2">{artwork.title}</h3>
                <p className="text-muted-foreground mb-4">by {artwork.artist}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-primary">{artwork.price}</span>
                  <Button size="sm" className="hover:scale-105 transition-transform duration-200">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Inquire
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )

  const ArtformsPage = () => (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif font-bold mb-4 text-primary">The Sacred Art Forms</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Journey through India's diverse artistic traditions, each carrying centuries of cultural wisdom and
            spiritual significance
          </p>
        </div>

        <div className="space-y-20">
          {[
            {
              name: "Warli",
              image: "/warli-geometric-patterns.png",
              description:
                "Warli painting is a traditional art form of the Warli tribe from Maharashtra. Characterized by simple geometric shapes and stick figures, these paintings depict daily life, harvest festivals, and tribal customs. The art uses basic elements like circles, triangles, and lines to create intricate storytelling murals on mud walls.",
              origin: "Maharashtra, 10th century CE",
              characteristics: "Geometric patterns, Monochromatic, Tribal life themes",
            },
            {
              name: "Madhubani",
              image: "/madhubani-floral-bihar.png",
              description:
                "Madhubani art, also known as Mithila painting, originates from Bihar and Nepal. This vibrant art form features bold colors, intricate patterns, and depicts Hindu deities, nature, and social events. Traditionally created by women using natural pigments, these paintings are known for their eye-catching geometric patterns and symbolic representations.",
              origin: "Bihar & Nepal, 7th century CE",
              characteristics: "Vibrant colors, Natural pigments, Religious themes",
            },
            {
              name: "Pithora",
              image: "/pithora-horses.png",
              description:
                "Pithora is a ritualistic wall painting tradition of the Rathwa, Bhilala, and Nayka tribes of Gujarat and Madhya Pradesh. These colorful paintings feature horses, elephants, and human figures, often created during special ceremonies and festivals. The art form is deeply connected to tribal beliefs and serves as a form of prayer and celebration.",
              origin: "Gujarat & Madhya Pradesh, Ancient tribal tradition",
              characteristics: "Ritual significance, Bright colors, Animal motifs",
            },
            {
              name: "Gond",
              image: "/gond-forest-animals.png",
              description:
                "Gond art is a traditional form of painting from the Gond tribal community of Madhya Pradesh. Known for its intricate dot and line patterns, Gond art depicts the close connection between humans and nature. The art form uses bright colors and detailed patterns to represent trees, animals, birds, and mythological creatures.",
              origin: "Madhya Pradesh, Ancient tribal tradition",
              characteristics: "Dot patterns, Nature themes, Mythological creatures",
            },
            {
              name: "Kalamkari",
              image: "/kalamkari-krishna.png",
              description:
                "Kalamkari is an ancient art form of hand painting and block printing on textiles. The word 'Kalamkari' is derived from 'kalam' (pen) and 'kari' (work). This art form involves painting with a pen using natural dyes and depicts mythological stories, especially from the Ramayana and Mahabharata.",
              origin: "Andhra Pradesh & Telangana, 3000 years old",
              characteristics: "Pen work, Natural dyes, Mythological narratives",
            },
            {
              name: "Tanjore",
              image: "/tanjore-religious-art.png",
              description:
                "Tanjore painting is a classical South Indian art form known for its rich colors, surface richness, and compact composition. These paintings are characterized by the use of gold foil, precious stones, and vibrant colors. They primarily depict Hindu gods and goddesses, saints, and mythological characters.",
              origin: "Tamil Nadu, 16th century CE",
              characteristics: "Gold leaf work, Precious stones, Religious iconography",
            },
          ].map((artform, index) => (
            <div
              key={artform.name}
              className={`flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 items-center`}
            >
              <div className="lg:w-1/2">
                <div className="relative group">
                  <img
                    src={artform.image || "/placeholder.svg"}
                    alt={artform.name}
                    className="w-full rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
              <div className="lg:w-1/2 space-y-6">
                <div>
                  <h2 className="text-4xl font-serif font-bold mb-2 text-primary">{artform.name}</h2>
                  <p className="text-muted-foreground font-medium">{artform.origin}</p>
                </div>
                <p className="text-lg leading-relaxed text-muted-foreground">{artform.description}</p>
                <div className="bg-muted/50 rounded-xl p-4">
                  <h4 className="font-semibold mb-2 text-primary">Key Characteristics:</h4>
                  <p className="text-muted-foreground">{artform.characteristics}</p>
                </div>
                <Button
                  variant="outline"
                  className="hover:bg-primary hover:text-primary-foreground transition-colors duration-300 bg-transparent"
                >
                  <Palette className="w-4 h-4 mr-2" />
                  Explore {artform.name} Artists
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const AIExplainerPage = () => (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-serif font-bold mb-4 text-primary">AI Art Analyzer</h1>
          <p className="text-xl text-muted-foreground">
            Discover the stories, techniques, and cultural significance behind any folk art piece
          </p>
        </div>

        <Card className="mb-8 overflow-hidden">
          <CardHeader className="gradient-art-bg">
            <CardTitle className="text-center text-2xl font-serif">Upload an artwork to unlock its secrets</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="border-2 border-dashed border-border rounded-xl p-12 text-center hover:border-primary transition-all duration-300 hover:bg-muted/20">
              <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" id="image-upload" />
              <label htmlFor="image-upload" className="cursor-pointer">
                <Upload className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                <p className="text-xl mb-2 font-medium">Click to upload or drag and drop</p>
                <p className="text-muted-foreground">PNG, JPG, GIF up to 10MB</p>
              </label>
            </div>

            {uploadedImage && (
              <div className="mt-8 text-center">
                <img
                  src={uploadedImage || "/placeholder.svg"}
                  alt="Uploaded artwork"
                  className="max-w-md mx-auto rounded-xl shadow-lg mb-6"
                />
                <Button onClick={analyzeWithAI} size="lg" className="hover:scale-105 transition-transform duration-200">
                  <Palette className="w-5 h-5 mr-2" />
                  Analyze with AI
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {aiResponse && (
          <Card className="animate-shimmer">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl font-serif">
                <Star className="w-6 h-6 mr-2 text-accent" />
                AI Analysis Results
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-relaxed text-lg">{aiResponse}</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )

  const WorkshopsPage = () => (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif font-bold mb-4 text-primary">Master the Arts</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Learn directly from master artists in immersive workshops that preserve and pass on ancient techniques
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {workshops.map((workshop, index) => (
            <Card
              key={workshop.id}
              className={`hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-float`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="gradient-art-bg">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="w-4 h-4" />
                  {workshop.date}
                </div>
                <CardTitle className="font-serif text-xl">{workshop.title}</CardTitle>
                <CardDescription className="text-base">
                  with <span className="font-semibold text-primary">{workshop.artist}</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-6 leading-relaxed">{workshop.description}</p>
                <Button className="w-full hover:scale-105 transition-transform duration-200">
                  <Heart className="w-4 h-4 mr-2" />
                  Register Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )

  const Footer = () => (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Palette className="w-8 h-8 text-primary" />
              <div>
                <h3 className="text-2xl font-serif font-bold text-white">Kalasangham</h3>
                <p className="text-sm opacity-80">कलासंगम</p>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              Preserving India's magnificent folk art heritage through digital innovation, artist empowerment, and
              cultural education.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                <button
                  key={index}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-serif font-semibold text-white flex items-center">
              <Mail className="w-5 h-5 mr-2 text-primary" />
              Contact Us
            </h4>
            <div className="space-y-3 text-sm opacity-90">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary" />
                <span>hello@kalasangham.org</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-primary mt-1" />
                <span>
                  Cultural Heritage Center
                  <br />
                  New Delhi, India 110001
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-serif font-semibold text-white flex items-center">
              <Handshake className="w-5 h-5 mr-2 text-primary" />
              Partnership
            </h4>
            <div className="space-y-3 text-sm opacity-90">
              <button className="block hover:text-primary transition-colors duration-200">Artist Collaboration</button>
              <button className="block hover:text-primary transition-colors duration-200">Museum Partnerships</button>
              <button className="block hover:text-primary transition-colors duration-200">Educational Programs</button>
              <button className="block hover:text-primary transition-colors duration-200">Corporate Sponsorship</button>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-serif font-semibold text-white flex items-center">
              <DollarSign className="w-5 h-5 mr-2 text-primary" />
              Support Artists
            </h4>
            <div className="space-y-4">
              <p className="text-sm opacity-90">
                Help preserve India's cultural heritage by supporting our artists directly.
              </p>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                <Heart className="w-4 h-4 mr-2" />
                Donate Now
              </Button>
              <div className="space-y-2 text-sm opacity-90">
                <button className="block hover:text-primary transition-colors duration-200">Monthly Giving</button>
                <button className="block hover:text-primary transition-colors duration-200">Sponsor an Artist</button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm opacity-80">© 2024 Kalasangham. Preserving heritage, empowering artists.</p>
            <div className="flex space-x-6 text-sm opacity-80">
              <button className="hover:text-primary transition-colors duration-200">Privacy Policy</button>
              <button className="hover:text-primary transition-colors duration-200">Terms of Service</button>
              <button className="hover:text-primary transition-colors duration-200">Artist Guidelines</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <>
            <HeroSection />
            <ArtFormsShowcase />
            <CulturalDiversitySection />
            <FeaturedArtists />
            <CallToActionSection />
            <Footer />
          </>
        )
      case "gallery":
        return (
          <>
            <GalleryPage />
            <Footer />
          </>
        )
      case "artforms":
        return (
          <>
            <ArtformsPage />
            <Footer />
          </>
        )
      case "ai-explainer":
        return (
          <>
            <AIExplainerPage />
            <Footer />
          </>
        )
      case "workshops":
        return (
          <>
            <WorkshopsPage />
            <Footer />
          </>
        )
      default:
        return (
          <>
            <HeroSection />
            <ArtFormsShowcase />
            <CulturalDiversitySection />
            <FeaturedArtists />
            <CallToActionSection />
            <Footer />
          </>
        )
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {renderPage()}
      {selectedArtist && <ArtistProfile artistId={selectedArtist} />}
    </div>
  )
}
