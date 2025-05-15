import { useState, useEffect } from 'react';
import { Product } from '../types';

const useProductData = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        // In a real app, this would be an API call
        // For this example, we'll use hardcoded data
        const data: Product[] = [
          {
            id: 1,
            name: "iPhone 15 Pro",
            price: 999.99,
            description: "The latest iPhone with A17 Pro chip, 48MP camera system, and titanium design.",
            image: "https://images.pexels.com/photos/5750001/pexels-photo-5750001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            category: "Smartphones",
            relatedProducts: [
              {
                id: 101,
                name: "iPhone 15 Pro MagSafe Charger",
                price: 39.99,
                image: "https://images.pexels.com/photos/4526407/pexels-photo-4526407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                description: "Fast wireless charging with perfect alignment."
              },
              {
                id: 102,
                name: "iPhone 15 Pro Clear Case",
                price: 49.99,
                image: "https://images.pexels.com/photos/1294886/pexels-photo-1294886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                description: "Slim, clear case that shows off your iPhone's design."
              },
              {
                id: 103,
                name: "Tempered Glass Screen Protector",
                price: 19.99,
                image: "https://images.pexels.com/photos/1042143/pexels-photo-1042143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                description: "9H hardness screen protection with oleophobic coating."
              },
              {
                id: 104,
                name: "20W USB-C Power Adapter",
                price: 29.99,
                image: "https://images.pexels.com/photos/4219863/pexels-photo-4219863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                description: "Fast charging power adapter for iPhone."
              },
              {
                id: 105,
                name: "AirPods Pro",
                price: 249.99,
                image: "https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                description: "Wireless earbuds with active noise cancellation."
              }
            ]
          },
          {
            id: 2,
            name: "MacBook Pro 16\"",
            price: 2499.99,
            description: "Powerful laptop with M3 Pro chip, 16GB RAM, and 512GB SSD.",
            image: "https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            category: "Laptops",
            relatedProducts: [
              {
                id: 201,
                name: "USB-C Hub Adapter",
                price: 79.99,
                image: "https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                description: "7-in-1 USB-C hub with HDMI, USB-A, and SD card reader."
              },
              {
                id: 202,
                name: "Laptop Sleeve",
                price: 49.99,
                image: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                description: "Protective sleeve with water-resistant material."
              },
              {
                id: 203,
                name: "Magic Mouse",
                price: 99.99,
                image: "https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                description: "Wireless mouse with multi-touch surface."
              },
              {
                id: 204,
                name: "External SSD 1TB",
                price: 179.99,
                image: "https://images.pexels.com/photos/4792729/pexels-photo-4792729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                description: "Fast external storage with USB-C connection."
              },
              {
                id: 205,
                name: "Laptop Stand",
                price: 59.99,
                image: "https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                description: "Adjustable aluminum stand for better ergonomics."
              }
            ]
          },
          {
            id: 3,
            name: "Samsung Galaxy S23 Ultra",
            price: 1199.99,
            description: "Premium Android smartphone with S Pen, 200MP camera, and 6.8\" display.",
            image: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            category: "Smartphones",
            relatedProducts: [
              {
                id: 301,
                name: "Galaxy S23 Ultra Case",
                price: 39.99,
                image: "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                description: "Rugged protective case with kickstand."
              },
              {
                id: 302,
                name: "45W Super Fast Charger",
                price: 49.99,
                image: "https://images.pexels.com/photos/4219863/pexels-photo-4219863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                description: "Official Samsung fast charger for quick power-ups."
              },
              {
                id: 303,
                name: "Galaxy Buds 2 Pro",
                price: 229.99,
                image: "https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                description: "Wireless earbuds with intelligent ANC."
              },
              {
                id: 304,
                name: "Galaxy Watch 6",
                price: 349.99,
                image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                description: "Advanced smartwatch with health tracking features."
              },
              {
                id: 305,
                name: "S Pen Replacement",
                price: 49.99,
                image: "https://images.pexels.com/photos/4792503/pexels-photo-4792503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                description: "Official replacement S Pen for Galaxy S23 Ultra."
              }
            ]
          },
          {
            id: 4,
            name: "Sony WH-1000XM5",
            price: 399.99,
            description: "Premium noise-cancelling headphones with 30-hour battery life.",
            image: "https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            category: "Audio",
            relatedProducts: [
              {
                id: 401,
                name: "Headphone Stand",
                price: 29.99,
                image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                description: "Aluminum stand to display and store your headphones."
              },
              {
                id: 402,
                name: "Replacement Ear Pads",
                price: 39.99,
                image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                description: "Soft memory foam ear pads for extra comfort."
              },
              {
                id: 403,
                name: "Carrying Case",
                price: 49.99,
                image: "https://images.pexels.com/photos/1037999/pexels-photo-1037999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                description: "Hard shell case for travel and protection."
              },
              {
                id: 404,
                name: "3.5mm Audio Cable",
                price: 19.99,
                image: "https://images.pexels.com/photos/2651794/pexels-photo-2651794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                description: "Replacement audio cable for wired connection."
              },
              {
                id: 405,
                name: "Bluetooth Transmitter",
                price: 39.99,
                image: "https://images.pexels.com/photos/4219863/pexels-photo-4219863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                description: "Connect to non-Bluetooth devices wirelessly."
              }
            ]
          },
          {
            id: 5,
            name: "iPad Pro 12.9\"",
            price: 1099.99,
            description: "Powerful tablet with M2 chip, Liquid Retina XDR display, and Apple Pencil support.",
            image: "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            category: "Tablets",
            relatedProducts: [
              {
                id: 501,
                name: "Apple Pencil 2",
                price: 129.99,
                image: "https://images.pexels.com/photos/4792503/pexels-photo-4792503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                description: "Precision stylus for drawing and note-taking."
              },
              {
                id: 502,
                name: "Magic Keyboard for iPad Pro",
                price: 349.99,
                image: "https://images.pexels.com/photos/4792481/pexels-photo-4792481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                description: "Keyboard with trackpad and floating design."
              },
              {
                id: 503,
                name: "iPad Pro Smart Folio",
                price: 79.99,
                image: "https://images.pexels.com/photos/4526407/pexels-photo-4526407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                description: "Slim protective cover that doubles as a stand."
              },
              {
                id: 504,
                name: "Paperlike Screen Protector",
                price: 39.99,
                image: "https://images.pexels.com/photos/1042143/pexels-photo-1042143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                description: "Screen protector that gives a paper-like drawing experience."
              },
              {
                id: 505,
                name: "USB-C Hub for iPad",
                price: 69.99,
                image: "https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                description: "Expand connectivity with HDMI, USB, and SD card ports."
              }
            ]
          },
          {
            id: 6,
            name: "Nintendo Switch OLED",
            price: 349.99,
            description: "Hybrid gaming console with vibrant 7-inch OLED screen and enhanced audio.",
            image: "https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            category: "Gaming",
            relatedProducts: [
              {
                id: 601,
                name: "Pro Controller",
                price: 69.99,
                image: "https://images.pexels.com/photos/4219863/pexels-photo-4219863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                description: "Comfortable controller for extended gaming sessions."
              },
              {
                id: 602,
                name: "Carrying Case",
                price: 24.99,
                image: "https://images.pexels.com/photos/1037999/pexels-photo-1037999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                description: "Protective case with game card storage."
              },
              {
                id: 603,
                name: "Screen Protector",
                price: 14.99,
                image: "https://images.pexels.com/photos/1042143/pexels-photo-1042143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                description: "Tempered glass protection for the OLED screen."
              },
              {
                id: 604,
                name: "Joy-Con Charging Grip",
                price: 29.99,
                image: "https://images.pexels.com/photos/4219863/pexels-photo-4219863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                description: "Charge your Joy-Cons while playing."
              },
              {
                id: 605,
                name: "Nintendo Switch Online Membership",
                price: 19.99,
                image: "https://images.pexels.com/photos/4219863/pexels-photo-4219863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                description: "12-month subscription for online play and retro games."
              }
            ]
          },
          {
            id: 7,
            name: "Canon EOS R6 Mark II",
            price: 2499.99,
            description: "Full-frame mirrorless camera with 24.2MP sensor and 4K video recording.",
            image: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            category: "Cameras",
            relatedProducts: [
              {
                id: 701,
                name: "RF 24-70mm f/2.8L Lens",
                price: 2399.99,
                image: "https://images.pexels.com/photos/1787235/pexels-photo-1787235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                description: "Versatile professional zoom lens."
              },
              {
                id: 702,
                name: "Extra Battery",
                price: 79.99,
                image: "https://images.pexels.com/photos/4219863/pexels-photo-4219863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                description: "Official Canon LP-E6NH rechargeable battery."
              },
              {
                id: 703,
                name: "Camera Bag",
                price: 129.99,
                image: "https://images.pexels.com/photos/1037999/pexels-photo-1037999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                description: "Durable bag with customizable compartments."
              },
              {
                id: 704,
                name: "128GB SD Card",
                price: 49.99,
                image: "https://images.pexels.com/photos/4219863/pexels-photo-4219863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                description: "High-speed memory card for photos and videos."
              },
              {
                id: 705,
                name: "Tripod",
                price: 149.99,
                image: "https://images.pexels.com/photos/1787235/pexels-photo-1787235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                description: "Carbon fiber tripod for stable shooting."
              }
            ]
          },
          {
            id: 8,
            name: "Dell XPS 15",
            price: 1999.99,
            description: "Premium Windows laptop with 15.6\" 4K display, Intel Core i9, and NVIDIA RTX graphics.",
            image: "https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            category: "Laptops",
            relatedProducts: [
              {
                id: 801,
                name: "Dell Thunderbolt Dock",
                price: 299.99,
                image: "https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                description: "Expand connectivity with multiple ports and displays."
              },
              {
                id: 802,
                name: "Laptop Backpack",
                price: 89.99,
                image: "https://images.pexels.com/photos/1037999/pexels-photo-1037999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                description: "Water-resistant backpack with laptop compartment."
              },
              {
                id: 803,
                name: "Wireless Mouse",
                price: 59.99,
                image: "https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                description: "Ergonomic wireless mouse with long battery life."
              },
              {
                id: 804,
                name: "Screen Privacy Filter",
                price: 49.99,
                image: "https://images.pexels.com/photos/1042143/pexels-photo-1042143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                description: "Prevent visual hacking with a privacy screen."
              },
              {
                id: 805,
                name: "External Monitor",
                price: 349.99,
                image: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                description: "27\" 4K monitor for expanded workspace."
              }
            ]
          },
          {
            id: 9,
            name: "Apple Watch Series 9",
            price: 399.99,
            description: "Advanced smartwatch with health monitoring, fitness tracking, and cellular connectivity.",
            image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            category: "Wearables",
            relatedProducts: [
              {
                id: 901,
                name: "Sport Band",
                price: 49.99,
                image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                description: "Comfortable fluoroelastomer band for workouts."
              },
              {
                id: 902,
                name: "Milanese Loop",
                price: 99.99,
                image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                description: "Elegant stainless steel mesh band."
              },
              {
                id: 903,
                name: "Watch Charging Stand",
                price: 39.99,
                image: "https://images.pexels.com/photos/4219863/pexels-photo-4219863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                description: "Dock your watch for convenient charging."
              },
              {
                id: 904,
                name: "Screen Protector",
                price: 19.99,
                image: "https://images.pexels.com/photos/1042143/pexels-photo-1042143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                description: "Tempered glass protection for your watch face."
              },
              {
                id: 905,
                name: "Apple Fitness+ Subscription",
                price: 79.99,
                image: "https://images.pexels.com/photos/4219863/pexels-photo-4219863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                description: "12-month subscription for guided workouts."
              }
            ]
          },
          {
            id: 10,
            name: "Sony PlayStation 5",
            price: 499.99,
            description: "Next-gen gaming console with ultra-high-speed SSD, 4K gaming, and haptic feedback controllers.",
            image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            category: "Gaming",
            relatedProducts: [
              {
                id: 1001,
                name: "DualSense Controller",
                price: 69.99,
                image: "https://images.pexels.com/photos/4219863/pexels-photo-4219863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                description: "Additional controller with haptic feedback."
              },
              {
                id: 1002,
                name: "PS5 Charging Station",
                price: 29.99,
                image: "https://images.pexels.com/photos/4219863/pexels-photo-4219863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                description: "Charge two controllers simultaneously."
              },
              {
                id: 1003,
                name: "PS5 Media Remote",
                price: 29.99,
                image: "https://images.pexels.com/photos/4219863/pexels-photo-4219863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                description: "Convenient remote for media playback."
              },
              {
                id: 1004,
                name: "1TB SSD Expansion",
                price: 219.99,
                image: "https://images.pexels.com/photos/4792729/pexels-photo-4792729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                description: "Expand your PS5 storage for more games."
              },
              {
                id: 1005,
                name: "PlayStation Plus Subscription",
                price: 59.99,
                image: "https://images.pexels.com/photos/4219863/pexels-photo-4219863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                description: "12-month subscription for online play and free games."
              }
            ]
          }
        ];
        
        setProducts(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch products');
        setLoading(false);
        console.error('Error fetching products:', err);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
};

export default useProductData;