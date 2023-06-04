import React from 'react';

const SocialCard: React.FC<ISocialCard> = ({ Icon, midia, user }: ISocialCard) => {
  return (
    <div className='dark-glass w-48 h-48 flex flex-col justify-center items-center p-12 rounded-lg cursor-pointer'>
      <div className='flex justify-center items-center bg-white circle p-2'>
        <Icon className='c-highlight w-12 h-12'/>
      </div>
      <h3 className='text-center bold mt-2'>
        { midia }
      </h3>
      <div className='flex p-1 pr-4 pl-4 bg-highlight bg-highlight-hover rounded-full cursor-pointer mt-2'>
        @{user}
      </div>
    </div>
  );
}

export default SocialCard;