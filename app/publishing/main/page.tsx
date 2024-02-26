// maps to root `/` URL

import variables from './main.module.scss';

export default function Page() {
  return (
    <div>
      <h1 style={{ color: variables.primaryColor }}>Hello, Next.js!</h1>
      <div className={variables.section}>Hello, Next.js!</div>
    </div>
  );
}
