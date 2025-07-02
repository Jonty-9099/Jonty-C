
export interface Purchase {
  item: string;
  image: string;
  why: string;
}

export const purchases: Purchase[] = [
  {
    item: "Vintage Polaroid Camera",
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&h=400&fit=crop",
    why: "For capturing authentic moments in my art projects"
  },
  {
    item: "Noise-Cancelling Headphones",
    image: "https://via.placeholder.com/300",
    why: "For ignoring the world while pretending to be productive."
  },
  {
    item: "Random Art Book",
    image: "https://via.placeholder.com/300",
    why: "Because my coffee table needs to look intellectual."
  },
  {
    item: "LED Desk Lamp",
    image: "https://via.placeholder.com/300",
    why: "So my workspace vibe matches my mood swings."
  },
  {
    item: "Fancy Notebook",
    image: "https://via.placeholder.com/300",
    why: "Will probably stay blank forever, but looks cool."
  },
  {
    item: "Mystery Box from the Internet",
    image: "https://via.placeholder.com/300",
    why: "Regret? Joy? Who knows what’s inside!"
  }
];
