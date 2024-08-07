import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-center">About Our Cat Website</h1>
      
      <div className="max-w-4xl mx-auto">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Our Mission</CardTitle>
            <CardDescription>Spreading love for our feline friends</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Welcome to our cat-loving community! Our mission is to celebrate the joy, beauty, and 
              quirks of cats while providing valuable information to cat owners and enthusiasts alike.
            </p>
            <p>
              Whether you're a long-time cat owner or just curious about these fascinating creatures, 
              we're here to share knowledge, stories, and a mutual appreciation for all things feline.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>What We Offer</CardTitle>
            <CardDescription>Resources for cat lovers</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li>Comprehensive information about various cat breeds</li>
              <li>Tips on cat care, health, and behavior</li>
              <li>Interesting facts and trivia about cats</li>
              <li>A platform for cat enthusiasts to connect and share experiences</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
            <CardDescription>Get in touch with our team</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-2">We'd love to hear from you! Reach out to us at:</p>
            <p className="font-semibold">Email: info@catlovers.com</p>
            <p className="font-semibold">Phone: (555) 123-4567</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
