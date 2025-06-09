"use client";

export const ResumeButton = () => {
  return (
    <div
      className='w-fit p-4 group rounded-full flex justify-center items-center cursor-pointer absolute md:top-6 md:left-12 top-10 left-4'
      onClick={() => {
        window.open(process.env.NEXT_PUBLIC_RESUME_LINK);
      }}
    >
      <p className='relative text-sm md:text-xl transition-all'>
        <span className='hidden'>Hiring? Check out my </span>
        <span className='bg-primary rounded-xl p-3'>Resume</span>
        <span className='absolute animate-spin-slow left-0 bottom-0 w-full h-[2px] '></span>
      </p>
    </div>
  );
};
