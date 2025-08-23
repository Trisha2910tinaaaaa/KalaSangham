"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { 
  Palette, 
  ArrowLeft, 
  CheckCircle, 
  FileText, 
  Package, 
  Globe, 
  Award,
  Clock,
  AlertCircle,
  Star
} from "lucide-react"
import Link from "next/link"

const checklistItems = [
  {
    id: 1,
    title: "Materials Certification",
    description: "Obtain certification for all materials used in your artwork to ensure they meet international standards",
    category: "Legal",
    estimatedTime: "2-3 weeks",
    importance: "Critical"
  },
  {
    id: 2,
    title: "Cultural Documentation",
    description: "Document the cultural significance and traditional techniques used in your art form",
    category: "Cultural",
    estimatedTime: "1-2 weeks",
    importance: "High"
  },
  {
    id: 3,
    title: "Packaging Standards",
    description: "Ensure your artwork is packaged according to international shipping and preservation standards",
    category: "Logistics",
    estimatedTime: "3-5 days",
    importance: "High"
  },
  {
    id: 4,
    title: "Quality Assurance",
    description: "Complete quality checks and obtain necessary quality certifications for your artwork",
    category: "Quality",
    estimatedTime: "1 week",
    importance: "Critical"
  },
  {
    id: 5,
    title: "Export Documentation",
    description: "Prepare all required export documents including customs declarations and certificates of origin",
    category: "Legal",
    estimatedTime: "1-2 weeks",
    importance: "Critical"
  }
]

export default function ExportReadyPage() {
  const [checkedItems, setCheckedItems] = useState<number[]>([])
  
  const handleCheckboxChange = (itemId: number) => {
    setCheckedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    )
  }
  
  const progressPercentage = (checkedItems.length / checklistItems.length) * 100
  
  const getImportanceColor = (importance: string) => {
    switch (importance) {
      case "Critical": return "bg-red-100 text-red-800 border-red-200"
      case "High": return "bg-orange-100 text-orange-800 border-orange-200"
      default: return "bg-blue-100 text-blue-800 border-blue-200"
    }
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
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                    कलासंगम
                  </h1>
                  <p className="text-xs text-gray-600">Export Ready Guide</p>
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
              <Globe className="w-4 h-4 mr-2" />
              International Export Guide
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Export Ready Checklist</h1>
            <p className="text-xl text-gray-700 mb-8">
              Prepare your traditional Indian folk art for the global market. Follow this comprehensive checklist to ensure your artwork meets international standards and reaches collectors worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Progress Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-900">Your Progress</h2>
              <div className="text-right">
                <div className="text-3xl font-bold text-orange-600">{Math.round(progressPercentage)}%</div>
                <div className="text-sm text-gray-600">
                  {checkedItems.length} of {checklistItems.length} completed
                </div>
              </div>
            </div>
            <Progress value={progressPercentage} className="h-3" />
            {progressPercentage === 100 && (
              <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                <span className="text-green-800 font-medium">Congratulations! Your artwork is export ready!</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Checklist Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6">
              {checklistItems.map((item) => (
                <Card key={item.id} className="border-0 bg-white shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Checkbox
                        checked={checkedItems.includes(item.id)}
                        onCheckedChange={() => handleCheckboxChange(item.id)}
                        className="mt-1"
                      />
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                          <Badge className={`${getImportanceColor(item.importance)} text-xs`}>
                            {item.importance}
                          </Badge>
                        </div>
                        <p className="text-gray-600 mb-3">{item.description}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center">
                            <FileText className="w-4 h-4 mr-1" />
                            {item.category}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {item.estimatedTime}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Pro Tips for Export Success</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 bg-gradient-to-br from-orange-50 to-red-50">
                <CardHeader>
                  <CardTitle className="flex items-center text-orange-600">
                    <Award className="w-5 h-5 mr-2" />
                    Quality First
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    International buyers expect the highest quality. Take extra time to ensure your artwork meets or exceeds global standards. Consider getting professional photography of your work.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-0 bg-gradient-to-br from-blue-50 to-indigo-50">
                <CardHeader>
                  <CardTitle className="flex items-center text-blue-600">
                    <Package className="w-5 h-5 mr-2" />
                    Proper Packaging
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Invest in high-quality packaging materials. Your artwork may travel thousands of miles - proper packaging ensures it arrives in perfect condition.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-0 bg-gradient-to-br from-green-50 to-emerald-50">
                <CardHeader>
                  <CardTitle className="flex items-center text-green-600">
                    <FileText className="w-5 h-5 mr-2" />
                    Documentation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Keep detailed records of your materials, techniques, and cultural significance. This documentation adds value and authenticity to your artwork.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-0 bg-gradient-to-br from-purple-50 to-violet-50">
                <CardHeader>
                  <CardTitle className="flex items-center text-purple-600">
                    <Globe className="w-5 h-5 mr-2" />
                    Cultural Story
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    International buyers love the story behind your art. Include information about the cultural significance and traditional techniques used.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Go Global?</h2>
            <p className="text-xl mb-8 opacity-90">
              Complete this checklist and join our network of artists successfully exporting traditional Indian folk art worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/artists">
                <Button variant="secondary" size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
                  <Palette className="w-5 h-5 mr-2" />
                  Meet Export Artists
                </Button>
              </Link>
              <Link href="/gallery">
                <Button variant="outline" size="lg" className="border-white text-orange-600 hover:bg-white hover:text-orange-600">
                  <Star className="w-5 h-5 mr-2" />
                  View Export Gallery
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 