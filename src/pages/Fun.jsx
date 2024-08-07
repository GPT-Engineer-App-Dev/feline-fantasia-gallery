import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Fun = () => {
  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-center">Fun Cat Stuff</h1>
      
      <div className="max-w-4xl mx-auto">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Cat Name Generator</CardTitle>
            <CardDescription>Generate a unique name for your feline friend!</CardDescription>
          </CardHeader>
          <CardContent>
            <CatNameGenerator />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const CatNameGenerator = () => {
  const [generatedName, setGeneratedName] = useState("");
  const [customWord, setCustomWord] = useState("");

  const prefixes = ["Mr.", "Mrs.", "Sir", "Lady", "Prince", "Princess", "Lord", "Captain", "Professor"];
  const adjectives = ["Fluffy", "Whiskers", "Socks", "Mittens", "Patches", "Smokey", "Ginger", "Shadow", "Luna"];
  const nouns = ["Paws", "Purrington", "Meowser", "Clawsome", "Whiskertons", "Furball", "Cattington", "Pawsome"];

  const generateName = () => {
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    
    let name = `${prefix} ${adjective} ${noun}`;
    if (customWord) {
      name += ` ${customWord}`;
    }
    setGeneratedName(name);
  };

  return (
    <div className="space-y-4">
      <div>
        <Input
          type="text"
          placeholder="Add a custom word (optional)"
          value={customWord}
          onChange={(e) => setCustomWord(e.target.value)}
          className="mb-2"
        />
        <Button onClick={generateName}>Generate Name</Button>
      </div>
      {generatedName && (
        <p className="text-xl font-bold">
          Your cat's name: {generatedName}
        </p>
      )}
    </div>
  );
};

export default Fun;
