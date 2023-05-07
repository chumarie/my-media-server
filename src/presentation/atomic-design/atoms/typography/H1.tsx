interface H1Props {
    children: string;
}

/**
 * H1 component that displays a heading
 * @param children - the content to be displayed inside the heading
 */
const H1 = ({ children }: H1Props) => {
    return <h1 className='mb-4 mt-4 whitespace-nowrap text-ellipsis overflow-hidden text-7xl'>{children}</h1>;
};

export default H1;
