import { CardConfig } from "./types";

export const DEFAULT_CONFIG: CardConfig = {
  // Updated with specific Seeders Christmas Card images
  coverImage: "https://seeders.com/build/wp-content/uploads/2025/12/Seeders-Christmas-Card-06.png", 
  insideLeftImage: "https://seeders.com/build/wp-content/uploads/2025/12/Seeders-Christmas-Card-01.png",
  insideRightImage: "https://seeders.com/build/wp-content/uploads/2025/12/Seeders-Christmas-Card2-02.png", 
  // Reusing the cover texture or a neutral back for the back cover since one wasn't provided, 
  // but keeping a high quality texture acts as a good fallback.
  backImage: "https://seeders.com/build/wp-content/uploads/2025/12/Seeders-Christmas-Card-06.png", 
  backgroundVideoUrl: "https://gallery.power-ecard.io/uploads/videos/Cf2FC752/K1LeQ3olhn1iwaHU.mp4" 
};