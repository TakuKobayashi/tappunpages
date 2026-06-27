import { MDXRemote } from 'next-mdx-remote/rsc';

interface Props {
  source: string;
}

export function MDXContent({ source }: Props) {
  return <MDXRemote source={source} />;
}
