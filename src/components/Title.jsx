const Title = ({ title, number }) => {
  return (
    <div className="grid grid-cols-[auto_1fr] items-center gap-4 mb-12 md:my-20">
      <p className="uppercase font-bold md:text-lg lg:text-xl xl:text-2xl">
        <span className="mr-2 text-primary">{number}</span>
        {title}
      </p>
      <svg
        width="100%"
        height="12"
        viewBox="0 0 804 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.666671 6.00669C0.670366 8.95221 3.06118 11.337 6.00669 11.3333C8.95221 11.3296 11.337 8.93882 11.3333 5.99331C11.3296 3.04779 8.93882 0.662975 5.99331 0.666671C3.04779 0.670366 0.662975 3.06118 0.666671 6.00669ZM6.00125 7L803.001 6L802.999 4L5.99875 5L6.00125 7Z"
          fill="#7843E9"
        />
      </svg>
    </div>
  );
};

export default Title;
