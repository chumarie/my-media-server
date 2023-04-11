interface H2Props {
    text: string;
  }

const H2 = ({ text }: H2Props) => {
    return (
        <h2 className='mb-4'>{text}</h2>
    );
};
  
  export default H2;