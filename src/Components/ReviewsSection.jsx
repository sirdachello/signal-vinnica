import ReviewCard from "../Components/ReviewCard";

import { ReactComponent as StarIcon } from "../Assets/Icons/StarIcon.svg";

import rollInStyles from "../Styles/RollInAnimation.module.css";
import clients from "../Assets/clients.json";

export default function ReviewsSection() {
  const reviews = clients.map((client, index) => {
    return <ReviewCard key={index} client={client} />;
  });

  return (
    <>
      <div className={rollInStyles.rollInElement}>
        <div className="flex w-[100%] flex-col text-center">
          <span className="text-[30px] sm:text-[40px] md:text-[50px]">4,8</span>
          <span className="flex justify-center">
            {[...Array(5)].map((_, index) => (
              <StarIcon
                key={index}
                className="size-[30px] transition-all duration-200 sm:size-[40px] sm:hover:rotate-6 sm:hover:scale-110 md:size-[50px]"
                aria-label={`Зірка ${index + 1}`}
              />
            ))}
          </span>
        </div>

        <div className="my-11 flex flex-wrap justify-center gap-5">
          {reviews}
        </div>
        <a
          className="mx-auto block w-fit rounded-2xl bg-primary px-[2em] py-2 text-[16px] transition-all duration-200 hover:scale-x-110 hover:bg-[#ffd000c7] sm:text-[25px] md:text-[30px]"
          href="https://www.google.com/maps/place/%D0%A1%D0%B8%D0%B3%D0%BD%D0%B0%D0%BB/@49.2294486,28.455902,17z/data=!4m8!3m7!1s0x472d5b7ef9e736c7:0x892399f63a09364d!8m2!3d49.2294461!4d28.4577227!9m1!1b1!16s%2Fg%2F11_tb73g5?hl=uk&entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noreferrer"
        >
          Переглянути більше відгуків...
        </a>
      </div>
    </>
  );
}
