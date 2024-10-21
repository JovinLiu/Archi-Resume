import ExperienceDetail from "../Components/ExperienceDetail";
import Profile from "../Components/Profile";
// import Greetings from "../Components/Greetings";

function Experience() {
  return (
    <section className="flex h-full w-[145mm] list-disc flex-col gap-2 bg-white p-4 text-sm marker:text-sm marker:text-indigo-700">
      {/* <Greetings /> */}
      <Profile />
      <ExperienceDetail />
    </section>
  );
}

export default Experience;
