import { motion } from 'framer-motion';
import foto1 from '../../images/f1.jpg';
import foto2 from '../../images/f2.jpg';
import foto3 from '../../images/f3.jpg';
import foto4 from '../../images/f4.jpg'

import { useState, useRef, useEffect } from 'react';


const imageSlider = [foto1, foto2, foto3, foto4];

export function Slider() {

  const carousel = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  return (
    <section className="max-w-[900px] mx-auto">
      <motion.div  className="cursor-grab overflow-hidden" whileTap={{cursor: "grabbing"}}>

        <motion.div ref={carousel} className="flex flex-row justify-center" 
        drag="x" 
        dragConstraints={{right: 0, left: -width}}
        >

          {imageSlider.map((img, index) => (
            <motion.div key={index} className="rounded-lg flex-shrink-0 transform transition duration-500 hover:scale-110" >
              <img
                className="h-[500px] w-[400px] px-5 mt-8 pointer-events-none "
                src={img}
                alt={`Slide ${index + 1}`}
              />

            </motion.div>

          ))}

        </motion.div>

      </motion.div>
    </section>
  );
}
