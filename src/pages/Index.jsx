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

        <Card>
          <CardHeader>
            <CardTitle>Understanding Cat Behavior</CardTitle>
            <CardDescription>Common behaviors and what they mean</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li>Purring: Usually indicates contentment, but can also signal stress or pain in some situations.</li>
              <li>Kneading: Often called "making biscuits," this behavior is a sign of comfort and contentment.</li>
              <li>Tail positioning: An upright tail with a slight curve at the end typically means a happy, friendly cat.</li>
              <li>Slow blinking: Known as a "cat kiss," this is a sign of trust and affection.</li>
              <li>Bringing "gifts": Presenting dead animals is a natural hunting instinct and a way to show affection.</li>
              <li>Scratching furniture: This marks territory and helps shed old claw sheaths.</li>
              <li>Hiding: Can be a sign of stress, illness, or simply a desire for quiet time.</li>
              <li>Chattering at birds: This jaw-quivering behavior might be a mix of excitement and frustration.</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
