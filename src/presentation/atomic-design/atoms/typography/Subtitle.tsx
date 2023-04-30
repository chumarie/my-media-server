interface SubtitleProps {
    children: string;
  }

const Subtitle = ({ children }: SubtitleProps) => {
    return (
        <h2 className='mb-2 mt-2 text-xs'>{children}</h2>
    );
};
  
  export default Subtitle;