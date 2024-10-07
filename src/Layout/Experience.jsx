import Certificate from "../Components/Certificate";
import ExperienceDetail from "../Components/ExperienceDetail";
import Profile from "../Components/Profile";

function Experience() {
  return (
    <section className="flex h-full w-[145mm] list-disc flex-col gap-2 bg-white p-4 text-sm marker:text-sm marker:text-indigo-700">
      <Profile />
      <ExperienceDetail />
      <Certificate />
    </section>
  );
}

export default Experience;
