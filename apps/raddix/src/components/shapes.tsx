export const MoveLineShapes = () => {
  return (
    <div className='pointer-events-none absolute inset-0 w-full overflow-hidden'>
      <div className='absolute bottom-0 left-2/4 top-0 w-[1100px] -translate-x-1/2 blur-3xl'>
        <div className='line-one -left-28 -top-12 h-24 w-[960px] animate-[swing_15s_-1s_ease-in-out_infinite]'></div>
        <div className='line-two left-0 top-12 h-24 w-[960px] animate-[swing_8s_ease-in-out_infinite]'></div>
        <div className='line-one left-52 top-36 h-16 w-[960px] animate-[swing_7s_-2s_ease-in-out_infinite]'></div>
        <div className='line-two left-80 top-56 h-16 w-[960px] animate-[swing_10s_-1s_ease-in-out_infinite]'></div>
        <div className='line-one -top-5 left-[42rem] h-24 w-[1200px] animate-[swing_15s_-1s_ease-in-out_infinite]'></div>
      </div>
    </div>
  );
};
