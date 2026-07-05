import React, { useState } from 'react';

const Contact = () => {
  // 1. Khai báo State quản lý trạng thái gửi và hiển thị Popup
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  // 2. Hàm xử lý gửi form ngầm (AJAX)
  const handleSubmit = (e) => {
    e.preventDefault(); // Chặn hành vi reload trang mặc định của HTML
    setIsSubmitting(true); // Đổi trạng thái thành đang gửi (khóa nút)

    // Khởi tạo dữ liệu từ Form
    const formData = new FormData(e.target);

    // Gửi Fetch API đến FormSubmit (LƯU Ý CÓ CHỮ /ajax/)
    fetch("https://formsubmit.co/ajax/4f16c4ce5654c2d08551139fb30d4b65", {
      method: "POST",
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        setIsSubmitting(false); // Mở khóa nút
        setShowPopup(true); // Hiển thị Popup thành công
        e.target.reset(); // Xóa trắng các ô nhập liệu

        // Tự động đóng Popup sau 5 giây để tăng trải nghiệm
        setTimeout(() => {
          setShowPopup(false);
        }, 5000);
      })
      .catch(error => {
        console.log(error);
        setIsSubmitting(false);
        alert("Something went wrong. Please try again later.");
      });
  };

  return (
    <div className="min-h-[calc(100vh-80px)] bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center relative">
      
      {/* CSS Ép cứng cho Placeholder */}
      <style>{`
        .force-placeholder::placeholder {
          color: #9ca3af !important;
          font-weight: 300 !important;
          opacity: 0.6 !important;
        }
        .force-placeholder::-moz-placeholder {
          color: #9ca3af !important;
          font-weight: 300 !important;
          opacity: 0.6 !important;
        }
      `}</style>

      {/* --- POPUP MODAL THÀNH CÔNG --- */}
      {showPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm transition-opacity duration-300">
          <div className="bg-white rounded-2xl p-8 max-w-sm w-full mx-4 shadow-2xl transform scale-100 opacity-100 transition-all duration-300 text-center">
            <div className="w-16 h-16 bg-[#008899]/10 rounded-full flex items-center justify-center mx-auto mb-5">
              <svg className="w-8 h-8 text-[#008899]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-extrabold text-gray-900 mb-2 tracking-tight">Thank You!</h3>
            <p className="text-gray-600 mb-8 font-medium">
              Thanks for reaching out!<br />We will be in touch shortly.
            </p>
            <button 
              onClick={() => setShowPopup(false)}
              className="w-full bg-gray-900 text-white font-bold py-3.5 rounded-lg hover:bg-[#008899] shadow-md hover:shadow-lg transition-all duration-300"
            >
              Back to site
            </button>
          </div>
        </div>
      )}

      {/* Main Container */}
      <div className="max-w-6xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-gray-100">
        
        {/* Left Column: Contact Information */}
        <div className="bg-white p-10 md:p-16 md:w-[45%] flex flex-col justify-center border-b md:border-b-0 md:border-r border-gray-100 relative">
          
          <div className="absolute top-0 left-0 w-1.5 h-full bg-[#008899]"></div>
          
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Get in touch
          </h2>
          <p className="text-gray-500 mb-12 leading-relaxed">
            Have a question or want to see a live demo? Fill out the form and our team will get back to you within 24 hours.
          </p>
          
          <div className="space-y-8">
            {/* Location */}
            <div className="flex items-start gap-5">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#008899]/10 flex items-center justify-center text-[#008899]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900">Office</h3>
                <p className="text-sm leading-relaxed text-gray-600 mt-1">
                  8735 Dunwoody Place, Suite 6<br />
                  Atlanta, GA 30350
                </p>
              </div>
            </div>
            
            {/* Phone */}
            <div className="flex items-start gap-5">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#008899]/10 flex items-center justify-center text-[#008899]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.439-4.099-7.031-7.031l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900">Phone</h3>
                <p className="text-sm text-gray-600 mt-1">Hotline: +(404) 462 1315</p>
              </div>
            </div>
            
            {/* Email */}
            <div className="flex items-start gap-5">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#008899]/10 flex items-center justify-center text-[#008899]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900">Email</h3>
                <p className="text-sm text-gray-600 mt-1">lynn@datumai.online</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Input Form */}
        <div className="p-10 md:p-16 md:w-[55%] bg-white">
          
          {/* Đã xóa thuộc tính action và method, thay bằng sự kiện onSubmit gọi hàm xử lý ngầm */}
          <form 
            onSubmit={handleSubmit}
            className="space-y-7"
          >
            {/* Các trường ẩn cấu hình FormSubmit */}
            <input type="hidden" name="_subject" value="New Contact from DatumAI Website!" />
            <input type="hidden" name="_captcha" value="false" />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name <span className="text-red-500">*</span></label>
                <input 
                  type="text" 
                  name="name"
                  className="force-placeholder w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-[#008899]/10 focus:border-[#008899] transition-all text-sm font-medium text-gray-900 disabled:opacity-50" 
                  placeholder="John Doe"
                  required
                  disabled={isSubmitting} 
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email <span className="text-red-500">*</span></label>
                <input 
                  type="email" 
                  name="email"
                  className="force-placeholder w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-[#008899]/10 focus:border-[#008899] transition-all text-sm font-medium text-gray-900 disabled:opacity-50" 
                  placeholder="john@example.com"
                  required
                  disabled={isSubmitting} 
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number <span className="text-red-500">*</span></label>
                <input 
                  type="tel" 
                  name="phone"
                  className="force-placeholder w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-[#008899]/10 focus:border-[#008899] transition-all text-sm font-medium text-gray-900 disabled:opacity-50" 
                  placeholder="+84 918..."
                  required
                  disabled={isSubmitting} 
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                <input 
                  type="text" 
                  name="topic"
                  className="force-placeholder w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-[#008899]/10 focus:border-[#008899] transition-all text-sm font-medium text-gray-900 disabled:opacity-50" 
                  placeholder="How can we help?"
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Message <span className="text-red-500">*</span></label>
              <textarea 
                name="message"
                rows="5" 
                className="force-placeholder w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-[#008899]/10 focus:border-[#008899] transition-all resize-none text-sm font-medium text-gray-900 disabled:opacity-50" 
                placeholder="Tell us about your project..."
                required
                disabled={isSubmitting}
              ></textarea>
            </div>

            <div className="flex justify-end pt-4">
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-gray-900 hover:bg-[#008899] text-white px-8 py-3.5 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2 text-sm tracking-wide disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {/* Đổi chữ linh hoạt khi đang load */}
                {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                
                {!isSubmitting && (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                )}
              </button>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;