import { useSpring, animated } from 'react-spring';

function HeadDoc() {
  const props = useSpring({
    from: { opacity: 0, transform: 'translateY(-100%)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 500 },
  });

  return (
    <animated.header style={props} className="text-gray-600 body-font fixed top-0 left-0 w-full bg-white z-10 shadow-md">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
           <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
             <a href="https://example1.com" className="mr-5 hover:text-gray-900">First Link</a>
             <a href="https://example2.com" className="mr-5 hover:text-gray-900">Second Link</a>
             <a href="https://example3.com" className="mr-5 hover:text-gray-900">Third Link</a>
             <a href="https://example4.com" className="hover:text-gray-900">Fourth Link</a>
           </nav>
           <a href="/" className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
             <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Tailblocks</span>
          </a>
          <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
            <div className="relative inline-flex">
            </div>
          </div>
        </div>
    </animated.header>
  );
}

export default HeadDoc;