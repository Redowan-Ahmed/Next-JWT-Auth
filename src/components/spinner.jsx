const Spinner = () => {
  const data = [1,2,3,4,5]
  return (
    <>
      {/* <div
    className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
    role="status"
  >
    <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
      Loading...
    </span>
  </div> */}
    {
      data.map((value)=>(
      <div key={value} className='lg:w-96 w-full h-96 rounded-md bg-gray-500 shadow-md' >
        <div className='bg-gradient-to-b from-transparent to-gray-800 flex items-end h-full w-full justify-stretch rounded-md opacity-0 hover:opacity-100 transition-all' >
          <div className='flex items-end justify-evenly p-5 w-full'>
            <div className='w-3/4 text-white'>
              <a className='text-xl font-semibold pb-3 hover:underline' href='#'> </a>
              <p className='text-md'>Redowan Ahmed</p>
            </div>
            <div className='flex items-center gap-3 text-white'>
            </div>
          </div>
        </div>
      </div>
      ))
    }

    </>
  )
}

export default Spinner