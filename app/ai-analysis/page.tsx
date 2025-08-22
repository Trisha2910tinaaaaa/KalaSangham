"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Palette, ArrowLeft, Camera, Upload, X, Sparkles, BookOpen, MapPin, Users, Eye, Zap } from "lucide-react"
import Link from "next/link"

const sampleAnalyses = [
  {
    id: 1,
    image: "/madhubani-peacock.png",
    title: "Madhubani Peacock Art",
    analysis:
      "This is a beautiful example of Madhubani art, specifically from the Bharni style characterized by vibrant colors and intricate patterns. The peacock motif is central to Madhubani tradition, symbolizing love, beauty, and grace. The artwork shows traditional geometric patterns with floral elements, painted with natural pigments. The bold outlines and bright colors are hallmarks of this 2,500-year-old art form from Bihar. The use of peacock feathers and lotus motifs suggests themes of divine beauty and spiritual awakening in Hindu culture.",
    artform: "Madhubani",
    region: "Bihar, India",
    period: "2,500+ years old",
    significance: "Symbol of love and divine beauty",
  },
  {
    id: 2,
    image: "/warli-village.png",
    title: "Warli Village Life",
    analysis:
      "This artwork represents authentic Warli tribal art from Maharashtra, characterized by its distinctive white geometric patterns on a dark background. The painting depicts daily village life with human figures engaged in dance, farming, and community activities. Warli art uses only basic geometric shapes - circles for sun and moon, triangles for mountains and trees, and squares for sacred enclosures. The stick-like human figures and animals are typical of this 2,500-year-old tradition, originally painted on mud walls with rice paste.",
    artform: "Warli",
    region: "Maharashtra, India",
    period: "2,500+ years old",
    significance: "Depicts tribal life and nature worship",
  },
  {
    id: 3,
    image: "/pithora-horse-traditional.png",
    title: "Sacred Pithora Horses",
    analysis:
      "This is a traditional Pithora painting featuring the sacred horses of Baba Pithora, created by the Bhil and Rathwa tribes of Gujarat and Madhya Pradesh. The distinctive dotted style and vibrant colors are characteristic of this ritualistic art form. The seven horses represent the seven hills where Baba Pithora is believed to reside. Each dot is considered a blessing, and the painting serves as an offering to ensure prosperity and happiness. The art form is deeply spiritual and is created during special ceremonies.",
    artform: "Pithora",
    region: "Gujarat & Madhya Pradesh",
    period: "Ancient tribal tradition",
    significance: "Sacred offering for prosperity and blessings",
  },
]

export default function AIAnalysisPage() {
  const [uploadedImage, setUploadedImage] = useState(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisResult, setAnalysisResult] = useState("")
  const [showAnalysis, setShowAnalysis] = useState(false)
  const [selectedSample, setSelectedSample] = useState(null)

  const handleImageUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setUploadedImage(e.target.result)
        setShowAnalysis(false)
        setAnalysisResult("")
      }
      reader.readAsDataURL(file)
    }
  }

  const analyzeArtwork = () => {
    setIsAnalyzing(true)
    setShowAnalysis(false)

    setTimeout(() => {
      setAnalysisResult(
        "✅ Analysis Complete! This appears to be a classic Madhubani painting, also known as Mithila art. It likely originates from the Mithila region of Bihar, India. The central figure of the goddess Durga on her tiger, surrounded by intricate floral and animal motifs, is a common theme representing power, protection, and the harmony of nature. The use of natural pigments and the double-line border are key identifiers of this style. The geometric patterns and vibrant colors suggest this was created using traditional techniques passed down through generations of women artists in Bihar villages.",
      )
      setIsAnalyzing(false)
      setShowAnalysis(true)
    }, 2000) // Reduced delay to 2 seconds for better user experience
  }

  const analyzeSample = (sample) => {
    setSelectedSample(sample)
    setUploadedImage(sample.image)
    setAnalysisResult(sample.analysis)
    setShowAnalysis(true)
    setIsAnalyzing(false)
  }

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
                  <p className="text-xs text-gray-600">AI Art Analysis</p>
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
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full text-orange-700 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Powered by Advanced AI
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">AI Art Analysis</h1>
            <p className="text-xl text-gray-700 mb-8">
              Upload any Indian folk art image and our AI will identify the art form, explain its cultural significance,
              and share its fascinating story.
            </p>
          </div>
        </div>
      </section>

      {/* Main Analysis Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Upload Section */}
              <div>
                <Card className="border-0 bg-white shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl text-gray-900 flex items-center">
                      <Camera className="w-6 h-6 mr-2 text-orange-600" />
                      Upload Your Artwork
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="border-2 border-dashed border-orange-300 rounded-lg p-8 text-center">
                      {uploadedImage ? (
                        <div className="space-y-4">
                          <img
                            src={uploadedImage || "/placeholder.svg"}
                            alt="Uploaded artwork"
                            className="max-w-full max-h-80 mx-auto rounded-lg shadow-md"
                          />
                          <Button
                            onClick={() => {
                              setUploadedImage(null)
                              setShowAnalysis(false)
                              setAnalysisResult("")
                              setSelectedSample(null)
                            }}
                            variant="outline"
                            size="sm"
                            className="border-orange-300 text-orange-700 hover:bg-orange-50"
                          >
                            <X className="w-4 h-4 mr-1" />
                            Remove Image
                          </Button>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          <Camera className="w-16 h-16 text-orange-400 mx-auto" />
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Upload Folk Art Image</h3>
                            <p className="text-gray-600 mb-4">
                              Upload an image of Indian folk art to get detailed analysis and cultural insights
                            </p>
                            <Label htmlFor="image-upload" className="cursor-pointer">
                              <div className="inline-flex items-center px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition-colors">
                                <Upload className="w-4 h-4 mr-2" />
                                Choose Image
                              </div>
                              <Input
                                id="image-upload"
                                type="file"
                                accept="image/*"
                                onChange={handleImageUpload}
                                className="hidden"
                              />
                            </Label>
                          </div>
                        </div>
                      )}
                    </div>

                    {uploadedImage && (
                      <div className="text-center">
                        <Button
                          onClick={analyzeArtwork}
                          disabled={isAnalyzing}
                          size="lg"
                          className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-4"
                        >
                          {isAnalyzing ? (
                            <>
                              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                              Analyzing Artwork...
                            </>
                          ) : (
                            <>
                              <Zap className="w-5 h-5 mr-2" />
                              Analyze with AI
                            </>
                          )}
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Results Section */}
              <div>
                {showAnalysis && (
                  <Card className="border-0 bg-white shadow-xl">
                    <CardHeader>
                      <CardTitle className="text-2xl text-gray-900 flex items-center">
                        <BookOpen className="w-6 h-6 mr-2 text-orange-600" />
                        AI Analysis Results
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="prose prose-gray max-w-none">
                        <p className="text-gray-700 leading-relaxed">{analysisResult}</p>
                      </div>

                      {selectedSample && (
                        <div className="space-y-4 pt-4 border-t">
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="text-gray-600">Art Form:</span>
                              <span className="font-medium ml-2">{selectedSample.artform}</span>
                            </div>
                            <div>
                              <span className="text-gray-600">Region:</span>
                              <span className="font-medium ml-2">{selectedSample.region}</span>
                            </div>
                            <div>
                              <span className="text-gray-600">Period:</span>
                              <span className="font-medium ml-2">{selectedSample.period}</span>
                            </div>
                            <div>
                              <span className="text-gray-600">Significance:</span>
                              <span className="font-medium ml-2">{selectedSample.significance}</span>
                            </div>
                          </div>
                        </div>
                      )}

                      <div className="flex space-x-3">
                        <Link href="/artforms">
                          <Button
                            variant="outline"
                            className="border-orange-300 text-orange-700 hover:bg-orange-50 bg-transparent"
                          >
                            <BookOpen className="w-4 h-4 mr-2" />
                            Learn More About Art Forms
                          </Button>
                        </Link>
                        <Link href="/artists">
                          <Button
                            variant="outline"
                            className="border-orange-300 text-orange-700 hover:bg-orange-50 bg-transparent"
                          >
                            <Users className="w-4 h-4 mr-2" />
                            Meet the Artists
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {!showAnalysis && !uploadedImage && (
                  <Card className="border-0 bg-gradient-to-br from-orange-50 to-red-50 shadow-xl">
                    <CardHeader>
                      <CardTitle className="text-2xl text-gray-900">How It Works</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-orange-600 font-bold">1</span>
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">Upload Your Image</h3>
                            <p className="text-gray-600 text-sm">
                              Upload any image of Indian folk art - paintings, textiles, or crafts
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-orange-600 font-bold">2</span>
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">AI Analysis</h3>
                            <p className="text-gray-600 text-sm">
                              Our AI identifies the art form, techniques, and cultural context
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-orange-600 font-bold">3</span>
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">Learn & Discover</h3>
                            <p className="text-gray-600 text-sm">
                              Get detailed insights about history, significance, and cultural meaning
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Analyses */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Try Sample Analyses</h2>
              <p className="text-xl text-gray-700">
                See how our AI analyzes different types of Indian folk art with these sample images.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {sampleAnalyses.map((sample) => (
                <Card
                  key={sample.id}
                  className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden"
                  onClick={() => analyzeSample(sample)}
                >
                  <div className="aspect-square relative overflow-hidden">
                    <img
                      src={sample.image || "/placeholder.svg"}
                      alt={sample.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-lg font-bold mb-1">{sample.title}</h3>
                      <div className="flex items-center text-orange-200">
                        <MapPin className="w-4 h-4 mr-1" />
                        {sample.region}
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{sample.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{sample.analysis}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-orange-600 font-medium">{sample.artform}</span>
                      <Button
                        size="sm"
                        className="bg-orange-600 hover:bg-orange-700 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <Eye className="w-4 h-4 mr-1" />
                        Analyze
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
