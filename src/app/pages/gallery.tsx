import { useContext } from 'react';
import { ImageContext } from '../../../context/ImageContext';

export default function Gallery() {
  const imageContext = useContext(ImageContext);

  if (!imageContext) {
    return <p>Image context is not available!</p>;
  }

  const { images } = imageContext;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Image Gallery</h1>
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
    </div>
  );
}
