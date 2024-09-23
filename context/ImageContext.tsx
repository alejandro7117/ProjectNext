"use client";

import { createContext, useState, useEffect, ReactNode } from 'react';

interface Image {
  id: string;
  description: string;
  urls: {
    small: string;
  };
}

interface ImageContextType {
  query: string;
  setQuery: (query: string) => void;
  images: Image[];
  loading: boolean;
}

export const ImageContext = createContext<ImageContextType | undefined>(undefined);

export const ImageProvider = ({ children }: { children: ReactNode }) => {
  const [query, setQuery] = useState<string>('');
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchImages = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${query}&client_id=${process.env.NEXT_PUBLIC_UNSPLASH_API_KEY}`
      );
      const data = await response.json();
      setImages(data.results);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (query) {
      fetchImages();
    }
  }, [query]);

  return (
    <ImageContext.Provider value={{ query, setQuery, images, loading }}>
      {children}
    </ImageContext.Provider>
  );
};
