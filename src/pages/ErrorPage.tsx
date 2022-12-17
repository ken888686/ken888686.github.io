function ErrorPage() {
  return (
    <div className='flex h-screen flex-col items-center justify-center -bg--white-1'>
      <h1 className='py-5 text-3xl font-semibold'>Oops!</h1>
      <p className='py-5'>Sorry, an unexpected error has occurred.</p>
      <p className='italic text-gray-800' />
    </div>
  );
}

export default ErrorPage;
