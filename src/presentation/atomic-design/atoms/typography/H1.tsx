interface H1Props {
    children: string;
  }
  
  const H1 = ({ children }: H1Props) => {
      return (
          <h1 className='mb-4 mt-4 whitespace-nowrap text-ellipsis overflow-hidden text-7xl'>{children}</h1>
      );
  };
    
    export default H1;