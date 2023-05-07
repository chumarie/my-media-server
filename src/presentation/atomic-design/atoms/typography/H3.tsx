interface H3Props {
    children: string;
}

/**
 * H3 component that displays a heading
 * @param children - the content to be displayed inside the heading
 */
const H3 = ({ children }: H3Props) => {
    return <h2 className='mb-4 mt-4'>{children}</h2>;
};

export default H3;
