interface TagProps {
    label?: string;
  }
  
  const Tag = ({ label }: TagProps) => {
      return (
          <button className="bg-rose-400 px-4 py-1 rounded-2xl">{label}</button>
      );
  };
    
    export default Tag;