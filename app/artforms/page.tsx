"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Palette, ArrowLeft, MapPin, Calendar, Users, BookOpen, Brush, Heart } from "lucide-react"
import Link from "next/link"

const artforms = [
  {
    id: 1,
    name: "Warli",
    region: "Maharashtra & Gujarat",
    image: "/warli-village.png",
    description:
      "Ancient tribal art form using simple geometric shapes to depict daily life, nature, and rituals of the Warli tribe.",
    history:
      "Warli painting is a 2500-year-old tradition of the Warli tribe from Maharashtra and Gujarat. Originally painted on the walls of houses during harvest festivals and weddings, these paintings use rice paste on mud walls. The art form remained within the tribal community until the 1970s when it gained recognition through artists like Jivya Soma Mashe.",
    techniques:
      "Warli paintings use only white pigment made from rice paste and water, with occasional use of red and yellow ochre. The paintings are created using bamboo sticks and consist of basic geometric shapes - circles, triangles, and lines. The circle represents the sun and moon, the triangle represents mountains and trees, and the square represents sacred enclosures.",
    significance:
      "Warli art is deeply connected to nature and social life. The paintings often depict scenes of hunting, fishing, farming, festivals, and trees. They serve as a medium to pass down traditions and stories from generation to generation. The art form is considered sacred and is believed to bring prosperity and ward off evil spirits.",
    artists: ["Jivya Soma Mashe", "Ramesh Hengadi", "Sadashiv Mashe"],
    period: "2500+ years old",
    materials: "Rice paste, mud walls, bamboo sticks",
  },
  {
    id: 2,
    name: "Madhubani",
    region: "Bihar & Nepal",
    image: "/madhubani-peacock.png",
    description:
      "Vibrant folk art featuring intricate patterns, mythological themes, and natural motifs, traditionally painted by women of Mithila.",
    history:
      "Madhubani painting originated in the Mithila region of Bihar and Nepal, dating back to the 7th century. Legend says it began when King Janaka commissioned artists to create paintings for his daughter Sita's wedding to Lord Rama. The art form was traditionally practiced by women on the walls and floors of their homes during festivals and special occasions.",
    techniques:
      "Madhubani paintings are characterized by intricate geometric patterns, vibrant colors, and bold outlines. Traditional pigments are made from plants and minerals - turmeric for yellow, indigo for blue, vermillion for red, and lampblack for black. The paintings are created using fingers, twigs, brushes, nib-pens, and matchsticks.",
    significance:
      "Madhubani art serves multiple purposes - decorative, ritualistic, and spiritual. The paintings often depict Hindu deities, court scenes, wedding ceremonies, and social events. Different castes traditionally painted different themes, with Brahmins focusing on religious themes and Kayasthas on secular subjects. The art form is believed to bring good luck and prosperity.",
    artists: ["Baua Devi", "Ganga Devi", "Sita Devi", "Bharti Dayal"],
    period: "1300+ years old",
    materials: "Natural pigments, handmade paper, cloth, walls",
  },
  {
    id: 3,
    name: "Pithora",
    region: "Gujarat & Madhya Pradesh",
    image: "/pithora-horse-traditional.png",
    description:
      "Sacred art of the Bhil and Rathwa tribes featuring horses and dots, created as offerings to Baba Pithora for prosperity.",
    history:
      "Pithora painting is a ritualistic art form of the Bhil and Rathwa tribes of Gujarat and Madhya Pradesh. The tradition involves painting elaborate murals on the walls of houses as offerings to Baba Pithora, a deity believed to bring prosperity and happiness. The paintings are created during special ceremonies and are considered sacred.",
    techniques:
      "Pithora paintings are characterized by their distinctive dotted style and vibrant colors. The main motifs include horses (representing Baba Pithora), elephants, birds, and human figures. The paintings are created using natural pigments and are filled with thousands of dots. The process involves specific rituals and is often accompanied by music and dance.",
    significance:
      "Pithora art is deeply spiritual and ritualistic. The paintings are believed to fulfill wishes and bring prosperity to the household. The seven horses in the painting represent the seven hills where Baba Pithora is believed to reside. The art form is not just decorative but serves as a medium of communication with the divine.",
    artists: ["Bhuri Bai", "Sher Singh Bhabhor", "Ram Singh", "Lado Bai"],
    period: "Ancient tribal tradition",
    materials: "Natural pigments, mud walls, brushes made from bamboo",
  },
  {
    id: 4,
    name: "Gond",
    region: "Madhya Pradesh & Chhattisgarh",
    image: "/gond-forest-animals.png",
    description:
      "Intricate tribal art featuring nature motifs, animals, and mythological creatures with distinctive dot and line patterns.",
    history:
      "Gond art originates from the Gond tribe, one of India's largest tribal communities, primarily found in Madhya Pradesh and Chhattisgarh. The art form was traditionally used to decorate the walls and floors of houses during festivals and ceremonies. It gained contemporary recognition through artists like Jangarh Singh Shyam in the 1980s.",
    techniques:
      "Gond paintings are characterized by intricate patterns made of dots and lines. The art form uses bright colors and depicts animals, birds, trees, and mythological creatures. Traditional pigments are made from natural sources like colored soil, plant dyes, and charcoal. The paintings often tell stories from Gond mythology and folklore.",
    significance:
      "Gond art is deeply connected to nature and spirituality. The paintings often depict the relationship between humans, animals, and nature. Each painting tells a story and carries cultural significance. The art form serves as a medium to preserve tribal traditions, beliefs, and stories for future generations.",
    artists: ["Jangarh Singh Shyam", "Bhajju Shyam", "Venkat Shyam", "Durga Bai"],
    period: "Ancient tribal tradition",
    materials: "Natural pigments, handmade paper, canvas, walls",
  },
  {
    id: 5,
    name: "Kalamkari",
    region: "Andhra Pradesh & Telangana",
    image: "/kalamkari-krishna.png",
    description:
      "Ancient textile art using hand-painting and block-printing techniques to create intricate designs with natural dyes.",
    history:
      "Kalamkari, meaning 'pen work,' is a 3000-year-old art form from Andhra Pradesh and Telangana. There are two distinctive styles - Srikalahasti style (free-hand drawing) and Machilipatnam style (block printing). The art form flourished under the patronage of various dynasties and was used to create temple hangings and clothing.",
    techniques:
      "Kalamkari involves 23 steps of dyeing, bleaching, hand painting, block printing, starching, cleaning, and more. Natural dyes are used - indigo for blue, madder for red, pomegranate rind for yellow, and iron for black. The fabric is treated with milk and myrobalan before painting to help the colors adhere.",
    significance:
      "Kalamkari art traditionally depicts scenes from Hindu epics like Ramayana and Mahabharata, along with floral and geometric patterns. The art form has religious significance and was used to create temple decorations and clothing for deities. It represents the rich textile heritage of South India.",
    artists: ["Niranjan Kalamkari", "Pedana Kalamkari artists", "Srikalahasti artists"],
    period: "3000+ years old",
    materials: "Cotton fabric, natural dyes, bamboo pen, wooden blocks",
  },
  {
    id: 6,
    name: "Tanjore",
    region: "Tamil Nadu",
    image: "/tanjore-ganesha-gold.png",
    description:
      "Classical South Indian painting style known for rich colors, surface richness, and compact composition with gold foil.",
    history:
      "Tanjore painting originated in the town of Thanjavur in Tamil Nadu during the 16th century under the patronage of the Nayakas of Thanjavur. The art form reached its zenith during the rule of the Maratha princes (1676-1855). These paintings were traditionally used to decorate temples and palaces.",
    techniques:
      "Tanjore paintings are characterized by rich and vivid colors, simple iconic composition, glittering gold foils, and the use of precious and semi-precious stones. The paintings are made on wooden planks covered with cloth and then coated with chalk powder or zinc oxide mixed with water-soluble adhesive.",
    significance:
      "Tanjore paintings primarily depict Hindu gods and goddesses, with Lord Krishna being a popular subject. The paintings are considered sacred and are believed to bring prosperity and good fortune. The art form represents the rich cultural heritage of Tamil Nadu and South Indian temple art.",
    artists: ["Traditional Tanjore artists", "Ravi Varma influenced artists"],
    period: "400+ years old",
    materials: "Wood, cloth, gold foil, precious stones, natural pigments",
  },
]

export default function ArtformsPage() {
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
                  <p className="text-xs text-gray-600">Art Traditions</p>
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
            <h1 className="text-5xl font-bold text-gray-900 mb-6">India's Art Traditions</h1>
            <p className="text-xl text-gray-700 mb-8">
              Journey through centuries of artistic heritage. Each tradition carries the soul of its community and the
              wisdom of generations.
            </p>
          </div>
        </div>
      </section>

      {/* Art Forms Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artforms.map((artform) => (
              <Dialog key={artform.id}>
                <DialogTrigger asChild>
                  <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden">
                    <div className="aspect-square relative overflow-hidden">
                      <img
                        src={artform.image || "/placeholder.svg"}
                        alt={artform.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-2xl font-bold mb-1">{artform.name}</h3>
                        <div className="flex items-center text-orange-200">
                          <MapPin className="w-4 h-4 mr-1" />
                          {artform.region}
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <p className="text-gray-700 line-clamp-3 mb-4">{artform.description}</p>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="border-orange-300 text-orange-700">
                          {artform.period}
                        </Badge>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-orange-300 text-orange-700 hover:bg-orange-50 bg-transparent"
                        >
                          Learn More
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <div className="aspect-video relative overflow-hidden rounded-lg mb-4">
                      <img
                        src={artform.image || "/placeholder.svg"}
                        alt={artform.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <DialogTitle className="text-3xl text-gray-900">{artform.name} Art</DialogTitle>
                    <DialogDescription className="text-lg text-orange-600 font-medium flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      Traditional art from {artform.region}
                    </DialogDescription>
                  </DialogHeader>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                        <BookOpen className="w-5 h-5 mr-2 text-orange-600" />
                        Overview
                      </h3>
                      <p className="text-gray-700 leading-relaxed">{artform.description}</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                          <Calendar className="w-5 h-5 mr-2 text-orange-600" />
                          Historical Background
                        </h3>
                        <p className="text-gray-700 leading-relaxed">{artform.history}</p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                          <Brush className="w-5 h-5 mr-2 text-orange-600" />
                          Techniques & Materials
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-3">{artform.techniques}</p>
                        <div className="bg-orange-50 p-3 rounded-lg">
                          <p className="text-sm text-orange-800">
                            <strong>Materials:</strong> {artform.materials}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                        <Heart className="w-5 h-5 mr-2 text-orange-600" />
                        Cultural Significance
                      </h3>
                      <p className="text-gray-700 leading-relaxed">{artform.significance}</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                        <Users className="w-5 h-5 mr-2 text-orange-600" />
                        Notable Artists
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {artform.artists.map((artist, index) => (
                          <Badge key={index} variant="secondary" className="bg-orange-100 text-orange-800">
                            {artist}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-center pt-4 border-t">
                      <Link href="/artists">
                        <Button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white">
                          Meet {artform.name} Artists
                        </Button>
                      </Link>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
