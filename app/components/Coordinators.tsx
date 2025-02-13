import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Coordinators() {
  const coordinators = [
    { name: "Jane Doe", role: "Event Director", image: "/placeholder.svg" },
    { name: "John Smith", role: "Technical Lead", image: "/placeholder.svg" },
    { name: "Alice Johnson", role: "Sponsorship Coordinator", image: "/placeholder.svg" },
    { name: "Bob Williams", role: "Logistics Manager", image: "/placeholder.svg" },
  ]

  return (
    <section id="coordinators" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Meet the Coordinators</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coordinators.map((coordinator, index) => (
            <Card key={index}>
              <CardHeader>
                <Avatar className="w-24 h-24 mx-auto">
                  <AvatarImage src={coordinator.image} alt={coordinator.name} />
                  <AvatarFallback>
                    {coordinator.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <CardTitle className="text-center mt-4">{coordinator.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600">{coordinator.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

