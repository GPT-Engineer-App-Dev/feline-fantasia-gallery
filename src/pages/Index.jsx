import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-center">All About Cats</h1>
      
      <div className="max-w-4xl mx-auto">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg" 
          alt="Cute cat" 
          className="mx-auto object-cover w-full h-[400px] rounded-lg mb-8"
        />
        
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
              <li>Cats have a third eyelid called the "nictitating membrane" that helps protect their eyes.</li>
              <li>The first cat in space was a French cat named Felicette in 1963.</li>
              <li>Cats can't taste sweetness due to a genetic mutation.</li>
              <li>A cat's nose print is unique, like a human's fingerprint.</li>
              <li>Cats have over 20 vocalizations, including the meow, purr, chirp, and trill.</li>
              <li>The oldest known pet cat was found in a 9,500-year-old grave on the Mediterranean island of Cyprus.</li>
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
      </div>
    </div>
  );
};

export default Index;
