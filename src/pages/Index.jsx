import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [score, setScore] = useState(0);
  const [gameActive, setGameActive] = useState(false);

  useEffect(() => {
    if (gameActive) {
      const interval = setInterval(() => {
        setPosition({
          x: Math.random() * (window.innerWidth - 100),
          y: Math.random() * (window.innerHeight - 100),
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [gameActive]);

  const handleCatClick = () => {
    setScore(score + 1);
  };

  const startGame = () => {
    setGameActive(true);
    setScore(0);
  };

  const stopGame = () => {
    setGameActive(false);
  };

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-center">All About Cats</h1>
      
      <div className="max-w-4xl mx-auto">
        <Link to="/about" className="inline-block mb-8 text-blue-600 hover:text-blue-800 underline">
          Learn more about us
        </Link>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Cat Catcher Game</CardTitle>
            <CardDescription>Click the cat to score points!</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center mb-4">
              <p className="text-xl font-bold">Score: {score}</p>
              {!gameActive && (
                <Button onClick={startGame} className="mr-2">Start Game</Button>
              )}
              {gameActive && (
                <Button onClick={stopGame} variant="destructive">Stop Game</Button>
              )}
            </div>
            {gameActive && (
              <div className="relative h-[300px] border border-gray-300 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
                  alt="Cat to catch"
                  className="absolute cursor-pointer transition-all duration-300 ease-in-out w-[100px] h-[100px] object-cover"
                  style={{ left: `${position.x}px`, top: `${position.y}px` }}
                  onClick={handleCatClick}
                />
              </div>
            )}
          </CardContent>
        </Card>
        <div className="grid grid-cols-2 gap-4 mb-8">
          <img 
            src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
            alt="Cute orange cat" 
            className="mx-auto object-cover w-full h-[200px] rounded-lg"
          />
          <img 
            src="https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
            alt="Playful kitten" 
            className="mx-auto object-cover w-full h-[200px] rounded-lg"
          />
          <img 
            src="https://images.unsplash.com/photo-1495360010541-f48722b34f7d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
            alt="Curious cat" 
            className="mx-auto object-cover w-full h-[200px] rounded-lg"
          />
          <img 
            src="/placeholder.svg" 
            alt="Cat placeholder" 
            className="mx-auto object-cover w-full h-[200px] rounded-lg bg-gray-300"
          />
        </div>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Feline Facts</CardTitle>
            <CardDescription>Interesting tidbits about our furry friends</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li>Cats have excellent night vision and can see at one-sixth the light level required for human vision.</li>
              <li>A group of cats is called a "clowder".</li>
              <li>Cats spend 70% of their lives sleeping.</li>
              <li>A cat's hearing is much more sensitive than humans and dogs.</li>
              <li>The first cat in space was a French cat named Felicette in 1963.</li>
              <li>Cats can't taste sweetness due to a genetic mutation.</li>
              <li>A cat's nose print is unique, like a human's fingerprint.</li>
              <li>The oldest known pet cat was found in a 9,500-year-old grave on the Mediterranean island of Cyprus.</li>
              <li>Cats have 230 bones, while humans only have 206.</li>
              <li>A cat's sense of smell is 14 times stronger than a human's.</li>
              <li>Cats can jump up to six times their length.</li>
              <li>A cat's brain is 90% similar to a human's — more similar than to a dog's.</li>
              <li>A cat's purr vibrates at a frequency of 25 to 150 hertz, which is the same frequency at which muscles and bones repair themselves.</li>
              <li>The world's richest cat, Blackie, inherited £7 million from his owner in 1988.</li>
            </ul>
          </CardContent>
        </Card>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Popular Cat Breeds</CardTitle>
            <CardDescription>Some well-known feline varieties</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li>Siamese: Known for their distinctive coloring and vocal nature.</li>
              <li>Maine Coon: One of the largest domesticated cat breeds with a distinctive physical appearance.</li>
              <li>Persian: Recognized for their long fur and flat faces.</li>
              <li>Bengal: A hybrid breed with a wild appearance resembling leopards.</li>
              <li>British Shorthair: Famous for their round faces and dense, plush coats.</li>
              <li>Scottish Fold: Characterized by their unique folded ears and owl-like appearance.</li>
              <li>Sphynx: A hairless breed known for their wrinkled skin and extroverted personality.</li>
              <li>Ragdoll: Large, semi-longhaired cats known for their docile and affectionate nature.</li>
              <li>Russian Blue: Elegant cats with a silvery-blue coat and green eyes.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Cat Communication</CardTitle>
            <CardDescription>How cats express themselves</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li>Meowing: Primarily used to communicate with humans, not other cats.</li>
              <li>Purring: Can indicate contentment, but also used when in pain or stressed.</li>
              <li>Hissing and growling: Clear signs of fear, anger, or aggression.</li>
              <li>Chirping or trilling: Often used as a greeting or to get attention.</li>
              <li>Yowling: Can signal distress, territorial disputes, or mating behaviors.</li>
              <li>Body language: Tail position, ear orientation, and posture all convey different messages.</li>
              <li>Scent marking: Rubbing against objects or people to leave their scent.</li>
              <li>Facial expressions: Subtle changes in whisker position and eye shape can indicate mood.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Cat Behavior</CardTitle>
            <CardDescription>Understanding feline actions and instincts</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li>Kneading: Often called "making biscuits," this behavior is a sign of contentment and comfort.</li>
              <li>Scratching: Natural behavior for claw maintenance and territory marking.</li>
              <li>Hiding: Cats seek out small, enclosed spaces when stressed or for safety.</li>
              <li>Grooming: Beyond cleanliness, excessive grooming can indicate stress or medical issues.</li>
              <li>Hunting: Even well-fed cats may exhibit hunting behaviors with toys or small prey.</li>
              <li>Sleeping patterns: Cats are crepuscular, most active during dawn and dusk.</li>
              <li>Social bonding: Cats can form strong bonds with humans and other pets.</li>
              <li>Play behavior: Important for exercise, mental stimulation, and bonding.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Cat Care Tips</CardTitle>
            <CardDescription>Essential advice for cat owners</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide a balanced diet appropriate for your cat's age and health status.</li>
              <li>Ensure fresh water is always available.</li>
              <li>Regular veterinary check-ups are crucial for maintaining your cat's health.</li>
              <li>Spay or neuter your cat to prevent unwanted litters and health issues.</li>
              <li>Groom your cat regularly, especially long-haired breeds.</li>
              <li>Provide a clean litter box and scoop it daily.</li>
              <li>Offer scratching posts to protect your furniture and maintain claw health.</li>
              <li>Engage in play sessions to keep your cat mentally and physically stimulated.</li>
              <li>Create a safe indoor environment with hiding spots and elevated resting areas.</li>
              <li>Use positive reinforcement for training and behavior modification.</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
