// @flow
import Recaptcha from 'react-recaptcha';

const success = <Recaptcha sitekey="works" verifyCallback={(res: string) => console.log(res) } className="recaptcha" onloadCallbackName="string" theme="dark" elementID="something" size="string" />;

// $ExpectError
const fail = <Recaptcha sitekey={true} />;

function Componet() {
  // $ExpectError
  return <Recaptcha verifyCallback={(res: boolean) => { console.log(res); } } sitekey="sasdf" />;
}
