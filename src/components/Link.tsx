export interface ILink {
  color: 'transparent' | 'blue' | 'gray';
  size?: 'fit' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  to: string;
  children: React.ReactNode;
}

const Link: React.FC<ILink> = ({ color, to, size = 'md', className, children }) => {
  const colorVariants = {
    transparent: 'bg-transparent',
    blue: 'bg-vivid-blue hover:bg-strong-blue fill-white text-white',
    gray: 'bg-very-light-gray hover:bg-light-gray fill-black text-black',
  };
  const sizes = {
    fit: 'w-fit h-fti',
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-32 h-10',
    xl: 'w-80 h-10',
  };
  return (
    <>
      <a
        href={to}
        className={`${colorVariants[color]} ${sizes[size]} ${className} uppercase rounded transition-colors duration-300 ease-out text-center text-base font-semibold font-sans container group flex items-center justify-center`}
      >
        {children}
      </a>
    </>
  );
};

export default Link;
