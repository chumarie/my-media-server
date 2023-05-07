interface H2Props {
    children: string;
}

/**
 * H2 component that displays a heading
 * @param children - the content to be displayed inside the heading
 */
const H2 = ({ children }: H2Props) => {
    return <h2 className='mb-4 mt-4 whitespace-nowrap text-ellipsis overflow-hidden text-lg'>{children}</h2>;
};

export default H2;
