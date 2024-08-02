import { Button } from "@/components/ui/button";
import { Heart, Paw, Shield } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white py-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Dog Lovers Paradise</h1>
          <p className="text-xl">Discover the joy and companionship of man's best friend</p>
        </div>
      </header>

      <main className="container mx-auto py-12">
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">Why Dogs Make Great Pets</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Heart className="h-12 w-12 text-red-500" />}
              title="Unconditional Love"
              description="Dogs offer unwavering loyalty and affection, providing emotional support and companionship."
            />
            <FeatureCard
              icon={<Paw className="h-12 w-12 text-brown-500" />}
              title="Active Lifestyle"
              description="Having a dog encourages regular exercise and outdoor activities, promoting a healthier lifestyle."
            />
            <FeatureCard
              icon={<Shield className="h-12 w-12 text-blue-500" />}
              title="Home Security"
              description="Dogs can serve as natural deterrents to intruders, helping to keep your home safe and secure."
            />
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">Popular Dog Breeds</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <DogBreedCard
              name="Labrador Retriever"
              description="Friendly, outgoing, and high-spirited companions who have more than enough affection to go around for a family looking for a medium-to-large dog."
              imageUrl="https://upload.wikimedia.org/wikipedia/commons/2/26/YellowLabradorLooking_new.jpg"
            />
            <DogBreedCard
              name="German Shepherd"
              description="Intelligent, capable, and loving dogs that excel at most anything they're trained to do: guide and assistance work, search and rescue, police and military service, and more."
              imageUrl="https://upload.wikimedia.org/wikipedia/commons/d/d0/German_Shepherd_-_DSC_0346_%2810096362833%29.jpg"
            />
            <DogBreedCard
              name="Golden Retriever"
              description="Intelligent, friendly, and devoted dogs. They are serious workers at hunting and field work, as guides for the blind, and in search-and-rescue, enjoy obedience and other competitive events."
              imageUrl="https://upload.wikimedia.org/wikipedia/commons/b/bd/Golden_Retriever_Dukedestiny01_drvd.jpg"
            />
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-4">Ready to Find Your Perfect Companion?</h2>
          <p className="text-xl mb-8">Explore local shelters and rescue organizations to give a loving dog a forever home.</p>
          <Button size="lg">Find a Dog Near You</Button>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Dog Lovers Paradise. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md text-center">
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const DogBreedCard = ({ name, description, imageUrl }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src={imageUrl} alt={name} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

export default Index;
