import ExperienceDetail from "../Components/ExperienceDetail";
import Profile from "../Components/Profile";

function Experience() {
  return (
    <section className="flex h-full w-[152mm] list-disc flex-col gap-2 bg-white p-4 text-sm marker:text-sm marker:text-sky-700">
      <Profile />
      <ExperienceDetail />
    </section>
  );
}

export default Experience;
