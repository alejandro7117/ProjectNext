"use client";

import { useContext } from 'react';
import { ImageContext } from '../context/ImageContext';

const ImageSearch = () => {
  const imageContext = useContext(ImageContext);

  if (!imageContext) {
    return <p>Image context is not available!</p>;
  }

  const { query, setQuery, images, loading } = imageContext;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Search for Images</h1>
      <input
        type="text"
        placeholder="Search images..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border rounded p-2 mb-4 w-full"
      />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {images.map((image) => (
            <div key={image.id} className="w-full h-64">
              <img
                src={image.urls.small}
                alt={image.description}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageSearch;
