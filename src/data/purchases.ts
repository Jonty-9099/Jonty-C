
export interface Purchase {
  item: string;
  image: string;
  price: string;
  why: string;
}

export const purchases: Purchase[] = [
  {
    item: "Vintage Polaroid Camera",
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&h=400&fit=crop",
    price: "$129",
    why: "For capturing authentic moments in my art projects"
  },
  {
    item: "Noise-Cancelling Headphones",
    image: "https://via.placeholder.com/300",
    price: "$299",
    why: "For ignoring the world while pretending to be productive."
  },
  {
    item: "Random Art Book",
    image: "https://via.placeholder.com/300",
    price: "$59",
    why: "Because my coffee table needs to look intellectual."
  },
  {
    item: "LED Desk Lamp",
    image: "https://via.placeholder.com/300",
    price: "$35",
    why: "So my workspace vibe matches my mood swings."
  },
  {
    item: "Fancy Notebook",
    image: "https://via.placeholder.com/300",
    price: "$19",
    why: "Will probably stay blank forever, but looks cool."
  },
  {
    item: "Mystery Box from the Internet",
    image: "https://via.placeholder.com/300",
    price: "$49",
    why: "Regret? Joy? Who knows what’s inside!"
  }
];
