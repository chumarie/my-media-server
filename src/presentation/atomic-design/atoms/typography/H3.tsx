interface H3Props {
    children: string;
}

const H3 = ({ children }: H3Props) => {
    return <h2 className='mb-4 mt-4'>{children}</h2>;
};

export default H3;
