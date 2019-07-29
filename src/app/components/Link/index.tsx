import NextLink from 'next/link';
import './styles.scss';

interface ILink {
    href: string;
    title: string;
}

const Link = (props: ILink): JSX.Element => (
    <NextLink href={props.href} passHref>
        <a className='link'>{props.title}</a>
    </NextLink>
);

export default Link;