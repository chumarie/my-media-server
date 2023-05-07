interface SubtitleProps {
    children: string;
}

/**
 * Subtitle component that displays a heading
 * @param children - the content to be displayed inside the subtitle
 */
const Subtitle = ({ children }: SubtitleProps) => {
    return <h2 className='mb-2 mt-2 text-xs'>{children}</h2>;
};

export default Subtitle;
