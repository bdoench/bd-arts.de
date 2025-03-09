import { error } from '@sveltejs/kit';

export async function handle({ event, resolve }) {
  try {
    const response = await resolve(event);
    return response;
  } catch (err) {
    // You can customize this error handling as needed
    if (err.status === 404) {
      return {
        status: 404,
        body: 'Page not found, please check the URL or try again later.',
      };
    }
    // If it's another type of error, return the default error response
    return {
      status: err.status || 500,
      body: 'An unexpected error occurred.',
    };
  }
}
