import React from 'react';


const TestimonialsSection = () => {
  return (
    <section className="bg-[#0f172b] text-white my-6">
      <div className="container px-6 py-12 mx-auto">
        <div className="grid items-center gap-4 xl:grid-cols-5">
          <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
            <h2 className="text-4xl font-bold">What Our Visitors Say</h2>
            <p className="text-gray-200">Read some testimonials from our happy visitors....</p>
          </div>
          <div className="p-6 xl:col-span-3">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="grid content-center gap-4">
                <div className="p-6 rounded shadow-md bg-gray-50">
                  <p className='text-black'>"Fantastic experience! The tour guides were knowledgeable and friendly."</p>
                  <div className="flex items-center mt-4 space-x-4">
                    <img src="https://source.unsplash.com/50x50/?portrait?1" alt="Testimonial 1" className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500" />
                    <div>
                      <p className="text-lg font-semibold text-black">Alice Johnson</p>
                      <p className="text-sm text-gray-600">Tourist Guide</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded shadow-md bg-gray-50">
                  <p className='text-black'>"Incredible sights and memorable experiences! I highly recommend this tour."</p>
                  <div className="flex items-center mt-4 space-x-4">
                    <img src="https://source.unsplash.com/50x50/?portrait?2" alt="Testimonial 2" className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500" />
                    <div>
                      <p className="text-lg font-semibold text-black">Emily Brown</p>
                      <p className="text-sm text-gray-600">Travel Blogger</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid content-center gap-4">
                <div className="p-6 rounded shadow-md bg-gray-50">
                  <p className='text-black'>"An unforgettable adventure! I'm already planning my next trip with this company."</p>
                  <div className="flex items-center mt-4 space-x-4">
                    <img src="https://source.unsplash.com/50x50/?portrait?3" alt="Testimonial 3" className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500" />
                    <div>
                      <p className="text-lg font-semibold text-black">Michael Smith</p>
                      <p className="text-sm text-gray-600">Photographer</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded shadow-md bg-gray-50">
                  <p className='text-black'>"An amazing journey! I'm impressed with the attention to detail and professionalism."</p>
                  <div className="flex items-center mt-4 space-x-4">
                    <img src="https://source.unsplash.com/50x50/?portrait?4" alt="Testimonial 4" className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500" />
                    <div>
                      <p className="text-lg font-semibold text-black">Sophia Miller</p>
                      <p className="text-sm text-gray-600">Tour Operator</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
