const Index =()=>{
return (

<>
<div class="flex justify-center items-center h-screen">

<div class="relative z-10" role="dialog" aria-modal="true">
  
  <div class="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block"></div>

  <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
    <div class="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
      
      <div class="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
        <div class="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
          <button type="button" class="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8">
            <span class="sr-only">Close</span>
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div class="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
            <div class="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
              <img src="public/img/image-product-desktop.jpg" alt="Two each of gray, white, and black shirts arranged on table." class="object-cover object-center"/>
            </div>
            <div class="sm:col-span-8 lg:col-span-7">
              <h2 class="text-2xl font-bold text-gray-900 sm:pr-12">PERFUME</h2>

              <section aria-labelledby="information-heading" class="mt-2">
                <h3 id="information-heading" class="sr-only">Product information</h3>

                <p class="text-2xl text-gray-900">Gabrielle <br/> Essence Eau <br/> De Parfum</p>

                {/* <!-- Reviews --> */}
                <div class="mt-6">
                  {/* <h4 class="sr-only">Reviews</h4> */}
                  <div class="flex items-center">
                    <div class="flex items-center">
                      
                    </div>
                    {/* <p class="sr-only">3.9 out of 5 stars</p> */}
                    <h3  class=" text-sm font-medium text-indigo-600 hover:text-indigo-500">A Floral, solar and voluptuous <br/> interpretation composed by <br />Olivier Polge, Perfumer-Creator <br /> for the House of CHANEL</h3>
                    
                  </div>
                <p class="mt-6 text-2xl text-green-900">$149.99</p>
                <button type="submit" class="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-green-600 px-8 py-3 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Add to bag</button>
                </div>
              </section>

              <section aria-labelledby="options-heading" class="mt-10">
                <h3 id="options-heading" class="sr-only">Product options</h3>

                
                
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


</div>







</>

 
)
}

export default Index