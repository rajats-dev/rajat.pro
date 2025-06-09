"use client";

import Particles from "./Particles/Particles";

const ParticlesComponents = () => {
  return (
    <div className='absolute w-full top-0 -z-10'>
      <Particles
        particleColors={["#ffffff", "#ffffff"]}
        particleCount={600}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={70}
        moveParticlesOnHover={false}
        alphaParticles={false}
        disableRotation={false}
      />
    </div>
  );
};

export default ParticlesComponents;
