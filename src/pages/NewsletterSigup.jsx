import { useEffect } from 'react';
import { useFetcher } from 'react-router-dom';
import classes from './NewsletterSignup.module.css';

// ! here it is shown how to get data from our action execution in components

function NewsletterSignup() {
  // ! use when I want to use an action or loader without navigating to a page to which it belongs
  // ! with Form element from r-r-d it would take us to Newsletter.jsx page when the form is submitted
  const fetcher = useFetcher();
  const { state, data } = fetcher;

  useEffect(() => {
    if (state === 'idle' && data && data.message) {
      window.alert(data.message);
    }
  }, [data, state]);

  return (
    <fetcher.Form method="post" className={classes.newsletter} action="/newsletter">
      <input
        type="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button>Sign up</button>
    </fetcher.Form>
  );
}

export default NewsletterSignup;
