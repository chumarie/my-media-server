interface TagProps {
    label?: string;
  }
  
  const Tag = ({ label }: TagProps) => {
      return (
          <button className="bg-rose-400 px-4 py-1 rounded-md w-fit">{label}</button>
      );
  };
    
    export default Tag;