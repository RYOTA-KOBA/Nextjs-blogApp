/* eslint-disable space-before-function-paren */
/* eslint-disable semi */
/* eslint-disable react/react-in-jsx-scope */
import Link from 'next/link';

export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
}
