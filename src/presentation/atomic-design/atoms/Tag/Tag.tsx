interface TagProps {
    label?: string;
}

/**
 * Tag component that displays a label as a button
 * @param label - the label to be displayed on the button
 */
const Tag = ({ label }: TagProps) => {
    return <button className='bg-rose-400 px-4 py-1 rounded-md w-fit'>{label}</button>;
};

export default Tag;
