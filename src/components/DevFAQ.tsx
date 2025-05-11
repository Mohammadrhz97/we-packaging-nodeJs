import React from "react";

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "۱. طراحی سایت چقدر زمان می‌برد؟",
      answer:
        "مدت زمان طراحی و توسعه سایت بستگی به پیچیدگی پروژه و نیازهای شما دارد، اما به طور معمول پروژه‌های استاندارد بین ۲ تا ۶ هفته زمان می‌برند.",
    },
    {
      question: "۲. آیا سایت من روی موبایل هم به خوبی نمایش داده می‌شود؟",
      answer:
        "بله، تمام سایت‌هایی که طراحی می‌کنم به صورت کاملاً واکنش‌گرا (Responsive) هستند و روی همه دستگاه‌ها (موبایل، تبلت و دسکتاپ) به درستی کار می‌کنند.",
    },
    {
      question: "۳. بعد از تحویل سایت، آیا امکان پشتیبانی وجود دارد؟",
      answer:
        "بله، خدمات پشتیبانی و نگهداری پس از تحویل سایت ارائه می‌شود تا مطمئن شوید سایت همیشه به‌روز و بدون مشکل باقی می‌ماند.",
    },
    {
      question: "۴. آیا امکان سئو (بهینه‌سازی موتورهای جستجو) هم وجود دارد؟",
      answer:
        "بله، تمام سایت‌ها با اصول اولیه سئو ساخته می‌شوند و در صورت نیاز خدمات تخصصی سئو نیز به شما پیشنهاد می‌شود.",
    },
    {
      question:
        "۵. آیا می‌توانم بعداً خودم محتوا یا بخش‌هایی از سایت را تغییر بدهم؟",
      answer:
        "بله، می‌توانیم سایت را به گونه‌ای طراحی کنیم که از طریق پنل مدیریت به راحتی بتوانید محتوای سایت خود را ویرایش یا به‌روزرسانی کنید..",
    },
  ];

  return (
    <div className="w-full">
      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-gray-200">
          <button
            onClick={() => toggle(index)}
            className="flex items-center justify-between w-full py-5 md:text-lg text-sm text-left text-gray-100"
          >
            <span className="text-right">{faq.question}</span>
            <svg
              className={`w-3 h-3 transform transition-transform ${
                openIndex === index ? "rotate-180" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
          {openIndex === index && (
            <div className="py-5 text-gray-300 text-sm ">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
